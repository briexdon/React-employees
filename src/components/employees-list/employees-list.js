import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({ data, onDelete, onToggleProp, onSalary }) => {
	const elements = data.map((elem) => {
		const { id, ...otherProps } = elem;

		return (
			<EmployeesListItem
				key={id}
				{...otherProps}
				onDelete={() => onDelete(id)}
				onToggleProp={(e) =>
					onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))
				}
				onSalary={(e) => onSalary(id, e.target.value)}
			/>
		);
	});

	return <ul className='app-list list-group'>{elements}</ul>;
};

export default EmployeesList;
