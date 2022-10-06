import{useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import customerService from "../services/customer.service";
import{Link} from "react-router-dom";
 
const CustomersList =() =>{
  const[customers,setCustomer]=useState([]);

useEffect(()=>
{
init();
  
},[])

const init=() =>{
  customerService.getAll()
.then(response =>{
  console.log('Print Data',response.data);
  setCustomer(response.data);
})
.catch(error =>{
    console.log('something went wrong',error);
});

}

const handleDelete= cus_id=>{
  customerService.remove(cus_id)
  .then(response =>{
    console.log('Customer delete succefully', response.data);
    init();
  })
  .catch(error =>{
    console.log('something went wrong',error);
  })
}

return(
  <div className="container">
    <h3>Customer Information</h3>
    <div>
      {/* <Link to="/add" className="btn btn-primary mb-2">Add Customer</Link> */}
      <a className=" btn btn-primary mb-2" href="/add">Add Customer  </a>
       <hr/>
      
      <table border="1" cellpadding="10" className="table table-bordered table-striped">
      <thead className="thead-dark">
        <tr>
        <th>Customer Id</th>
        <th>Customer Name</th>
        <th>Customer Phone</th>
        <th>Customer Email</th>
        <th>Customer Order-Id</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
      {
        customers.map(customer =>(
          <tr key={customer.id}>
         <td> {customer.cus_id}</td>
         <td> {customer.name}</td>
         <td> {customer.phone}</td>
         <td> {customer.email}</td>         
         <td> {customer.orderid}</td>
         <td>
          <Link className="btn btn-info" to={'/customers/edit/${customer.cus_id}'}> Update </Link>
          
          
          <button className="btn btn-danger ml-2" onClick={(e)=>{handleDelete(customer.cus_id)
            }}> Delete </button>
          
         </td>
         </tr>
        )) 
      }
      </tbody>
      </table>
    </div>
  </div>
 

);
}
export default CustomersList;