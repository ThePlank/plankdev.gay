import { Component } from "preact";
import "../css/general.css"

class Container extends Component {
	render(props) {
		return <div class='container'>{props.children}</div>
	}
	
}

export { Container };