import React, { useState, useEffect } from "react";
import "./style.css";
import Navbar from "../Navbar/index";
import API from "../../utils/API";
import SearchForm from "../Filter"

function Table() {
    const [employees, setEmployees] = useState([]);
    const [filteredEmployees, setFilteredEmployees] = useState([]);

    console.log(employees);
    console.log(filteredEmployees);

    useEffect(() => {
        (async function () {
            const response = await API.getRandomEmployee();
            setEmployees(response.data.results);
            setFilteredEmployees(response.data.results);
        })()
    }, [])
    console.log("employees:", employees)
    if (!employees) {
        return (
            <p>WRONG!</p>
        );
    }

    const handleFilter = (event) => {
        //apply toLowerCase() to value
        const filterText = event.target.value.toLowerCase();
        const filterEmp = employees.filter((employee) => {
            return employee.name.last.toLowerCase().indexOf(filterText) > -1
        })
        setFilteredEmployees(filterEmp)
    }

    const sortByLastName = () => {
        console.log("You want to sort by last name")
        setEmployees((employees) => [...employees.sort((a, b) => {
            if (a.name.last < b.name.last) {
                return -1;
            }
            if (a.name.last > b.name.last) {
                return 1;
            }
            // a must be equal to b
            return 0;
        })])
    }
    return (
        <div>
            <Navbar />
            <SearchForm handleFilter={handleFilter} />
            <table className="table table-striped table-sortable">
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>First Name</th>
                        <th onClick={() => sortByLastName()}>Last Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredEmployees.map((person, idx) => {
                        // console.log(person)
                        return (
                            <tr key={idx}>
                                <td><img src={person.picture.thumbnail} /></td>
                                <td>{person.name.first}</td>
                                <td>{person.name.last}</td>
                                <td>{person.phone}</td>
                                <td>{person.email}</td>
                                <td>{person.location.state}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    );
}

export default Table;