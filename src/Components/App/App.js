import React, {Component} from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

import Header from '../Header/Header';
import Brand from '../Brand/Brand';
import Footer from '../Footer/Footer';


import Content from '../Content/Content';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import About from '../About/About';
import Response from '../Response/Response';


import 'bootstrap/dist/css/bootstrap.min.css';
/*import 'bootstrap/dist/js/bootstrap.min.js';*/

import '../../Assets/Styles/styles.css';

import 'animate.css';

export default class App extends Component {
	

	render(){
		return(
			<Router>
				<div className="mainContainer">
					<Brand />
					<Header />
					<Route exact path={"/"} component={Home} />
					<Route path={'/Home'} component={Home} />
					<Route path={"/Content"} component={Content} />
					<Route path={"/About"} component={About} />
					<Route path={"/Contact"} component={Contact} />
					<Route path={"/Response"} component={Response} />
					<Footer />
				</div>

			</Router>
		)
	}
}