import React from "react";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChageFilter(event.target.value);
  };
  return <div>
    
  </div>;
};
export default ExpensesFilter;
