import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import classNames from "classnames";
import PropTypes from "prop-types";

//import css
import "react-dropzone-uploader/dist/styles.css";
import "assets/css/additional-components.css";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import TextInputField from "components/CustomInput/TextInputField.js";
import SubTagInput from "components/CustomInput/SubTagInput.js";
import ImageInputField from "components/CustomInput/ImageInputField";
import CardBody from "components/Card/CardBody.js";

// import styles
import styles from "assets/jss/material-dashboard-react/components/cardStyle.js";
import Button from "components/CustomButtons/Button.js";
import TierEdit from "components/Tiers";
import { Divider } from "@material-ui/core";

// TextField Test

var subinfo = {
  subName: "Subee",
  companyName: "Subee Inc."
};

const useStyles = makeStyles(styles);

//Actual sub update form

export default function SubUpdate(props) {
  const { data, onSubmit } = props;
  const classes = useStyles();

  const [nameKr, setNameKr] = useState(data.nameKr);
  const [nameEn, setNameEn] = useState(data.nameEn);
  const [description, setDescription] = useState(data.description);
  const [tiers, setTiers] = useState(data.tiers);
  const [serviceProvider, setServiceProvider] = useState(data.serviceProvider);

  const handleUpdateTiers = (tier) => {
    const updatedTiers = tiers;
    const objIndex = updatedTiers.findIndex((obj) => obj.id == tier.id);
    updatedTiers[objIndex].tiers = tier;
    setTiers(updatedTiers);
  };

  return (
    <GridItem xs={12} sm={12} md={12}>
      <CardBody>
        <h4 className={classes.cardTitle}>Subscription Basic Information</h4>
        <TextInputField label="Subscription Name" defaultValue={nameKr} />
        <TextInputField label="Subscription Name" defaultValue={nameEn} />

        <TextInputField label="Description" defaultValue={description} />
        <h4 className={classes.cardTitle}>Update Tiers</h4>
        {tiers.map((tier, index) => {
          return (
            <React.Fragment key={tier.id}>
              <TierEdit tier={tier} handleUpdate={handleUpdateTiers} />
              {index != tiers.length - 1 ? <Divider /> : null}
            </React.Fragment>
          );
        })}
        <h4 className={classes.cardTitle}>Subscription Tags</h4>
        <SubTagInput />
        <h4 className={classes.cardTitle}>Update Logo</h4>
        <ImageInputField />
        <Button onClick={onSubmit}>Update Information</Button>
      </CardBody>
    </GridItem>
  );
}

SubUpdate.propTypes = {
  data: PropTypes.object,
  onSubmit: PropTypes.func
};
