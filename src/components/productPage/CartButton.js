import { useContext, useState } from "react";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";
import CartContext from "../../contexts/CartContext";

export default function CartButton({ quantity, product, didOrder, setDidOrder }) {
	const { user } = useContext(UserContext);
	const { cart, setCart } = useContext(CartContext);
	const { id, title, price, description, image, categoryName } = product;

	function addToCart() {
		const newOrder = {
			name: title,
			id,
			image,
			price,
			quantity,
		};
		setCart([...cart, newOrder]);
		setDidOrder(true);
	}

	return (
		<CartButtonContainer>
			<button
				onClick={() => {
					if (quantity > 0 && user && !didOrder) addToCart();
				}}
			>
				{didOrder
					? `${quantity} items(s) adicionado(s) ao carrinho!`
					: user
					? quantity > 0
						? `Adicionar ${quantity} item(s) ao carrinho`
						: "Adicionar ao carrinho!"
					: "Acesse sua conta :)"}
			</button>
		</CartButtonContainer>
	);
}

const CartButtonContainer = styled.div`
	position: absolute;
	top: 20px;
	right: 30px;
	display: flex;
	align-items: center;
	button {
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
	}
`;
