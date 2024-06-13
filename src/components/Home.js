import React from "react";
import {Button,Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from "./Users";
import { Link, useNavigate } from "react-router-dom";



function Home(){
    let history = useNavigate();

    function setId(id,Name,Email,MobileNumber,Age) {
        localStorage.setItem("id",id);
        localStorage.setItem("Name",Name);
        localStorage.setItem("Email",Email);
        localStorage.setItem("MobileNumber",MobileNumber);
        localStorage.setItem("Age",Age);
        
    }

    function deleted(id) {
        let index = Users.map(function (e) {
            return e.id;
        }).indexOf(id);
        Users.splice(index,1);
        history("/")
    }
    return(
        <div style={{}}>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>MobileNumber</th>
                        <th>Age</th>
                    </tr>
                </thead>
                    <tbody>
                        {
                            Users.map((item) => {
                                return(
                                <tr>
                                    <td>{item.Name}</td>
                                    <td>{item.Email}</td>
                                    <td>{item.MobileNumber}</td>
                                    <td>{item.Age}</td>
                                    <td>
                                        <Link to={'./edit'}>
                                            <Button onClick={(e) => setId(item.id,item.Email,item.MobileNumber,item.Age)}
                                                variant="primary">
                                                UPDATE
                                            </Button>
                                        </Link>
                                    </td>

                                    <td>
                                        
                                        <Button onClick={(e) => deleted(item.id)}  
                                            variant="danger">
                                                DELETE 
                                        </Button>
                                       
                                    </td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                

            </Table>
            <Link className="d-grid gap-2" style={{"text-decoration":"none"}} to="/create">
                <Button variant="success" size="lg">create record</Button>
            </Link>

        </div>
    ) 
}
export default Home;