import styled from 'styled-components';

const Header = styled.header`
    background-color: #000;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0px;
    top: 0px;
    color: #fff;
    font-size: 32px;
    font-weight: bold;
    span {
        color: #0fcb0e;
    }

    a {
        font-family: 'Concert One', cursive;
        color: inherit;
    }
`;

export default Header;
