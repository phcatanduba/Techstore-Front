import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import SideMenu from "../sidemenu/SideMenu";

export default function Search() {
	const [showSideMenu, setShowSideMenu] = useState(false);
	return (
		<HambContainer>
			<AiOutlineMenu onClick={() => setShowSideMenu(true)} />
			{showSideMenu ? <SideMenu setShowSideMenu={setShowSideMenu} /> : null}
		</HambContainer>
	);
}

const HambContainer = styled.div`
	cursor: pointer;
	color: #0fcb0e;
	font-size: 2.6em;
`;
