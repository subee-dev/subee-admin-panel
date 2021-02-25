import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import classNames from "classnames";

//import css 
import 'react-dropzone-uploader/dist/styles.css'
import 'assets/css/additional-components.css'

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import TextInputField from "components/CustomInput/TextInputField.js";
import SubTagInput from "components/CustomInput/SubTagInput.js";
import ImageInputField from "components/CustomInput/ImageInputField"
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Table from "components/Table/Table.js";
import UpdateButton from "components/CustomButtons/UpdateButton.js"

// import styles
import styles from "assets/jss/material-dashboard-react/components/cardStyle.js";

// TextField Test

var subinfo = {
  subName: "Subee",
  companyName: "Subee Inc."
}

const useStyles = makeStyles(styles);

//Actual sub update form

export default function SubUpdate() {
  const classes = useStyles();
  return (
    <GridItem xs={12} sm={12} md={12}>
      <CardBody>
              <h4 className={classes.cardTitle}>Subscription Basic Information</h4>
                <TextInputField label='Subscription Name' defaultValue='Subee'/>
                <TextInputField label='Company Name' defaultValue='Subee Inc.'/>
                <h4 className={classes.cardTitle}>Subscription Tags</h4>
                <SubTagInput />  
                <h4 className={classes.cardTitle}>Update Logo</h4>
                <ImageInputField />
              <UpdateButton buttonText="Update Information"/>
      </CardBody>

    </GridItem>
  );
}


