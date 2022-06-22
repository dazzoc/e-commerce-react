import { useRouter } from "next/router";
import { TbFaceId } from 'react-icons/tb';
import styled from "styled-components";
const {motion} = require('framer-motion');
const stripe = require('stripe')(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);


export async function getServerSideProps(params){
    const order = await stripe.checkout.sessions.retrieve(
        params.query.session_id,
        {
            expand: ["line_items"],
        }
    );
    return {props: {order}}
}


export default function Success({ order }){
    const route = useRouter();
    return(
        <Wrapper>
            <Card
            initial={{opacity: 0, scale: 0.75}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.75}}
            >
                <Thanks>Thanks! For your order!</Thanks>
                <Sub>A confirmation email has been sent to</Sub>
                <Email>{order.customer_details.email}</Email>
                <TbFaceId/>
                <InfoWrapper>
                    <Address>
                        <h2>Address:</h2>
                        {Object.entries(order.customer_details.address).map(([key, val]) => (
                            <p key={key}>
                                {key} : {val}
                            </p>
                        ))}
                    </Address>
                    <Products>
                        <h2>Products:</h2>
                        {order.line_items.data.map((item) => (
                            <div key={item.id}>
                                <p>Product: {item.description}</p>
                                <p>Quantity: {item.quantity}</p>
                                <p>Price: ${item.price.unit_amount / 100}</p>
                            </div>
                        ))}
                    </Products>
                </InfoWrapper>
                <button onClick={() => route.push('/')}>Continue Shopping <span>☻</span></button>
            </Card>
        </Wrapper>
    )
}

const Wrapper =styled.div`
    margin: 5rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Card = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    border-radius: 2rem;
    padding: 3rem;
    width: 500px;

    svg{
        font-size: 3rem;
    }

    button{
        background: var(--primary);
        color: #fff;
        font-size: 1rem;
        font-weight: 500;
        width: 100%;
        padding: 0.2rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        span{
            font-size: 2rem;
        }
    }

    @media screen and (max-width: 548px){
        padding: 2rem;
    }
`;

const Address = styled.div`
    font-size: 1rem;
    width: 100%;
    padding-bottom: 1rem;
`;

const Products = styled.div`
    font-size: 1rem;
    width: 100%;

    div{
        padding-bottom: 1rem;
    }
`;

const InfoWrapper = styled.div`
    width: 100%;
    margin: 2rem 0;
`;

const Thanks = styled.h1`
    margin-bottom: 0.5rem;
    @media screen and (max-width: 548px){
        font-size: 1.2rem;
    }
`;

const Sub = styled.h2`
    @media screen and (max-width: 548px){
        font-size: .8rem;
    }
`;

const Email = styled.h3`
    @media screen and (max-width: 548px){
        font-size: .8rem;
    }
`;