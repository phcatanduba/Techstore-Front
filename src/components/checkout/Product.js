import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Product({ p, currencyBRL, setQuantityChange, quantityChange, setCart, cart }) {
	const [newQuantity, setNewQuantity] = useState(p.quantity);

	function alterQuantity(e, op) {
		e.preventDefault();
		if (op === "+") {
			setNewQuantity(newQuantity + 1);
			p.quantity = newQuantity + 1;
		}
		if (op === "-") {
			if (newQuantity > 1) {
				setNewQuantity(newQuantity - 1);
				p.quantity = newQuantity - 1;
			}
		}
		if (op === "-" && newQuantity === 1 && window.confirm("Realmente deseja excluir esse produto?")) {
			setCart(cart.filter((item) => item !== p));
		}
		setQuantityChange(!quantityChange);
	}
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
			<QuantityAlterContainer>
				<button type="disable" onClick={(e) => alterQuantity(e, "+")}>
					+
				</button>
				<div>{newQuantity}</div>
				<button onClick={(e) => alterQuantity(e, "-")}>-</button>
			</QuantityAlterContainer>
		</ProductContainer>
	);
}

const ProductContainer = styled.div`
	border-bottom: 1px solid green;
	display: flex;
	align-items: center;
	justify-content: space-between;

	img {
		width: 60px;
		border-radius: 50%;
		margin-left: 10px;
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

const QuantityAlterContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	max-width: 150px;

	div {
		color: #000000;
		font-weight: 700;
		font-size: 22px;
		background: greenyellow;
		width: 35px;
		height: 35px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	button {
		border: 2px solid black;
		border-radius: 50%;
		padding: 5px;
		width: 20px;
		height: 20px;
		outline: none;
		font-size: 20px;
		font-weight: 700;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
`;
