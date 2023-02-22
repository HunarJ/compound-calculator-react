import React, { Component } from "react";

let ResultTableRow = ({data}) => {

  return (
    <tr key="">
      <td>{data.name}</td>
      <td>{data.value}</td>
    </tr>
  );
};

export default ResultTableRow;
