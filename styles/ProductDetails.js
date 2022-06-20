import styled from 'styled-components';

export const DetailsStyle = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5rem 0rem;

    img {
        width: 40%;
    }

    @media screen and (max-width: 768px){
        flex-direction: column;

        img{
            width: 100%;
            margin-bottom: 2rem;
        }
    }
`;

export const ProductInfo = styled.div`
    width: 50%;

    h3 {
        font-size: 1.3rem;
    }

    h4 {
        padding-bottom: 1rem;
    }

    button {
        font-size: 0.75rem;
        font-weight: medium;
        padding: 0.5rem 1rem;
        cursor: pointer;
    }

    @media screen and (max-width: 768px){
        width: 100%;

        h3 {
            font-size: 1.5rem;
        }
    }
`;

export const Quantity = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem 0rem;

    button {
        background: transparent;
        border: none;
        display: flex;
        font-size: 1.5rem;
        padding: 0rem 0.5rem;
    }

    p {
        width: 1rem;
        text-align: center;
    }

    span {
        color: var(--secondary);
    }

    svg {
        color: #494949;
        cursor: pointer;
    }
`;

export const Buy = styled.button`
    width: 100%;
    background: var(--primary);
    color: #fff;
    font-weight: 500;
`;