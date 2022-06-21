import Link from 'next/link';
import { ProductStyle } from "../styles/ProductStyle";

// Framer-Motion Variants Child
const card = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
}

export default function Product({ product }){
    const { title, price, image, slug } = product.attributes;
    return(
        <ProductStyle
        variants={card}
        >
            <Link href={`/${slug}`}>
                <div>
                    <img src={image.data.attributes.formats.small.url} alt="" />
                </div>
            </Link>
            <h2>{title}</h2>
            <h3>${price}</h3>
        </ProductStyle>
    )
}