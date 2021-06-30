import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Product from './Product';

export default function CategoryContainer({ categoryName, title }) {
    const [products, setProducts] = useState(false);
    useEffect(() => {
        const config = {
            headers: {
                authorization: 'Bearer 1',
            },
        };
        axios
            .get(`http://localhost:4000/products/` + categoryName, config)
            .catch((e) => console.log(e))
            .then((r) => setProducts(r.data));
    }, [categoryName]);
    return (
        <StyledContainer>
            <h3>{title}</h3>
            <div>
                {products ? (
                    products.map((p, i) => <Product product={p} key={i} />)
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </StyledContainer>
    );
}

const StyledContainer = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.2);
    width: 90%;
    height: auto;
    background-color: #ffffff;
    padding: 10px;
    margin: 15px auto;
    box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.2);

    & > div {
        overflow-y: hidden;
        display: flex;
        align-items: center;

        & div:last-of-type {
            margin-right: 0;
        }
    }

    h3 {
        font-weight: 700;
        font-size: 1.5em;
    }
`;
