import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [dataFromChild, setDataFromChild] = useState("");

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };

  return (
    <div>
      <p>Data from Child: {dataFromChild}</p>
      <ChildComponent onDataFromChild={handleDataFromChild} />
    </div>
  );
}

export default ParentComponent;
