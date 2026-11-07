import express from 'express';
import { createServer as createViteServer } from 'vite';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://ltgvibbojsndjbqldoit.supabase.co';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_RBl9GfCc8ZvwLV8hlXN4KQ_kFINKJAs';
const supabase = createClient(supabaseUrl, supabaseKey);

async function startServer() {
  const app = express();
  app.use(express.json());

  // Backend API route for fetching login logs from Supabase
  app.get('/api/logs', async (req, res) => {
    try {
      const { data, error } = await supabase
        .from('login_logs')
        .select('*')
        .order('login_time', { ascending: false });

      if (error) {
        return res.status(400).json({ error: error.message });
      }
      return res.json({ logs: data });
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  });

  // Backend API route for recording a login log to Supabase
  app.post('/api/logs', async (req, res) => {
    try {
      const { email, status } = req.body;
      const { data, error } = await supabase
        .from('login_logs')
        .insert({ email: email || 'Abdullahwev6@gmail.com', status: status || 'Success' });

      if (error) {
        return res.status(400).json({ error: error.message });
      }
      return res.json({ success: true, data });
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  });

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });

  app.use(vite.middlewares);

  const port = 3000;
  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

startServer();
