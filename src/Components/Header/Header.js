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

		const backButtonElement = document.getElementById("backButton");
		let backButtonText;
		let name;

		this.page = store.getState().page;
		
		
		//set variables for when there is a page refresh
		if(this.page !== "Home"){
			backButtonElement.classList.add('pointer');
			backButtonText = "< Back";
			name = "NickShort";
			this.allowBackClick = true;
		}else{
			backButtonElement.classList.remove('pointer');
			backButtonText = ""
			name = ""
			this.allowBackClick = false;
		}

		//set state on page refresh
		this.setState({
			backButtonText:backButtonText,
			name:name,
			page:this.page
		}) 

		//listen for changes to redux when page changes happen
		this.unsubscribe = store.subscribe(()=>{
			
			let page = store.getState().page;
			let pageImg;

			if(page === "About"){
				pageImg = require('../../Assets/Images/About.png')
			}else if(page === "Home"){
				pageImg = require('../../Assets/Images/Home.png')
			}else if(page === "Contact"){
				pageImg = require('../../Assets/Images/contact.png')
			}

			let backButtonText = "";
			let name = "";

			if(page !== "Home"){
				backButtonElement.classList.add('pointer');
				backButtonText = "< Back";
				name = "NickShort";
				this.allowBackClick = true;

			}else{
								
				backButtonElement.classList.remove('pointer');
				this.allowBackClick = false;
				
			}
			this.setState({
				page:page,
				backButtonText:backButtonText,
				name:name,
				pageImg:pageImg
				
			}) 

			//handle animations
			const element =  document.querySelector('.pageTitle');
			element.classList.add('animated', 'fadeIn')

			element.addEventListener('animationend', () => { 
				
			 	element.classList.remove('animated', 'fadeIn')
			})

			const element2 =  document.querySelector('.backButton');
			element2.classList.add('animated', 'fadeIn')

			element2.addEventListener('animationend', () => { 
				
			 	element2.classList.remove('animated', 'fadeIn')
			})

			const element3 =  document.querySelector('.titleName');
			element3.classList.add('animated', 'fadeIn')

			element3.addEventListener('animationend', () => { 
				
			 	element3.classList.remove('animated', 'fadeIn')
			})


		});

		
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
	        	store.dispatch({type:constants.SAVE_PAGE,page:'Home'})
				this.props.history.push('/Home')
			})
		}
	}



	render(){
		return(
			<div className="header">
				<div className="row">

					<h6 id="backButton" onClick={this._goHome.bind(this)} className="col-4 text-left backButton pointer" >{this.state.backButtonText}</h6>
					<h4 className="col-4 text-center pageTitle"><img src={this.state.pageImg} /></h4>
					<h6 className="col-4 text-right titleName">{this.state.name}</h6>
					
					
				</div>
			</div>
			
		)
	}
}

export default withRouter(Header)