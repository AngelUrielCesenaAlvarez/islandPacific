import config from '@/app/config/mercadoLibre';
import axios from 'axios';

export default async function handler(req, res) {
  const { code } = req.query;

  try {
    const tokenResponse = await axios.post('https://api.mercadolibre.com/oauth/token', null, {
      params: {
        grant_type: 'authorization_code',
        client_id: config.clientId,
        client_secret: config.clientSecret,
        code,
        redirect_uri: config.redirectUri
      }
    });

    const { access_token } = tokenResponse.data;

    // Guarda el access_token de alguna manera segura (cookies, local storage, etc.)
    // Aquí rediriges a donde sea necesario en tu aplicación
    res.redirect(`/pages/profile?access_token=${access_token}`);
  } catch (error) {
    console.error('Error getting access token', error);
    res.status(500).json({ error: 'Error getting access token' });
  }
}
