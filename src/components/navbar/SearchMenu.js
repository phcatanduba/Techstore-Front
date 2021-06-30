import styled from "styled-components";
import ProductOption from "./ProductOption";

export default function SearchMenu({ products }) {
	return (
		<ContainerMenu>
			{products.map((p, i) => (
				<ProductOption product={p} key={i} />
			))}
		</ContainerMenu>
	);
}

const ContainerMenu = styled.div`
	position: absolute;
	z-index: 10;
	width: 80%;
	top: 55px;
	left: 10%;
	height: auto;
	background-color: #fbfbfb;
	box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.2);
	display: flex;
	align-items: center;
	flex-direction: column;

	& div:last-of-type {
		margin-bottom: 0;
	}
`;
