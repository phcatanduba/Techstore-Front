import styled from 'styled-components';
import { MdShoppingCart } from 'react-icons/md';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../contexts/CartContext';
import Product from './Product';

export default function Order() {
    function currencyBRL(value) {
        const options = { style: 'currency', currency: 'BRL' };
        return value.toLocaleString('pt-BR', options);
    }
    const { cart, setCart } = useContext(CartContext);
    const [total, setTotal] = useState(0);
    const [quantityChange, setQuantityChange] = useState(false);

    useEffect(() => {
        let value = 0;
        if (cart) cart.forEach((p) => (value += p.quantity * p.price));
        setTotal(value);
    }, [cart, quantityChange]);

    useEffect(() => {
        if (cart.length !== 0) {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [total]);

    useEffect(() => {
        const localCart = JSON.parse(localStorage.getItem('cart'));
        if (localCart) setCart(localCart);
    }, []);

    useEffect(() => {
        if (cart.length === 0) {
            localStorage.removeItem('cart');
        }
    }, [quantityChange]);

    return (
        <Container>
            <p>
                <MdShoppingCart style={{ marginRight: '15px' }} />
                RESUMO DO PEDIDO
            </p>
            <Infos>
                {cart
                    ? cart.map((p) => {
                          return (
                              <Product
                                  cart={cart}
                                  p={p}
                                  key={p.id}
                                  total={total}
                                  setTotal={setTotal}
                                  currencyBRL={currencyBRL}
                                  setCart={setCart}
                                  quantityChange={quantityChange}
                                  setQuantityChange={setQuantityChange}
                              />
                          );
                      })
                    : null}
                <Total>TOTAL: {currencyBRL(total)}</Total>
            </Infos>
        </Container>
    );
}

const Container = styled.div`
    width: 80%;
    height: 100%;
    border: 2px solid #000;
    border-radius: 5px;
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        width: 100%;
        height: 50px;
        background-color: #000;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
    }
`;

const Infos = styled.div`
    width: 90%;
    height: 90%;
    margin: 25px 0px;
    background: #f2f2f2;
    border: 1px solid #ddd;
    border-radius: 5px;

    label {
        font-size: 22px;
        font-weight: bold;
    }

    input {
        background-color: #f5f5f5;
        border: 1px solid #ddd;
        border-radius: 5px;
        height: 32px;
        padding-right: 5px;
        font-size: 18px;
        width: 100%;
    }
`;

const Total = styled.div`
    font-weight: bold;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 25px 0px;
`;
