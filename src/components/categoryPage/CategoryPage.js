import { useParams } from "react-router";
import styled from "styled-components";
import Footer from "../footer/Footer";
import CategoryContainer from "../home/CategoryContainer";
import Navbar from "../navbar/Navbar";

export default function CategoryPage() {
	const { category } = useParams();
	const titleName = category.replaceAll("_", " ");
	return (
		<CategoryPageContainer>
			<Navbar />
			<CategoryContainer categoryName={category} title={"Categoria de " + titleName} />
			<Footer />
		</CategoryPageContainer>
	);
}

const CategoryPageContainer = styled.div`
`;
