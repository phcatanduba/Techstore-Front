import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import CategoryContainer from "../home/CategoryContainer";
import CartButton from "./CartButton";

export default function Product({ product }) {
	const { id, title, price, description, image, categoryName } = product;

	const [quantity, setQuantity] = useState(0);
	const [didOrder, setDidOrder] = useState(false);

	useEffect(() => {
		setQuantity(0);
		setDidOrder(false);
	}, [id]);

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
				<InputQuantity>
					<label htmlFor="quantity">Quantidade:</label>
					<input
						id="quantity"
						type="number"
						value={quantity}
						onChange={(e) =>
							didOrder ? quantity : setQuantity(e.target.value >= 0 ? e.target.value : 0)
						}
					/>
				</InputQuantity>
				<CartButton didOrder={didOrder} setDidOrder={setDidOrder} product={product} quantity={quantity} />
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
	box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	position: relative;

    @media (max-width: 530px) {
		padding-top: 100px;
	}
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

const InputQuantity = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-right: 50px;

	input {
		width: 60px;
		height: 40px;
		text-align: center;
		outline-color: #77da35;
		border: 1px solid #00d833;
		font-size: 14px;
	}

	label {
		margin-bottom: 10px;
	}
`;
