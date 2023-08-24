import axios from "axios";
import Swal from "sweetalert2";

export const handleSignUp = async (
  e,
  userType,
  name,
  email,
  password,
  navigate
) => {
  e.preventDefault();
  try {
    const endpointURI =
      userType === "admin"
        ? "http://localhost:4000/authentication/admin/register/secretRoute"
        : userType === "consultant"
        ? "http://localhost:4000/authentication/consultant/register"
        : "http://localhost:4000/authentication/js/register";

    const reqBody =
      userType === "admin"
        ? {
            email: email,
            password: password,
            user_name: name,
          }
        : userType === "consultant"
        ? {
            email: email,
            password: password,
            name: name,
            country: "",
            job_type: "",
          }
        : {
            email: email,
            password: password,
            name: name,
            age: "1",
          };

    await axios.post(endpointURI, reqBody);

    Swal.fire({
      position: "center",
      icon: "success",
      text: "Success! You are now registered.",
      showConfirmButton: false,
      timer: 3000,
    });

    navigate("/home");
  } catch (err) {
    console.log(err);
    Swal.fire({
      position: "center",
      icon: "error",
      text: "Registration Error! User already exists or server issue. Please try again later.",
      showConfirmButton: false,
      timer: 3000,
    });
  }
};

export const handleSignIn = async (
  e,
  userType,
  email,
  password,
  setUser,
  setToken,
  navigate
) => {
  e.preventDefault();

  try {
    const endpointURI =
      userType === "admin"
        ? "http://localhost:4000/authentication/admin/login"
        : userType === "consultant"
        ? "http://localhost:4000/authentication/consultant/login"
        : "http://localhost:4000/authentication/js/login";

    const res = await axios.post(endpointURI, {
      email: email,
      password: password,
    });

    const { id, name, accessToken, refreshToken } = res.data;
    setUser({
      userType: userType,
      accessToken: accessToken,
      refreshToken: refreshToken,
    });

    sessionStorage.setItem("userId", id);
    sessionStorage.setItem("userName", name);
    sessionStorage.setItem("accessToken", accessToken);
    sessionStorage.setItem("refreshToken", refreshToken);
    sessionStorage.setItem("userType", userType);
    sessionStorage.setItem("userEmail", email);
    setToken(sessionStorage.getItem("accessToken"));

    Swal.fire({
      position: "center",
      icon: "success",
      text: "Success! You are now logged in.",
      showConfirmButton: false,
      timer: 3000,
    });

    navigate("/home");
  } catch (err) {
    console.log(err);
    Swal.fire({
      position: "center",
      icon: "error",
      text: "Account not found. Please verify your credentials and try again.",
      showConfirmButton: false,
      timer: 5000,
    });
  }
};

export const logout = (setToken, setUser, navigate) => {
  try {
    sessionStorage.clear();
    setToken(null);
    setUser({
      accessToken: "",
      refreshToken: "",
    });
    Swal.fire({
      position: "center",
      icon: "success",
      text: "Logout successful. Have a great day!",
      showConfirmButton: false,
      timer: 5000,
    });
    navigate("/");
  } catch (err) {
    console.log(err);
    Swal.fire({
      position: "center",
      icon: "error",
      text: "Oops! Something went wrong during the logout process. Please try again.",
      showConfirmButton: false,
      timer: 5000,
    });
  }
};

export const getAppointments = async (axiosJWT, setAppointmentsLst) => {
  try {
    const res = await axiosJWT.get("http://localhost:4000/appointments/all", {
      headers: {
        authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
    });
    setAppointmentsLst(res.data.reverse());
  } catch (err) {
    console.log(err);
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Server Error",
      text: "Oops! Something went wrong while fetching appointments.",
      showConfirmButton: false,
      timer: 5000,
    });
  }
};

export const deleteAppointment = async (axiosJWT, id) => {
  try {
    const result = await Swal.fire({
      title: `Are you sure you want to delete the appointment?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#198754",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      await axiosJWT.delete(`http://localhost:4000/appointments/${id}`, {
        headers: {
          authorization: "Bearer " + sessionStorage.getItem("accessToken"),
        },
      });
      window.location.reload(); // Reloading the page might not be the best practice; consider alternatives
      Swal.fire({
        position: "center",
        icon: "success",
        text: `Appointment has been deleted.`,
        showConfirmButton: false,
        timer: 5000,
      });
    }
  } catch (err) {
    console.log(err);
    Swal.fire({
      position: "center",
      icon: "error",
      text: "Server Error.",
      showConfirmButton: false,
      timer: 5000,
    });
  }
};

export const updateAppointmentState = async (axiosJWT, id, state) => {
  try {
    const result = await Swal.fire({
      title: `Are you sure you want to ${state} the appointment?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#198754",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, ${state} it!`,
    });

    if (result.isConfirmed) {
      await axiosJWT.patch(
        `http://localhost:4000/appointments/${id}/status-change`,
        {
          status: `${state}`,
        },
        {
          headers: {
            authorization: "Bearer " + sessionStorage.getItem("accessToken"),
          },
        }
      );
      window.location.reload(); // Reloading the page might not be the best practice; consider alternatives
      Swal.fire({
        position: "center",
        icon: "success",
        text: `Appointment state has been updated.`,
        showConfirmButton: false,
        timer: 5000,
      });
    }
  } catch (err) {
    console.log(err);
    Swal.fire({
      position: "center",
      icon: "error",
      text: "Server Error.",
      showConfirmButton: false,
      timer: 5000,
    });
  }
};

export const getProfileDetails = async (axiosJWT, endpoint, id, setUser) => {
  try {
    const res = await axiosJWT.get(`${endpoint}/${id}`, {
      headers: {
        authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
    });
    setUser(res.data);
  } catch (err) {
    console.log(err);
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Server Error",
      text: "Oops! Something went wrong while fetching profile details.",
      showConfirmButton: false,
      timer: 5000,
    });
  }
};

export const updateProfileDetails = async (
  axiosJWT,
  userRole,
  id,
  user,
  setUser
) => {
  try {
    const res = await axiosJWT.patch(
      `http://localhost:4000/${userRole}/${id}`,
      user,
      {
        headers: {
          authorization: "Bearer " + sessionStorage.getItem("accessToken"),
        },
      }
    );

    sessionStorage.setItem("userName", res.data.name);
    setUser(res.data);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Profile Updated",
      text: "Your profile details have been successfully updated.",
      showConfirmButton: false,
      timer: 3000,
    });
  } catch (err) {
    console.log(err);
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Server Error",
      text: "Oops! Something went wrong while updating profile details.",
      showConfirmButton: false,
      timer: 5000,
    });
  }
};

export const addAvailableTime = async (axiosJWT, startTime, endTime) => {
  try {
    await axiosJWT.post(
      `http://localhost:4000/available-times/create`,
      {
        start_time: startTime,
        end_time: endTime,
      },
      {
        headers: {
          authorization: "Bearer " + sessionStorage.getItem("accessToken"),
        },
      }
    );

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Time Slot Added",
      text: "The available time slot has been successfully added.",
      showConfirmButton: false,
      timer: 3000,
    });
  } catch (err) {
    console.log(err);
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Server Error",
      text: "Oops! Something went wrong while adding available time slot.",
      showConfirmButton: false,
      timer: 5000,
    });
  }
};

export const getAllUsers = async (
  axiosJWT,
  userRole,
  setUsersLst,
  jobTypeParam,
  countryParam
) => {
  try {
    let endP;

    if (jobTypeParam === "" && countryParam === "") {
      endP = `http://localhost:4000/${userRole}`;
    } else {
      const queryParams = [];

      if (jobTypeParam !== "") {
        queryParams.push(`job_type=${jobTypeParam}`);
      }

      if (countryParam !== "") {
        queryParams.push(`country=${countryParam}`);
      }

      const queryString = queryParams.join("&");
      endP = `http://localhost:4000/${userRole}${
        queryString ? `?${queryString}` : ""
      }`;
    }
    const res = await axiosJWT.get(endP, {
      headers: {
        authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
    });
    setUsersLst(res.data.reverse());
  } catch (err) {
    console.log(err);
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Server Error",
      text:
        userRole === "consultants"
          ? "Oops! Something went wrong while fetching consultants."
          : "Oops! Something went wrong while fetching job seekers.",
      showConfirmButton: false,
      timer: 5000,
    });
  }
};

export const getAvailableTimeSlots = async (axiosJWT, id, setAvailableTime) => {
  try {
    const res = await axiosJWT.get(
      `http://localhost:4000/available-times/list/${id}`,
      {
        headers: {
          authorization: "Bearer " + sessionStorage.getItem("accessToken"),
        },
      }
    );

    if (res.data.length !== 0) setAvailableTime(res.data);
  } catch (err) {
    console.log(err);
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Server Error",
      text: "Oops! Something went wrong while fetching available time slots.",
      showConfirmButton: false,
      timer: 5000,
    });
  }
};

export const submitAppointment = async (
  axiosJWT,
  id,
  consultantName,
  closeModal
) => {
  try {
    const result = await Swal.fire({
      title: `Confirm Submission`,
      text: `Are you sure you want to submit the appointment for ${consultantName}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#198754",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, submit it!",
    });

    if (result.isConfirmed) {
      await axiosJWT.post(
        `http://localhost:4000/appointments/create`,
        {
          available_time_id: id,
        },
        {
          headers: {
            authorization: "Bearer " + sessionStorage.getItem("accessToken"),
          },
        }
      );
      closeModal();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Appointment Submitted",
        text: "Your appointment has been successfully submitted.",
        showConfirmButton: false,
        timer: 5000,
      });
    }
  } catch (err) {
    console.log(err);
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Error",
      text: "An error occurred while submitting the appointment.",
      showConfirmButton: false,
      timer: 5000,
    });
  }
};

export const deleteUser = async (axiosJWT, userRole, id, userName) => {
  try {
    const result = await Swal.fire({
      title: `Are you sure you want to delete ${userName}?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#198754",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      await axiosJWT.delete(`http://localhost:4000/${userRole}/${id}`, {
        headers: {
          authorization: "Bearer " + sessionStorage.getItem("accessToken"),
        },
      });
      window.location.reload();
      Swal.fire({
        position: "center",
        icon: "success",
        text: `${userName} has been deleted.`,
        showConfirmButton: false,
        timer: 5000,
      });
    }
  } catch (err) {
    console.log(err);
    Swal.fire({
      position: "center",
      icon: "error",
      text: "Server Error.",
      showConfirmButton: false,
      timer: 5000,
    });
  }
};
