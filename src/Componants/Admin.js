import React from "react";

function Admin({ fileInput, loadFile }) {
  return (
    <div className="admin-div">
      <div className="table-container"></div>
      <input
        type="file"
        className="file-loader"
        accept=".csv"
        onChange={(event) => fileInput(event)}
      ></input>
    </div>
  );
}

export default Admin;
