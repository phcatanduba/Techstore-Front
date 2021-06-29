import styled from 'styled-components';

export default function UserInfos() {
    return (
        <Container>
            <p>INFORMAÇÔES PESSOAIS</p>
        </Container>
    );
}

const Container = styled.div`
    width: 80%;
    height: 400px;
    border: 2px solid #000;
    border-radius: 5px;
    margin-top: 90px;
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
