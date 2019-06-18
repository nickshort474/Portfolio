import React, {Component} from 'react';
import store from '../../redux/store';
import constants from '../../redux/constants';

export default class Home extends Component{


	componentDidMount(){

		store.dispatch({type:constants.SAVE_PAGE,page:'Home'})

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

	render(){
		return(
			<div className="container">
				<div className="text-center ContentContainer">
					<div>Hi I'm Nick and I develop web sites, apps and more</div><br /><br />
					
					<div className="row text-center">
						<span className="pointer col-sm-12" onClick={this._clickContent.bind(this)}><img src={require('../../Assets/Images/creations.png')} alt="link to my creations" /></span>
					</div><br />
					
					<div className="row">
						<span className="pointer col-sm-6" onClick={this._clickAbout.bind(this)}><img src={require('../../Assets/Images/learn.png')} alt="link to my about me page" /></span><span className="col-sm-6"></span>
					</div> <br /> 
					
					<div className="row">
						<span className="col-sm-6"></span><span className="pointer col-sm-6" onClick={this._clickContact.bind(this)}><img src={require('../../Assets/Images/GetInContact.png')} alt="link to my contact detail" /></span>
					</div><br />
				
				</div>
			</div>
		)
	}
}