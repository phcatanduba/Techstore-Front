import styled from 'styled-components';

export default function LoginInputs({ emailArray, passwordArray, login }) {
    const [email, setEmail] = emailArray;
    const [password, setPassword] = passwordArray;
    return (
        <Inputs
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    login(email, password);
                }
            }}
        >
            <input
                placeholder="E-mail"
                autoComplete="username"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            ></input>
            <input
                type="password"
                placeholder="Senha"
                autoComplete="new-password"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            ></input>
        </Inputs>
    );
}

const Inputs = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    input {
        margin-bottom: 13px;
        width: 89%;
        height: 58px;
        border-radius: 5px;
        border: 1px solid #000;
        font-size: 20px;
        background-color: #eeeeee;
    }
    input::placeholder {
        font-size: 20px;
        padding-left: 10px;
        color: #000;
    }
`;
