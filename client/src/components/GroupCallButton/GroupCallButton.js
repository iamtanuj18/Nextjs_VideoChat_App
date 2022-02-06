import React from "react";

function GroupCallButton({ onClick, label }) {
  return (
    <button onClick={onClick} className="group_call_button">
      {label}
    </button>
  );
}

export default GroupCallButton;
