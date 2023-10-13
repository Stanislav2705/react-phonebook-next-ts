import Layout from "@/components/Layout/layout";
import LoginForm from "@/components/LoginForm/LoginForm";
import { NextPage } from "next";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Login: NextPage = () => {
    return (
        <Layout>
            <HelmetProvider>
            <main>
            <Helmet>
            <title>Login</title>
            </Helmet>
            <LoginForm />
            </main>
            </HelmetProvider>
        </Layout>
      );
}

export default Login;