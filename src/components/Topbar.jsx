import { Component } from "preact";
import '../../public/css/topbar.css';

class TopbarDropdown extends Component {

	render(props) {
		const buttons = []; 
		for (var i = 0; i <= props.buttons.length - 1; i++) {
			buttons.push(<button class='topbarDropdownButton topbarButton'> {props.buttons[i]} </button>);
		}

		var displayMode = (props.visible ? 'flex' : 'none')
		return <div class='topbarDropdown' style={{display: displayMode}}> {buttons} </div>
	}
}

class TopbarElement extends Component {
	state = {
		pressed: false
	};

	buttonPressed = () => {
		this.setState(prev => ({ pressed: true }));
	}

	buttonRaised = () => {
		this.setState(prev => ({ pressed: false }));
	}

	render(props) {

		return <div class='topbarEntry'>
					<button class='topbarButton' onMouseDown={this.buttonPressed} onMouseUp={this.buttonRaised}>{props.text}</button> 
					<TopbarDropdown buttons={['hiiiiii', ':3', 'testing dynamic widthhhhhhh']} visible={this.state.pressed}/>
					{this.state.pressed}
				</div>
	}
}

class Topbar extends Component {


	render(props) {
		const buttons = []; 
		const dropdowns = []; 
		for (var i = 0; i <= props.buttons.length - 1; i++) {
			buttons.push(<TopbarElement text={props.buttons[i].name}/>);
		}

		return <div id='topbar'> 
					<div class='topbarEntry'>
						<button class='topbarButton' id='mainTopbarButton' onMouseDown={this.buttonPressed}/> 
						<TopbarDropdown buttons={['hiiiiii', ':3', 'testing dynamic widthhhhhhh']}/>
					</div>
					{buttons}
				</div>
	}
	
}

export { Topbar };