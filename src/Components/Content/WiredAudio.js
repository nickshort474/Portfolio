import React, {Component} from 'react';


export default class WiredAudio extends Component{

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
				<a href="http://wiredaudiorecording.atwebpages.com/" id="siteContainer" className="siteLinks" onMouseOver={this._displayInfo.bind(this)} onMouseOut={this._hideInfo.bind(this)}>
					<h5>Wired Audio Recording</h5>
					<img src={require('../../Assets/Images/WiredAudioSmall.jpg')}  className="siteBox" width="100%"  alt="website snaphot"/>
					
					<br />
					<br />
					<span  id="description">A sound hire and audio enginnering website <br />Built with ReactJS, JSX, <br />Boostrap and CSS</span>
				</a>
			</div>
		)
	}
}
