import React, {Component} from 'react';


export default class FifthFrets extends Component{

	

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
				<a href="http://www.5thfrets.co.uk/" className="siteLinks"  onMouseOver={this._displayInfo.bind(this)} onMouseOut={this._hideInfo.bind(this)} >
					<h5>5thFrets guitar repairs</h5>
					<img src={require('../../Assets/Images/5thfretsSmall.jpg')} width="100%"  alt="website snaphot"/>
					{this.props.img}
					<br /><br />
					
					
				</a>
				<span id="description">A guitar repair website <br />Built with HTML, CSS <br />Bootstrap and PHP</span>
			</div>
		)
	}
}

