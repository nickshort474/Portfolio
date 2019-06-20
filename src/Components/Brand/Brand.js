import React, {Component} from 'react';


export default class Brand extends Component{


	render(){
		return(
			<div className="container text-center">
				{/*<h2 className="brand">Nick Short Web Dev</h2>*/}
				<img className="brand" src={require("../../Assets/Images/Brand.png")}	alt="my brand"/>
				<hr className="horizontalRule" />
			</div>
		)
	}
}