import React, {Component} from 'react';
import store from '../../redux/store';
import constants from '../../redux/constants';

export default class Home extends Component{


	componentDidMount(){

		store.dispatch({type:constants.SAVE_PAGE,page:'Nick Short Web Dev'})

 		this.element =  document.querySelector('.ContentContainer');
		this.element.classList.add('animated', 'bounceInLeft')
		this.element.addEventListener('animationend', () => { 
			
			this.element.classList.remove('animated', 'bounceInLeft')
		})


	}

 	_clickContent(){
 		this.element.classList.add('animated','bounceOutLeft');
 		this.element.addEventListener('animationend', () => { 
			
			this.element.classList.remove('animated', 'bounceOutLeft')
 			this.props.history.push("/Content");
 			store.dispatch({type:constants.SAVE_PAGE,page:'Content'})
 		})
 	}

 	_clickContact(){
 		this.element.classList.add('animated','bounceOutLeft');
 		this.element.addEventListener('animationend', () => { 
			
			this.element.classList.remove('animated', 'bounceOutLeft')
			this.props.history.push("/Contact");
			store.dispatch({type:constants.SAVE_PAGE,page:'Contact'})
		})
 	}

 	_clickAbout(){
 		this.element.classList.add('animated','bounceOutLeft');
 		this.element.addEventListener('animationend', () => { 
			//this._doSomething() 
			this.element.classList.remove('animated', 'bounceOutLeft')
			this.props.history.push("/About");
 			
		})
 		
 	}

 	_addToHome(){
 		
 	}

	render(){
		return(
			<div className="container text-center">
				<div className="ContentContainer">
					
					
					<div className="row text-center">
						<span className="pointer col-12 homeLinks" onClick={this._clickContent.bind(this)}>See my creations</span>
					</div>
					
					<div className="row">
						<span className="pointer col-12 homeLinks" onClick={this._clickAbout.bind(this)}>Learn about me</span>
						
					</div>
					
					<div className="row">
						<span className="pointer col-12 homeLinks" onClick={this._clickContact.bind(this)}>Get in touch</span>
					</div>
					
				</div>
			</div>
		)
	}
}