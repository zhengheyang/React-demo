import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: "",
			userCompany: "",
			userMail: "",
			userOption: "广告商",
			userComment: ""
		};
	}

	_submitClick() {
		if (this.state.userName === "") {
			alert("姓名不能为空！");
			return;
		}
		if (this.state.userMail === "") {
			alert("邮箱不能为空！");
			return;
		}
		if (this.state.userCompany === "") {
			alert("公司名不能为空！");
			return;
		}
		if (this.state.userComment === "") {
			alert("留言不能为空！");
			return;
		}
		alert(
			`
            姓名：${this.state.userName} 
            公司：${this.state.userCompany} 
            邮箱：${this.state.userMail} 
            身份：${this.state.userOption} 
            留言：${this.state.userComment} 
             `
		);
	}

	_nameOnChange(e) {
		this.setState({ userName: e.target.value });
	}
	_companyOnChange(e) {
		this.setState({ userCompany: e.target.value });
	}
	_mailOnChange(e) {
		this.setState({ userMail: e.target.value });
	}
	_providerChange(e) {
		this.setState({ userOption: e.target.value });
	}
	_commentChange(e) {
		this.setState({ userComment: e.target.value });
	}
	render() {
		return (
			<div className="form-box">
				<h2>联系我们</h2>
				<div className="big-flex-box">
					<div className="sm-flex-box">
						<div>
							<label>姓名</label>
							<input type="text" onChange={this._nameOnChange.bind(this)} />
						</div>
						<div>
							<label>公司</label>
							<input type="text" onChange={this._companyOnChange.bind(this)} />
						</div>
					</div>
					<div className="sm-flex-box">
						<div>
							<label>邮箱</label>
							<input type="text" onChange={this._mailOnChange.bind(this)} />
						</div>
						<div style={{ margin: "0px 20px" }}>
							<label>我是一名</label>
							<select onChange={this._providerChange.bind(this)}>
								<option>广告商</option>
								<option>供应商</option>
							</select>
						</div>
					</div>
				</div>
				<div className="text-area">
					<label>您的留言</label>
					<textarea onChange={this._commentChange.bind(this)} />
				</div>
				<button onClick={this._submitClick.bind(this)}>发送</button>
				{/*<img src={require('./bg_contect.jpg')} alt="不用import直接用require写图片路径"/>*/}
			</div>
		);
	}
}

export default Form;
