import Link from "next/link";
import { RiShoppingBag3Fill } from 'react-icons/ri';
// import { ProductStyle } from "../styles/ProductStyle";
import { NavStyles, NavItems } from '../styles/NavStyles';


export default function Nav() {
    return (
        <NavStyles>
            <Link href={'/'}>Label</Link>
            <NavItems>
                <div>
                    <RiShoppingBag3Fill/>
                    <h3>Cart</h3>
                </div>
            </NavItems>
        </NavStyles>
    );
}