
import { SlCalender } from "react-icons/sl";

interface props {
  item: string;
  isActive: boolean;
  index: number;
  onSelect: () => void;
}

function ListItems({ item, isActive,index, onSelect }: props) {
  return (
    <li
      className={isActive ? "list-group-item active" : "list-group-item"}
      key={item}
      onClick={()=>{
        onSelect();
        console.log(item, index);
      }}
      style={{ backgroundColor: 'red', cursor: 'pointer', color: 'white' }}
    >
      <SlCalender size='40' /> {item}
    </li>
  );
}

export default ListItems;
