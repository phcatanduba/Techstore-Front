import Header from './Header';
import UserInfos from './UserInfos';
import Payment from './Payment';
import Order from './Order';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Checkout() {
    return (
        <Container>
            <form>
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
            <Cancel>Cancelar compra</Cancel>
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
