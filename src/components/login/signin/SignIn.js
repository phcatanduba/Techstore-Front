import Title from "../Title";
import LoginInputs from "./LoginInputs";
import Button from "../Button";
import Redirect from "../Redirect";
import Container from "../Container";
import Navbar from "../../navbar/Navbar";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../../contexts/UserContext";

export default function SignIn() {
	const email = useState("");
	const password = useState("");
	const history = useHistory();
	const { setUser } = useContext(UserContext);

	useEffect(() => {
		if (localStorage.getItem("user")) {
			history.push("/");
		}
	}, []);

	function login(email, password) {
		const promise = axios.post("https://back-techstore.herokuapp.com/sign-in", {
			email,
			password,
		});
		promise.then((res) => {
			localStorage.setItem("user", JSON.stringify(res.data));
			setUser(res.data);
			history.push("/");
		});

		promise.catch(({ response }) => {
			if (response.status === 400) {
				alert("USUARIO OU SENHA INCORRETOS");
			}
		});
	}
	return (
		<>
			<Navbar></Navbar>
			<Container>
				<Title title="Entrar" />
				<LoginInputs emailArray={email} passwordArray={password} login={login}></LoginInputs>
				<Button
					onClick={() => {
						login(email[0], password[0]);
					}}
				>
					Entrar
				</Button>
				<Redirect text="Primeira vez? Cadastre-se!" page="/sign-up" />
			</Container>
		</>
	);
}
