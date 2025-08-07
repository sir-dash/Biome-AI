# Guide d'intégration Stripe pour les paiements

## État actuel ⚠️

Le système de paiement actuel est une **SIMULATION**. Pour accepter de vrais paiements, vous devez intégrer Stripe.

## Étapes pour rendre le paiement fonctionnel

### 1. Installation des dépendances Stripe

```bash
npm install @stripe/stripe-js @stripe/react-stripe-js
```

### 2. Configuration des clés API Stripe

Créer un fichier `.env.local` :

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_votre_cle_publique_stripe
STRIPE_SECRET_KEY=sk_test_votre_cle_secrete_stripe
```

### 3. Wrapper Stripe pour l'application

Créer `/components/StripeWrapper.tsx` :

```tsx
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export function StripeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Elements stripe={stripePromise}>
      {children}
    </Elements>
  );
}
```

### 4. API Route pour créer un Payment Intent

Créer `/pages/api/create-payment-intent.ts` :

```typescript
import Stripe from 'stripe';
import { NextApiRequest, NextApiResponse } from 'next';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { amount } = req.body;

      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount * 100, // 50€ = 5000 centimes
        currency: 'eur',
        metadata: {
          product: 'founders-club-lifetime-access',
        },
      });

      res.status(200).json({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
```

### 5. Composant de paiement Stripe réel

Remplacer le contenu de `/components/StripePaymentForm.tsx` par :

```tsx
import React, { useState, useEffect } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { motion } from 'motion/react';
import { Button } from './ui/button';

interface RealStripePaymentFormProps {
  onBack: () => void;
}

export function RealStripePaymentForm({ onBack }: RealStripePaymentFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Créer un Payment Intent côté serveur
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 50 }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    setProcessing(true);

    const cardElement = elements.getElement(CardElement);

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement!,
        billing_details: {
          email: email,
        },
      },
    });

    if (error) {
      console.error('Erreur de paiement:', error);
      alert('Erreur de paiement: ' + error.message);
    } else if (paymentIntent?.status === 'succeeded') {
      alert('✅ Paiement réussi ! Bienvenue dans le Founders Club !');
      // Rediriger vers une page de succès ou mettre à jour l'état
    }

    setProcessing(false);
  };

  return (
    <div className="max-w-md mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-white mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white"
            required
          />
        </div>

        <div>
          <label className="block text-white mb-2">Informations de carte</label>
          <div className="bg-white/10 border border-white/20 rounded-xl p-4">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: 'white',
                    '::placeholder': {
                      color: 'rgba(255, 255, 255, 0.6)',
                    },
                  },
                },
              }}
            />
          </div>
        </div>

        <Button
          type="submit"
          disabled={!stripe || processing}
          className="w-full bg-gradient-to-r from-purple-600 to-cyan-600"
        >
          {processing ? 'Traitement...' : 'Payer 50€'}
        </Button>
      </form>
    </div>
  );
}
```

### 6. Intégrer dans l'application

Modifier `/App.tsx` pour wrapper l'app avec Stripe :

```tsx
import { StripeWrapper } from './components/StripeWrapper';

// Dans le JSX principal :
<StripeWrapper>
  <StripePaymentForm onBack={() => setCurrentPage('founders-club')} />
</StripeWrapper>
```

## Checklist de production

- [ ] Remplacer les clés de test par les clés de production
- [ ] Configurer les webhooks Stripe pour les confirmations
- [ ] Ajouter la gestion des erreurs avancée
- [ ] Implémenter la page de succès post-paiement
- [ ] Configurer les emails de confirmation
- [ ] Tester tous les scénarios (succès, échec, remboursement)

## Sécurité

⚠️ **Important** : Les clés secrètes Stripe ne doivent JAMAIS être exposées côté client. Utilisez toujours des API routes côté serveur pour les opérations sensibles.

## Support

- Documentation Stripe : https://stripe.com/docs
- React Stripe.js : https://stripe.com/docs/stripe-js/react