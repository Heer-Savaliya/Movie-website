import React from "react";
import { NavLink, useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const handleGoBack=()=>{
    navigate(-1);
  }
  if(error.status === 404){
  return (
    <div className="error-section">
      <img
        src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
        alt="404 page not found"
      />

      <div className="text-center">
        <p>The page you were lookin for could not be found</p>
        <p>...Back to previous</p>
      </div>
      <div className="btn-holder">
        <NavLink to="/" className="btn">
          Go Back to Home page
        </NavLink>
        <button className="btn" onClick={handleGoBack}>Go back</button>
      </div>
    </div>
  );
}
return <h1>The page you are looking does not exist</h1>
};

export default Error;
