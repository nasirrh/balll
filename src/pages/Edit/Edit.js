import React, { useState, useEffect, useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Select from "react-select";
import Spiner from "../../components/Spiner/Spiner";
import { singleUsergetfunc,editfunc } from "../../services/Apis";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./edit.css";
import { updateData } from "../../components/context/ContextProvider";

const Edit = () => {
  const [inputdata, setInputData] = useState({
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
  

  const [status, setStatus] = useState("Active");

  const [showspin, setShowSpin] = useState(true);
   

  const { update, setUpdate } = useContext(updateData)
   const navigate = useNavigate();
   
    const { id } = useParams();

  //status
  const options = [
    { value: "Active", label: "Active" },
    { value: "InActive", label: "InActive" },
  ];

  //setInput value

  const setInputValue = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputdata, [name]: value });
  };

  //status set

  const setStatusvalue = (e) => {
    setStatus(e.value);
  };


  

  const userProfileGet = async () => {
    const response = await singleUsergetfunc(id);

    if (response.status === 200) {
       
      setInputData(response.data);
      setStatus(response.data.status)
    } else {
      console.log("error");
    }
  };

  //submit userdata
  const submitUserData = async(e) => {
    e.preventDefault();

    const {
      category,
      product,
      dateofsale,
      rgioncode,
      storecode,
      noofpieces,
      amount,
      tax,
      totalamount,
    } = inputdata;

    if (category === "") {
      toast.error("Category is required");
    } else if (product === "") {
      toast.error("Product is required");
    } else if (dateofsale === "") {
      toast.error("date Of sale is required");
    } else if (rgioncode === "") {
      toast.error("region code is required");
    }else if (storecode === "") {
      toast.error("store code is required");
    } else if (noofpieces === "") {
      toast.error("Num of pieces required");
    } else if (amount === "") {
      toast.error("Amount is needed");
    } else if (tax === "") {
      toast.error("What is tax of this product");
    } else if (totalamount === "") {
      toast.error("What is the total amount of these product");
    } else if (status === "") {
      toast.error("status is required");
    } else {
      const data = new FormData();
      data.append("category", category);
      data.append("product", product);
      data.append("dateofsale", dateofsale);
      data.append("rgioncode", rgioncode);
      data.append("storecode", storecode);
      data.append("noofpieces", noofpieces);
      data.append("amount", amount);
      data.append("tax", tax);
      data.append("totalamount", totalamount);
      data.append("status", status);

      const config = {
        "Content-Type": "application/json",
      };
         const response = await editfunc(id,data,config)
         if(response.status === 200){
          setUpdate(response.data)
          navigate("/")
         }
    }
  };
  useEffect(() => {
    userProfileGet()
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
          <h2 className="text-center mt-3">Edit your fav sports prducts</h2>
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
                    label={`Cricket`}
                    name="Category"
                    value={"Cricket"}
                    checked={inputdata.category == "Cricket" ? true : false}
                    onChange={setInputValue}
                  />
                  <Form.Check
                    type={"radio"}
                    label={`FootBall`}
                    name="category"
                    value={"FootBall"}
                    checked={inputdata.category == "FootBall" ? true : false}
                    onChange={setInputValue}
                  />
                  <Form.Check
                    type={"radio"}
                    label={`Tennis`}
                    name="category"
                    checked={inputdata.category == "Tennis" ? true : false}
                    value={"Tennis"}
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
                    value={inputdata.rgioncode}
                    onChange={setInputValue}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>storeCode</Form.Label>
                  <Form.Control
                    type="email"
                    name="storecode"
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
                    value={inputdata.amount}
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
                  <Select
                    options={options}
                    defaultValue={status}
                    onChange={setStatusvalue}
                  />
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

export default Edit;
