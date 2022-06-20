import Link from "next/link";
import { RiShoppingBag3Fill } from 'react-icons/ri';
import Cart from './Cart';
import { useStateContext } from "../lib/context";
import { NavStyles, NavItems } from '../styles/NavStyles';


export default function Nav() {
    const {showCart, setShowCart, totalQuantities} = useStateContext();

    return (
        <NavStyles>
            <Link href={'/'}>Label</Link>
            <NavItems>
                <div onClick={() => setShowCart(true)}>
                    {totalQuantities > 0 && <span>{totalQuantities}</span>}
                    <RiShoppingBag3Fill/>
                    <h3>Cart</h3>
                </div>
            </NavItems>
            {showCart && <Cart />}
        </NavStyles>
    );
}