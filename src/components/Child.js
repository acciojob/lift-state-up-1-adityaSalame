import React from "react";


function Child({ showModal, toggleModal }) {
    return (
      <div className="child">
        <h2>Child Component</h2>
        {/* Button that triggers the toggleModal function */}
        <button onClick={toggleModal}>Show Modal</button>
      </div>
    );
  }

  export default Child;