import { Component } from 'react';

import './app-filter.css';
const btns = [
	{
		name: `all`,
		label: 'Все сотрудники',
	},
	{
		name: `rise`,
		label: 'На повышение',
	},
	{
		name: `moreThan1000`,
		label: 'З/П больше 1000$',
	},
];

class AppFilter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filter: `all`,
		};
	}

	getFilter = (e) => {
		const filter = e.target.dataset.filter;

		this.setState({ filter: filter });

		this.props.onFilter(filter);
	};

	render() {
		return (
			<div className='btn-group'>
				{btns.map(({ name, label }) => {
					const active =
						this.state.filter === name ? 'btn-light' : 'btn-outline-light';
					return (
						<button
							type='button'
							className={`btn ${active}`}
							data-filter={name}
							onClick={(e) => this.getFilter(e)}
							key={name}
						>
							{label}
						</button>
					);
				})}
			</div>
		);
	}
}

export default AppFilter;
