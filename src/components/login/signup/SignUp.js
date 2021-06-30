import Container from '../Container';
import Title from '../Title';
import Button from '../Button';
import Redirect from '../Redirect';
import Navbar from '../../navbar/Navbar';
import RegisterInputs from './RegisterInputs';
import { useState, useEffect } from 'react';
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

    useEffect(() => {
		if (localStorage.getItem("user")) {
			history.push("/");
		}
	}, []);

    function checkPassword() {
        if (password === confirmPass) {
            return true;
        } else {
            return false;
        }
    }

    function registerRequest(name, email, password) {
        if (checkPassword()) {
            const promise = axios.post('http://localhost:4000/sign-up', {
                name,
                email,
                password,
                cpf,
            });
            promise.then((res) => {
                history.push('/sign-in');
            });
            promise.catch((error) => {
                console.log(error.response);
                if (error.response.status === 400) {
                    alert('ERRO AO CADASTRAR, CAMPOS INCORRETOS');
                } else if (error.response.status === 409) {
                    alert('E-MAIL OU CPF JA CADASTRADOS');
                }
            });
        } else {
            alert('SENHAS NAO COINCIDEM');
        }
    }
    return (
        <>
            <Navbar />
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
                <Redirect
                    text="Já tem uma conta? Entre agora!"
                    page="/sign-in"
                />
            </Container>
        </>
    );
}
