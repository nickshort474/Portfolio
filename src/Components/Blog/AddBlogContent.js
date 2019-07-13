import React, {Component} from 'react';

import store from '../../redux/store';
import constants from '../../redux/constants';

export default class AddBlogContent extends Component{

	constructor(){
		super();
		this.state = {
			src:"",
			imageData:""
		}
	}

	componentDidMount(){

		

		//save page to store
		store.dispatch({type:constants.SAVE_PAGE, page:'Add Content'})

 		this.element =  document.querySelector('.ContentContainer');
		this.element.classList.add('animated', 'bounceInLeft')
		this.element.addEventListener('animationend', () => { 
			
			this.element.classList.remove('animated', 'bounceInLeft')
		})


	}

	_handleBrowseClick(){
	   //handle browse click (hides browse button allows styling of upload image button)
	    var fileinput = document.getElementById('browse');
	    fileinput.click();
	}

	_previewImage(e){
		let reader = new FileReader();
		reader.onload = (e) =>{
			
			let image = document.getElementById('previewImage')
			image.src = e.target.result;
			
			const elem = document.createElement('canvas');
			const ctx = elem.getContext('2d');
			ctx.drawImage(image,0,0);

			//create blob from canvas image
			this.createBlob(ctx).then((file)=>{
				console.log(file);
				this.setState({
					imageData:file
				})
			});			
			

			/*this.setState({
				imageData:e.target.result
			})*/
		}

		reader.readAsDataURL(e.target.files[0])
	}

	createBlob(ctx){
		//create promise to return blob once created
		return new Promise((resolve,reject)=>{
		
		//create blob
		ctx.canvas.toBlob((blob)=>{
			let file = new File([blob], "message_image", {type:'image/jpeg', lastModified:Date.now()});
				resolve(file);
				
			}, 'image/jpeg', 1)
		})
	}

	render(){
		return(
			<div className="container text-center">
				<div className="ContentContainer form-group">
					
					
					
					<form method="post" action="set.php" >
						First name<input className="form-control" type="text" name="firstName" /><br />
						Last name<input className="form-control"  type="text" name="lastName" /><br />
						
						Title<input className="form-control" type="text" name="title" /><br />
						Content<textarea className="form-control" rows="3" name="content" />

						<input type="hidden" id="imageData" name="imageData" value={this.state.imageData} />
						<input type="file"  id="browse" style={{display:"none"}} name="fileupload" onChange={this._previewImage.bind(this)} accept="image/*" />
						<input type="button" className="btn btn-primary"   value="Add Image" id="fakeBrowse" onClick={this._handleBrowseClick.bind(this)} /><br />
						<img src={this.state.src} id="previewImage" className="img-thumbnail" width="200px" height="200px" alt="Preview" /><br />
						
						<input type="submit" id="button" value="Add data" />
					</form>
										
				</div>
			</div>
		)
	}
}