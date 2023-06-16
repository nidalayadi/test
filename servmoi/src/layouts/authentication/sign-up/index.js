import { useState } from "react";
import axios from "axios";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";

// Images
import curved6 from "assets/images/curved-images/curved14.jpg";

function SignUp() {
  const [agreement, setAgremment] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, seterrorMessage] = useState("");
  const handleSetAgremment = () => setAgremment(!agreement);

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = {
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      email: email,
      password: password,
    };
    console.log(body);
    axios
      .post(`https://8c0f-105-107-214-103.ngrok-free.app/api/v1/register`, body)
      .then((response) => {
        seterrorMessage("");
        console.log(response.data);
      })
      .catch((error) => {
        seterrorMessage(error.response.data.message);
        console.log(error.response.data);
      });
  };

  return (
    <BasicLayout
      title="Welcome!"
      description="Use these awesome forms to login or create new account in your project for free."
      image={curved6}
    >
      <Card>
        <SoftBox p={3} mb={1} textAlign="center">
          <SoftTypography variant="h5" fontWeight="medium">
            Register with
          </SoftTypography>
        </SoftBox>
        <SoftBox mb={2}>
          <Socials />
        </SoftBox>
        <Separator />
        <SoftBox pt={2} pb={3} px={3}>
          <SoftBox component="form" role="form">
            <SoftBox mb={2}>
              <SoftTypography component="a" href="#" variant="button" fontWeight="bold">
                <p style={{ color: "red" }}>{errorMessage}</p>
              </SoftTypography>
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput
                placeholder="First Name"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput
                placeholder="Last Name"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput
                placeholder="User Name"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </SoftBox>
            <SoftBox display="flex" alignItems="center">
              <Checkbox checked={agreement} onChange={handleSetAgremment} />
              <SoftTypography
                variant="button"
                fontWeight="regular"
                onClick={handleSetAgremment}
                sx={{ cursor: "poiner", userSelect: "none" }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </SoftTypography>
              <SoftTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                textGradient
              >
                Terms and Conditions
              </SoftTypography>
            </SoftBox>
            <SoftBox mt={4} mb={1}>
              <SoftButton
                variant="gradient"
                color="dark"
                fullWidth
                type="submit"
                onClick={handleSubmit}
              >
                sign up
              </SoftButton>
            </SoftBox>
            <SoftTypography align="center" opacity={0.5} variant="body2">
              Already have an account?
              <Link to="/authentication/login" style={{ textDecoration: "none" }}>
                <SoftTypography component="span" fontWeight="bold" ml={0.5} textGradient>
                  Login
                </SoftTypography>
              </Link>
            </SoftTypography>
          </SoftBox>
        </SoftBox>
      </Card>
    </BasicLayout>
  );
}

export default SignUp;
