import styled from "styled-components";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import CategoryContainer from "./CategoryContainer";

export default function Home() {

	return (
		<ContainerHome>
			<Navbar />
			<CategoryContainer categoryName="mouse" title="Mouses" />
			<CategoryContainer categoryName="teclado" title="Teclados" />
			<CategoryContainer categoryName="memoria_ram" title="Memórias" />
			<Footer />
		</ContainerHome>
	);
}

const ContainerHome = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;
