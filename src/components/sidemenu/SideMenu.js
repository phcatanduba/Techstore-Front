import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoPerson } from "react-icons/io5";
import { useHistory } from "react-router";

import { GiMouse as MouseIcon, GiProcessor as ProcessorIcon } from "react-icons/gi";
import { FaKeyboard as KeyboardIcon, FaMemory as MemoryIcon } from "react-icons/fa";
import { IoRocket as GpuIcon } from "react-icons/io5";
import { HiFastForward as SsdIcon } from "react-icons/hi";

import CategoryButtonMenu from "./CategoryButtonMenu";
import SideFooter from "./SideFooter";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function SideMenu({ setShowSideMenu }) {
	const history = useHistory();
	const { user, setUser } = useContext(UserContext);

	function logout() {
		history.push(`/sign-in`);
		localStorage.removeItem("user");
		setUser(null);
	}

	return (
		<SideContainer>
			<MenuContainer>
				<SideTop>
					<IoPerson className="icon" />
					<div>
						{user ? (
							<>
								<p>Olá {user.name}</p>
								<p className="user-text" onClick={() => logout()}>
									Sair
								</p>
							</>
						) : (
							<>
								<p>Bem vindo!</p>
								<p className="user-text" onClick={() => history.push(`/sign-in`)}>
									Acessar sua conta
								</p>
								<p className="user-text" onClick={() => history.push(`/sign-up`)}>
									Registre-se
								</p>
							</>
						)}
					</div>
					<AiOutlineCloseCircle className="icon" onClick={() => setShowSideMenu(false)} />
				</SideTop>
				<SideContent>
					<CategoryButtonMenu title="Mouses" to="/products/mouse">
						<MouseIcon />
					</CategoryButtonMenu>
					<CategoryButtonMenu title="Teclados" to="/products/teclado">
						<KeyboardIcon />
					</CategoryButtonMenu>
					<CategoryButtonMenu title="Memórias ram" to="/products/memoria_ram">
						<MemoryIcon />
					</CategoryButtonMenu>
					<CategoryButtonMenu title="Processadores" to="/products/placa_de_video">
						<ProcessorIcon />
					</CategoryButtonMenu>
					<CategoryButtonMenu title="Placas de vídeos" to="/products/processador">
						<GpuIcon />
					</CategoryButtonMenu>
					<CategoryButtonMenu title="SSD's" to="/products/ssd">
						<SsdIcon />
					</CategoryButtonMenu>
				</SideContent>
				<SideFooter />
			</MenuContainer>
			<BackgroundStyle onClick={() => setShowSideMenu(false)}></BackgroundStyle>
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

const SideContent = styled.div``;

const BackgroundStyle = styled.div`
	z-index: 11;
	width: 100%;
	position: fixed;
	height: 100vh;
	opacity: 0.8;
	background-color: #000;
	top: 0;
	left: 0;
`;
