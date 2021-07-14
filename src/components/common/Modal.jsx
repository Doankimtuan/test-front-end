import React from "react";
export default function Modal(props) {
  return (
    <div
      className="modal"
      onClick={() => props.onClose && props.onClose()}
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      {props.closeIcon && (
        <div
          onClick={() => props.onClose && props.onClose()}
          style={{ position: "absolute", right: 30, top: 30, fontSize: 30 }}>
          <i className="fas fa-times"></i>
        </div>
      )}
      {props.children}
    </div>
  );
}
