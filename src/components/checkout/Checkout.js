import Header from './Header';
import UserInfos from './UserInfos';
import Payment from './Payment';
import Order from './Order';
import styled from 'styled-components';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import CartContext from '../../contexts/CartContext';

export default function Checkout() {
    const history = useHistory();
    const { user } = useContext(UserContext);
    const { cart } = useContext(CartContext);

    function sale(e) {
        e.preventDefault();
        console.log(e);
        const promise = axios.post(
            'http://localhost:4000/sales',
            { cart },
            {
                headers: {
                    authorization: `Bearer ${user.token}`,
                },
            }
        );
        promise.then(() => {
            alert('COMPRA CONCLUIDA');
            history.push('/');
        });
        promise.catch(() => {
            alert('ERRO AO COMPRAR');
        });
    }
    return (
        <Container>
            <form onSubmit={(e) => sale(e)}>
                <Header>
                    <Link to="/">
                        Tech<span>Store</span>
                    </Link>
                </Header>
                <UserInfos />
                <Payment />
                <Order />
                <Button type="submit">Finalizar compra</Button>
            </form>
            <Cancel onClick={() => history.push('/')}>Cancelar compra</Cancel>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const Button = styled.button`
    width: 80%;
    margin: 25px 0px;
    background-color: #4ba02d;
    color: #fff;
    height: 40px;
    border-radius: 5px;
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 34px;
    cursor: pointer;
`;

const Cancel = styled.button`
    width: 80%;
    color: rgba(0, 0, 0, 0.6);
    background-color: #fff;
    height: 40px;
    border-radius: 5px;
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 34px;
    cursor: pointer;
    border: none;
`;
