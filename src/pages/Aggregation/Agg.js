import React,{useState,useEffect} from 'react'
import Dropdown from "react-bootstrap/Dropdown";
import Row from 'react-bootstrap/esm/Row';
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/esm/Table';
import Spiner from "../../components/Spiner/Spiner";
import { aggfunc } from '../../services/Apis';


const Agg = () => {
  const [user, setUser] = useState({});
  const [showspin, setShowSpin] = useState(true);

  const userAggGet = async () => {
    const response = await aggfunc();
    if (response.status === 200) {
    
      setUser(response.data.data);
    } else {
      console.log("error for agg");
    }
  };

  useEffect(() => {
    userAggGet();
    setTimeout(() => {
      setShowSpin(false);
    }, 1200);
  }, {user});

  return (
    <>
      {showspin ? (
        <Spiner />
      ) : (
        <div className="container">
          <h2 className="text-center mt-1">Aggregate Your Tables</h2>
          <div className="agg">
            <h3>Aggregate Your Category</h3>
            <Dropdown className>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Category
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>Cricket</Dropdown.Item>
                <Dropdown.Item>FootBall</Dropdown.Item>
                <Dropdown.Item>Tennis</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Row>
              <div className="col mt-4">
                <Card className="shadow">
                  <Table
                    className="align-align-items-center"
                    responsive="sm"
                    user = {user}
                  >
                    <thead className="thead-dark">
                      <tr className="table-dark">
                        <th>ID</th>
                        <th>Category</th>
                        <th>Product Name</th>
                        <th>Date Of Sale</th>
                        <th>Region Code</th>

                        <th>No Of Pieces</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                      user.length > 0 ? user.map((element,index)=>{
                        return (
                          <>
                            <tr>
                              <td>{index}</td>
                              <td>{element.category}</td>
                              <td>{element.product}</td>
                              <td>{element.dateofsale}</td>
                              <td>{element.rgioncode}</td>

                              <td>{element.noofpieces}</td>
                              <td>{element.amount}</td>
                            </tr>
                          </>
                        );
                      }):<div> No Data available</div>
                    }
                      
                    </tbody>
                  </Table>
                </Card>
              </div>
            </Row>
          </div>
        </div>
      )}
    </>
  );
};

export default Agg
