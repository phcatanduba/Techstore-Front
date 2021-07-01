import styled from "styled-components";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import CartContext from "../../contexts/CartContext";
import { useContext } from "react";

export default function Cart() {
	const { cart } = useContext(CartContext);
	return (
		<Link to="/checkout">
			<CartContainer>
				<TiShoppingCart />
				{cart?.length > 0 ? <WarnCart /> : null}
			</CartContainer>
		</Link>
	);
}

const CartContainer = styled.div`
	color: #0fcb0e;
	font-size: 2.6em;
	position: relative;
`;
const WarnCart = styled.div`
	width: 15px;
	height: 15px;
	border-radius: 50%;
	background-color: darkgoldenrod;
	position: absolute;
	top: 10%;
	left: 65%;
	border: none;
`;
