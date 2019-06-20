import React, {Component} from 'react';


export default class CombatDB extends Component{



	render(){
		return(
			<div className="container siteBoxes">
				<a href="http://www.CombatDatabase.co.uk/" className="siteLinks">
					<h5>Combat Database</h5>
					<img src={require('../../Assets/Images/CombatDBSmall.png')} width="100%"  alt="website snaphot"/>
					<br /><br />
				</a>
			</div>
		)
	}
}
