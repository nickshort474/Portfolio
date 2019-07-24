import React, {Component} from 'react';

import store from '../../redux/store';
import constants from '../../redux/constants';

import FifthFrets from './FifthFrets';
import NewEden from './NewEden';
import CombatDB from './CombatDB';
import AscentDB from './AscentDB';
import WiredAudio from './WiredAudio';

export default class Content extends Component{


	constructor(){
		super();

		this.contentArray = [ <CombatDB />,<WiredAudio />,<FifthFrets />,<AscentDB />,<NewEden />];
		
		this.state = {
			content:this.contentArray[0],
			arrayPlace:0
			
		}
				
	}

	componentDidMount(){

				//save page to store
		store.dispatch({type:constants.SAVE_PAGE, page:'My creations'})

		// get ref to content container
		this.element =  document.querySelector('.ContentContainer');

		//bounce in content from right
 		this._bounceInContent()

 		//set up swipe handler
 		this._setUpSwipe();

 	}

 	_bounceInContent(){
 		//get content element
 		

 		//add bounceINRight class to content
		this.element.classList.add('animated', 'bounceInRight')

		//set up listener for end of animation
		this.element.addEventListener('animationend', () => { 
			
			//remove bounce content class
			this.element.classList.remove('animated', 'bounceInRight')

			//remove listener
        	this.element.removeEventListener('animationend', ()=>{})
		})
 	}

 	_setUpSwipe(){

 		//initialize variables
 		let dist, startX, startY, startTime, elapsedTime;

 		//add listener for touch start
		this.element.addEventListener('touchstart',(e)=>{
			
			//create object from touch event
			let touchobj = e.changedTouches[0]
        	
        	//set variables
        	dist = 0
        	startX = touchobj.pageX
        	startY = touchobj.pageY

        	// record time when finger first makes contact with surface
        	startTime = new Date().getTime() 
        	//e.preventDefault()
		})

		//prevent default for touch move
		this.element.addEventListener('touchmove', (e)=>{
			//e.preventDefault();
		})

		//add listener for touch end
		this.element.addEventListener('touchend',(e)=>{

			//create oject from touch event
			let touchobj = e.changedTouches[0];

			//work out swipe distance covered
			dist = touchobj.pageX - startX;

			//work out duration of swipe
			elapsedTime = new Date().getTime() - startTime;

			//test for acceptable distance and time of swipe
			let swipeRightBool = (elapsedTime <= 200 && dist >= 150 && Math.abs(touchobj.pageY - startY) <= 100);

			//handle swipe
			this._handleSwipe(swipeRightBool);
			//e.preventDefault();
		})
 	}

 	_handleSwipe(bool){

 		//if swipe criteria is met
 		if(bool){
 			
 			//add counce out animation
 			this.element.classList.add('animated', 'bounceOutRight')

 			//add animation end listener
			this.element.addEventListener('animationend', () => { 
				
				//remove bounce class
				this.element.classList.remove('animated', 'bounceOutRight')
				//remove listener
        		this.element.removeEventListener('animationend', ()=>{})

        		//redirect to home page
        		
				this.props.history.push('/Home')

			})
 		}
 	}

 	_rotateContent(e){
 		let direction = e.target.id;
 		

 		let currentPos = this.state.arrayPlace;
 		
		if(direction === "left"){
			if(currentPos === 0){
				currentPos = this.contentArray.length - 1;
			}else{
				currentPos -= 1
			}
		}else{
			if(currentPos === this.contentArray.length - 1){
				currentPos = 0
 			}else{
 				currentPos += 1
 			}
			
		}
		this.setState ({
			content:this.contentArray[currentPos],
			arrayPlace:currentPos
			
		})
		this._animateContent();
 	}

 	
 	_animateContent(){
 		//get content element
 		this.element =  document.querySelector('.sites');

 		//add bounceINRight class to content
		this.element.classList.add('animated', 'fadeIn');

		//set up listener for end of animation
		this.element.addEventListener('animationend', () => { 
			
			//remove bounce content class
			this.element.classList.remove('animated', 'fadeIn')

			//remove listener
        	this.element.removeEventListener('animationend', ()=>{})
		})
 	}


	render(){
		
		

		return(
			<div className="container">
			    <div className="ContentContainer content">
			   		
			   		<div className="row">
			   			<div className="col-1">
			   				<span onClick={this._rotateContent.bind(this)} className="pointer"><img id="left"  src={require('../../Assets/Images/prev.png')} alt="previous content"/></span>
			   			</div>
			   			<div className="col-10 sites">
							{this.state.content}
							
			   			</div>
			   			<div className="col-1">
			   				<span onClick={this._rotateContent.bind(this)} className="pointer"><img id="right"  src={require('../../Assets/Images/next.png')} alt="next content" /></span>
			   			</div>
			   		</div>
			   		
			   		
			    </div>
			</div>	
				
			
		)
	}
}