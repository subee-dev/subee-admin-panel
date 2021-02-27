import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import avatar from "assets/img/faces/marc.jpg";

//import subscriptions pages
import SubList from "./SubList.js";

//import styles
import styles from "assets/jss/material-dashboard-react/components/cardStyle.js";

const useStyles = makeStyles(styles);

const SubUpdateBtn = () => {
  const handleClick = () => {
    console.log("button pushed");
  };

  return (
    <Link to="/admin/subscriptionUpdate">
      <Button color="primary" onClick={handleClick}>
        Update Profile
      </Button>
    </Link>
  );
};

export default function Subscriptions() {
  const classes = useStyles();
  const subUpdateBtns = SubUpdateBtn();
  return (
    <Router>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>구독 서비스 리스트</h4>
                <Link to="/admin/subscriptions">Subscriptions</Link>
              </CardHeader>
            </Card>
            {/* TODO: Hook the button with drawer */}
            <Button>Add</Button>
            <SubList />
          </GridItem>
        </GridContainer>
      </div>
    </Router>
  );
}
