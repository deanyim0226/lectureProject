import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Login.module.css';

export default function Login() {
    const router = useRouter();
  
    useEffect(() => {
      // Load the Google Identity Services script
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      document.body.appendChild(script);
  
      script.onload = () => {
        window.google.accounts.id.initialize({
          client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
          callback: handleCredentialResponse,
        });
        window.google.accounts.id.renderButton(
          document.getElementById('googleLoginButton'),
          { theme: 'outline', size: 'large' }
        );
      };
    }, []);
  
    const handleCredentialResponse = (response) => {
      const userObject = decodeJWT(response.credential);
      // Save user information to session storage
      sessionStorage.setItem('user', JSON.stringify(userObject));
      // Redirect to index page
      router.push('/');
    };
  
    const decodeJWT = (token) => {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join('')
      );
      return JSON.parse(jsonPayload);
    };
  
  return (
    <div className={styles.googleButtonContainer}>
        <div id="googleLoginButton"></div>
      </div>
  );
}