import { useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks";

const AlertCounter = () => {
  const counter = useAppSelector((state) => state.counter.value);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (counter === 20) {
      return setShowAlert(true);
    }
  }, [counter]);

  if (showAlert) {
    return (
      <div className="App-alert">
        <div>Counter has reached 20</div>
        <button onClick={() => setShowAlert(false)}>Close</button>
      </div>
    );
  }
  return null;
};

export default AlertCounter;
