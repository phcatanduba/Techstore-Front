import styled from "styled-components";
import CategoryContainer from "../home/CategoryContainer";

export default function Product({ product }) {
	const { id, title, price, description, image, categoryName } = product;

	return (
		<>
			<ProductContainer>
				<ProductTitle>
					<p>{title}</p>
				</ProductTitle>
				<ProductDescription>
					<p>{description}</p>
				</ProductDescription>
				<ProductImage src={image} alt={title} />
				<ProductPrice>
					<span>
						De: <span className="oldPrice">R$ {(price + 100).toFixed(2)}</span>
					</span>
					<br></br>
					<span>Por: </span>
					<span className="actualPrice">R$ {price.toFixed(2)}</span>
				</ProductPrice>
				<CartButton>Adicionar ao carrinho!</CartButton>
			</ProductContainer>
			<CategoryContainer categoryName={categoryName} title="Outros dessa categoria" />
		</>
	);
}

const ProductContainer = styled.div`
	width: 90%;
	height: auto;
	background-color: #ffffff;
	padding: 30px;
	margin: 15px auto;
	box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.2);
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	position: relative;
`;

const ProductDescription = styled.div`
	width: 100%;
	margin: 20px auto;
	p {
		font-size: 0.95em;
	}
`;
const ProductImage = styled.img`
	height: 200px;
	width: 200px;
	object-fit: contain;
	align-self: center;
`;
const ProductTitle = styled.div`
	p {
		font-weight: 700;
		font-size: 1.5em;
	}
`;

const ProductPrice = styled.div`
	margin: 30px auto 0 auto;
	font-weight: 300;
	font-size: 1.5em;
	.oldPrice {
		color: #df4d3e;
		text-decoration: line-through;
	}
	.actualPrice {
		color: #0fcb0e;
	}
`;

const CartButton = styled.button`
	position: absolute;
	top: 20px;
	right: 30px;
	border: 1px solid #00d833;
	outline: none;
	background: none;
	color: #00d833;
	padding: 15px 60px;
	cursor: pointer;
	font-size: 1em;

	:hover {
		background-color: #77da35;
		color: #ffffff;
		text-decoration: underline;
	}
`;
