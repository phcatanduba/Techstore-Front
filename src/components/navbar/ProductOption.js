import { useHistory } from "react-router";
import styled from "styled-components";

export default function ProductOption({ product }) {
	const { id, title, image, price } = product;
	const history = useHistory();
	return (
		<ContainerProduct onClick={() => history.push(`/product/${id}`)}>
			<ProductImg src={image} alt="product" />
			<ProductTitle> {title} </ProductTitle>
			<ProductPrice> R$ {price.toFixed(2)} </ProductPrice>
		</ContainerProduct>
	);
}

const ContainerProduct = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 5px;
	border: 1px solid black;
	padding: 10px;
	cursor: pointer;

	:hover {
		background-color: #c4c4c4;
	}
`;

const ProductImg = styled.img`
	height: 100%;
	object-fit: contain;
`;

const ProductTitle = styled.p`
	font-weight: 700;
`;

const ProductPrice = styled.p``;
