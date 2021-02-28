import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TextInputField from "components/CustomInput/TextInputField";
import { Checkbox, Grid, makeStyles } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Button from "components/CustomButtons/Button.js";
import BillingCycle from "./billingCycle";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  }
}));
export default function TierEdit(props) {
  const { tier, handleUpdate } = props;
  const classes = useStyles();

  const [name, setName] = useState(tier.name);
  const [billingCycles, setBillingCycles] = useState(tier.billingCycles);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleBillingCycleUpdate = (billingCycle, origName) => {
    const updatedBillingCycles = tier.billingCycles;

    //Create billing cycle id so we don't rely on original billing cycle name to find the object - BE update
    const objIndex = updatedBillingCycles.findIndex(
      (obj) => obj.name == origName
    );
    updatedBillingCycles[objIndex].name = billingCycle.name;
    updatedBillingCycles[objIndex].price = billingCycle.price;
    setBillingCycles(updatedBillingCycles);
  };

  useEffect(() => {
    if (name === tier.name && billingCycles === tier.billingCycles) return;
    const updatedTier = {
      id: tier.id,
      name: name,
      billingCycles: billingCycles
    };
    handleUpdate(updatedTier);
  }, [name, billingCycles]);

  return (
    <React.Fragment>
      {billingCycles.map((cycle, index) => {
        return (
          <Grid key={index} container spacing={2}>
            {index === 0 && (
              <Grid item xs={tier.billingCycles.length > 1 ? 12 : null}>
                <TextInputField
                  label="Tier Name"
                  defaultValue={tier.name}
                  onChange={handleNameChange}
                />
              </Grid>
            )}
            <BillingCycle
              billingCycle={cycle}
              handleUpdate={handleBillingCycleUpdate}
            />
          </Grid>
        );
      })}
    </React.Fragment>
  );
}

TierEdit.proptype = {
  tier: PropTypes.object,
  handleUpdate: PropTypes.func
};
