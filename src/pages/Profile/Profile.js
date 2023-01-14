import React from 'react'
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/esm/Row';
import "./profile.css"

const Profile = () => {
  return (
    <>
      <div className="container">
        <Card className="card-profile shadow col-lg-6 mx-auto mt-5">
          <Card.Body>
            <Row>
              <div className="col">
                <div className="card-profile-stats d-flex justify-content-center">
                  <img src="/bat.jpg" alt="" />
                </div>
              </div>
            </Row>
            <div className="text-center">
              <h4>
                <i class="fa-solid fa-circle-info"> </i>&nbsp;:-
                <span>Cricket</span>
              </h4>
              <h5>
                <i class="fa-brands fa-product-hunt"></i>&nbsp;:-
                <span>Helmet</span>
              </h5>
              <h5>
                <i class="fa-solid fa-calendar-days"></i>&nbsp;:-
                <span>20/12/2022</span>
              </h5>
              <h5>
                <i class="fa-solid fa-code-compare"></i>&nbsp;:-
                <span>201308</span>
              </h5>
              <h5>
                <i class="fa-solid fa-store"></i>&nbsp;:-
                <span>0011North</span>
              </h5>
              <h5>
                <i class="fa-solid fa-location-dot"></i>&nbsp;:-
                <span>Delhi</span>
              </h5>
              <h5>
                <i class="fa-solid fa-money-check-dollar"></i>&nbsp;:-
                <span>2000</span>
              </h5>
              <h5>
                <i class="fa-sharp fa-solid fa-tag"></i>&nbsp;:-
                <span>13%</span>
              </h5>
              <h5>
                <i class="fa-solid fa-hand-holding-dollar"></i>&nbsp;:-
                <span>3300</span>
              </h5>
              <h5>
                status&nbsp;:-
                <span>Active</span>
              </h5>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Profile
