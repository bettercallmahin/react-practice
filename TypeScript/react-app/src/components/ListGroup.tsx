import { Fragment } from "react";

function ListGroup() {
  return (
    <Fragment>
      <h1>List</h1>
      <ul className="list-group">
        <li className="list-group-item">Pen</li>
        <li className="list-group-item">Paper</li>
        <li className="list-group-item">Pencil</li>
        <li className="list-group-item">Marker</li>
        <li className="list-group-item">Highlighter</li>
      </ul>
    </Fragment>
  );
}

export default ListGroup;
