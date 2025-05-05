import { Fragment, useState } from "react";
import EmptyItem from "./EmptyItem";


function ListGroup() {
  let items = ["Dhaka", "Chittagong", "Khulna", "Rajshahi", "Sylhet"];
  // items = [];

  // const getMessage = () =>{
  //   return items.length === 0 ? <h2>No item found</h2> : null;
  // }

  const [selectedIndex, setSelectedIndex] = useState(0);


  return (
    <Fragment>
      <h1>List Group</h1>
      {/* {items.length === 0 ? <h3>No item found</h3> : null} */}
      {/* {items.length === 0 && <p>No item found</p>} */}
      <EmptyItem items={items} />
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={selectedIndex == index ? "list-group-item active" : "list-group-item"}
            key={item}
            onClick={()=>{
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
