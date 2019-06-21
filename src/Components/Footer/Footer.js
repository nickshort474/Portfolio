import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends Component{


	render(){
		return(
			<div className="text-center footer">
				<div className="">
					<span>Nick Short Web Dev &copy;</span>
					<span ><Link to="/Content" className="footerLinks">Creations</Link></span>
					<span><Link to="/About" className="footerLinks">About</Link></span>
					<span><Link to="/Contact" className="footerLinks">Contact</Link></span>
				</div>
			</div>
		)
	}
}