import React from 'react'

function List(props){

    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.id}>
                                                  {item.name}: &nbsp;
                                                  {item.calories}</li>);

    return(
        <>
        <h3 className="list-category">{category}</h3>
         <ul className="list-item">{listItems}</ul>
        </>
       )
}
export default List