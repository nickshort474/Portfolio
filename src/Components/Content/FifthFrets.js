import React, {Component} from 'react';


export default class FifthFrets extends Component{


	render(){
		return(
			<div className="container">
				<a href="http://www.5thfrets.co.uk/" className="siteLinks">
					<h5>5thFrets guitar repairs</h5>
					<img src={require('../../Assets/Images/5thfretsSmall.jpg')} width="100%"  alt="website snaphot"/>
					{this.props.img}
					<br /><br />
					<span className="small">A guitar repair website, built with HTML, CSS, Bootstrap and PHP</span>
					
				</a>
			</div>
		)
	}
}

