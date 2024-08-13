import { useRouter } from 'next/router';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Redirect to login if no user in session storage
    const user = sessionStorage.getItem('user');
    if (!user && router.pathname !== '/login') {
      router.push('/login');
    }
  }, [router]);

  return <Component {...pageProps} />;
}

export default MyApp;
