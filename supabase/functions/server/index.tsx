import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "npm:@supabase/supabase-js";
import * as kv from './kv_store.tsx';

const app = new Hono();

// CORS configuration
app.use('*', cors({
  origin: '*',
  allowHeaders: ['*'],
  allowMethods: ['POST', 'GET', 'OPTIONS'],
}));

// Logging
app.use('*', logger(console.log));

// Initialize Supabase client
const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

// Health check
app.get('/make-server-993e1db3/health', (c) => {
  return c.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Waitlist endpoints
app.post('/make-server-993e1db3/waitlist', async (c) => {
  try {
    const { email } = await c.req.json();
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return c.json({ error: 'Email invalide' }, 400);
    }

    // Check if email already exists
    const existingEmail = await kv.get(`waitlist:${email}`);
    if (existingEmail) {
      return c.json({ error: 'Email déjà inscrit sur la waitlist' }, 409);
    }

    // Add email to waitlist
    const emailData = {
      email,
      timestamp: new Date().toISOString(),
      source: 'landing-page'
    };

    await kv.set(`waitlist:${email}`, emailData);
    
    // Update counter
    const currentCount = await kv.get('waitlist:count') || 0;
    await kv.set('waitlist:count', currentCount + 1);

    console.log(`New waitlist signup: ${email}`);
    
    return c.json({ 
      success: true, 
      message: 'Email ajouté à la waitlist avec succès',
      count: currentCount + 1
    });
    
  } catch (error) {
    console.error('Error adding email to waitlist:', error);
    return c.json({ error: 'Erreur serveur lors de l\'ajout à la waitlist' }, 500);
  }
});

app.get('/make-server-993e1db3/waitlist/count', async (c) => {
  try {
    const count = await kv.get('waitlist:count') || 0;
    return c.json({ count });
  } catch (error) {
    console.error('Error getting waitlist count:', error);
    return c.json({ error: 'Erreur lors de la récupération du nombre d\'inscrits' }, 500);
  }
});

// Get all waitlist emails (for admin purposes)
app.get('/make-server-993e1db3/waitlist/emails', async (c) => {
  try {
    const emails = await kv.getByPrefix('waitlist:');
    const emailList = emails
      .filter(item => item.key !== 'waitlist:count')
      .map(item => ({
        email: item.value.email,
        timestamp: item.value.timestamp,
        source: item.value.source
      }))
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    
    return c.json({ emails: emailList, total: emailList.length });
  } catch (error) {
    console.error('Error getting waitlist emails:', error);
    return c.json({ error: 'Erreur lors de la récupération des emails' }, 500);
  }
});

// Error handler
app.onError((err, c) => {
  console.error('Server error:', err);
  return c.json({ error: 'Erreur serveur interne' }, 500);
});

// 404 handler
app.notFound((c) => {
  return c.json({ error: 'Route non trouvée' }, 404);
});

Deno.serve(app.fetch);