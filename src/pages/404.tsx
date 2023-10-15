import Layout from "@/components/Layout/layout"
import { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect } from "react"

const NotFound: NextPage = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        },3000)
    }, [router]);

    return (
    <>
        <Head>
            <title>Not found</title>
        </Head>
        <div style={{textAlign: 'center'}}>
        <Image priority src='/404-robot.png' alt='' width={375} height={375} />
        </div>
    </>
    )
}

export default NotFound