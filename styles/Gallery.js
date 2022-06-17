import styled from "styled-components";

export const Gallery = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 2rem;

    @media screen and (max-width: 359px){
        grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    }
`;