import { Fragment, useState } from "react";
import EmptyItem from "../EmptyItem";
import ListItems from "../ListItems";
import style from './List.module.css';
function ListGroup() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  let items = ["Dhaka", "Chittagong", "Khulna", "Rajshahi", "Sylhet"];
  
  return (
    <Fragment>
      <h1>List Group</h1>
      <EmptyItem items={items} />
      <ul className={[style.ListGroup, style.container].join(" ")}>
        {items.map((item, index) => (
          <ListItems
            item={item}
            key={item}
            index={index}
            isActive={index === selectedIndex}
            onSelect={() => setSelectedIndex(index)}
          />
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
