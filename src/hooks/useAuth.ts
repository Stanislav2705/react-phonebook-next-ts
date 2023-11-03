import { selectError, selectIsLoggedIn, selectIsRefreshing, selectUser } from '@/redux/auth/selectors';
import { useSelector } from 'react-redux';


export const useAuth = () => {
  return {
    isLoggedIn: useSelector(selectIsLoggedIn),
    isRefreshing: useSelector(selectIsRefreshing),
    user: useSelector(selectUser),
    error: useSelector(selectError),
  };
};