import React, { useContext, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Tables from "../../components/Tables/Tables";
import Spiner from "../../components/Spiner/Spiner";
import { NavLink, useNavigate } from "react-router-dom";
import { addData, dltdata, updateData } from "../../components/context/ContextProvider";
import {usergetfunc, deletefunc, exporttocsvfunc, } from "../../services/Apis";
import Alert from "react-bootstrap/Alert";
import "./home.css";
import { toast } from "react-toastify";




const Home = () => {
  const [userdata,setUserData] = useState([]);
  const [showspin, setShowSpin] = useState(true);
  const [search,setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const [sort, setSort] = useState("new");
  const [page,setPage] = useState(1);
  const [pageCount,setPageCount] = useState(0)
  // const [startDate,setStartDate] = useState("")
  // const [endDate, setEndDate] = useState("");
  const [dateofsale,setDateOfSale] = useState("")

  
  
  
  

  const { useradd, setUseradd } = useContext(addData);

  const { update, setUpdate } = useContext(updateData);
  const { deletedata, setDLtdata } = useContext(dltdata)
  

  const navigate = useNavigate();  const adduser = () => {
    navigate("/register");
    
  };

     
     
  //get user
  const userGet = async()=>{
    const response = await usergetfunc(
      search,
      category,
      status,
      sort,
      page,
      // startDate,endDate
      dateofsale
    );
          
     if(response.status === 200){
      setUserData(response.data.usersdata)
      setPageCount(response.data.Pagination.pageCount)
     }else{
      console.log("error Hai Bhai");
     }
  }

  //user delete
  const deleteUser = async(id)=>{
    
     const response = await deletefunc(id);
     if(response.status === 200){
      userGet();
      setDLtdata(response.data)
     }else{
      toast.error("error")
     }
  }

  //export user

  const exportuser = async()=>{
    const response = await exporttocsvfunc();
    if(response.status === 200){
      window.open(response.data.downloadUrl,"blank")
    }else{
      toast.error("error!")
    }

    
  }


  //pagination
   
  const handlePrevious = ()=>{
    setPage(()=>{
      if(page === 1) return page;
      return page - 1
    })
  }

  const handleNext = ()=>{
    setPage(()=>{
      if(page === pageCount) return page;
      return page + 1
    })
  }

  //daterange

  // const userDateGet = async()=>{
  //   const response = await daterangefunc()
  //   console.log(response);
  // }
  

  useEffect(() => {
    userGet();

    setTimeout(() => {
      setShowSpin(false);
    }, 1200);
  }, [search, category, status, sort, page, dateofsale]);
  return (
    <>
      {useradd ? (
        <Alert variant="success" onClose={() => setUseradd("")} dismissible>
          {useradd.category} Successfully Added
        </Alert>
      ) : (
        ""
      )}

      {update ? (
        <Alert variant="primary" onClose={() => setUpdate("")} dismissible>
          {update.category} Successfully update
        </Alert>
      ) : (
        ""
      )}

      {deletedata ? (
        <Alert variant="danger" onClose={() => setDLtdata("")} dismissible>
          {deletedata.category} Successfully Delete
        </Alert>
      ) : (
        ""
      )}

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
                  onChange={(e) => setSearch(e.target.value)}
                />
                <Button variant="outline-success" className="search_btn">
                  Search
                </Button>
              </Form>
            </div>
            <NavLink to={`/agg`}>
              <div className="add_btn">
                <Button variant="outline-info">
                  <i class="fa-solid fa-bolt"></i>&nbsp; Aggregate
                </Button>
              </div>
            </NavLink>

            <div className="add_btn">
              <Button variant="outline-primary" onClick={adduser}>
                <i class="fa-solid fa-plus"></i>&nbsp; Add User
              </Button>
            </div>
          </div>

          {/* export , category, status*/}

          <div className="filter_div mt-5 d-flex justify-content-between flex-wrap">
            <div className="export_csv">
              <Button className="export_btn" onClick={exportuser}>
                Export to csv
              </Button>
            </div>
            <div className="filter_category">
              <div className="filter">
                <h3>Filter by Category</h3>
                <div className="category d-flex justify-content-around">
                  <div>
                    <Form.Check
                      type={"radio"}
                      label={`All`}
                      name="category"
                      value={"All"}
                      onChange={(e) => setCategory(e.target.value)}
                      defaultChecked
                    />

                    <Form.Check
                      type={"radio"}
                      label={`Cricket`}
                      name="category"
                      value={"Cricket"}
                      onChange={(e) => setCategory(e.target.value)}
                    />

                    <Form.Check
                      type={"radio"}
                      label={`FootBall`}
                      name="category"
                      value={"FootBall"}
                      onChange={(e) => setCategory(e.target.value)}
                    />

                    <Form.Check
                      type={"radio"}
                      label={`Tennis`}
                      name="category"
                      value={"Tennis"}
                      onChange={(e) => setCategory(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* short by value */}

            <div className="filter_newold">
              <h3>Short By value</h3>
              <Dropdown className="text-center">
                <Dropdown.Toggle className="dropdown_btn" id="dropdown-basic">
                  <i class="fa-solid fa-sort"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setSort("new")}>
                    New
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setSort("old")}>
                    old
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
                  onChange={(e) => setStatus(e.target.value)}
                  defaultChecked
                />

                <Form.Check
                  type={"radio"}
                  label={`Active`}
                  name="status"
                  value={"Active"}
                  onChange={(e) => setStatus(e.target.value)}
                />

                <Form.Check
                  type={"radio"}
                  label={`InActive`}
                  name="status"
                  value={"InActive"}
                  onChange={(e) => setStatus(e.target.value)}
                />
              </div>
            </div>

            <div className="date_range">
              <h3>Date Range</h3>
              <div className="status_radio d-flex justify-content-around flex-wrap">
                <div className="startDate">
                  <label for="start_date">start_date</label>

                  <input
                    id="startDate"
                    class="form-control"
                    type="date"
                    name="startdate"
                    onChange={(e) => setDateOfSale(e.target.value)}
                  />
                </div>
                <div className="endDate">
                  <label for="end_date">end_date</label>

                  <input
                    id="endDate"
                    class="form-control"
                    type="date"
                    name="enddate"
                    onChange={(e) => setDateOfSale(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {showspin ? (
          <Spiner />
        ) : (
          <Tables
            userdata={userdata}
            deleteUser={deleteUser}
            userGet={userGet}
            handlePrevious={handlePrevious}
            handleNext={handleNext}
            page={page}
            pageCount={pageCount}
            setPage={setPage}
            // startDate={startDate}
            // endDate={endDate}
          />
        )}
      </div>
    </>
  );
};

export default Home;
