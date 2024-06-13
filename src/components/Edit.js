import React,{useEffect, useState} from "react";
import { Button,Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from "./Users";
import { Link, useNavigate } from "react-router-dom";


function Edit(){
    let history = useNavigate();
    const [name,setname] = useState("");
    const [email,setemail] = useState("");
    const [mobilenumber,setmobilenumber] = useState("");
    const [age,setage] = useState(""); 
    const [id,setid] = useState(""); 


    let index = Users.map(function (e) {
        return e.id;
    }).indexOf(id);
    
    const handleSubmit =(e)=>{
        e.preventDefault();

        if(name ==="" || email ==="" || mobilenumber === ""  || age === ""){
            alert("invalid input");
            return;
        }
        
        let a= Users[index];
        a.Name= name;
        a.Email = email;
        a.MobileNumber = mobilenumber;
        a.Age = age;
    
        history("/")
    }
    useEffect(()=>{
        
        setname(localStorage.getItem("Name"))
        setemail(localStorage.getItem("Email"))
        setmobilenumber(localStorage.getItem("MobileNumber"))
        setage(localStorage.getItem("Age"))
        setid(localStorage.getItem("id"))
        
    },[])
    
    return(
        <div>
            <Form className="d-grid gap-2" style={{margin:"5rem"}}>
                <Form.Group className="mb-3" controlId="Name">
                    <Form.Control  
                    value ={name}
                      onChange={(e) => setname(e.target.value)} 
                      type="text"
                      placeholder="enter name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Email">
                    <Form.Control 
                    value ={email} 
                      onChange={(e) => setemail(e.target.value)} 
                      type="text"
                      placeholder="enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="MobileNumber">
                    <Form.Control 
                    value ={mobilenumber} 
                      onChange={(e) => setmobilenumber(e.target.value)} 
                      type="text"
                      placeholder="enter mobile number" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Age">
                    <Form.Control 
                    value ={age} 
                      onChange={(e) => setage(e.target.value)} 
                      type="text"
                      placeholder="enter age" required />
                </Form.Group>
                <Button
                 onClick={(e) => handleSubmit(e)} 
                 variant="success" type="submit">
                    update
                </Button>

                <Link className="d-grid gap-2" to={"/"}>
                <Button variant="info" size="lg">Home</Button>
                </Link>

            </Form>
            
        </div>
    )
}
export default Edit;