import { useState } from "react";
import campaignData from "./data";
import "./Table.css";

const Table = () => {
  const [data, setData] = useState(campaignData);
  

  return (
    <table style={{ border: "1px solid red" }} className="table">
      <thead>
        <tr className="trhead">
          <th>Campaigns</th>
          <th>Clicks</th>
          <th>Costs</th>
          <th>Conversions</th>
          <th>Revenue</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.campaign}</td>
            <td>{item.clicks}</td>
            <td>{item.cost}</td>
            <td>{item.conversions}</td>
            <td>{item.revenue}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th>Total</th>
          <td>11224</td>
          <td>USD 20921</td>
          <td>24</td>
          <td>USD 82124</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
