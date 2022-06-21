import styled from "styled-components";
const { motion } = require('framer-motion');

export const Gallery = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 2rem;
    margin-bottom: 5rem;

    @media screen and (max-width: 359px){
        grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    }
`;