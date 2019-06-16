import React, {Component} from 'react';
import store from '../../redux/store';
import constants from '../../redux/constants';

export default class Contact extends Component{

	constructor(){
		super()

		this.state = {
			errors:[],
			name:"",
			message:"",
			contact:""
		}
	}

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

 	_handleInput(e){
 		this.setState({
 			[`${e.target.id}`]:`${e.target.value}`
 		})
 		let elem = document.getElementById(`${e.target.id}`);
 		elem.classList -= ' formError';
 	}

 	_onSubmit(){

		// validate input fields
		let errorMsgs = this._validate();
		
		//test errorMsgs for errors
		if(errorMsgs.length > 0){
			
			// create msgComp for displaying of error messages
			let msgComp = errorMsgs.map((msg,index)=>{
				return <div className="text-center" key={index}><p>{msg}</p></div>
			})

			let formattedComp = <div className="box">{msgComp}</div>
			
			this.setState({
				errors:formattedComp
			})
		
		}else{
			//if no errors submit form
			var submit = document.getElementById("submit");
	    	submit.click();

			let form = document.getElementById("form");
			form.addEventListener("submit",(e) => {
				// redirect to response page				
				this.props.history.push('/Response');
			
			});
		}
	}

	_validate(){
		//get values from input fields
		let name = document.getElementById('name');
		let nameValue = name.value;
		
		let message = document.getElementById('message');
		let messageValue = message.value;

		let contact = document.getElementById('contact');
		let contactValue = contact.value;
		
		
		//store error messages in array
		const errorMsgs = [];

		//test each input field
		if (nameValue.length < 1) {
		   errorMsgs.push("Please provide a name");
		   name.className += ' formError'
		   
		}

		
		if (messageValue.length < 1) {
		   errorMsgs.push("Please provide a message");
		   message.className += ' formError'
		  
		}

		if(contactValue.length < 1){
			errorMsgs.push("Please provide a means for me to contact you");
			contact.className += ' formError';
		   
		}
	
  		return errorMsgs;
	}

	render(){
		return(
			<div className="container">
				<div className="text-center ContentContainer test">
					<h3>Contact</h3>
					<p>You can contact me at:</p>
					<p>nickshort474@gmail.com</p>
					<p>Or drop me a question with your contact details and I will get back to you</p>
					
					<form method="POST" id="form" action="contact_email.php" >
						Your name<textarea id="name" placeholder="Your name" style={{"width":"100%"}} rows="1" value={this.state.name}  onChange={this._handleInput.bind(this)}></textarea>
						Your question<textarea id="message" placeholder="Hey there Nick I was wondering..." style={{"width":"100%"}} rows="3" value={this.state.message}  onChange={this._handleInput.bind(this)}></textarea>
						Your contact<textarea id="contact" placeholder="I can be contacted at..." style={{"width":"100%"}} rows="1" value={this.state.contact} onChange={this._handleInput.bind(this)}></textarea>
						<input type="submit"  id="submit" style={{display:"none"}}  />

					</form>

					<button type="submit" onClick={this._onSubmit.bind(this)}>Contact me</button>
					<br /><br />
					<div className="box">
						{this.state.errors}
					</div>

				</div>
			</div>
		)
	}
}