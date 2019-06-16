import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends Component{

	render(){
		return(
			<div>
				<Link to="/Home">Home</Link>
				<Link to="/Contact">Contact</Link>
			</div>
		)
	}
}