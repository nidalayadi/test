import { useForm } from "react-hook-form";

import React, { useState } from 'react';
import styled from 'styled-components';
import Card from "@mui/material/Card";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import SoftTypography from "components/SoftTypography";

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard React components
import MasterCard from "examples/Cards/MasterCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Billing page components
import PaymentMethod from "layouts/billing/components/PaymentMethod";
import Invoices from "layouts/billing/components/Invoices";
import BillingInformation from "layouts/billing/components/BillingInformation";
import Transactions from "layouts/billing/components/Transactions";

const StyledSelect = styled(SoftInput)`
box-sizing: border-box;
position: relative;
cursor: text;
display: grid!important;
    place-items: center!important;
    width: 100%!important;
    height: auto!important;
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem!important;
    font-weight: 400!important;
    line-height: 1.4!important;
    color: #495057!important;
    background-clip: padding-box!important;
    border: 0.0625rem solid #d2d6da;
    appearance: none!important;
    border-radius: 0.5rem;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  &::placeholder {
    color: #9b9b9b;
  }
`;



function Billing() {
  const [selectedMethod, setSelectedMethod] = useState('');
  const PrixEx = 220;

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    const postData = {
      amount_dzd: data.amount_dzd,
      amount_servs: data.amount_servs,
      payment_method: data.payment_method,
    };
    axios.post('/api/add-funds', postData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleMethodChange = (event) => {
    setSelectedMethod(event.target.value);
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox mt={4}>





      <Card>
  <SoftBox p={3} mb={1} textAlign="left">
    <SoftBox component="form" role="form">
      <SoftTypography component="label" variant="caption" fontWeight="bold">
        le montant en DZD:
      </SoftTypography>
      <SoftBox mb={2}>
        <SoftInput
          type="number"
          placeholder="le montant en Dz dinnar"
          id = "dzd-input"
          onChange={(e) => {
            const value = e.target.value / PrixEx;
            const servsInput = document.getElementById('servs-input');
            servsInput.value = value.toFixed(2);
          }}
        />
      </SoftBox>
      <SoftTypography component="label" variant="caption" fontWeight="bold">
        le montant en SERVs:
      </SoftTypography>
      <SoftBox mb={2}>
        <SoftInput
          type="number"
          placeholder="le montant en SERVs"
          id="servs-input"
          onChange={(e) => {
            const value = e.target.value * PrixEx;
            const dzdInput = document.getElementById('dzd-input');
            dzdInput.value = value.toFixed(2);
          }}
        />
      </SoftBox>
      <SoftTypography component="label" variant="caption" fontWeight="bold">
        choisir une method de payment:
      </SoftTypography>
      <SoftBox mb={2}>
      <StyledSelect as="select" value={selectedMethod} onChange={handleMethodChange}>
              <option value="">Sélectionnez une méthode de paiement</option>
              <option value="visa-mastercard">Visa/Mastercard</option>
              <option value="cib-edahabia">CIB/Edahabia</option>
              <option value="paypal">PayPal</option>
              <option value="ccp">CCP</option>
            </StyledSelect>
      </SoftBox>
      <SoftBox mt={4} mb={1}>
      <SoftButton type="submit" variant="gradient" color="dark" fullWidth onClick={() => console.log('hi')}>
  add funds
</SoftButton>
      </SoftBox>
    </SoftBox>
  </SoftBox>
</Card>





        <SoftBox my={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <BillingInformation />
            </Grid>
            <Grid item xs={12} md={5}>
              <Transactions />
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Billing;
