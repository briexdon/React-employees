import { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: ``,
		};
	}

	onSearchEmp = (e) => {
		this.setState({ search: e.target.value });

		this.props.onSearchEmp(e.target.value);
	};

	render() {
		const { search } = this.state;

		return (
			<input
				type='text'
				className='form-control search-input'
				placeholder='Найти сотрудника'
				value={search}
				onChange={(e) => this.onSearchEmp(e)}
			/>
		);
	}
}

export default SearchPanel;
