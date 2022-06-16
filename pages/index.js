import Head from 'next/head';
// import useQuery from urql
import { useQuery } from 'urql';
// improt the query we want to use 
import { PRODUCT_QUERY } from '../lib/query';
import Product from '../components/Products';
import { Gallery } from '../styles/Gallery';



export default function Home() {
  // Fetch products from strapi
  const [results] = useQuery({query: PRODUCT_QUERY});
  // console.log the results and get back the data, fetching and errors
  const { data, fetching, error } = results;

  // Check for the data coming in
  if(fetching) return <p>Loading...</p>;
  if(error) return <p>Oh no... {error.message}</p>;
  const products = data.products.data;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Next.js!</h1>
        <Gallery>
          {products.map((product) => (
            <Product key={product.attributes.Slug} product={product} />
          ))}
        </Gallery>
      </main>
    </div>
  )
}


