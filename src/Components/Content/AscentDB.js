import React, {Component} from 'react';


export default class AscentDB extends Component{

	_componentDidMount(){
 		
 	}

	render(){
		return(
			<div  className="container">
				<a href="http://www.ascentdb.x10host.com/#/Styles/" id="siteContainer" className="siteLinks">
					<h5>Ascent Database</h5>
					<img src={require('../../Assets/Images/AscentDB.png')}  className="siteBox" width="100%"  alt="website snaphot"/>
					<br /><br />
				</a>
			</div>
		)
	}
}
