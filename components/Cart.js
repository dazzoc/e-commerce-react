import { useStateContext } from "../lib/context";
import { GiShoppingCart } from 'react-icons/gi';
import { AiFillPlusCircle, AiFillMinusCircle, AiOutlineClose } from 'react-icons/ai';
import { CartWrapper, CartStyle, Card, CardInfo, EmptyStyle, Checkout, Cards } from "../styles/CartStyles";
import { Quantity } from "../styles/ProductDetails";

// Animation Variants
const card = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
}

const cards = {
    hidden: { opacity: 1 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.1,
        },
    },
};

export default function Cart(){
    const { cartItems, setShowCart, onAdd, onRemove, totalPrice } = useStateContext();

    return(
        <CartWrapper 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setShowCart(false)}>
            <CartStyle 
            initial={{ x: '50%' }}
            animate={{ x: '0%' }}
            exit={{ x: '50%' }}
            transition={{ type: 'tween' }}
            onClick={(e) => e.stopPropagation()}
            >
                {/* <AiOutlineClose className="exit" onClick={() => setShowCart(false)}/> */}
                {cartItems.length < 1 && (
                    <EmptyStyle
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    >
                        <h1>You have more shopping to do 😘</h1>
                        <GiShoppingCart />
                    </EmptyStyle>
                )}
                <Cards 
                variants={cards}
                initial='hidden'
                animate='show'
                layout
                >
                    {cartItems.length >= 1 && (
                        cartItems.map((item) => {
                            return(
                                <Card 
                                variants={card}
                                key={item.slug}
                                layout
                                >
                                    <img src={item.image.data.attributes.formats.small.url} alt={item.title} />
                                    <CardInfo>
                                        <h3>{item.title}</h3>
                                        <h3>${item.price}</h3>
                                        <Quantity>
                                            <span className="cartQty qty__title" >Qty</span>
                                            <button className="cartQty"><AiFillMinusCircle onClick={() => onRemove(item)}/></button>
                                            <p className="cartQty">{item.quantity}</p>
                                            <button className="cartQty"><AiFillPlusCircle onClick={() => onAdd(item, 1)}/></button>
                                        </Quantity>
                                    </CardInfo>
                                </Card>
                            );
                        })
                    )}
                </Cards>
                {cartItems.length >= 1 && (
                    <Checkout layout>
                        <h3>Subtotal: ${totalPrice}</h3>
                        <button>Check Out</button>
                    </Checkout>
                )}
            </CartStyle>
        </CartWrapper>
    )
}