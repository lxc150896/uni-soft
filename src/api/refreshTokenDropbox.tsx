import { setCookie } from "cookies-next";

export const handlerRefreshToken = async () => {
  try {
    const response = await fetch('https://api.dropbox.com/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: process.env.NEXT_PUBLIC_REFRESH_TOKEN ?? '',
        client_id: process.env.NEXT_PUBLIC_DROPBOX_APP_KEY ?? '',
        client_secret: process.env.NEXT_PUBLIC_DROPBOX_APP_SECRET ?? '',
      }).toString(),
    });

    const data = await response.json();

    if (!response.ok) {
      return false;
    }

    setCookie('dropbox_demo', data.access_token);

    return true;
  } catch (error) {
    console.error('Error refreshing token:', error);
    return false;
  }
}
