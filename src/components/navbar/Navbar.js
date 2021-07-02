import styled from "styled-components";
import Search from "./Search";
import HamburguerButton from "./HamburguerButton";
import Title from "./Title";
import Cart from "./Cart";

export default function Navbar() {
	return (
		<StyledNavBar>
			<div>
				<HamburguerButton />
				<Title />
				<Cart />
			</div>
			<Search />
		</StyledNavBar>
	);
}

const StyledNavBar = styled.div`
	background-color: #232323;
	width: 100%;
	height: 112px;
	padding: 10px 20px;
	border-top: 2px solid #0fcb0e;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	box-shadow: 0px 2px 3px 1px rgba(0, 0, 0, 0.4);

	& > div {
		width: 100%;
		height: 45px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;
