type props ={items:string[]};

function EmptyItem({items}: props){
    return items.length === 0 ? <p>No data found</p> : null;
}

export default EmptyItem;