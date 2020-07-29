import React, { Component } from 'react';
import './App.css';
import { Portfolio } from './Portfolio/Portfolio';
import {about} from './../constants/About';
import {skills} from './../constants/Skills';
class App extends Component {
	constructor () {
		super ();
		this.state={
			about:null,
			skills:null,
			selectedHeading:"",
			selectedQuote:"",
			selectedSection:""

		};
	}
	componentDidMount(){
		console.log("I was mounted");
		this.setState({
			about:about,
			skills:skills,
			selectedHeading:about.heading,
			selectedQuote:about.quote,
			selectedSection:"about"
		})

	}
	handleSelectSection=(sectionName)=>{
     //alert(sectionName);
	this.setState({
	 selectedSection:sectionName,
	 selectedHeading:this.state[sectionName].heading,
	 selectedQuote:this.state[sectionName].quote
	});
	}

	render () {
		return (
			<div className="App">
				  <Portfolio 
				  handleSelectSection={this.handleSelectSection}
				  selectedHeading={this.state.selectedHeading}
				  selectedSection={this.state.selectedSection}
				  selectedQuote={this.state.selectedQuote}
				  about={about}
				  skills={skills}

				  />
			</div>
		);
	}
}

export default App;
