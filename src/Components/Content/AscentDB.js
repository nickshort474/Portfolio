import React, {Component} from 'react';


export default class AscentDB extends Component{

	componentDidMount(){
		this.elem = document.getElementById("description");
		this.elem.classList.add('hidden');
	}

	_displayInfo(){
		this.elem.classList.remove('hidden');
		this.elem.classList.add('visible');
	}

	_hideInfo(){
		this.elem.classList.remove('visible');
		this.elem.classList.add('hidden');
	}

	render(){
		return(
			<div  className="container">
				<a href="http://www.ascentdb.co.uk/#/Styles/" id="siteContainer" className="siteLinks"  onMouseOver={this._displayInfo.bind(this)} onMouseOut={this._hideInfo.bind(this)} >
					<h5>Ascent Database</h5>
					<img src={require('../../Assets/Images/AscentDBSmall.jpg')}  className="siteBox" width="100%"  alt="website snaphot"/>
					
					<br />
					<br />
					<span  id="description">A rock climbing database<br />Built with ReactJS, JSX, CSS, JavaScript,<br /> jQuery, bootstrap and Google Firebase</span>
				</a>
			</div>
		)
	}
}
