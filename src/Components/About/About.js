import React, {Component} from 'react';
import store from '../../redux/store';
import constants from '../../redux/constants';

export default class About extends Component{

		componentDidMount(){

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
        	e.preventDefault()
		})

		//prevent default for touch move
		this.element.addEventListener('touchmove', (e)=>{
			e.preventDefault();
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
			e.preventDefault();
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
        		store.dispatch({type:constants.SAVE_PAGE,page:'Home'})
				this.props.history.push('/Home')

			})
 		}
 	}


	render(){
		return(
			<div className="container wrap">
				<div className="text-center ContentContainer">
					About
				</div>
			</div>
		)
	}
}