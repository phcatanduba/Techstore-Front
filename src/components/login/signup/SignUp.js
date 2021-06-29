import Container from '../Container';
import Title from '../Title';
import Button from '../Button';
import Redirect from '../Redirect';
import RegisterInputs from './RegisterInputs';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [cpf, setCpf] = useState('');
    const infos = [name, email, password, confirmPass, cpf];
    const setInfos = [setName, setEmail, setPassword, setConfirmPass, setCpf];
    let history = useHistory();

    function checkPassword(password, confirmPass) {
        if (password === confirmPass) {
            return true;
        } else {
            return false;
        }
    }

    function registerRequest(name, email, password) {
        if (checkPassword) {
            const promise = axios.post('http://localhost:4000/sign-up', {
                name,
                email,
                password,
                cpf,
            });
            promise.then((res) => {
                history.push('/sign-in');
            });
        } else {
            alert('SENHAS NAO COINCIDEM');
        }
    }
    return (
        <Container>
            <Title title="Cadastro" />
            <RegisterInputs
                infos={infos}
                setInfos={setInfos}
                signup={registerRequest}
            />
            <Button
                onClick={() => {
                    if (name && email && password) {
                        registerRequest(name, email, password);
                    } else {
                        alert('PREENCHA OS CAMPOS CORRETAMENTE');
                    }
                }}
            >
                Cadastrar
            </Button>
            <Redirect text="Já tem uma conta? Entre agora!" page="/sign-in" />
        </Container>
    );
}
