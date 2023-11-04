import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: ``,
			salary: '',
		};

		this.maxId = 4;
	}

	onValueChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	render() {
		const { name, salary } = this.state;
		const { onAddItem } = this.props;

		const newEmployee = {
			name: name,
			salary: salary,
			increase: false,
		};

		return (
			<div className='app-add-form'>
				<h3>Добавьте нового сотрудника</h3>
				<form
					className='add-form d-flex'
					onSubmit={(e) => {
						e.preventDefault();

						if (name.length > 3 && salary !== `` && salary > 0) {
							onAddItem(newEmployee);

							this.setState({
								name: ``,
								salary: ``,
							});
						} else {
							console.log(`name more than 3, value more than 0 and number`);
						}
					}}
				>
					<input
						type='text'
						className='form-control new-post-label'
						placeholder='Как его зовут?'
						name='name'
						value={name}
						onChange={(e) => this.onValueChange(e)}
					/>
					<input
						type='number'
						className='form-control new-post-label'
						placeholder='З/П в $?'
						name='salary'
						value={salary}
						onChange={(e) => this.onValueChange(e)}
					/>

					<button type='submit' className='btn btn-outline-light'>
						Добавить
					</button>
				</form>
			</div>
		);
	}
}

export default EmployeesAddForm;
