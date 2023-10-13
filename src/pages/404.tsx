import Layout from "@/components/Layout/layout"
import { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"

const NotFound: NextPage = () => {
    return (
    <Layout>
        <Head><title>Not found</title></Head>
        <div style={{textAlign: 'center'}}>
        <Image priority src='/404-robot.png' alt='' width={375} height={375} />
        </div>
    </Layout>
    )
}

export default NotFound