import React,{useState} from "react";
import { Button,Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from "./Users";
import {v4 as uuid} from 'uuid';
import { Link, useNavigate } from "react-router-dom";

function Create(){
   let history = useNavigate();
   const [name,setname] = useState("");
   const [email,setemail] = useState("");
   const [mobilenumber,setmobilenumber] = useState("");
   const [age,setage] = useState("");   
   
   const handleSubmit =(e)=>{
    e.preventDefault();
    
    const ids = uuid();
    let uni = ids.slice(0,8);
    let a= name,
    b = email,
    c = mobilenumber,
    d = age;

    if(name ==="" || email ==="" || mobilenumber === ""  || age === ""){
        alert("invalid input");
        return;
    }
        Users.push({
            id:uni,
            Name:a,
            Email:b,
            MobileNumber:c,
            Age:d
    })
    history("/")
    
   }
    return(
        <div>
            <Form className="d-grid gap-2" style={{margin:"5rem"}}>
                <Form.Group className="mb-3" controlId="Name">
                    <Form.Control  
                      onChange={(e) => setname(e.target.value)} 
                      type="text"
                      placeholder="enter name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Email">
                    <Form.Control  
                      onChange={(e) => setemail(e.target.value)} 
                      type="text"
                      placeholder="enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="MobileNumber">
                    <Form.Control  
                      onChange={(e) => setmobilenumber(e.target.value)} 
                      type="text"
                      placeholder="enter mobile number" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Age">
                    <Form.Control  
                      onChange={(e) => setage(e.target.value)} 
                      type="text"
                      placeholder="enter age" required />
                </Form.Group>
                <Button
                 onClick={(e) => handleSubmit(e)} 
                 variant="success" type="submit">
                    submit
                </Button>

                <Link className="d-grid gap-2" to={"/"}>
                <Button variant="info" size="lg">Home</Button>
                </Link>

            </Form>
            
        </div>
    )
}
export default Create;