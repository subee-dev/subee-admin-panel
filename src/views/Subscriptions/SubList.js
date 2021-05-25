import React, { useMemo } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

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
import { Button, TableBody } from "@material-ui/core";
import { Subscription } from "../../data/models/subscription";
import { DataGrid } from "@material-ui/data-grid";
import EditDrawer from "../../components/Drawer/editDrawer";
import { Table } from "@material-ui/core/Table";

// TextField Test
const useStyles = makeStyles(styles);

export default function SubList(props) {
  const { subscriptions } = props;
  const classes = useStyles();

  const structureData = useMemo(() => {
    return subscriptions.map((data) => new Subscription(data));
  }, [subscriptions]);

  const handleDelete = (id) => {
    SubscriptionManager.deleteSubscription(id);
  };

  const columns = useMemo(() => {
    return [
      {
        field: "edit",
        headerName: "Edit",
        width: 100,
        renderCell: (params) => {
          return <EditDrawer row={params.row} />;
        },
      },
      { field: "id", headerName: "ID", width: 100 },
      {
        field: "logo",
        headerName: "Logo",
        width: 100,
        valueGetter: (params) => (params.row.logo != null ? "O" : "X"),
      },
      { field: "nameKr", headerName: "Kor Name", width: 150 },
      { field: "nameEn", headerName: "Eng Name", width: 150 },
      { field: "description", headerName: "Description", width: 150 },
      { field: "updatedAt", headerName: "Last Updated", width: 150 },
      { field: "recommended", headerName: "# of Recommended", width: 150 },
      {
        field: "notRecommended",
        headerName: "# of Not Recommended",
        width: 150,
      },
      { field: "averageRating", headerName: "Average Rating", width: 150 },
      {
        field: "serviceProvider",
        headerName: "Service Provider",
        width: 150,
        valueGetter: (params) => params.row?.serviceProvider?.name ?? "n/a",
      },
      {
        field: "delete",
        headerName: "Delete",
        width: 200,
        renderCell: (params) => (
          <Button onClick={() => handleDelete(params.row.id)}>Delete</Button>
        ),
      },
    ];
  }, []);

  return (
    <div>
      <DataGrid
        autoHeight={true}
        pageSize={15}
        hideFooterSelectedRowCount={true}
        rows={structureData}
        columns={columns}
      />
    </div>
  );
}

SubList.proptype = {
  subscriptions: PropTypes.array,
};
