import React, {Component} from 'react';


export default class PeopleFinder extends Component{

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
				<a href="https://peoplefinder.world" id="siteContainer" className="siteLinks"  onMouseOver={this._displayInfo.bind(this)} onMouseOut={this._hideInfo.bind(this)} >
					<h5>PeopleFinder</h5>
					<img src={require('../../Assets/Images/PeopleFinder.png')}  className="siteBox" width="100%"  alt="website snaphot"/>
					
					<br />
					<br />
					<span  id="description">A hobby connections app<br />Built with CodeIgniter, PHP, MySQL<br />
					 HTML, CSS and Javascript </span>
				</a>
			</div>
		)
	}
}