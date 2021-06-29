import styled from 'styled-components';

export default function Title({ title }) {
    const message =
        title === 'Cadastro'
            ? 'Por favor, preencha os campos abaixo para criar sua conta na loja'
            : 'Entre com seu email e senha para continuar';
    return (
        <Container>
            <Logo>{title}</Logo>
            <Subtitle>{message}</Subtitle>
        </Container>
    );
}

const Container = styled.div`
    margin-bottom: 30px;
    width: 90%;
`;

const Logo = styled.h1`
    font-size: 32px;
    color: #000;
    margin-bottom: 30px;
`;

const Subtitle = styled.p`
    font-size: 18px;
`;
