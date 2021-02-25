import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import axios from "axios";

//import css 
import 'react-dropzone-uploader/dist/styles.css'
import 'assets/css/additional-components.css'

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Table from "components/Table/Table.js";
import UpdateButton from "components/CustomButtons/UpdateButton.js"

// import styles
import styles from "assets/jss/material-dashboard-react/components/cardStyle.js";

// TextField Test
const useStyles = makeStyles(styles);

// axios test
axios.get('https://api.github.com/users/mapbox')
  .then((response) => {
      console.log(response.data);
      console.log(response.status);
      console.log(response.headers);
      console.log(response.config);

  });

export default function SubList() {
  const classes = useStyles();  
  return (
    <div>
        <GridItem xs={12} sm={12} md={12}>
          <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={["Thumbnail","Service Name", "Tag", "Update"]}
                tableData={[
                  ["logo","Netflix", "게임, 협업, 패션, 정기배송",<UpdateButton address="/admin/subscriptionUpdate" buttonText="Update Profile" />]
                ]} />
          </CardBody>
        </GridItem>
      </div>
  );
}
