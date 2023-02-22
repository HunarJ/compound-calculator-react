import "./ResultTable.css";
import React, { Component } from "react";
import ResultTableRow from "./ResultTableRow";

let ResultTable = ({data}) => {

  return (
    <div className="results-table-container" id="table-container">
      <table>
        <thead>
          <th>Období</th>
          <th>Hodnota portfolia</th>
        </thead>
        <tbody>

          {
            data.map(item => <ResultTableRow data = {item} />
            )
          }
          
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
