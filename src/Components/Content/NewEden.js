import React, {Component} from 'react';


export default class NewEden extends Component{


	render(){
		return(
			<div className="container">
				<a href="http://www.NewEden.co.uk/" id="siteContainer" className="siteLinks" >
					<h5>NewEden Florists</h5>
					<img src={require('../../Assets/Images/NewEdenSmall.png')} width="100%"  alt="website snaphot"/>
					<br /><br />
				</a>
				
			</div>
		)
	}
}