import React from "react";

export default function Main() {
  const test = [
    { task: "clean car", owner: "john d", date: "july 31,2022" },
    { task: "change tires", owner: "john d", date: "Aug 21,2022" },
  ];

  const showList = test.map((x) => (
    <tr scope="row">
      <td scope="row"></td>
      <td>{x.task}</td> <td>{x.owner}</td>
      <td>{x.date}</td>
    </tr>
  ));
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h3 className="pb-4">Our Auto Tasks</h3>
          <table className="table  table-sm">
            <thead>
              <tr className="table-primary">
                <th scope="col"></th>
                <th scope="col">Task</th>
                <th scope="col">Owner</th>
                <th scope="col">Date Entered</th>
              </tr>
            </thead>
            <tbody>{showList}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
