import React, { useContext, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Tables from "../../components/Tables/Tables";
import Spiner from "../../components/Spiner/Spiner";
import { useNavigate } from "react-router-dom";
import { addData } from "../../components/context/ContextProvider";
import Alert from "react-bootstrap/Alert";
import "./home.css";


const Home = () => {
  const [showspin, setShowSpin] = useState(true);

  const { useradd, setUseradd } = useContext(addData);

  const navigate = useNavigate();
  const adduser = () => {
    navigate("/register");
  };

  useEffect(() => {
    setTimeout(() => {
      setShowSpin(false);
    }, 1200);
  }, []);
  return (
    <>
      {
        useradd ? <Alert variant="success" onClose={()=> setUseradd("")} dismissible>{useradd.category} Successfully Added</Alert> :  ""
      }
      <div className="container">
        <div className="main_div">
          {/* Serach  add */}

          <div className="search_add mt-4 d-flex justify-content-between">
            <div className="search col-lg-4">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success" className="search_btn">
                  Search
                </Button>
              </Form>
            </div>
            <div className="add_btn">
              <Button variant="outline-primary" onClick={adduser}>
                <i class="fa-solid fa-plus"></i>&nbsp; Add User
              </Button>
            </div>
          </div>

          {/* export , category, status*/}

          <div className="filter_div mt-5 d-flex justify-content-between flex-wrap">
            <div className="export_csv">
              <Button className="export_btn">export to csv</Button>
            </div>
            <div className="filter_category">
              <div className="filter">
                <h3>Filter by Category</h3>
                <div className="category d-flex justify-content-around">
                  <div>
                    <Form.Check
                      type={"radio"}
                      label={`Cricket`}
                      name="category"
                      value={"Cricket"}
                      defaultChecked
                    />

                    <Form.Check
                      type={"radio"}
                      label={`FootBall`}
                      name="category"
                      value={"FootBall"}
                    />

                    <Form.Check
                      type={"radio"}
                      label={`Cricket`}
                      name="category"
                      value={"Tennis"}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* short by value */}

            <div className="filter_newold">
              <h3>Date Range</h3>
              <Dropdown className="text-center">
                <Dropdown.Toggle className="dropdown_btn" id="dropdown-basic">
                  <i class="fa-solid fa-sort"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    <label for="startDate">Start</label>
                    <input id="startDate" class="form-control" type="date" />
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <label for="startDate">Start</label>
                    <input id="startDate" class="form-control" type="date" />
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            {/* filter by status */}
            <div className="filter_status">
              <h3>Filter By status</h3>
              <div className="status_radio d-flex justify-content-around flex-wrap">
                <Form.Check
                  type={"radio"}
                  label={`All`}
                  name="status"
                  value={"All"}
                  defaultChecked
                />

                <Form.Check
                  type={"radio"}
                  label={`Active`}
                  name="status"
                  value={"Active"}
                />

                <Form.Check
                  type={"radio"}
                  label={`InActive`}
                  name="status"
                  value={"InActive"}
                />
              </div>
            </div>
          </div>
        </div>

        {showspin ? <Spiner /> : <Tables />}
      </div>
    </>
  );
};

export default Home;
