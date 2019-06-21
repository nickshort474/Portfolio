import React, {Component} from 'react';


export default class CombatDB extends Component{

	_componentDidMount(){
 		
 	}

	render(){
		return(
			<div  className="container">
				<a href="http://www.CombatDatabase.co.uk/" id="siteContainer" className="siteLinks">
					<h5>Combat DB</h5>
					<img src={require('../../Assets/Images/CombatDBSmall.png')}  className="siteBox" width="100%"  alt="website snaphot"/>
					<br /><br />
				</a>
			</div>
		)
	}
}
