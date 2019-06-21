import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import store from '../../redux/store';


class Header extends Component{

	constructor(){
		super();
		this.state = {
			backButtonText:"",
			page:" "
		}
	}

	componentDidMount(){

		//get reference to left header content
		const leftElement = document.getElementById("leftElement");

		//get reference to right header element
		const rightElement = document.getElementById("rightElement");

		
		let backButtonText;
		

		//listen for changes to redux when page changes happen
		this.unsubscribe = store.subscribe(()=>{
			
			//get page from state
			let page = store.getState().page;
			console.log(page);
			
			let pageImg;

	
			
			//hide pointers and prevent click on home page
			if(page !== null){
				leftElement.classList.add('pointer');
				backButtonText = "< Back";
				this.allowBackClick = true;
				
			}else{
				leftElement.classList.remove('pointer');
				backButtonText = "";
				this.allowBackClick = false;
				
			}


			//save to state
			this.setState({
				page:page,
				backButtonText:backButtonText,
				pageImg:pageImg
				
			}) 
			
			//handle animations
			leftElement.classList.add('animated', 'fadeIn')

			leftElement.addEventListener('animationend', () => { 
				
			 	leftElement.classList.remove('animated', 'fadeIn')
			})

			
			rightElement.classList.add('animated', 'fadeIn')

			rightElement.addEventListener('animationend', () => { 
				
			 	rightElement.classList.remove('animated', 'fadeIn')
			})


		});

		
	}

	
	componentWillUnmount(){
		this.unsubscribe();
	}

	_goHome(){

		console.log("go home");

		if(this.allowBackClick){
			const element =  document.querySelector('.ContentContainer');
			element.classList.add('animated', 'bounceOutRight')
			element.addEventListener('animationend', () => { 
				 
				element.classList.remove('animated', 'bounceOutRight')
	        	element.removeEventListener('animationend', ()=>{})
	        	//store.dispatch({type:constants.SAVE_PAGE,page:' '})
				this.props.history.push('/Home')
			})
		}
	}



	render(){
		return(
			<div className="header">
				<div className="row verticalAlign">

					<p id="leftElement" className="col-6 text-center pointer" onClick={this._goHome.bind(this)}>{this.state.backButtonText}</p>
					<p id="rightElement" className="col-6 text-center">{this.state.page}</p>
					
				</div>
			</div>
			
		)
	}
}

export default withRouter(Header)