import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "London", "Toronto", "New Jersey", "Vancouver"];
  // Use message component using self closing tag inside app component
  const [alertVisible, setAlertVisiblity] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisiblity(false)}>Alert</Alert>
      )}
      <Button
        color="primary"
        onClick={() => {
          setAlertVisiblity(true);
        }}
      >
        New Button
      </Button>
    </div>
  );
}

export default App;
