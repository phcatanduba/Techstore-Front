import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoPerson } from "react-icons/io5";
import { useHistory } from "react-router";

export default function SideMenu({ setShowSideMenu }) {
    const history = useHistory();
	return (
		<SideContainer>
			<MenuContainer>
				<SideTop>
					<IoPerson className="icon" />
					<div>
						<p>Bem vindo!</p>
						<p className="user-text" onClick={()=> history.push(`/sign-in`)}>Acessar sua conta</p>
						<p className="user-text" onClick={()=> history.push(`/sign-up`)}>Registre-se</p>
					</div>
					<AiOutlineCloseCircle className="icon" onClick={() => setShowSideMenu(false)} />
				</SideTop>
			</MenuContainer>
			<BackgroundStyle></BackgroundStyle>
		</SideContainer>
	);
}

const SideContainer = styled.div``;

const MenuContainer = styled.div`
	z-index: 12;
	width: 18vw;
	height: 100vh;
	background: #ffffff;
	position: fixed;
	left: 0;
	top: 0;
`;

const SideTop = styled.div`
	color: #5eae0f;
	height: 70px;
	background-color: #232323;
	display: flex;
	align-items: center;
	justify-content: space-between;

	.icon {
		font-size: 1.2em;
		margin: 5px;
	}

	div {
		width: 100%;
		p {
			font-size: 0.5em;
			color: white;
		}
		.user-text {
			color: #5eae0f;
            cursor: pointer;
		}
	}
`;

const BackgroundStyle = styled.div`
	z-index: 11;
	width: 100vw;
	position: fixed;
	height: 100vh;
	opacity: 0.8;
	background-color: #000;
	top: 0;
	left: 0;
`;
