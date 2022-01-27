import React from "react";
import './Products.css'

export default function Products(props) {
  const { searchQuery, pdata } = props;
  var newArr=[...pdata.filter((elem)=>{
    return elem.title.includes(searchQuery)||elem.description.includes(searchQuery)
  })]

console.log(pdata.length)
  return (
    <>
    {newArr.length>0?<div className="result-container">
      {newArr.map((elem, index) => {
        return (
          <div className="product-card">
            {(elem.title.includes(searchQuery) ||
              elem.description.includes(searchQuery)) && (
              <div key={index}><h2>{elem.title}</h2><p>{elem.description}</p></div>
            )}
          </div>
        );
      })}
    </div>:<div className="result-container"><h1>No Data Found</h1></div>}</>
  );
}
