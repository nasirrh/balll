import React from 'react'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import Dropdown from 'react-bootstrap/Dropdown'
import Badge from 'react-bootstrap/Badge'
import "./table.css"

const Tables = () => {
  return (
    <>
      <div className="container">
        <Row>
          <div className="col mt-0">
            <Card className="shadow">
              <Table className="aligin-align-items-center" responsive="sm">
                <thead className="thead-dark">
                  <tr className="table-dark">
                    <th>ID</th>
                    <th>Category</th>
                    <th>Product Name</th>
                    <th>Date Of Sale</th>
                    <th>region Code</th>
                    
                    <th>No Of Pieces</th>
                    <th>Amount</th>
                    <th>Tax</th>
                    <th>Total Amount</th>
                    <th>Active Sport Category</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Cricket</td>
                    <td>Bat</td>
                    <td>01/01/2023</td>
                    <td>201308</td>
                    
                    <td>10</td>
                    <td>2000</td>
                    <td>12%</td>
                    <td>3200</td>
                    <td className="d-flex align-items-center">
                      <Dropdown className="text-center">
                        <Dropdown.Toggle
                          className="dropdown_btn"
                          id="dropdown-basic"
                        >
                          <Badge bg="primary">
                            Active<i class="fa-solid fa-angle-down"></i>
                          </Badge>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item>Active</Dropdown.Item>
                          <Dropdown.Item>InActive</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                    <td>
                      <Dropdown variant="light" className="text-center">
                        <Dropdown.Toggle className="action" id="dropdown-basic">
                          <i class="fa-solid fa-ellipsis-vertical"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item>
                            <i
                              class="fa-solid fa-eye"
                              style={{ color: "green" }}
                            ></i>
                            <span>View</span>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <i
                              class="fa-solid fa-pen-to-square"
                              style={{ color: "blue" }}
                            ></i>
                            <span>Edit</span>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <i
                              class="fa-solid fa-trash"
                              style={{ color: "red" }}
                            ></i>
                            <span>Delete</span>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>

                  <tr>
                    <td>1</td>
                    <td>Cricket</td>
                    <td>Bat</td>
                    <td>01/01/2023</td>
                    <td>201308</td>
                    
                    <td>10</td>
                    <td>2000</td>
                    <td>12%</td>
                    <td>3200</td>
                    <td className="d-flex align-items-center">
                      <Dropdown className="text-center">
                        <Dropdown.Toggle
                          className="dropdown_btn"
                          id="dropdown-basic"
                        >
                          <Badge bg="primary">
                            Active<i class="fa-solid fa-angle-down"></i>
                          </Badge>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item>Active</Dropdown.Item>
                          <Dropdown.Item>InActive</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                    <td>
                      <Dropdown variant="light" className="text-center">
                        <Dropdown.Toggle className="action" id="dropdown-basic">
                          <i class="fa-solid fa-ellipsis-vertical"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item>
                            <i
                              class="fa-solid fa-eye"
                              style={{ color: "green" }}
                            ></i>
                            <span>View</span>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <i
                              class="fa-solid fa-pen-to-square"
                              style={{ color: "blue" }}
                            ></i>
                            <span>Edit</span>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <i
                              class="fa-solid fa-trash"
                              style={{ color: "red" }}
                            ></i>
                            <span>Delete</span>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </div>
    </>
  );
}

export default Tables
