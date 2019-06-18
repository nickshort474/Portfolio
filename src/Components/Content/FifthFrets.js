import React, {Component} from 'react';


export default class FifthFrets extends Component{


	componentDidMount(){

 		const element =  document.querySelector('.ContentContainer');
		element.classList.add('animated', 'bounceInRight')
		element.addEventListener('animationend', () => { 
			//this._doSomething() 
		})
 	}

	render(){
		return(
			<div className="container siteBoxes">
				<a href="http://www.5thfrets.co.uk/"  >
					<h3>5thFrets.co.uk</h3>
					<img src={require('../../Assets/Images/5thfrets.jpg')} width="100%"  alt="website snaphot"/>
					<p>5thFrets guitar repair</p>
				</a>
			</div>
		)
	}
}

