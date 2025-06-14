import { useEffect, useState } from 'react';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShow(true);
    } else if (consent === 'accepted') {
      loadAdsenseScript();
    }
  }, []);

  const handleConsent = (accepted) => {
    localStorage.setItem('cookieConsent', accepted ? 'accepted' : 'rejected');
    setShow(false);
    if (accepted) loadAdsenseScript();
  };

  const loadAdsenseScript = () => {
    if (document.querySelector('script[src*="adsbygoogle.js"]')) return;
    const script = document.createElement('script');
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6981915612534521";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
  };

  if (!show) return null;

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, padding: '1rem',
      background: '#fff', borderTop: '1px solid #ddd', zIndex: 9999
    }}>
      <p style={{ marginBottom: 10 }}>
        We use cookies to personalize ads and analyze traffic. Click “Accept” to consent to personalized advertising in accordance with GDPR.
      </p>
      <button onClick={() => handleConsent(true)} style={{ marginRight: 10 }}>Accept</button>
      <button onClick={() => handleConsent(false)}>Reject</button>
    </div>
  );
}
