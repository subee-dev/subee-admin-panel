import React, { useEffect, useState } from "react";
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
import { Subscription } from "../../data/models/subscription";

import SubscriptionManager from "../../data/manager/index";
import Card from "../../components/Card/Card";

// TextField Test

var subinfo = {
  subName: "Subee",
  companyName: "Subee Inc.",
};

const useStyles = makeStyles(styles);

//Actual sub update form

export default function SubUpdate(props) {
  const { data, onSubmit } = props;
  const classes = useStyles();

  const [nameKr, setNameKr] = useState(data.nameKr);
  const [logo, setLogo] = useState(data.logo);
  const [nameEn, setNameEn] = useState(data.nameEn);
  const [description, setDescription] = useState(data.description);
  const [tiers, setTiers] = useState(data.tiers);
  const [serviceProvider, setServiceProvider] = useState(data.serviceProvider);
  const [tags, setTags] = useState(data.tags.map((t) => t.name));

  const handleUpdateNameKr = (e) => setNameKr(e.target.value);

  const handleUpdateNameEn = (e) => setNameEn(e.target.value);

  const handleUpdateDescription = (e) => setDescription(e.target.value);

  const handleUpdateTiers = (tier) => {
    const updatedTiers = tiers;
    const objIndex = updatedTiers.findIndex((obj) => obj.id == tier.id);
    updatedTiers[objIndex].tiers = tier;
    setTiers(updatedTiers);
  };

  const handleUpdateTags = (tags) => setTags(tags);

  const handleUpdateLogo = (logo) => setLogo(logo);

  const handleOnSubmit = async () => {
    const updatedSubscription = new Subscription({
      id: data.id,
      nameKr: nameKr,
      nameEn: nameEn,
      logo: logo,
      description: description,
      // tiers: tiers,
      // serviceProvider: serviceProvider,
      tags: tags,
    });
    console.log("up: ", updatedSubscription);

    await SubscriptionManager.updateSubscription(updatedSubscription);

    onSubmit();
  };

  return (
    <GridItem xs={12} sm={12} md={12}>
      <CardBody>
        <h4 className={classes.cardTitle}>Subscription Basic Information</h4>
        <TextInputField
          label="Subscription Korean Name"
          defaultValue={nameKr}
          onChange={handleUpdateNameKr}
        />
        <TextInputField
          label="Subscription English Name"
          defaultValue={nameEn}
          onChange={handleUpdateNameEn}
        />

        <TextInputField
          label="Description"
          defaultValue={description}
          onChange={handleUpdateDescription}
        />
        <h4 className={classes.cardTitle}>Update Tiers</h4>
        {tiers &&
          tiers.map((tier, index) => {
            return (
              <React.Fragment key={tier.id}>
                <TierEdit tier={tier} handleUpdate={handleUpdateTiers} />
                {index != tiers.length - 1 ? <Divider /> : null}
              </React.Fragment>
            );
          })}
        <h4 className={classes.cardTitle}>Subscription Tags</h4>
        <SubTagInput tags={tags} setTags={handleUpdateTags} />
        {logo && (
          <div>
            <h4 className={classes.cardTitle}>Current Logo</h4>
            <Card>
              <img src={`data:image/jpeg;base64,${logo}`} />
            </Card>
          </div>
        )}
        <h4 className={classes.cardTitle}>Update Logo</h4>
        <ImageInputField logo={logo} setLogo={handleUpdateLogo} />
        <Button onClick={handleOnSubmit}>Update Information</Button>
      </CardBody>
    </GridItem>
  );
}

SubUpdate.propTypes = {
  data: PropTypes.object,
  onSubmit: PropTypes.func,
};
