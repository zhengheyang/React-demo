import React, { Component } from "react";
import logo from "./logo.png";
import "./Header.css";

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentValue: -1
		};
	}
	render() {
		var me = this;
		return (
			<header>
				<div className="img-Box">
					<img src={logo} width="100px" alt="logo" />
				</div>
				<ul className="nav-ul">
					<NavLi
						title="首页"
						className="nav-li"
						value={0}
						currentValue={this.state.currentValue}
						onClick={() => {
							this.setState({
								currentValue: 0
							});
						}}
					/>
					<NavLi
						title="服务"
						className="nav-li"
						value={1}
						currentValue={this.state.currentValue}
						onClick={() => {
							this.setState({
								currentValue: 1
							});
						}}
					/>
					<NavLi
						title="WIKI"
						className="nav-li"
						value={2}
						currentValue={this.state.currentValue}
						onClick={() => {
							this.setState({
								currentValue: 2
							});
						}}
					/>
					<NavLi
						title="联系我们"
						className="nav-li"
						value={3}
						currentValue={this.state.currentValue}
						onClick={() => {
							this.setState({
								currentValue: 3
							});
						}}
					/>
					<NavLi
						title="加入我们"
						className="nav-li"
						value={4}
						currentValue={this.state.currentValue}
						onClick={() => {
							this.setState({
								currentValue: 4
							});
						}}
					/>
					<NavLi
						title="关于"
						className="nav-li"
						value={5}
						currentValue={this.state.currentValue}
						onClick={() => {
							this.setState({
								currentValue: 5
							});
						}}
					/>
					<NavLi
						title="EN"
						className="nav-li"
						value={6}
						currentValue={this.state.currentValue}
						onClick={() => {
							this.setState({
								currentValue: 6
							});
						}}
					/>
				</ul>
			</header>
		);
	}
}

const NavLi = ({ title, onClick, value, currentValue, className }) => {
	return (
		<li
			className="nav-li"
			onClick={onClick}
			style={{
				backgroundColor: value === currentValue ? "#aaa" : "transparent",
				color: value === currentValue ? "#fff" : "#000"
			}}
		>
			{title}
		</li>
	);
};

export default Header;
