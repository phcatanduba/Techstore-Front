import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import UserContext from '../../contexts/UserContext';

export default function UserInfos({email, setEmail}) {
    const { user, setUser } = useContext(UserContext);
    useEffect(() => {
        if (localStorage.getItem('user')) {
            setUser(JSON.parse(localStorage.getItem('user')));
        }
    }, []);

    return (
        <Container>
            <p>INFORMAÇÕES PESSOAIS</p>
            <Infos>
                <div>
                    <label>Nome:</label>
                    <input value={user?.name || 'loading'} readOnly></input>
                </div>
                <div>
                    <label>CPF:</label>
                    <input value={user?.cpf || 'loading'} readOnly></input>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" value={email} onChange={e=> setEmail(e.target.value)} placeholder="Seu email"></input>
                </div>
                <div>
                    <label>Telefone:</label>
                    <input
                        type="number"
                        placeholder={'xx-xxxxxxxx'}
                        required
                    ></input>
                </div>
            </Infos>
        </Container>
    );
}

const Container = styled.div`
    width: 80%;
    height: 440px;
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
    height: 340px;
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
