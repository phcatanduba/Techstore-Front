import styled from 'styled-components';
import { MdPayment, MdAttachMoney } from 'react-icons/md';
import { useState } from 'react';

export default function Payment() {
    const [option, setOption] = useState('credit');
    return (
        <Container>
            <p>METÓDOS DE PAGAMENTO</p>
            <PaymentBox>
                <Options>
                    <button
                        style={
                            option === 'credit'
                                ? { border: '1px solid green' }
                                : { border: '1px solid #000' }
                        }
                        onClick={() => setOption('credit')}
                    >
                        Cartão de Crédito
                        <MdPayment style={{ fontSize: '50px' }} />
                    </button>
                    <button
                        style={
                            option === 'pix'
                                ? { border: '1px solid green' }
                                : { border: '1px solid #000' }
                        }
                        onClick={() => setOption('pix')}
                    >
                        PIX
                        <MdAttachMoney style={{ fontSize: '30px' }} />
                    </button>
                </Options>
                {option === 'credit' ? (
                    <div className="credit">
                        <span>Informações de pagamento</span>
                        <input placeholder="Nome no cartão" required></input>
                        <input placeholder="Número do cartão" required></input>
                        <div className="boxs">
                            <input placeholder="MM/YY" required></input>
                            <input placeholder="CVC" required></input>
                        </div>
                    </div>
                ) : (
                    <div className="pix">
                        <span>CHAVE PIX: 77739138605</span>
                    </div>
                )}
            </PaymentBox>
        </Container>
    );
}

const Container = styled.div`
    width: 80%;
    min-height: 400px;
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

    .pix {
        width: 100%;
        margin-top: 20px;
        text-align: center;
        font-weight: bold;
    }

    .credit {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
        input {
            width: 70%;
            height: 40px;
            margin: 5px;
        }
    }
    .boxs {
        display: flex;
        justify-content: center;
        width: 100%;
        input {
            width: 33%;
            margin: 0px;
        }
    }
`;

const Options = styled.div`
    display: flex;
    justify-content: space-between;
    div {
        margin: 25px;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        width: 45%;
        border-radius: 5px;
    }
`;

const PaymentBox = styled.div`
    width: 90%;
    height: 300px;
    margin-top: 25px;
    background: #f2f2f2;
    border: 1px solid #ddd;
    border-radius: 5px;
`;
