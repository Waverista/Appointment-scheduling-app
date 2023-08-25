import { Avatar } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { ProviderContext } from "../../components/Provider/Provider";
import {
  getProfileDetails,
  updateProfileDetails,
} from "../../utils/EndpointUtils";
import {
  handleAgeChange,
  handleEmailChange,
  handleMobileChange,
} from "../../utils/Validation";
import "./UserProfile.css";

function UserProfile() {
  const { axiosJWT } = useContext(ProviderContext);

  const userId = sessionStorage.getItem("userId");
  const [user, setUser] = useState({
    id: "",
    name: "",
    age: "",
    email: "",
    mobile: "",
  });

  useEffect(() => {
    getProfileDetails(
      axiosJWT,
      "http://localhost:4000/job-seekers",
      userId,
      setUser
    );
  }, []);

  const [errorAge, setErrorAge] = useState("");
  const [errorMobile, setErrorMobile] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  return (
    <div style={{ marginRight: 42, marginTop: 0 }}>
      <h1
        style={{
          color: "#198754",
          fontWeight: "900",
          fontSize: 45,
          marginBottom: 0,
        }}
      >
        Edit Profile
      </h1>
      <hr class="mt-0 mb-4" />
      <div class="row">
        <div class="col-xl-4">
          <div class="card mb-4 mb-xl-0">
            <div class="card-header">Profile Picture</div>
            <div class="card-body text-center">
              <Avatar
                alt={user.name}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTsu0b1R79ZeinW7a0NNTC_unCuc1-VR4_fW4qOVBQWcDoRgw4pmZnTzysiyB0zGh9Ufo&usqp=CAU"
                style={{ width: "150px", height: "150px", margin: "auto" }}
              />
              <h4 style={{ marginTop: 15 }}>{user.name}</h4>
            </div>
          </div>
        </div>
        <div class="col-xl-8">
          <div class="card mb-4">
            <div class="card-header">Account Details</div>
            <div class="card-body">
              <form>
                <div class="row gx-3 mb-3">
                  <div class="col-md-6">
                    <label class="small mb-1" for="inputFirstName">
                      Name<span className="text-danger">*</span>
                    </label>
                    <input
                      class="form-control"
                      id="inputFirstName"
                      type="text"
                      value={user.name}
                      onChange={(e) =>
                        setUser((prevUser) => ({
                          ...prevUser,
                          name: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
                <div class="row gx-3 mb-3">
                  <div class="col-md-6">
                    <label class="small mb-1" for="inputFirstName">
                      Email<span className="text-danger">*</span>
                    </label>
                    <input
                      class="form-control"
                      id="inputFirstName"
                      type="text"
                      value={user.email}
                      onChange={(e) =>
                        handleEmailChange(e, setUser, setErrorEmail)
                      }
                    />
                    {errorEmail && <ErrorMessage errMessage={errorEmail} />}
                  </div>
                </div>
                <div class="row gx-3 mb-3">
                  <div class="col-md-6">
                    <label class="small mb-1" for="mobile">
                      Phone number<span className="text-danger">*</span>
                    </label>
                    <input
                      class="form-control"
                      id="mobile"
                      value={user.mobile}
                      required
                      onChange={(e) =>
                        handleMobileChange(e, setUser, setErrorMobile)
                      }
                    />
                    {errorMobile && <ErrorMessage errMessage={errorMobile} />}
                  </div>
                </div>
                <div class="row gx-3 mb-3">
                  <div class="col-md-6">
                    <label class="small mb-1" for="age">
                      Age<span className="text-danger">*</span>
                    </label>
                    <input
                      class="form-control"
                      id="age"
                      required
                      max={120}
                      min={1}
                      type="number"
                      value={user.age}
                      onChange={(e) => handleAgeChange(e, setUser, setErrorAge)}
                    />
                    {errorAge && <ErrorMessage errMessage={errorAge} />}
                  </div>
                </div>
                <button
                  class="btn btn-success"
                  type="button"
                  onClick={() =>
                    updateProfileDetails(
                      axiosJWT,
                      "job-seekers",
                      user.id,
                      user,
                      setUser
                    )
                  }
                >
                  Save changes
                </button>
              </form>
            </div>
          </div>
          {/* <div class="card mb-4">
            <div class="card-header">Change password</div>
            <div class="card-body">
              <form>
                <div class="row gx-3 mb-3">
                  <div class="col-md-6">
                    <label class="small mb-1" for="currentPass">
                      Current password
                    </label>
                    <input class="form-control" id="currentPass" type="text" />
                  </div>
                </div>
                <div class="row gx-3 mb-3">
                  <div class="col-md-6">
                    <label class="small mb-1" for="newPass">
                      New password
                    </label>
                    <input class="form-control" id="newPass" type="text" />
                  </div>
                </div>
                <div class="row gx-3 mb-3">
                  <div class="col-md-6">
                    <label class="small mb-1" for="confirmNewPass">
                      Cinfirm new password
                    </label>
                    <input class="form-control" id="confirmNewPass" />
                  </div>
                </div>
                <button class="btn btn-success" type="button">
                  Update password
                </button>
              </form>
            </div>
          </div> */}
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
