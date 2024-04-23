// Create a React component (Modal) that displays a modal dialog with content. Users can open and close the modal. Write tests to check if the modal opens and closes when triggered.

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalComponent() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <h2>Modal Component</h2>
      <div className="modalComponent">
        <Button style={{ border: "1px solid #000" }} onClick={handleOpen}>
          Open modal
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <strong>Welcome to succesive</strong>
            </Typography>
            <Typography id="modal-modal-body" variant="h6" component="h5">
              I am a trainee Engineer
            </Typography>

            <Button style={{ border: "1px solid #000" }} onClick={handleClose}>
              Close modal
            </Button>
          </Box>
        </Modal>
      </div>
    </>
  );
}
