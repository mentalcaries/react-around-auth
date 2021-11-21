import React from "react";
import MessagePopup from "./MessagePopup";
import success from "../images/success.svg"

function InfoTooltip({isOpen, onClose, onOutsideClick}){

  return(
    <MessagePopup isOpen={isOpen} onClose={onClose} onOutsideClick={onOutsideClick}>
      <img src={success} alt="Success" />
      <h2>Approved</h2>
    </MessagePopup>
  )
}

export default InfoTooltip