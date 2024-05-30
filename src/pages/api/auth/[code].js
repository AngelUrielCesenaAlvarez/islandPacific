import config from '@/app/config/mercadoLibre';
import axios from 'axios';

export default async function handler(req, res) {
  const { code } = req.query;

  console.log('Received code:', code); // Log para verificar el código recibido

  if (!code) {
    console.error('No code provided');
    return res.status(400).json({ error: 'No code provided' });
  }

  try {
    console.log('Requesting access token with code:', code);

    const tokenResponse = await axios.post('https://api.mercadolibre.com/oauth/token', null, {
      params: {
        grant_type: 'authorization_code',
        client_id: config.clientId,
        client_secret: config.clientSecret,
        code,
        redirect_uri: config.redirectUri
      }
    });

    console.log('Token response received:', tokenResponse.data); // Log de la respuesta del token

    const { access_token } = tokenResponse.data;

    console.log('Access token received:', access_token); // Log del token de acceso

    // Aquí se redirige a donde sea necesario en la aplicación
    res.redirect(`/profile?access_token=${access_token}`);
  } catch (error) {
    console.error('Error getting access token', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Error getting access token', details: error.response ? error.response.data : error.message });
  }
}
