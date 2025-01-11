import React from "react";

const TodoList = (props) => {
  return (
    <div className="l-itemDiv">
      <div className="two-itemDiv">
        {props.item.map((listItem, i) => {
          return (
            <li key={i} className="list-item">
              {/* we need to replace {props.item} with listItem */}
              {listItem}
              <span>
                <i
                  className="fa-solid fa-trash-can icon1"
                  onClick={() => props.deleteItem(props.index)}
                ></i>
              </span>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
