import React, { Component } from "react";

let ResultTableRow = ({data}) => {

  return (
    <tr key="">
      <td>{data.name}</td>
      <td>{data.value} Kč</td>
    </tr>
  );
};

export default ResultTableRow;
