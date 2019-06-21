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
			email:""
		}
	}

	componentDidMount(){

		//save page to store
		store.dispatch({type:constants.SAVE_PAGE,page:'Contact me'})

		console.log("page set to contact me")
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

		let email = document.getElementById('email');
		let emailValue = email.value;
		
		
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

		if(emailValue.length < 1){
			errorMsgs.push("Please provide a means for me to contact you");
			email.className += ' formError';
		   
		}
	
  		return errorMsgs;
	}

	render(){
		return(
			<div className="container">
				<div className="ContentContainer contactPage">
					<p>You can contact me at: <span className="email">nickshort474@gmail.com</span></p>
					<hr />
					<p>Or drop me a question with your contact details and I will get back to you:</p>
					<hr />
					<form method="POST" id="form" action="contact_email.php" >
						<div className="form-group">
							<label htmlFor="name">Your name</label>
							<textarea id="name" name="name" className="form-field" placeholder="Your name" style={{"width":"100%"}} rows="1" value={this.state.name}  onChange={this._handleInput.bind(this)} ></textarea>
						</div>
						<div className="form-group">
							<label htmlFor="message">Your question</label>
							<textarea id="message" name="message" placeholder="Hey there Nick I was wondering..." style={{"width":"100%"}} rows="3" value={this.state.message}  onChange={this._handleInput.bind(this)}></textarea>
						</div>
						<div className="form-group">
							<label htmlFor="email">Your email</label>
							<textarea id="email" name="email" placeholder="I can be contacted at..." style={{"width":"100%"}} rows="1" value={this.state.email} onChange={this._handleInput.bind(this)}></textarea>
						</div>
						
						
						

						<input type="submit"  id="submit"  style={{"display":"none"}} />

					</form>
					<div className="text-center">
						<button type="submit" onClick={this._onSubmit.bind(this)}>Contact me</button>
					</div>
					<br /><br />
					<div>
						{this.state.errors}
					</div>

				</div>
			</div>
		)
	}
}