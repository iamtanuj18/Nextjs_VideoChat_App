import React, { useEffect } from "react";

const CallRejectedDialog = ({ reason, hideCallRejectedDialog }) => {
  useEffect(() => {
    setTimeout(() => {
      hideCallRejectedDialog({
        rejected: false,
        reason: "",
      });
    }, [3000]);
  }, []);
  return (
    <div className="text-center call_rejected_dialog bg-danger">
      <h6 className="text-light">{reason}</h6>
    </div>
  );
};

export default CallRejectedDialog;
