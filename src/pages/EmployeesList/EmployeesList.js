import React from 'react';
import './EmployeesList.scss';
import Employee from '../../components/Employee';
import AppContext from '../../context';
import { Link } from 'react-router-dom';

const Employees = props => {
	return (
		<AppContext.Consumer>
			{context => (
				<div className="employeesList">
					<h1 className="page-title">Lista Pracowników</h1>
					<table>
						<thead>
							<tr>
								<th>ID</th>
								<th>Imię</th>
								<th>Nazwisko</th>
								<th>Email</th>
								<th>Telefon</th>
								<th>Stawka/h</th>
								<th>Panel pracownika</th>
							</tr>
						</thead>
						<tbody>
							{context.employeesList.map(emp => (
								<Employee
									key={emp.id}
									id={emp.id}
									firstName={emp.firstName}
									lastName={emp.lastName}
									email={emp.email}
									phone={emp.phone}
									rate={emp.rate}
									accountNumber={emp.accountNumber}
								/>
							))}
						</tbody>
					</table>
				</div>
			)}
		</AppContext.Consumer>
	);
};

export default Employees;
