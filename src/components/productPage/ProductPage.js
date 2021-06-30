import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Navbar from "../navbar/Navbar";
import Product from "./Product";

export default function ProductPage() {
	const { id } = useParams();
	const [product, setProduct] = useState(false);

	useEffect(() => {
		const config = {
			headers: {
				authorization: "Bearer 1",
			},
		};
		axios.get(`http://localhost:4000/product/` + id, config)
			.catch((e) => console.log(e))
			.then((r) => setProduct(r.data));
	}, [id]);

	return (
		<PageContainer>
			<Navbar />
			{product ? <Product product={product} /> : <p>Loading...</p>}
		</PageContainer>
	);
}

const PageContainer = styled.div`
	width: 100vw;
`;
