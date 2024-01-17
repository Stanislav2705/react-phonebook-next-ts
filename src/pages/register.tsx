import Layout from "@/components/Layout/layout";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import RegisterForm from "@/components/RegisterForm/RegisterForm";

import { NextPage } from "next";

const Register: NextPage = () => {
    return (
    <>
        <HelmetProvider>
        <main>
        <Helmet>
            <title>Register</title>
        </Helmet>
        <RegisterForm name={""} email={""} password={""}/>
        </main>
        </HelmetProvider>
    </>
    )
}

export default Register