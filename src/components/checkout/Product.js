import { useEffect } from "react";
import styled from "styled-components";

export default function Product({ p, currencyBRL }) {
	return (
		<ProductContainer key={p.id}>
			<div>
				<span className="product">{p.name}</span>
				<img src={p.image} alt="product"></img>
			</div>
			<div>
				<label>Quantidade:</label>
				<span>{p.quantity}</span>
			</div>
			<div>
				<label>Preço:</label>
				<span>{currencyBRL(p.price)}</span>
			</div>
		</ProductContainer>
	);
}

const ProductContainer = styled.div`
	border-bottom: 1px solid green;
	img {
		width: 60px;
	}
	div {
		display: flex;
		align-items: center;
		width: 60%;
		margin: 25px;
	}

	.product {
		font-size: 22px;
		font-weight: bold;
	}

	div:first-child {
		justify-content: space-between;
	}

	label {
		margin-right: 5px;
	}
`;
