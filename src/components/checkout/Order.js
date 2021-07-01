import styled from "styled-components";
import { MdShoppingCart } from "react-icons/md";
import { useContext, useEffect } from "react";
import CartContext from "../../contexts/CartContext";

export default function Order() {
	function currencyBRL(value) {
		const options = { style: "currency", currency: "BRL" };
		return value.toLocaleString("pt-BR", options);
	}
	const { cart, setCart } = useContext(CartContext);

	let total = 0;
	return (
		<Container>
			<p>
				<MdShoppingCart style={{ marginRight: "15px" }} />
				RESUMO DO PEDIDO
			</p>
			<Infos>
				{cart ? cart.map((p) => {
					total += p.price * p.quantity;
					return (
						<Product key={p.id}>
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
						</Product>
					);
				}): null}
				<Total>TOTAL: {currencyBRL(total)}</Total>
			</Infos>
		</Container>
	);
}

const Container = styled.div`
	width: 80%;
	height: 100%;
	border: 2px solid #000;
	border-radius: 5px;
	margin-top: 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	p {
		width: 100%;
		height: 50px;
		background-color: #000;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: bold;
	}
`;

const Infos = styled.div`
	width: 90%;
	height: 90%;
	margin: 25px 0px;
	background: #f2f2f2;
	border: 1px solid #ddd;
	border-radius: 5px;

	label {
		font-size: 22px;
		font-weight: bold;
	}

	input {
		background-color: #f5f5f5;
		border: 1px solid #ddd;
		border-radius: 5px;
		height: 32px;
		padding-right: 5px;
		font-size: 18px;
		width: 100%;
	}
`;

const Product = styled.div`
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

const Total = styled.div`
	font-weight: bold;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 25px 0px;
`;
