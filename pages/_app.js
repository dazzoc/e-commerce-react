import '../styles/globals.css'
// import provider and createClient from urql
import { Provider, createClient } from "urql";
// import global state context
import { StateContext } from '../lib/context';
// components
import Nav from '../components/Nav';

// create a client witch takes in our graphql URL
const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API });

function MyApp({ Component, pageProps }) {
  // wrap Provider around our components and pass in the client variable
  return (
    <StateContext>
      <Provider value={client}>
        <Nav />
        <Component {...pageProps} />
      </Provider>
    </StateContext>
  );
}

export default MyApp
