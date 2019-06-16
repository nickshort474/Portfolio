import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import $ from 'jquery';

class TopNav extends Component{

	componentDidMount(){
		/*this.page = ".Home"
		const element =  document.querySelector(this.page)*/
	}

	_animateHome(e){
		
		//get reference to previously animated page if not null
		// then bounce back in previously animated out object
		
		if(this.page != undefined){
			const element =  document.querySelector(this.page)
			element.classList.remove('animated', 'bounceOutLeft')
			element.classList.add('animated', 'bounceInLeft')
		}
		
		this.page = '.Home'
		this.props.history.push('/Home');

		
		
		const element2 =  document.querySelector('.Home')
		element2.classList.add('animated', 'bounceOutLeft')

		
	}

	_animateContact(e){
		
		//get reference to previously animated page if not null
		// then bounce back in previously animated out object
		if(this.page != undefined){
			
			const element =  document.querySelector(this.page)
			element.classList.remove('animated', 'bounceOutLeft')
			element.classList.add('animated', 'bounceInLeft')
		}

		this.page = '.Contact';
		this.props.history.push('/Contact');
		
		const element2 =  document.querySelector('.Contact')
		element2.classList.add('animated', 'bounceOutLeft')
	}


	_animateContent(e){
		
		//get reference to previously animated page if not null
		// then bounce back in previously animated out object
		
		if(this.page != undefined){
			const element =  document.querySelector(this.page)
			element.classList.remove('animated', 'bounceOutLeft')
			element.classList.add('animated', 'bounceInLeft')
		}

		this.page = '.Content'
		this.props.history.push('/Content');

		const element2 =  document.querySelector('.Content')
		element2.classList.add('animated', 'bounceOutLeft')
		
	}

	



	render(){
		return(
			<div className="container">
				<div className="pointer navBar">
					<p className="Home"  id="Home" onClick={this._animateHome.bind(this)}>Home</p>
					<p className="Content" id="Content" onClick={this._animateContent.bind(this)}>Content</p>
					<p className="Contact" id="Contact" onClick={this._animateContact.bind(this)}>Contact</p>
				</div>
			</div>
			
		)
	}
}

export default withRouter(TopNav)