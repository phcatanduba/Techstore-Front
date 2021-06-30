import styled from 'styled-components';
import { MdShoppingCart } from 'react-icons/md';

export default function Order() {
    return (
        <Container>
            <p>
                <MdShoppingCart style={{ marginRight: '15px' }} />
                RESUMO DO PEDIDO
            </p>
            <Infos>
                <div>
                    <label>Produto:</label>
                    <input value={'Pedro'} readOnly></input>
                </div>
                <div>
                    <label>Quantidade:</label>
                    <input value={'01234567890'} readOnly></input>
                </div>
                <div>
                    <label>Preço:</label>
                    <input type="number" placeholder={'xx-xxxxxxxx'}></input>
                </div>
            </Infos>
        </Container>
    );
}

const Container = styled.div`
    width: 80%;
    height: 400px;
    border: 2px solid #000;
    border-radius: 5px;
    margin-top: 90px;
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
    height: 300px;
    margin-top: 25px;
    background: #f2f2f2;
    border: 1px solid #ddd;
    border-radius: 5px;
    div {
        margin: 25px;
    }

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
