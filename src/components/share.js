// This feature allows users to directly share the link to their socials from the app
// Credit: Inspired from Snappy -Online Tutorial - Snappy (https://snappywebdesign.net/blog/how-to-code-a-social-share-button-with-material-ui/)

import React, { useState } from "react";
import { Button, IconButton, Popover, Typography  } from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';

export default function Share ({ link }) {
  //anchorEl's state determines wheter to open or close the popup share tile
  const [anchorEl, setanchorEl] = useState(null);

  //Set anchor on click
  const handleClick = (event) => {
    setanchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setanchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  //No validation for link correctness (assume they are valid links)
  const handleShare = (service) => {
    let shareLink = "";
    switch (service) {
      case "twitter":
        shareLink = `https://twitter.com/share?url=${link}`;
        break;
      case "Instagram":
        shareLink = `https://instagram.com/share?url=${link}`;
        break;
      case "imessage":
        shareLink = `sms:&body=${link}`;
        break;
      case "facebook":
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${link}`;
        break;
      case "LinkedIn":
        shareLink = `https://www.linkedin.com/shareArticle?mini=true&url=${link}`;
          break;
      default:
        break;
    }
    window.open(shareLink, "_blank");
  };

  return (
    <>
      <IconButton aria-describedby={id} onClick={handleClick}>
        <ShareIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        //variable name is 'anchorEl' for MUI styling to work
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Typography variant="subtitle1">Share via:</Typography>
        <Button onClick={() => handleShare("twitter")}>Twitter</Button>
        <Button onClick={() => handleShare("imessage")}>iMessage</Button>
        <Button onClick={() => handleShare("facebook")}>Facebook</Button>
        <Button onClick={() => handleShare("instagram")}>Instagram</Button>
        <Button onClick={() => handleShare("LinkedIn")}>LinkedIn</Button>
      </Popover>
    </>
  );
};







