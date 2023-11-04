import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import { Component } from 'react';

import './app.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			data: [
				{ name: 'John', salary: 5000, increase: false, rise: true, id: 1 },
				{ name: 'Alex', salary: 6000, increase: true, rise: false, id: 2 },
				{ name: 'Diana', salary: 7000, increase: false, rise: false, id: 3 },
			],
			filter: 'all',
			search: '',
		};

		this.itemId = 4;
	}

	onSalary = (id, salary) => {
		this.setState(({ data }) => {
			const newData = data.map((elem) => {
				if (elem.id === id) {
					return { ...elem, salary: +salary };
				}
				return elem;
			});

			return { data: newData };
		});
	};

	onDeleteItem = (id) => {
		this.setState(({ data }) => {
			const newData = data.filter((elem) => elem.id !== id);
			return { data: newData };
		});
	};

	onAddItem = (item) => {
		const id = this.itemId++;

		item.id = id;

		this.setState(({ data }) => {
			return {
				data: [...data, item],
			};
		});
	};

	onToggleProp = (id, prop) => {
		const newData = this.state.data.map((elem) => {
			if (elem.id === id) {
				return { ...elem, [prop]: !elem[prop] };
			}
			return elem;
		});

		this.setState(() => {
			return { data: newData };
		});
	};

	onSearchEmp = (search) => {
		this.setState({ search: search });
	};

	searchEmp = (data, search) => {
		if (search.length === 0) {
			return data;
		} else {
			return data.filter((elem) => elem.name.indexOf(search) > -1);
		}
	};

	onFilter = (filter) => {
		this.setState({ filter: filter });
	};

	filterEmp = (data, filter) => {
		switch (filter) {
			case `all`:
				return data;
			case 'rise':
				return data.filter((elem) => elem.increase);
			case `moreThan1000`:
				return data.filter((elem) => elem.salary > 1000);
			default:
				return data;
		}
	};

	render() {
		const { data, filter, search } = this.state;
		const employees = data.length;
		const increased = data.filter((elem) => elem.increase).length;
		const visibleData = this.filterEmp(this.searchEmp(data, search), filter);

		console.log(data);

		return (
			<div className='app'>
				<AppInfo employees={employees} increased={increased} />

				<div className='search-panel'>
					<SearchPanel onSearchEmp={this.onSearchEmp} />
					<AppFilter onFilter={this.onFilter} />
				</div>

				<EmployeesList
					data={visibleData}
					onDelete={this.onDeleteItem}
					onToggleProp={this.onToggleProp}
					onSalary={this.onSalary}
				/>
				<EmployeesAddForm onAddItem={this.onAddItem} />
			</div>
		);
	}
}

export default App;
