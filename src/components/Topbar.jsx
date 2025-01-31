import { Component, createContext } from "preact";
import '../css/topbar.css';

class TopbarDropdown extends Component {
	render(props) {
		const buttons = []; 
		for (var i = 0; i <= props.buttons.length - 1; i++) {
			const clickFunction = props.buttons[i][1];
			buttons.push(<button class='topbarDropdownButton topbarButton' onMouseUp={() => {clickFunction(); props.hideEvent();}}> {props.buttons[i][0]} </button>);
		}

		var displayMode = (props.visible ? 'flex' : 'none')
		return <div class='topbarDropdown' style={{display: displayMode}} onMouseLeave={props.hideEvent}> {buttons} </div>
	}
}

class TopbarElement extends Component {
	state = {
		pressed: false
	};

	buttonPressed = () => 	this.setState(prev => ({ pressed: true 	}));
	buttonRaised = () => 	this.setState(prev => ({ pressed: false }));

	render(props) {
		console.log(props.dropdown)

		return <div class='topbarEntry'>
					<button class='topbarButton' id={props.identifier} onMouseDown={this.buttonPressed} onMouseUp={this.buttonRaised}>{props.text}</button> 
					<TopbarDropdown buttons={props.dropdown} hideEvent={this.buttonRaised} visible={this.state.pressed}/>
				</div>
	}
}

class Topbar extends Component {
	goToPage = (page) => {
		window.location.pathname = page;
	}

	render(props) {
		const buttons = []; 
		const dropdowns = []; 
		for (var i = 0; i <= props.buttons.length - 1; i++) {
			buttons.push(<TopbarElement identifier="" text={props.buttons[i].name} dropdown={props.buttons[i].dropdown}/>);
		}

		return <div id='topbar'> 
					<div id='topbarLeftside'> 
						<TopbarElement identifier="mainTopbarButton" dropdown={[
																					['Welcome', this.goToPage.bind(this, '/')], 
																					['Characters', this.goToPage.bind(this, '/characters')], 
																					['Projects', this.goToPage.bind(this, '/projects')], 
																					['Contact', this.goToPage.bind(this, '/contact')]
																				]}/> 
						{buttons}
					</div>
				</div>
	}
	
}

export { Topbar };