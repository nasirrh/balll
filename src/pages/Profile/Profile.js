import React,{useState,useEffect} from 'react'
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/esm/Row';
import { useParams } from 'react-router-dom';
import Spiner from "../../components/Spiner/Spiner";
import { singleUsergetfunc } from '../../services/Apis';
import moment from "moment"
import "./profile.css"

const Profile = () => {
  
  const [userprofile, setUserProfile] = useState({});
  const [showspin, setShowSpin] = useState(true);

  const {id} = useParams();
  

  const userProfileGet = async()=>{
    const response = await singleUsergetfunc(id);
    
    if(response.status === 200){
      setUserProfile(response.data)
    }else{
      console.log("error");
    }
  }
   
  useEffect(() => {
    userProfileGet();
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
                  <span>{userprofile.category}</span>
                </h4>
                <h5>
                  <i class="fa-brands fa-product-hunt"></i>&nbsp;:-
                  <span>{userprofile.product}</span>
                </h5>
                <h5>
                  <i class="fa-solid fa-calendar-days"></i>&nbsp;:-
                  <span>{userprofile.dateofsale}</span>
                </h5>
                <h5>
                  <i class="fa-solid fa-location-dot"></i>&nbsp;:-
                  <span>{userprofile.rgioncode}</span>
                </h5>
                <h5>
                  <i class="fa-solid fa-store"></i>&nbsp;:-
                  <span>{userprofile.storecode}</span>
                </h5>

                <h5>
                  <i class="fa-solid fa-money-check-dollar"></i>&nbsp;:-
                  <span>{userprofile.amount}</span>
                </h5>
                <h5>
                  <i class="fa-sharp fa-solid fa-tag"></i>&nbsp;:-
                  <span>{userprofile.tax}</span>
                </h5>
                <h5>
                  <i class="fa-solid fa-hand-holding-dollar"></i>&nbsp;:-
                  <span>{userprofile.totalamount}</span>
                </h5>
                <h5>
                  status&nbsp;:-
                  <span>{userprofile.status}</span>
                </h5>

                <h5>
                  <i class="fa-solid fa-calendar-days"></i>&nbsp;:-Date
                  Created&nbsp;:-
                  <span>{moment(userprofile.datecreated).format("DD-MM-YYYY")}</span>
                </h5>

                <h5>
                  <i class="fa-solid fa-calendar-days"></i>&nbsp;:-Date
                  Updated&nbsp;:-
                  <span>{userprofile.dateUpdated}</span>
                </h5>
              </div>
            </Card.Body>
          </Card>
        </div>
      )}
    </>
  );
}

export default Profile
