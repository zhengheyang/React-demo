import React, { Component } from "react";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Main from "./Main/Main";
import Form from "./Form/Form";
import Footer from "./Footer/Footer";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Banner />
				<Main />
				<Form />
				<Footer />
			</div>
		);
	}
}

export default App;
