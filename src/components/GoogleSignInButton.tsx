import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { loginWithGoogle } from '../api';
import { useAuth } from '../AuthContext';

export default function GoogleSignInButton() {
  const navigate = useNavigate();
  const { login } = useAuth();

  return (
    <div className="mt-4">
      <GoogleLogin
        onSuccess={async (credentialResponse) => {
          try {
            const credential = credentialResponse.credential;
            if (!credential) return;
            const data = await loginWithGoogle(credential);
            login(data);
            navigate('/dashboard');
          } catch (err) {
            // eslint-disable-next-line no-console
            console.error('Google login failed', err);
          }
        }}
        onError={() => {
          // eslint-disable-next-line no-console
          console.error('Google Login Failed');
        }}
      />
    </div>
  );
}
