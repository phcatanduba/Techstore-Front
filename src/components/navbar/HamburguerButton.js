import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";

export default function Search() {
	return (
		<HambContainer>
			<AiOutlineMenu />
		</HambContainer>
	);
}

const HambContainer = styled.div`
	color: #0fcb0e;
	font-size: 2em;
`;
