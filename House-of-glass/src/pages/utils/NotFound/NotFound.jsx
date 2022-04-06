import React from "react";
import EmptyState from "components/EmptyState/EmptyState";

export default function NotFound() {
  return (
    <div className="flex-mid-center error container">
      <EmptyState
        stateTitle={"404"}
        stateDesc="How did you end up here"
        btnText="Go back"
        icon={"warning"}
        endpoint="/"
        color={"all-red"}
      />
    </div>
  );
}
