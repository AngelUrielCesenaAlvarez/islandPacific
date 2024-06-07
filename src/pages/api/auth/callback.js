import axios from 'axios';
import config from '@/app/config/mercadoLibre';

// Esta es la función que manejará la solicitud GET a /api/auth/callback
export default async function handler(req, res) {
    const { code } = req.query; // Captura el código de autorización de la URL de consulta

    if (!code) {
        return res.status(400).json({ error: 'No authorization code provided' });
    }

    try {
        // Solicitud a mercado libre para intercambiar el código por un token de acceso
        const response = await axios.post('https://api.mercadolibre.com/oauth/token', null, {
            params: {
                grant_type: 'authorization_code',
                client_id: config.clientId,
                client_secret: config.clientSecret,
                code: code,
                redirect_uri: config.redirectUri, // Asegúrate de que esta URI coincida con la configurada en mercado libre/Ya lo hiciste y si estaba bien
            },
        });

        const { access_token } = response.data;
        console.log('Access token received:', access_token);

        // Redireccionar al usuario a otra parte de tu aplicación
        res.redirect(`/some-internal-page?access_token=${access_token}`);
    } catch (error) {
        console.error('Error retrieving access token:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Failed to retrieve access token', details: error.response ? error.response.data : error.message });
    }
}
