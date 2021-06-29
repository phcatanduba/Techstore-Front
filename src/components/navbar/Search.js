import styled from "styled-components";
import { DebounceInput } from "react-debounce-input";
import { useEffect, useState } from "react";
import axios from "axios";
import { HiSearch } from "react-icons/hi";
import SearchMenu from "./SearchMenu";

export default function Search() {
	const [searchValue, setSearchValue] = useState(null);
	const [showMenu, setShowMenu] = useState(false);
	const [products, setProducts] = useState(false);

	useEffect(() => {
		getProducts();
	}, [searchValue]);

	function getProducts() {
		const config = {
			headers: {
				authorization: "Bearer 1",
			},
		};
		axios.get(`http://localhost:4000/products?search=` + searchValue, config)
			.then((r) => setProducts(r.data))
			.catch((e) => console.log(e));
	}

	return (
		<InputContainer>
			<HiSearch className="icon-search" />
			<DebounceInput
				onBlur={() => setShowMenu(false)}
				onFocus={() => setShowMenu(true)}
				minLength={3}
				debounceTimeout={300}
				onChange={(event) => setSearchValue(event.target.value)}
				placeholder="Busque por produtos"
			/>
			{showMenu && searchValue && products.length > 0? <SearchMenu products={products} /> : null}
			<button onClick={() => getProducts()}>BUSCAR</button>
		</InputContainer>
	);
}

const InputContainer = styled.div`
	width: 100%;
	max-height: 36px;
	position: relative;

	input {
		margin: 0 auto;
		width: 100%;
		height: 100%;
		border-radius: 30px;
		border: none;
		outline: none;
		padding: 5px 40px 5px 30px;
	}

	.icon-search {
		color: #0fcb0e;
		font-size: 1.5em;
		position: absolute;
		left: 5px;
	}

	button {
		background-color: #0fcb0e;
		border: none;
		outline: none;
		position: absolute;
		right: 0;
		height: 100%;
		border-radius: 30px;
		width: 8em;
		font-weight: 700;
		cursor: pointer;
	}
`;
