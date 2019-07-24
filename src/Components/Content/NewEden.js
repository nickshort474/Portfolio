import React, {Component} from 'react';


export default class NewEden extends Component{

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
			<div className="container">
				<a href="http://www.NewEden.co.uk/" id="siteContainer" className="siteLinks" onMouseOver={this._displayInfo.bind(this)} onMouseOut={this._hideInfo.bind(this)} >
					<h5>NewEden Florists</h5>
					<img src={require('../../Assets/Images/NewEdenSmall.jpg')} width="100%"  alt="website snaphot"/>
					<br />
					<br />
					<span id="description">A florists website <br/>Built with HTML, CSS <br />and Bootstrap</span>
				</a>
				
			</div>
		)
	}
}