import React, {Component} from 'react';


export default class FifthFrets extends Component{


	render(){
		return(
			<div className="container">
				<a href="http://www.5thfrets.co.uk/" className="siteLinks">
					<h5>5thFrets guitar repair</h5>
					<img src={require('../../Assets/Images/5thfretsSmall.png')} width="100%"  alt="website snaphot"/>
					<br /><br />
				</a>
			</div>
		)
	}
}

