import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import MuiDateTimePicker from "../../components/MuiDateTimePicker";
import { ProviderContext } from "../../components/Provider/Provider";
import {
  addAvailableTime,
  getProfileDetails,
  updateProfileDetails,
} from "../../utils/EndpointUtils";
import "./ConsultantProfile.css";

function ConsultantProfile() {
  const { axiosJWT } = useContext(ProviderContext);

  const userId = sessionStorage.getItem("userId");
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    mobile: "",
    address: "",
    description: "",
    country: "",
    job_type: "",
  });

  useEffect(() => {
    getProfileDetails(
      axiosJWT,
      "http://localhost:4000/consultants",
      userId,
      setUser
    );
  }, []);

  const [selectedStartDate, setSelectedStartDate] = useState(dayjs());
  const [selectedStartTime, setSelectedStartTime] = useState(dayjs());
  const [selectedEndDate, setSelectedEndDate] = useState(dayjs());
  const [selectedEndTime, setSelectedEndTime] = useState(dayjs());

  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();

  // Handle the start date change
  const handleStartDateChange = (date) => {
    setSelectedStartDate(date);
  };

  // Handle the start time change
  const handleStartTimeChange = (time) => {
    setSelectedStartTime(time);
  };
  // Handle the end date change
  const handleEndDateChange = (date) => {
    setSelectedEndDate(date);
  };

  // Handle the end time change
  const handleEndTimeChange = (time) => {
    setSelectedEndTime(time);
  };

  useEffect(() => {
    setStartTime(
      `${dayjs(selectedStartDate).format("YYYY-MM-DD")} ${dayjs(
        selectedStartTime
      ).format("HH:mm")}:00`
    );
    setEndTime(
      `${dayjs(selectedEndDate).format("YYYY-MM-DD")} ${dayjs(
        selectedEndTime
      ).format("HH:mm")}:00`
    );
  }, [selectedEndTime, selectedEndDate, selectedStartTime, selectedStartDate]);

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
              <label class="form-label" for="customFile">
                Upload your image
              </label>
              <input
                type="file"
                class="form-control"
                id="customFile"
                accept="image/png, image/jpeg"
              />
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
                    <label class="small mb-1" for="inputAddress">
                      Address
                    </label>
                    <input
                      class="form-control"
                      id="inputAddress"
                      type="text"
                      value={user.address}
                      onChange={(e) =>
                        setUser((prevUser) => ({
                          ...prevUser,
                          address: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
                <div class="row gx-3 mb-3">
                  <div class="col-md-6">
                    <label class="small mb-1" for="inputDescription">
                      Description
                    </label>
                    <input
                      class="form-control"
                      id="inputDescription"
                      type="text"
                      value={user.description}
                      onChange={(e) =>
                        setUser((prevUser) => ({
                          ...prevUser,
                          description: e.target.value,
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
                    <label class="small mb-1" for="category">
                      Job type
                    </label>
                    <select
                      class="form-select"
                      id="jType"
                      aria-label="Dropdown"
                      value={user.job_type} // Set the selected value from state
                      onChange={(e) =>
                        setUser((prevUser) => ({
                          ...prevUser,
                          job_type: e.target.value, // Update job_type in state
                        }))
                      }
                    >
                      <option value="Information Technology (IT)">
                        Information Technology (IT)
                      </option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Business and Finance">
                        Business and Finance
                      </option>
                      <option value="Education">Education</option>
                      <option value="Engineering">Engineering</option>
                      <option value="Arts and Media">Arts and Media</option>
                      <option value="Retail and Sales">Retail and Sales</option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Legal">Legal</option>
                      <option value="Construction and Trades">
                        Construction and Trades
                      </option>
                      <option value="Hospitality and Tourism">
                        Hospitality and Tourism
                      </option>
                      <option value="Science and Research">
                        Science and Research
                      </option>
                    </select>
                  </div>
                </div>
                <div class="row gx-3 mb-3">
                  <div class="col-md-6">
                    <label class="small mb-1" for="country">
                      Country
                    </label>
                    <select
                      class="form-select"
                      id="country"
                      aria-label="Dropdown"
                      value={user.country}
                      onChange={(e) =>
                        setUser((prevUser) => ({
                          ...prevUser,
                          country: e.target.value,
                        }))
                      }
                    >
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="India">India</option>
                      <option value="China">China</option>
                      <option value="Japan">Japan</option>
                      <option value="Brazil">Brazil</option>
                      <option value="Germany">Germany</option>
                      <option value="Russia">Russia</option>
                      <option value="France">France</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Italy">Italy</option>
                      <option value="Argentina">Argentina</option>
                      <option value="Spain">Spain</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                    </select>
                  </div>
                </div>
                <button
                  class="btn btn-success"
                  type="button"
                  onClick={() =>
                    updateProfileDetails(
                      axiosJWT,
                      "consultants",
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
          <div class="card mb-4">
            <div class="card-header">Add available time</div>
            <div class="card-body">
              <form>
                <div className="d-flex ">
                  <div className="">
                    <label class="small mb-1" for="startTime">
                      Start date
                    </label>
                    <MuiDateTimePicker
                      time={false}
                      onDateChange={handleStartDateChange}
                    />
                  </div>
                  &nbsp; &nbsp; &nbsp; &nbsp;
                  <div className="">
                    <label class="small mb-1" for="startTime">
                      Start time
                    </label>
                    <MuiDateTimePicker
                      variant="desktop"
                      date={false}
                      onTimeChange={handleStartTimeChange}
                    />
                  </div>
                </div>
                <div className="d-flex" style={{ marginTop: 20 }}>
                  <div className="">
                    <label class="small mb-1" for="startTime">
                      End date
                    </label>
                    <MuiDateTimePicker
                      time={false}
                      onDateChange={handleEndDateChange}
                    />
                  </div>
                  &nbsp; &nbsp; &nbsp; &nbsp;
                  <div className="">
                    <label class="small mb-1" for="endTime">
                      End time
                    </label>
                    <MuiDateTimePicker
                      variant="desktop"
                      date={false}
                      onTimeChange={handleEndTimeChange}
                    />
                  </div>
                </div>
                <br />
                <button
                  class="btn btn-success"
                  type="button"
                  onClick={() => addAvailableTime(axiosJWT, startTime, endTime)}
                >
                  Add time
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

export default ConsultantProfile;
