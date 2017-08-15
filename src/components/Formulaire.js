import React from 'react';

class Formulaire extends React.Component {

	state = {
		length: this.props.length
	}

	createMessage = (e) => {
		console.log(e);
		e.preventDefault();
		const message = {
			message: this.message.value,
			pseudo: this.props.pseudo
		};
		this.props.addMessage(message);
		this.messageForm.reset();
		const length = this.props.length;
		this.setState({ length });
	};

	sendMessage = (e) => {
		if (e.key === 'Enter') {
			this.submitButton.click();
		}
	};

	counter = (e) => {
		const length = this.props.length - this.message.value.length;
		this.setState({ length });
	};

	render () {
		return (
			<form
				className="form"
				onSubmit={(e) => {this.createMessage(e)}}
				ref={(input) => {this.messageForm = input}}
			>
				<textarea
					required
					maxLength={this.props.length}
					ref={(input) => {this.message = input}}
					onChange={(e) => {this.counter(e)}}
					onKeyPress={(e) => {this.sendMessage(e)}}
				></textarea>
				<div className="info">{this.state.length}</div>
				<button type="submit" ref={(input) => {this.submitButton = input}}>Send!</button>
			</form>
		);
	}

	static propTypes = {
		addMessage: React.PropTypes.func.isRequired,
		pseudo: React.PropTypes.string.isRequired,
		length: React.PropTypes.number.isRequired
	}
}

export default Formulaire;
