import PhoneBook from "@/components/PhoneBook/PhoneBook";
import { useAuth } from "@/hooks/useAuth";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Contacts: NextPage = () => {
  const router = useRouter();
  const { isLoggedIn, isRefreshing } = useAuth();

  const shouldRedirect = !isRefreshing && !isLoggedIn

  return shouldRedirect ? router.push("/login") : <PhoneBook/>
   
}

export default Contacts;