import React from 'react';

class Connexion extends React.Component {

	goToChat = (e) => {
		e.preventDefault();
		const pseudo = this.pseudoInput.value;
		this.context.router.transitionTo(`/chat/${pseudo}`);
	};

	render() {
		return (
			<div className="connexionBox" onSubmit={(e) => this.goToChat(e)}>
				<form className="connexion">
					<input
						type="text" placeholder="Pseudo" required
						ref={(input) => {this.pseudoInput = input}}
					/>
					<button type="submit">Start</button>
				</form>
			</div>
		);
	}

	static contextTypes = {
		router: React.PropTypes.object
	}
}

export default Connexion;