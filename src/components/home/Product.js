import { useHistory } from "react-router";
import styled from "styled-components";

export default function Product({ product }) {
	const { id, title, description, image, price } = product;
	const history = useHistory();

	return (
		<ProductContainer onClick={() => history.push(`/product/${id}`)}>
			<ProductImage src={image} alt={title} />
			<ProductInfos>
				{title} <span>R$ {price.toFixed(2)}</span>
			</ProductInfos>
		</ProductContainer>
	);
}

const ProductContainer = styled.div`
	cursor: pointer;
	margin: 10px;
	padding: 5px;
	:hover {
		border: 1px solid #0fcb0e;
	}
`;
const ProductImage = styled.img`
	height: 150px;
	width: 150px;
	object-fit: contain;
	margin-bottom: 5px;
`;
const ProductInfos = styled.p`
	margin-top: 15px;
	font-weight: 700;
	font-size: 0.99em;
	span {
		font-weight: 300;
		color: #ff8100;
		font-size: 0.92em;
	}
`;
