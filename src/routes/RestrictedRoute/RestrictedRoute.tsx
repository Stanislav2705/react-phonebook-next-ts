import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';
import { useEffect } from 'react';

interface RestrictedRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
}

const RestrictedRoute: React.FC<RestrictedRouteProps> = ({ children, redirectTo = '/' }: RestrictedRouteProps) => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace(redirectTo);
    }
  }, [isLoggedIn, router, redirectTo]);

  return <>{children}</>;
};

export default RestrictedRoute;