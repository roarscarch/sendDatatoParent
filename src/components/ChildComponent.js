import React from 'react';

function ChildComponent(props) {
  const sendDataToParent = () => {
    const dataToSend = "Hello from child!";
    props.onDataFromChild(dataToSend);
  };

  return (
    <div>
      <button onClick={sendDataToParent}>Send Data to Parent</button>
    </div>
  );
}

export default ChildComponent;
