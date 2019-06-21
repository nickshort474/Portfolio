import React, {Component} from 'react';
import store from '../../redux/store';
import constants from '../../redux/constants';

export default class Home extends Component{


	componentDidMount(){

		store.dispatch({type:constants.SAVE_PAGE,page:null})

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
 			
 		})
 	}

 	_clickContact(){
 		this.element.classList.add('animated','bounceOutLeft');
 		this.element.addEventListener('animationend', () => { 
			
			this.element.classList.remove('animated', 'bounceOutLeft')
			this.props.history.push("/Contact");
			
		})
 	}

 	_clickAbout(){
 		this.element.classList.add('animated','bounceOutLeft');
 		this.element.addEventListener('animationend', () => { 
			
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
						<span className="pointer col-12 homeLinks" onClick={this._clickContent.bind(this)}>My creations<img className="homeIcon1" alt="my creation icon" src={require('../../Assets/Images/icons/idea2.png')} /></span>
					</div>
					
					<div className="row">
						<span className="pointer col-12 homeLinks" onClick={this._clickAbout.bind(this)}><img className="homeIcon2" alt="about me icon" src={require('../../Assets/Images/icons/aboutIcon2.png')} />About me </span>
						
					</div>
					
					<div className="row">
						<span className="pointer col-12 homeLinks" onClick={this._clickContact.bind(this)}>Contact me <img className="homeIcon3" alt="email icon" src={require('../../Assets/Images/icons/email2.png')} /></span>
					</div>
					
				</div>
			</div>
		)
	}
}