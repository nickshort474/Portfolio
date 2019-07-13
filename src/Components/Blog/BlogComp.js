import React, {Component} from 'react';



export default class BlogComp extends Component{



	render(){
		return(
			<div className="blogComp">
				<p>{this.props.firstName}</p>
				<p>{this.props.lastName}</p>
				<p>{this.props.title}</p>
				<p>{this.props.content}</p>
			</div>
		)
	}
}