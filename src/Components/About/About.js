import React, {Component} from 'react';
import store from '../../redux/store';
import constants from '../../redux/constants';

export default class About extends Component{

	componentDidMount(){

		//save page to store
		store.dispatch({type:constants.SAVE_PAGE,page:'About me'})

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
        		this.props.history.push('/Home')

			})
 		}
 	}


	render(){
		return(
			<div className="container text-center">
				<div className="ContentContainer About">
					<div className="Greeting row">
						<div className="col-sm-9">
							<p>Hi I'm Nick and I develop web sites, apps and more.</p>
							<p>I can develop you the right product to fit your needs. 
							Looking for a basic website to advertise your business, or maybe something more complex which can handle your data needs, or maybe a progressive web app that can used just like a normal app but is much cheaper to produce and maintain.
							 I can cater a product to your budget and requirements.</p>
							 <p>I know a whole host of different technologies each suited to different situations, allowing me to produce you just the right product within your budget.
							 Incase you're interested, technologies I have worked with include HTML, CSS, JavaScript, ReactJS, Swift, PHP, Node, Phonegap, plus much more. But if there's anything extra you may require I'm happy to discuss your needs.</p>
							 <p>I live and work in Essex but am willing to travel to come and meet you for a cuppa and a chat. So why not get in touch to discuss what you need and how I can help you.</p>
						</div>

						<div className="col-sm-3 text-center">
							<img src={require('../../Assets/Images/profilePic.png')} className="profileImage" alt="profile headshot"  />
						</div>
					</div>	
					
				</div>
			</div>
		)
	}
}