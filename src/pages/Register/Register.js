import React, { useState,useEffect, useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row';
import Select from "react-select";
import Spiner from "../../components/Spiner/Spiner";
import { registerfunc } from "../../services/Apis";
import {ToastContainer, toast} from "react-toastify"
import {useNavigate} from "react-router-dom"
 import "react-toastify/dist/ReactToastify.css";
import "./register.css";
import { addData } from "../../components/context/ContextProvider";

const Register = () => {
      
  const [inputdata, setInputData] = useState({
    category:"",
    product: "",
    dateofsale: "",
    rgioncode: "",
    storecode:"",
    noofpieces:"",
    amount:"",
    tax:"",
    totalamount:"",

  });
  // console.log(inputdata);

  const[status,setStatus] = useState("Active");
  const [showspin, setShowSpin] = useState(true);

  const navigate = useNavigate();

  const {useradd, setUseradd} = useContext(addData)
  

  //status
  const options = [
    { value: "Active", label: "Active" },
    { value: "InActive", label: "InActive" },
  ];


  //setInput value

  const setInputValue = (e)=>{
    const {name,value} = e.target;
    setInputData({...inputdata,[name]:value})
  }

  //status set

  const setStatusvalue = (e)=>{
     setStatus(e.value)
  }

  //submit userdata
  const submitUserData=async(e)=>{
    e.preventDefault();

    const { category,
    product,
    dateofsale,
    rgioncode,
    storecode,
    noofpieces,
    amount,
    tax,
    totalamount,  } = inputdata;

      if (category === ""){
        toast.error("Category is required")
        
      }else if(product ===""){
        toast.error("Product is required")
      }else if(dateofsale===""){
        toast.error("date Of sale is required")
      }else if(rgioncode ===""){
        toast.error("region code is required")
      }else if(storecode ===""){
        toast.error("store code is required")
      }else if(noofpieces===""){
        toast.error("Num of pieces required")
      }else if(amount===""){
        toast.error("Amount is needed")
      }else if(tax===""){
        toast.error("What is tax of this product")
      }else if (totalamount===""){
        toast.error("What is the total amount of these product")
      }else if (status ===""){
        toast.error("status is required")
      } else{
      

        const data = new FormData();
         data.append("category", category)
         data.append("product", product);
         data.append("dateofsale", dateofsale);
         data.append("rgioncode", rgioncode);
         data.append("storecode", storecode);
         data.append("noofpieces", noofpieces);
         data.append("amount", amount);
         data.append("tax", tax);
         data.append("totalamount", totalamount);
         data.append("status", status)

         const config = {
           "Content-Type": "application/json",
         };
         

         const response = await registerfunc(data,config)
         

         if(response.status === 200){
          setInputData({
            ...inputdata,
            category: "",
            product: "",
            dateofsale: "",
            rgioncode: "",
            storecode:"",
            noofpieces: "",
            amount: "",
            tax: "",
            totalamount: "",
            
          });
          setStatus("")
          setUseradd(response.data)
          navigate("/")
         }else{
          toast.error("Error!")
         }


      }

  }
   useEffect(() => {
     setTimeout(() => {
       setShowSpin(false);
     }, 1200);
   }, []);



  return (
    <>
      {showspin ? (
        <Spiner />
      ) : (
        <div className="container">
          <h2 className="text-center mt-3">Register your fav sports prducts</h2>
          <Card className="shadow mt-5 p-3">
            <div className="profile_div text-center">
              <img src="/bat.jpg" alt="" />
            </div>

            <Form>
              <Row>
                <Form.Group
                  className="mb-3 col-lg-6 "
                  controlId="formBasicEmail"
                >
                  <Form.Label>Select Your Sports Category</Form.Label>

                  <Form.Check
                    type={"radio"}
                    label={`FootBall`}
                    name="category"
                    value={"FootBall"}
                    onChange={setInputValue}
                  />
                  <Form.Check
                    type={"radio"}
                    label={`Tennis`}
                    name="category"
                    value={"Tennis"}
                    onChange={setInputValue}
                  />
                  <Form.Check
                    type={"radio"}
                    label={`Cricket`}
                    name="category"
                    value={"Cricket"}
                    onChange={setInputValue}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="product"
                    placeholder="Product Name"
                    value={inputdata.product}
                    onChange={setInputValue}
                  />
                </Form.Group>
                <div className="col-lg-6">
                  <label for="startDate">DateOfSale</label>
                  <input
                    id="startDate"
                    class="form-control"
                    type="date"
                    name="dateofsale"
                    value={inputdata.dateofsale}
                    onChange={setInputValue}
                  />
                </div>

                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>RgionCode</Form.Label>
                  <Form.Control
                    type="email"
                    name="rgioncode"
                    placeholder="Rgion Code"
                    value={inputdata.rgioncode}
                    onChange={setInputValue}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>StoreCode</Form.Label>
                  <Form.Control
                    type="email"
                    name="storecode"
                    placeholder="Store Code"
                    value={inputdata.storecode}
                    onChange={setInputValue}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>NoOfPieces</Form.Label>
                  <Form.Control
                    type="email"
                    name="noofpieces"
                    placeholder="5"
                    value={inputdata.noofpieces}
                    onChange={setInputValue}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    type="email"
                    name="amount"
                    onChange={setInputValue}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Tax</Form.Label>
                  <Form.Control
                    type="email"
                    name="tax"
                    value={inputdata.tax}
                    onChange={setInputValue}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3 col-lg-6 "
                  controlId="formBasicEmail"
                >
                  <Form.Label>TotalAmount</Form.Label>
                  <Form.Control
                    type="email"
                    name="totalamount"
                    value={inputdata.totalamount}
                    onChange={setInputValue}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3 col-lg-6 "
                  controlId="formBasicEmail"
                >
                  <Form.Label>Active Sports Category</Form.Label>
                  <Select options={options} onChange={setStatusvalue} />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  onClick={submitUserData}
                >
                  Submit
                </Button>
              </Row>
            </Form>
          </Card>

          <ToastContainer position="top-center" />
        </div>
      )}
    </>
  );
};

export default Register;
