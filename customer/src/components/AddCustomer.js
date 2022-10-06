
import { useState } from "react";
import {  Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import customerService from "../services/customer.service";

const AddCustomer = () => {
    const[cus_id, setCus_Id] = useState('');
    const[name, setName] = useState('');
    const[phone, setPhone] = useState('');
    const[email, setEmail] = useState('');
    const[orderid, setOrderid] = useState('');
    const history = useHistory();
    const {id}=useParams();


    //  save customer data 
    const saveCustomer = (e) => {
        e.preventDefault();
        window.location.reload();
        
        const customer = {cus_id, name, phone, email,orderid};
        if (id) {
            //update 
            customerService.update(customer)
                .then(response => {
                    console.log('customer data updated successfully', response.data);
                    history.push('/el');
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                }) 
        } else {
            //create 
            customerService.create(customer)
            .then(response => {
                console.log("customer added successfully", response.data);
                history.push('/el');
            })
            .catch(error => {
                console.log('something went wroing', error);
            });
        }
        window.location.reload();
    }
// useEffect hooks is use to navigate get customers service information
    useEffect(() => {
        if (id) {
            customerService.get(cus_id)
                .then(customer => {
                    setCus_Id(customer.data.cus_id);
                    setName(customer.data.name);
                    setPhone(customer.data.phone);
                    setEmail(customer.data.email); 
                    setOrderid(customer.data.orderid);                   
                    
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                });
        }
    },[] );
    return(
        
        <div className="container">
            
            {/*  to add new customers data here */}
            <h3>Add Customer</h3>
            <hr/>
            <form>
                <div className="form-group mb-2">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="cus_id"
                        value={cus_id}
                        onChange={(e) => setCus_Id(e.target.value)}
                        placeholder="Enter Customer Id"
                    />

                </div>
                
                <div className="form-group mb-2">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter Customer Name"
                    />
                </div>
                <div className="form-group mb-2">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter Customer Phone"
                    />
                </div>
                <div className="form-group mb-2">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Customer Email"
                    />
                </div>
                <div className="form-group mb-2">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="orderid"
                        value={orderid}
                        onChange={(e) => setOrderid(e.target.value)}
                        placeholder="Enter Customer Orderid"
                    />

                </div>
                {/* save customer form data */}
                <div >
                    <button className="btn btn-primary" onClick={(e) => saveCustomer(e)}>Save Customer Information</button>
                </div>
                
            </form>
            <hr/>
          {/* to navigate the back to the customers information list page */}
            <Link className=" btn btn-primary mb-2" to="/el" >Back to List  </Link>
          
        </div>
        
    )
    
}

export default AddCustomer;