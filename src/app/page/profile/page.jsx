'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; // Asegúrate de importar useRouter porque luego tienes un error por dos horas
import axios from 'axios';

export default function Profile() {
  const [isClient, setIsClient] = useState(false);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const router = useRouter();
      const { access_token } = router.query;

      if (access_token) {
        axios.get('https://api.mercadolibre.com/users/me', {
          headers: {
            Authorization: `Bearer ${access_token}`
          }
        })
        .then(response => {
          setProfile(response.data);
        })
        .catch(error => {
          console.error('Error fetching profile:', error);
          setProfile(null); // Manejar el error estableciendo el perfil como null
        });
      }
    }
  }, [isClient]);

  if (!isClient || !profile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {profile.first_name} {profile.last_name}</p>
      <p>Email: {profile.email}</p>
      {/* Añade más detalles del perfil según sea necesario */}
    </div>
  );
}
