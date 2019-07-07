import React, {Component} from 'react';


export default class AscentDB extends Component{

	_componentDidMount(){
 		
 	}

	render(){
		return(
			<div  className="container">
				<a href="http://www.ascentdb.co.uk/#/Styles/" id="siteContainer" className="siteLinks">
					<h5>Ascent Database</h5>
					<img src={require('../../Assets/Images/AscentDBSmall.png')}  className="siteBox" width="100%"  alt="website snaphot"/>
					<br /><br />
				</a>
			</div>
		)
	}
}
