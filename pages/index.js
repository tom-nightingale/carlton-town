import Head from 'next/head'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import { getFullNavigation } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import Link from 'next/link'

export default function Index({ allPosts, fullMenu, preview }) {
  const heroPost = allPosts.edges[0]?.node
  const morePosts = allPosts.edges.slice(1)
  console.log(fullMenu);

  return (
    <>
      <Layout preview={preview}>
        
        <Head>
          <title>Carlton Town FC - Home of the Millers</title>

        </Head>

        <Container>

          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.featuredImage?.node}
              date={heroPost.date}
              author={heroPost.author?.node}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  const fullMenu = await getFullNavigation()
  return {
    props: { allPosts, fullMenu, preview},
  }
}


