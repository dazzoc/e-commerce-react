import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from '../lib/query';
import { useRouter } from 'next/router';
import { useStateContext } from "../lib/context";
import { DetailsStyle, ProductInfo, Quantity, Buy } from "../styles/ProductDetails";
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';


export default function ProductDetails(){
    // Use Global State
    const { qty, inceaseQty, decreaseQty, onAdd } = useStateContext();
    // Fetch Slug
    const { query } = useRouter();
    // fetch graphql data
    const [results] = useQuery({
        query: GET_PRODUCT_QUERY,
        variables: {slug: query.slug}
    });

    const { data, fetching, error } = results;
    // Check for the data coming in
    if(fetching) return <p>Loading...</p>;
    if(error) return <p>Oh no... {error.message}</p>;
    // extract our data
    const { title, description, image, price } = data.products.data[0].attributes;

    return (
        <DetailsStyle>
            <img src={image.data.attributes.formats.medium.url} alt={title} />
            <ProductInfo>
                <h3>{title}</h3>
                <h4>${price}</h4>
                <p>{description}</p>
                <Quantity>
                    <span>Quantity</span>
                    <button><AiFillMinusCircle onClick={decreaseQty}/></button>
                    <p>{qty}</p>
                    <button><AiFillPlusCircle onClick={inceaseQty}/></button>
                </Quantity>
                <Buy onClick={() => onAdd(data.products.data[0].attributes, qty)}>Add to cart</Buy>
            </ProductInfo>
        </DetailsStyle>
    );
}