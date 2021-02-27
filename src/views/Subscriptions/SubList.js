import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import axios from "axios";

//import css
import "react-dropzone-uploader/dist/styles.css";
import "assets/css/additional-components.css";

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
//import Table from "components/Table/Table.js";
import UpdateButton from "components/CustomButtons/UpdateButton.js";
import SubscriptionManager from "../../data/manager/index";

// import styles
import styles from "assets/jss/material-dashboard-react/components/cardStyle.js";
import { Button } from "@material-ui/core";
import { Subscription } from "../../data/models/subscription";
import { DataGrid } from "@material-ui/data-grid";

// TextField Test
const useStyles = makeStyles(styles);

export default function SubList() {
  const classes = useStyles();

  const mockData = [
    {
      id: 1,
      logo: null,
      nameKr: "테스트",
      nameEn: "test",
      description: "BINGE-WATCH",
      createdAt: "2021-01-06T00:40:37.568Z",
      updatedAt: "2021-01-06T00:40:37.568Z",
      recommended: 0,
      notRecommended: 0,
      averageRate: null
    },
    {
      id: 2,
      logo: null,
      nameKr: "가",
      nameEn: "test",
      description: "ANGE-WATCH",
      createdAt: "2021-01-06T00:40:37.568Z",
      updatedAt: "2021-01-06T00:40:37.568Z",
      recommended: 0,
      notRecommended: 0,
      averageRate: null
    }
  ];

  const structureMockData = mockData.map((data) => new Subscription(data));
  SubscriptionManager.testSubscriptions();

  const columns = [
    { field: "name", headerName: "Service Name", width: 150 },
    { field: "description", headerName: "Description", width: 150 },
    { field: "updatedAt", headerName: "Last Updated", width: 150 },
    { field: "recommended", headerName: "Recommended", width: 150 },
    { field: "averageRate", headerName: "Average Rating", width: 150 },
    {
      field: "edit",
      headerName: "Edit",
      width: 200,
      renderCell: (params: CellPrams) => {
        return (
          <Button
            //TODO: Open Edit Drawer on click or redirect to the update form - probably drawer is better experience
            onClick={() => {
              return alert(JSON.stringify(params.getValue("name")));
            }}
          >
            Click
          </Button>
        );
      }
    }
  ];

  return (
    <div>
      <DataGrid
        autoHeight={true}
        autoPageSize={true}
        hideFooterSelectedRowCount={true}
        rows={structureMockData}
        columns={columns}
      />
    </div>
  );
}
