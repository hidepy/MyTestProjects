import React from "react";
import ReactDom from "react-dom";

class LikeButton extends React.Component{
	render(){
		return(
			<span>IINE!!</span>
		);
	}
}

class CounterTextBox extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			count: 0,
			hovered: false
		};

		this.doChange = this.doChange.bind(this);
		this.onMouseEnter = this.onMouseEnter.bind(this);
		this.onMouseLeave = this.onMouseLeave.bind(this);
	}
	styles(){
		return {
			wrapperstyle: {
				fontFamily: "Meiryo, 'メイリオ'"
			},
			inputstyle: {
				fontSize: 24
			},
			span: {
				fontSize: 16
			}
		};
	}
	doChange(event){
		this.setState({count: event.target.value.length});
	}
	onMouseEnter(){
		console.log("onMouserEnter");
		this.setState({hovered: true});
	}
	onMouseLeave(){
		console.log("onMouserLeave");
		this.setState({hovered: false});
	}
	render(){
		const styles = this.styles();
		const hover = this.state.hovered ? styles.wrapperstyle : styles.wrapperstyle;
		return(
			<div style={styles.wrapperstyle}>
				<input type="text" onChange={this.doChange} style={styles.inputstyle} />
				<span 
					style={styles.span}
					onMouseEnter={this.onMouseEnter}
					onMouseLeave ={this.onMouseLeave}>
					{this.state.count}
				</span>
			</div>
		)
	}

}

ReactDom.render(
	<LikeButton />,
	document.getElementById("like-button")
);

ReactDom.render(
	<CounterTextBox />,
	document.getElementById("counter-textbox")
);