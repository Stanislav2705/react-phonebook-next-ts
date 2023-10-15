import Layout from "@/components/Layout/layout";
import LoginForm from "@/components/LoginForm/LoginForm";
import { NextPage } from "next";
import Head from "next/head";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Login: NextPage = () => {
    return (
        <>
            <Head>Login</Head>
            <HelmetProvider>
            <main>
            <Helmet>
            <title>Login</title>
            </Helmet>
            <LoginForm />
            </main>
            </HelmetProvider>
        </>
      );
}

export default Login;