import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Product from "./Product";

export default function ProductPage() {
	const { id } = useParams();
	const [product, setProduct] = useState(false);

	useEffect(() => {
		axios.get(`https://back-techstore.herokuapp.com/product/` + id)
			.catch((e) => console.log(e))
			.then((r) => setProduct(r.data));
	}, [id]);

	return (
		<PageContainer>
			<Navbar />
			{product ? <Product product={product} /> : <p>Loading...</p>}
			<Footer />
		</PageContainer>
	);
}

const PageContainer = styled.div`
	width: 100%;
`;
