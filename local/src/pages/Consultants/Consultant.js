import { useContext, useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GiTimeBomb } from "react-icons/gi";
import { MdSendTimeExtension } from "react-icons/md";
import Modal from "react-modal";
import ConsultantList from "../../components/ConsultantList/ConsultantList";
import ContactForm from "../../components/ContactForm/ContactForm";
import { ProviderContext } from "../../components/Provider/Provider";
import {
  getAllUsers,
  getAvailableTimeSlots,
  submitAppointment,
} from "../../utils/EndpointUtils";
import "./Consultant.css";

export default function Consultant() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [availableTimeSlot, setAvailableTimeSlot] = useState(null);
  const [selectedConsultant, setSelectedConsultant] = useState(null);
  const [showAvailableTimeTab, setShowAvailableTimeTab] = useState(false);

  const openModal = (consultant) => {
    setSelectedConsultant(consultant);
    setIsModalOpen(true);
    getAvailableTimeSlots(axiosJWT, consultant.id, setAvailableTimeSlot);
  };

  const closeModal = () => {
    setSelectedConsultant(null);
    setIsModalOpen(false);
    setAvailableTimeSlot(null);
  };

  const { axiosJWT, consultantsLst, setConsultantsLst } =
    useContext(ProviderContext);

  const [jobTypeParam, setJobTypeParam] = useState("");
  const [countryParam, setCountryParam] = useState("");

  useEffect(() => {
    getAllUsers(
      axiosJWT,
      "consultants",
      setConsultantsLst,
      jobTypeParam,
      countryParam
    );
  }, [jobTypeParam, countryParam]);

  const [userType] = useState(sessionStorage.getItem("userType"));

  return (
    <div style={{ marginRight: "50px" }}>
      <h1
        style={{
          color: "#198754",
          fontWeight: "900",
          fontSize: 45,
          marginBottom: 3,
        }}
      >
        Consultants
      </h1>
      <hr className="mt-0 mb-4" />
      <div className="d-flex">
        <div className="d-flex">
          <div>
            <h5
              style={{ marginTop: "7px", marginRight: "9px", color: "black" }}
            >
              Job Type:
            </h5>
          </div>
          <div>
            <select
              className="dropdown"
              style={{
                padding: "8px 12px",
                color: "#198754",
                fontWeight: "600",
                backgroundColor: "white",
                border: "1px solid #198754",
                cursor: "pointer",
                borderRadius: "7px",
              }}
              onChange={(e) => setJobTypeParam(e.target.value)}
            >
              <option value="" selected>
                All
              </option>
              <option value="Information Technology (IT)">
                Information Technology (IT)
              </option>
              <option value="Healthcare">Healthcare</option>
              <option value="Business and Finance">Business and Finance</option>
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
              <option value="Science and Research">Science and Research</option>
            </select>
          </div>
        </div>
        &nbsp; &nbsp; &nbsp;
        <div className="d-flex">
          <div>
            <h5
              style={{ marginTop: "7px", marginRight: "9px", color: "black" }}
            >
              Country:
            </h5>
          </div>
          <div>
            <select
              className="dropdown"
              style={{
                padding: "8px 12px",
                color: "#198754",
                fontWeight: "600",
                backgroundColor: "white",
                border: "1px solid #198754",
                cursor: "pointer",
                borderRadius: "7px",
              }}
              onChange={(e) => setCountryParam(e.target.value)}
            >
              <option value="" selected>
                All
              </option>
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
      </div>
      <br />
      <ConsultantList
        consultantsLst={consultantsLst}
        openModal={openModal}
        userType={userType}
        // deleteUser={deleteUser}
      />
      {selectedConsultant && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          style={{
            content: {
              width: "800px",
              height: "700px",
              margin: "auto",
              overflow: `${showAvailableTimeTab ? "auto" : "hidden"}`,
            },
          }}
        >
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                color="success"
                className="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
                onClick={() => setShowAvailableTimeTab(false)}
              >
                Profile
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
                onClick={() => setShowAvailableTimeTab(true)}
              >
                Available time
              </button>
            </li>
          </ul>
          <hr className="mt-0 mb-4" />
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <>
                <div className="cotainer-xl px-4 mt-4" />
                <div className="row">
                  <div className="col-xl-4">
                    <div className="card mb-4 mb-xl-0">
                      <div className="card-header">Profile Picture</div>
                      <div className="card-body text-center">
                        <img
                          className="img-account-profile rounded-circle mb-2"
                          src="http://bootdey.com/img/Content/avatar/avatar1.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-8">
                    <div className="card mb-4">
                      <div className="card-header">Account Details</div>
                      <div className="card-body">
                        <form>
                          <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                              <label
                                className="small mb-1"
                                for="inputFirstName"
                              >
                                Name
                              </label>
                              <input
                                className="form-control"
                                id="inputFirstName"
                                type="text"
                                value={selectedConsultant.name}
                                disabled
                              />
                            </div>
                          </div>
                          <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                              <label
                                className="small mb-1"
                                for="inputFirstName"
                              >
                                Email
                              </label>
                              <input
                                className="form-control"
                                id="inputFirstName"
                                type="text"
                                value={selectedConsultant.email}
                                disabled
                              />
                            </div>
                          </div>
                          <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                              <label className="small mb-1" for="mobile">
                                Phone number
                              </label>
                              <input
                                className="form-control"
                                id="mobile"
                                value={selectedConsultant.mobile}
                                disabled
                              />
                            </div>
                          </div>
                          <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                              <label className="small mb-1" for="mobile">
                                Job Type
                              </label>
                              <input
                                className="form-control"
                                id="mobile"
                                value={selectedConsultant.job_type}
                                disabled
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <label
                              className="small mb-1"
                              for="exampleFormControlTextarea1"
                            >
                              Description
                            </label>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              value={selectedConsultant.description}
                              disabled
                            ></textarea>
                          </div>
                        </form>
                      </div>
                      <br></br>
                    </div>
                  </div>
                </div>
              </>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            {availableTimeSlot !== null ? (
              availableTimeSlot.map((time) => (
                <div
                  key={time.id}
                  className="form-check d-flex justify-content-between"
                  style={{
                    backgroundColor: "#DDFFDD",
                    padding: 5,
                    borderRadius: 5,
                    marginBottom: 3,
                  }}
                >
                  <label
                    className="form-check-label"
                    for="flexRadioDefault1"
                    style={{ marginTop: 8, marginLeft: 5 }}
                  >
                    <GiTimeBomb style={{ marginRight: 5, color: "#198754" }} />
                    {time.dateTime}
                  </label>
                  <button
                    type="button"
                    onClick={() =>
                      submitAppointment(
                        axiosJWT,
                        time.id,
                        selectedConsultant.name,
                        closeModal
                      )
                    }
                    className="btn btn-success"
                    style={{ backgroundColor: "#31d186 !important" }}
                  >
                    Send Appointment
                    <MdSendTimeExtension
                      style={{ marginLeft: 5, color: "orange" }}
                    />
                  </button>
                </div>
              ))
            ) : (
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  padding: "2px",
                  backgroundColor: "transparent",
                }}
              >
                There are no available times.
              </div>
            )}
            <div style={{ marginTop: 30, marginBottom: 50 }}>
              <h6>If You want send a email to the consultant</h6>
              <ContactForm consultant={selectedConsultant} />
            </div>
          </div>

          <button
            type="button"
            onClick={closeModal}
            style={{
              position: "absolute",
              top: "5px",
              right: "10px",
              padding: "2px",
              backgroundColor: "transparent",
            }}
          >
            <AiOutlineCloseCircle size={25} color="red" />
          </button>
        </Modal>
      )}
    </div>
  );
}
