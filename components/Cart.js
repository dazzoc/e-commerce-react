import { useStateContext } from "../lib/context";
import { GiShoppingCart } from 'react-icons/gi';
import { AiFillPlusCircle, AiFillMinusCircle, AiOutlineClose } from 'react-icons/ai';
import { CartWrapper, CartStyle, Card, CardInfo, EmptyStyle, Quantity } from "../styles/CartStyles";

export default function Cart(){
    const { cartItems, setShowCart } = useStateContext();

    return(
        <CartWrapper onClick={() => setShowCart(false)}>
            <CartStyle onClick={(e) => e.stopPropagation()}>
                {/* <AiOutlineClose className="exit" onClick={() => setShowCart(false)}/> */}
                {cartItems.length < 1 && (
                    <EmptyStyle>
                        <h1>You have more shopping to do 😘</h1>
                        <GiShoppingCart />
                    </EmptyStyle>
                )}
                {cartItems.length >= 1 && (
                    cartItems.map((item) => {
                        return(
                            <Card key={item.slug}>
                                <img src={item.image.data.attributes.formats.thumbnail.url} alt={item.title} />
                                <CardInfo>
                                    <h3>{item.title}</h3>
                                    <h3>${item.price}</h3>
                                    <Quantity>
                                        <span>Qty</span>
                                        <button><AiFillMinusCircle /></button>
                                        <p>{item.quantity}</p>
                                        <button><AiFillPlusCircle /></button>
                                    </Quantity>
                                </CardInfo>
                            </Card>
                        );
                    })
                )}
            </CartStyle>
        </CartWrapper>
    )
}