import { useAuth } from '@/hooks/useAuth';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface PrivateRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, redirectTo = '/' }: PrivateRouteProps) => {
  const router = useRouter();
  const { isLoggedIn, isRefreshing } = useAuth();

  useEffect(() => {
    if (!isRefreshing && !isLoggedIn) {
      router.push(redirectTo);
    }
  }, [isRefreshing, isLoggedIn, router, redirectTo]);

  return <>{children}</>;
};

export default PrivateRoute;