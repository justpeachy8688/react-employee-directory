import React, { useState, useEffect } from "react";
import "./style.css";
import Navbar from "../Navbar/index";
import API from "../../utils/API";



function Table(props) {
    const [employees, setEmployees] = useState([]);
    console.log(employees);
    useEffect(() => {
        (async function () {
            const response = await API.getRandomEmployee();
            setEmployees(response.data.results);
        })()
    }, [])
    console.log("employees:", employees)
    if (!employees) {
        return (
            <p>WRONG!</p>
        );
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
            <table className="table table-striped table-sortable">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th onClick={() => sortByLastName()}>Last Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((person, idx) => {
                        // console.log(person)
                        return (
                            <tr key={idx}>
                                <td>{person.id.value.charAt(0)}</td>
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