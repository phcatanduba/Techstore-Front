import styled from "styled-components";
import { TiShoppingCart } from "react-icons/ti";
import {Link} from "react-router-dom";

export default function Cart() {
	return (
		<Link to="/checkout">
			<CartContainer>
				<TiShoppingCart />
			</CartContainer>
		</Link>
	);
}

const CartContainer = styled.div`
	color: #0fcb0e;
	font-size: 2.6em;
`;
