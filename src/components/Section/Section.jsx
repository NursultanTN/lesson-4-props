import React, { useState } from "react";
import AddCar from "../AddCar/AddCar";
import Filters from "../Filters/Filters";
import Modal from "./Modal/Modal";

const Section = () => {
  const [filtersVis, setFiltersVis] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(isModalOpen);
  return (
    <div>
      <div>
        <strong
          onClick={
            () => (!filtersVis ? setFiltersVis(true) : setFiltersVis(false)) //! 2-й вариант
          }>
          Filters
        </strong>
        {/* <strong onClick={() => setFiltersVis(true)}>Filters</strong> */}{" "}
        {filtersVis ? <Filters /> : null}
      </div>
      {isModalOpen ? (
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      ) : null}

      <button onClick={() => setIsModalOpen(true)}>Open modal</button>
      {/* <AddCar /> */}
    </div>
  );
};

export default Section;
