import React, {Component} from 'react';


export default class CombatDB extends Component{

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
				<a href="http://www.CombatDatabase.co.uk/" id="siteContainer" className="siteLinks"  onMouseOver={this._displayInfo.bind(this)} onMouseOut={this._hideInfo.bind(this)}>
					<h5>Combat DB</h5>
					<img src={require('../../Assets/Images/CombatDBSmall.jpg')}  className="siteBox" width="100%"  alt="website snaphot"/>
					<br />
					<br />
					
					
				</a>
				<span  id="description">A martial arts web app<br />Built with ReactJS, JSX, CSS, JavaScript, <br />Bootstrap, jQuery, Google Firebase and PHP</span>
			</div>
		)
	}
}
