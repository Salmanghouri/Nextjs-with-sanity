import Head from 'next/head'
import Image from 'next/image'
import {sanityClient} from '../sanity'

const Home = ({ properies }) => {
  console.log(properies)
  return (
    <>
    {/* component */}
      <div>{properies}</div>

    </>
  )
}

export const getServerSideprops = async (Context) => {

    const query = '*[_type == "product" ]'
    const recipe = await sanityClient.fetch(query)
    console.log(recipe);
    if (!recipe) return { props: null, notFound: true };
  else
    return {
      props: {
        data: {
          headline: recipe.headline,
          publishedAt: recipe.publishedAt,
          body: recipe.body,
        },
      },
    };
};

export default Home
