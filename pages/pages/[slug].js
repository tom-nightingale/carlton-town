import Head from 'next/head'
import Layout from '../../components/layout'
import Header from '../../components/header'
import { getAllPagesWithSlug } from '../../lib/api'

export default function Page({ page }) {
    return (
        <Layout>
            
            <Head>
                <title></title>
            </Head>

            <Header />

        </Layout>
    )
}