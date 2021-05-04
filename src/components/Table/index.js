import React from "react";
import "./style.css";


function Table(props) {
    console.log(props.userData)
    return (
        <div>
            <table className="table table-striped table-sortable">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>907-324-5644</td>
                        <td>mark@gmail.com</td>
                        <td>Anchorage, Alaska</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Danielle</td>
                        <td>Smith</td>
                        <td>945-364-9944</td>
                        <td>d@gmail.com</td>
                        <td>Seattle, Washington</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Natalie</td>
                        <td>Pennington</td>
                        <td>345-345-5234</td>
                        <td>nat@gmail.com</td>
                        <td>Portland, Oregon</td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}

export default Table;