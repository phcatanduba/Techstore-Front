import styled from "styled-components";
import Navbar from "../navbar/Navbar";

export default function Home() {
	return (
		<ContainerHome>
			<Navbar />
		</ContainerHome>
	);
}

const ContainerHome = styled.div`
	width: 100vw;
	display: flex;
	flex-direction: column;
`;
