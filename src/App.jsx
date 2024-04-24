import "./App.css";
import RateWindow from "./RateWindow";
import ThankWindow from "./ThankYou";
import { useState } from "react";

function App() {
  const [clickedButton, setClickedButton] = useState();
  const [submited, setSubmited] = useState(false);

  return (
    <div>
      {!submited ? (
        <RateWindow
          clickedButton={clickedButton}
          setClickedButton={setClickedButton}
          setSubmited={setSubmited}
        />
      ) : (
        <ThankWindow clickedButton={clickedButton} />
      )}
    </div>
  );
}

export default App;
