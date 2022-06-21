import styled from "styled-components";
const { motion } = require('framer-motion');

export const CartWrapper = styled(motion.div)`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 100;
    display: flex;
    justify-content: flex-end;
`;

export const CartStyle = styled(motion.div)`
    width: 600px;
    background: #f1f1f1;
    padding: 2rem 4rem;
    overflow-y: scroll;
    position: relative;

    /* .exit {
        font-size: 2rem;
        cursor: pointer;
    } */

    @media screen and (max-width: 768px){
        width: 80%;
        padding: 2rem 2rem;
    }

    @media screen and (max-width: 500px){
        padding: 1rem 1rem;
    }
`;

export const Card = styled(motion.div)`
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
    border-radius: 1rem;
    overflow: hidden;
    background: #fff;
    padding: 2rem;
    margin: 2rem 0rem;
    img {
        width: 6rem;
    }

    @media screen and (max-width: 423px){
        flex-direction: column;

        img{
            width: 100%;
            margin-bottom: 1rem;
        }
    }
`;

export const CardInfo = styled(motion.div)`
    width: 60%;
    div {
        display: flex;
        flex-direction: space-between;
    }

    @media screen and (max-width: 568px){
        width: 40%;
    }

    @media screen and (max-width: 423px){
        width: 100%;
    }
`;

export const EmptyStyle = styled(motion.div)`
    position: absolute;
    /* top: 0; */
    /* transform: translate(-50%, 0%); */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 80%;

    h1 {
        padding: 2rem;
        text-align: center;
    }

    svg{
        font-size: 10rem;
        color: var(--secondary);
    }

    @media screen and (max-width: 668px){
        h1 {
            font-size: 1rem;
        }
    }
`;

export const Checkout = styled(motion.div)`
    button{
        background: var(--primary);
        padding: 1rem 2rem;
        width: 100%;
        color: #fff;
        margin: 2rem 0;
        cursor: pointer;
        border: none;
    }
`