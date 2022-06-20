import { useStateContext } from "../lib/context";
import { GiShoppingCart } from 'react-icons/gi';
import { AiFillPlusCircle, AiFillMinusCircle, AiOutlineClose } from 'react-icons/ai';
import { CartWrapper, CartStyle, Card, CardInfo, EmptyStyle } from "../styles/CartStyles";
import { Quantity } from "../styles/ProductDetails";

export default function Cart(){
    const { cartItems, setShowCart, onAdd, onRemove } = useStateContext();

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
            </CartStyle>
        </CartWrapper>
    )
}