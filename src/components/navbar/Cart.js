import styled from "styled-components";
import { TiShoppingCart } from "react-icons/ti";

export default function Cart() {
	return (
		<CartContainer>
			<TiShoppingCart />
		</CartContainer>
	);
}

const CartContainer = styled.div`
	color: #0fcb0e;
	font-size: 2.6em;
`;
