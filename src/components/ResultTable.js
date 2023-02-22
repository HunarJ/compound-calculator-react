import "./ResultTable.css";
import React, { Component } from "react";
import ResultTableRow from "./ResultTableRow";

let ResultTable = ({ data }) => {
  return (
    <div className="results-table-container" id="table-container">
      <table id="results-table">
        <thead>
          <tr>
            <th>Období</th>
            <th>Hodnota portfolia</th>
          </tr>
        </thead>
        <tbody id="results-table-body">
          {data.map((item) => (
            <ResultTableRow data={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
