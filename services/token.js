import axios from 'axios';

export async function servicioCancionesAxios() {
  const client_id = '033cfb5074b24bd999e1e8cc9bcb7ce1';
  const client_secret = 'fae1fa7869f64bf5bed1a97416b35380';
  const grant_type = 'client_credentials';

  const URI = 'https://accounts.spotify.com/api/token';

  const data = `grant_type=${grant_type}&client_id=${client_id}&client_secret=${client_secret}`;

  const peticion = {
    method:"POST",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: data
    
  };

  try {
    const response = await fetch(URI, peticion);
    const canciones = await response.json();
    console.log(canciones);
  } catch (error) {
    // Manejar errores de solicitud
    console.error(error);
    throw new Error('Error al obtener canciones');
  }
}


/*

import axios from 'axios';

export async function servicioCancionesAxios() {
  const client_id = '033cfb5074b24bd999e1e8cc9bcb7ce1';
  const client_secret = 'fae1fa7869f64bf5bed1a97416b35380';
  const grant_type = 'client_credentials';

  const URI = 'https://accounts.spotify.com/api/token';

  const data = `grant_type=${grant_type}&client_id=${client_id}&client_secret=${client_secret}`;

  const peticion = {
    method: 'post',
    url: URI,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: data,
  };

  try {
    const response = await axios(peticion);
    const canciones = response.data;
    console.log(canciones);
  } catch (error) {
    // Manejar errores de solicitud
    console.error(error);
    throw new Error('Error al obtener canciones');
  }
}
*/