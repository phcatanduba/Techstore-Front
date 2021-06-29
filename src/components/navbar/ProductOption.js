import styled from "styled-components";

export default function ProductOption({ product }) {
	const { title, image, price } = product;
	return (
		<ContainerProduct>
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
`;

const ProductImg = styled.img`
	height: 100%;
	object-fit: contain;
`;

const ProductTitle = styled.p`
	font-weight: 700;
`;

const ProductPrice = styled.p``;
