import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import store from '../../redux/store';
import constants from '../../redux/constants';
import BlogComp from './BlogComp';


export default class Blog extends Component{

	constructor(){
		super();
		this.state = {
			content:[]
		}

		
	}

	componentDidMount(){



		//save page to store
		store.dispatch({type:constants.SAVE_PAGE, page:'Blog Content'})

 		this.element =  document.querySelector('.ContentContainer');
		this.element.classList.add('animated', 'bounceInLeft')
		this.element.addEventListener('animationend', () => { 
			
			this.element.classList.remove('animated', 'bounceInLeft')
		})
		this.gatherContent();
	}
	
	gatherContent(){
/*[
 
]*/
		/*let blogArray = [ {
		    "firstName": "Nick",
		    "lastName": "Short",
		    "title": "title here",
		    "content": "Content here"
		  },
		  {
		    "firstName": "Max",
		    "lastName": "Harris",
		    "title": "title",
		    "content": "content"
		  }];
		  this.setState({
				content:blogArray
			})*/
		let blogArray = [];
		fetch('https://nickshort.info/get.php',{method:'GET'}).then((response)=>{
			
			if(response.ok) return response.json();
		}).then((data)=>{
			console.log(data);
			data.forEach((object)=>{
				console.log(object);
				blogArray.push(object);
			})
			this.setState({
				content:blogArray
			})
			
		})
	}

	render(){

		let content = this.state.content.map((content,index)=>{
			return <BlogComp key={index} firstName={content.firstName} lastName={content.lastName} title={content.title} content={content.content} />
		})

		return(
			<div className="container text-center">
				<div className="ContentContainer">
					<p>Add Some content!</p>
					<Link to='/AddBlogContent'>Add here</Link>
					{content}
										
				</div>
			</div>
		)
	}
}