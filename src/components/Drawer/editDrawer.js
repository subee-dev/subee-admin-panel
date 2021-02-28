import { Button, makeStyles, Modal } from "@material-ui/core";
import React from "react";
import SubUpdate from "views/Subscriptions/SubscriptionUpdate";
import PropTypes from "prop-types";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 750,
    height: 600,
    overflow: "scroll",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function EditDrawer(props) {
  const classes = useStyles();

  const { row } = props;
  const [modalStyle] = React.useState(getModalStyle);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onEdit = () => {
    console.log("editing");
    handleClose();
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Update Subscription</h2>
      <SubUpdate data={row} onSubmit={onEdit} />
    </div>
  );

  return (
    <div>
      <Button onClick={handleOpen}>Edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

EditDrawer.propTypes = {
  row: PropTypes.object
};
