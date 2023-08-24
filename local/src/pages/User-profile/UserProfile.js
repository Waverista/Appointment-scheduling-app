import { useContext, useEffect, useState } from "react";
import { ProviderContext } from "../../components/Provider/Provider";
import {
  getProfileDetails,
  updateProfileDetails,
} from "../../utils/EndpointUtils";
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
              <img
                class="img-account-profile rounded-circle mb-2"
                src="http://bootdey.com/img/Content/avatar/avatar1.png"
                alt=""
              />
              <div class="small font-italic text-muted mb-4">
                JPG or PNG no larger than 5 MB
              </div>
              <button class="btn btn-success" type="button">
                Upload new image
              </button>
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
                      Name
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
                      Email
                    </label>
                    <input
                      class="form-control"
                      id="inputFirstName"
                      type="text"
                      value={user.email}
                      onChange={(e) =>
                        setUser((prevUser) => ({
                          ...prevUser,
                          email: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
                <div class="row gx-3 mb-3">
                  <div class="col-md-6">
                    <label class="small mb-1" for="mobile">
                      Phone number
                    </label>
                    <input
                      class="form-control"
                      id="mobile"
                      value={user.mobile}
                      onChange={(e) =>
                        setUser((prevUser) => ({
                          ...prevUser,
                          mobile: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
                <div class="row gx-3 mb-3">
                  <div class="col-md-6">
                    <label class="small mb-1" for="age">
                      Age
                    </label>
                    <input
                      class="form-control"
                      id="age"
                      type="number"
                      value={user.age}
                      onChange={(e) =>
                        setUser((prevUser) => ({
                          ...prevUser,
                          age: parseInt(e.target.value),
                        }))
                      }
                    />
                  </div>
                </div>
                {/* <div class="row gx-3 mb-3">
                  <div class="col-md-6">
                    <label class="small mb-1" for="dob">
                      Date of birth
                    </label>
                    <input class="form-control" id="dob" type="date" />
                  </div>
                </div> */}
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
