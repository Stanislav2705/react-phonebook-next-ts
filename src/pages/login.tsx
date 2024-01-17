import Layout from "@/components/Layout/layout";
import LoginForm from "@/components/LoginForm/LoginForm";
import { NextPage } from "next";
import Head from "next/head";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Login: NextPage = () => {
    return (
        <>
            <HelmetProvider>
            <main>
            <Helmet>
            <title>Login</title>
            </Helmet>
            <LoginForm email={""} password={""} />
            </main>
            </HelmetProvider>
        </>
      );
}

export default Login;