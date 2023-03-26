import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <a href={item.linkapp} target="_blank" rel="noreferres">
        <img src={item.image} alt="" className="work__img" />
      </a>
      <h3 className="work__title">{item.title}</h3>

      <a
        href={item.githublink}
        target="_blank"
        rel="noreferrer"
        className="work__button"
      >
        GitHub <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
