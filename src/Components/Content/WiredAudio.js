import React, {Component} from 'react';


export default class WiredAudio extends Component{

	_componentDidMount(){
 		
 	}

	render(){
		return(
			<div  className="container">
				<a href="http://wiredaudiorecording.atwebpages.com/" id="siteContainer" className="siteLinks">
					<h5>Wired Audio Recording</h5>
					<img src={require('../../Assets/Images/WiredAudioSmall.jpg')}  className="siteBox" width="100%"  alt="website snaphot"/>
					
					<br />
					<br />
					<span class="small">A sound hire and audio enginnering website built with ReactJS, JSX, Boostrap and CSS</span>
				</a>
			</div>
		)
	}
}
