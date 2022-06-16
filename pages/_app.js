import '../styles/globals.css'
// import provider and createClient from urql
import { Provider, createClient } from "urql";

// create a client witch takes in our graphql URL
const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API });

function MyApp({ Component, pageProps }) {
  // wrap Provider around our components and pass in the client variable
  return (
    <Provider value={client}>
    <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
