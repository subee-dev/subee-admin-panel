import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TextInputField from "components/CustomInput/TextInputField";
import { Checkbox, Grid, makeStyles } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Button from "components/CustomButtons/Button.js";

export default function BillingCycle(props) {
  const { billingCycle, handleUpdate } = props;

  const [cycleName, setCycleName] = useState(billingCycle.name);
  const [cyclePrice, setCyclePrice] = useState(billingCycle.price);

  const handleCycleChange = (e) => {
    console.log("handleCycleChange", e.target.value);
    setCycleName(e.target.value);
  };

  const handlePriceChange = (e) => {
    console.log("handlePriceChange", e.target.value);
    setCyclePrice(e.target.value);
  };

  useEffect(() => {
    if (cycleName === billingCycle.name && cyclePrice === billingCycle.price)
      return;
    const updatedCycle = {
      name: cycleName,
      price: cyclePrice
    };
    console.log("updating billing cycle", updatedCycle);
    handleUpdate(updatedCycle, billingCycle.name);
  }, [cycleName, cyclePrice]);

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs>
          <TextInputField
            label="Cycle"
            defaultValue={cycleName}
            onChange={handleCycleChange}
          />
        </Grid>
        <Grid item xs>
          <TextInputField
            label="Price"
            defaultValue={cyclePrice}
            onChange={handlePriceChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

BillingCycle.proptype = {
  billingCycle: PropTypes.object,
  handleUpdate: PropTypes.func
};
