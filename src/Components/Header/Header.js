import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import store from '../../redux/store';
import constants from '../../redux/constants';

class Header extends Component{

	constructor(){
		super();
		this.state = {
			backButtonText:"",
			page:"",
			name:""
		}
	}

	componentDidMount(){

		//get reference to left header content
		const leftElement = document.getElementById("leftElement");

		//get reference to right header element
		const rightElement = document.getElementById("rightElement");

		//get reference to central element
		const centralElement = document.getElementById("centralElement");


		let backButtonText;
		let name;

		this.page = store.getState().page;
		
		
		

		//set state on page refresh
		this.setState({
			backButtonText:backButtonText,
			name:name,
			page:this.page
		}) 

		//listen for changes to redux when page changes happen
		this.unsubscribe = store.subscribe(()=>{
			
			//get page from state
			let page = store.getState().page;
			let pageImg;

			if(page === "Nick Short Web Dev"){
				//pageImg = require('../../Assets/Images/Home.png')
				leftElement.classList.remove("col-4");
				rightElement.classList.remove("col-4");
				centralElement.classList.remove("col-4");
				centralElement.classList.add("col-12");
			}else if(page === "About"){
				//pageImg = require('../../Assets/Images/About.png')
				leftElement.classList.add("col-4")
				rightElement.classList.add("col-4")
				centralElement.classList.remove("col-12");
				centralElement.classList.add("col-4");

			}else if(page === "Contact"){
				//pageImg = require('../../Assets/Images/contact.png')
				leftElement.classList.add("col-4")
				rightElement.classList.add("col-4")
				centralElement.classList.remove("col-12");
				centralElement.classList.add("col-4");
			}else if(page === "Content"){
				//pageImg = require('../../Assets/Images/Content.png')
				leftElement.classList.add("col-4")
				rightElement.classList.add("col-4")
				centralElement.classList.remove("col-12");
				centralElement.classList.add("col-4");
			}


			
			//hide pointers and prevent click on home page
			if(page !== "Nick Short Web Dev"){
				leftElement.classList.add('pointer');
				backButtonText = "< Back";
				name = "NickShort";
				this.allowBackClick = true;
				
			}else{
				leftElement.classList.remove('pointer');
				backButtonText = ""
				name = ""
				this.allowBackClick = false;
				
			}


			//save to state
			this.setState({
				page:page,
				backButtonText:backButtonText,
				name:name,
				pageImg:pageImg
				
			}) 

			//handle animations
			//const element =  document.querySelector('#centralElement');
			centralElement.classList.add('animated', 'fadeIn')

			centralElement.addEventListener('animationend', () => { 
				
			 	centralElement.classList.remove('animated', 'fadeIn')
			})

			//const leftElement =  document.querySelector('#leftElement');
			leftElement.classList.add('animated', 'fadeIn')

			leftElement.addEventListener('animationend', () => { 
				
			 	leftElement.classList.remove('animated', 'fadeIn')
			})

			//const rightElement =  document.querySelector('#rightElement');
			rightElement.classList.add('animated', 'fadeIn')

			rightElement.addEventListener('animationend', () => { 
				
			 	rightElement.classList.remove('animated', 'fadeIn')
			})


		});

		
	}

	_assignColValues(){

	}


	componentWillUnmount(){
		this.unsubscribe();
	}

	_goHome(){
		if(this.allowBackClick){
			const element =  document.querySelector('.ContentContainer');
			element.classList.add('animated', 'bounceOutRight')
			element.addEventListener('animationend', () => { 
				 
				element.classList.remove('animated', 'bounceOutRight')
	        	element.removeEventListener('animationend', ()=>{})
	        	store.dispatch({type:constants.SAVE_PAGE,page:'Nick Short Web Dev'})
				this.props.history.push('/Home')
			})
		}
	}



	render(){
		return(
			<div className="header">
				<div className="row verticalAlign">

					<p id="leftElement" className="col-4 pointer" onClick={this._goHome.bind(this)}>{this.state.backButtonText}</p>
					<p id="centralElement" className="pageTitleBox text-center"><span className="dropShadow">{this.state.page}</span>{/*<img className="pageTitle" src={this.state.pageImg} alt={this.state.page}  />*/}</p>
					<p id="rightElement" className="col-4 text-right">{this.state.name}</p>
					
					
				</div>
			</div>
			
		)
	}
}

export default withRouter(Header)