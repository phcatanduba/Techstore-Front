import styled from "styled-components";

export default function Title() {
	return (
		<TitleStyle>
			Tech<span>Store</span>
		</TitleStyle>
	);
}

const TitleStyle = styled.h1`
	font-family: "Concert One", cursive;
	color: #ffffff;
	font-weight: 700;
	font-size: 2em;
	span {
		color: #0fcb0e;
	}
`;
