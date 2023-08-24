import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo/1.png";
import { handleSignUp } from "../../utils/EndpointUtils";

function Register() {
  const navigate = useNavigate();

  const [userType, setUserType] = useState("admin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="register template d-flex justify-content-center align-items-center 100-w vh-100 bg-success">
      <img
        src={logo}
        style={{
          position: "fixed",
          transform: "rotate(-20deg)",
          bottom: "-50px",
          right: "-55px",
          marginBottom: "-20px",
          borderRadius: "12px",
          width: "550px",
          opacity: ".1",
        }}
        alt="logo"
      />
      <div className="50-w p-5 rounded bg-white" style={{ zIndex: "10" }}>
        <form
          onSubmit={(e) =>
            handleSignUp(e, userType, name, email, password, navigate)
          }
        >
          <div className="text-center">
            <img
              src={logo}
              style={{
                marginBottom: "-20px",
                borderRadius: "100px",
                width: "150px",
              }}
              alt="logo"
            />
          </div>
          <h3 className="text-center">Sign Up</h3>
          <br />
          <div className="mb-3 d-flex justify-content-start">
            <div className="">
              <label htmlFor="user-type">
                User Type<span className="text-danger">*</span>
              </label>
            </div>
            <div>&nbsp;</div>
            <div className="">
              <select
                className="form-select"
                aria-label="Default select example"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
              >
                <option disabled>Select this option</option>
                <option value="admin">Admin</option>
                <option value="consultant">Consultant</option>
                <option value="job-seeker">Job Seeker</option>
              </select>
            </div>
          </div>
          <div className="mb-1">
            <label htmlFor="fName">
              Name<span className="text-danger">*</span>
            </label>
            <input
              type="fName"
              placeholder="Enter full name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">
              Email<span className="text-danger">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">
              Password<span className="text-danger">*</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid">
            <button
              className={`btn btn-success ${
                (!name || !email || !password) && "disabled"
              }`}
            >
              Sign Up
            </button>
          </div>
          <p className="text-center mt-3">
            Already Registered{" "}
            <Link to="/" className="ms-2">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
