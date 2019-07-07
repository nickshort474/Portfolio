import React, {Component} from 'react';


export default class WiredAudio extends Component{

	_componentDidMount(){
 		
 	}

	render(){
		return(
			<div  className="container">
				<a href="http://wiredaudiorecording.atwebpages.com/" id="siteContainer" className="siteLinks">
					<h5>Wired Audio Recording</h5>
					<img src={require('../../Assets/Images/WiredAudioSmall.png')}  className="siteBox" width="100%"  alt="website snaphot"/>
					<br />
					<p>Currently Under development</p>
					<br />
				</a>
			</div>
		)
	}
}
