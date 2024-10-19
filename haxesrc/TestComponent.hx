import preact.Component;

class TestComponent<P, S> extends Component<P, S> {
	override function render(?props:preact.RenderableProps<P, Dynamic>, ?state:S, ?context:Dynamic) {
		return js.Syntax.code('<p>hi chat</p>');
	} 
}