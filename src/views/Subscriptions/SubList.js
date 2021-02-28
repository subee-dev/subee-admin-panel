import React, { useMemo } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import axios from "axios";

//import css
import "react-dropzone-uploader/dist/styles.css";
import "assets/css/additional-components.css";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

//import Table from "components/Table/Table.js";
import SubscriptionManager from "../../data/manager/index";

// import styles
import styles from "assets/jss/material-dashboard-react/components/cardStyle.js";
import { Button } from "@material-ui/core";
import { Subscription } from "../../data/models/subscription";
import { DataGrid } from "@material-ui/data-grid";
import EditDrawer from "../../components/Drawer/editDrawer";

// TextField Test
const useStyles = makeStyles(styles);

export default function SubList(props) {
  const { subscriptions } = props;
  const classes = useStyles();

  const structureMockData = useMemo(() => {
    return subscriptions.map((data) => new Subscription(data));
  }, [subscriptions]);

  SubscriptionManager.testSubscriptions();

  const handleDelete = (id) => {
    SubscriptionManager.deleteSubscription(id);
  };

  const columns = useMemo(() => {
    return [
      { field: "nameKr", headerName: "Kor Name", width: 150 },
      { field: "nameEn", headerName: "Eng Name", width: 150 },
      { field: "description", headerName: "Description", width: 150 },
      { field: "updatedAt", headerName: "Last Updated", width: 150 },
      { field: "recommended", headerName: "# of Recommended", width: 150 },
      {
        field: "notRecommended",
        headerName: "# of Not Recommended",
        width: 150
      },
      { field: "averageRate", headerName: "Average Rating", width: 150 },
      {
        field: "serviceProvider",
        headerName: "Service Provider",
        width: 150,
        valueGetter: (params) => {
          return params.row.serviceProvider.name;
        }
      },
      {
        field: "edit",
        headerName: "Edit",
        width: 200,
        renderCell: (params) => {
          return <EditDrawer row={params.row} />;
        }
      },
      {
        field: "delete",
        headerName: "Delete",
        width: 200,
        renderCell: (params) => {
          return (
            <Button onClick={() => handleDelete(params.row.id)}>Delete</Button>
          );
        }
      }
    ];
  }, []);

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

SubList.proptype = {
  subscriptions: PropTypes.array
};
