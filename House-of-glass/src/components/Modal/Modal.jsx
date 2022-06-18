import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

export const Modal = ({ openModal, setOpenModal, children }) => {
  return ReactDOM.createPortal(
    <div className="modal-wrapper" onClick={(e) => setOpenModal(false)}>
      <div className="bg-slate-500/50 modal-overlay"></div>
      {openModal ? (
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      ) : null}
    </div>,
    document.getElementById("portal")
  );
};
