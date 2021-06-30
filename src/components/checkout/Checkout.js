import Header from './Header';
import UserInfos from './UserInfos';
import Payment from './Payment';
import Order from './Order';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Checkout() {
    return (
        <Container>
            <Header>
                <Link to="/home">
                    Tech<span>Store</span>
                </Link>
            </Header>
            <UserInfos />
            <Payment />
            <Order />
        </Container>
    );
}

const Container = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
