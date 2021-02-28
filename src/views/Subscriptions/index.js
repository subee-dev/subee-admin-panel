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

const mockData = [
  {
    id: 1,
    logo: null,
    nameKr: "스파티파이",
    nameEn: "spotify",
    description: "music streaming",
    recommended: 0,
    notRecommended: 0,
    averageRating: null,
    createdAt: "2021-02-22T20:29:33.052Z",
    updatedAt: "2021-02-22T20:29:33.052Z",
    tiers: [
      {
        id: 2,
        name: "individual",
        billingCycles: [
          {
            name: "monthly",
            price: 9.99
          }
        ]
      },
      {
        id: 3,
        name: "duo",
        billingCycles: [
          {
            name: "monthly",
            price: 12.99
          },
          {
            name: "weekly",
            price: 12.99
          },
          {
            name: "daily",
            price: 1.99
          }
        ]
      }
    ],
    serviceProvider: {
      id: 2,
      name: "spotify"
    },
    tags: []
  },
  {
    id: 2,
    logo: null,
    nameKr: "유투브",
    nameEn: "youtube",
    description: "video streaming",
    recommended: 0,
    notRecommended: 0,
    averageRating: null,
    createdAt: "2021-02-22T20:29:33.052Z",
    updatedAt: "2021-02-22T20:29:33.052Z",
    tiers: [
      {
        id: 2,
        name: "individual",
        billingCycles: [
          {
            name: "monthly",
            price: 9.99
          }
        ]
      },
      {
        id: 3,
        name: "teams",
        billingCycles: [
          {
            name: "monthly",
            price: 12.99
          }
        ]
      }
    ],
    serviceProvider: {
      id: 5,
      name: "google"
    },
    tags: []
  }
];

export default function Subscriptions() {
  const classes = useStyles();
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
            <SubList subscriptions={mockData} />
          </GridItem>
        </GridContainer>
      </div>
    </Router>
  );
}
