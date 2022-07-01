import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

export function ErrorAlert() {
  const [open, setOpen] = useState(true);

  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Collapse in={open}>
        <Alert
          severity= "error" /**info-blue; success-green*/
          sx={{ mb: 2 }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {setOpen(false)}}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle>Alert Action!</AlertTitle>
          Ideally print to-do alert-type
        </Alert>
      </Collapse>   
    </Stack>
  );
}

export function SuccessAlert() {
  const [open, setOpen] = useState(true);

  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Collapse in={open}>
        <Alert
          severity= "error" /**info-blue; success-green*/
          sx={{ mb: 2 }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {setOpen(false)}}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle>Alert Action!</AlertTitle>
          Ideally print to-do alert-type
        </Alert>
      </Collapse>   
    </Stack>
  );
}