import "./RateWindow.css";
import { useState } from "react";

function RateWindow(props) {
  const rateNumber = props.rateNumber;
  const [clickedButton, setClickedButton] = useState(null);
  props.clickedButton = clickedButton;
  return (
    <div className="rate-container">
      <div className="star-container ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
        >
          <path
            d="M9.06688 0.429953L11.0567 4.46137C11.1691 4.68909 11.3864 4.84692 11.6377 4.88341L16.0866 5.52998C16.3773 5.5722 16.6188 5.77583 16.7095 6.05523C16.8002 6.33463 16.7244 6.64131 16.514 6.84627L13.2943 9.98421C13.1122 10.1617 13.0296 10.4171 13.0721 10.667L13.8321 15.0981C13.8816 15.3876 13.7626 15.6801 13.525 15.8527C13.2874 16.0253 12.9724 16.048 12.7125 15.9114L8.73279 13.8189C8.50789 13.7009 8.23937 13.7009 8.01447 13.8189L4.03475 15.9114C3.77481 16.048 3.45984 16.0253 3.22224 15.8527C2.98464 15.6801 2.86562 15.3876 2.91521 15.0981L3.6752 10.667C3.71815 10.4167 3.63503 10.1613 3.45299 9.98421L0.233258 6.84627C0.022814 6.64131 -0.0529846 6.33463 0.0377459 6.05523C0.128477 5.77583 0.369993 5.5722 0.660704 5.52998L5.10953 4.88341C5.36085 4.84692 5.57812 4.68909 5.69052 4.46137L7.68038 0.429953C7.96586 -0.143318 8.78372 -0.143318 9.06688 0.429953Z"
            fill="#FC7614"
          />
        </svg>
      </div>
      <div className="description">
        <h2>How did we do?</h2>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className="rating-scale">
        <button
          className={`1 oval ${clickedButton === 1 ? "active" : ""}`}
          onClick={() => setClickedButton(1)}
        >
          1
        </button>
        <button
          className={`2 oval ${clickedButton === 2 ? "active" : ""}`}
          onClick={() => setClickedButton(2)}
        >
          2
        </button>
        <button
          className={`3 oval ${clickedButton === 3 ? "active" : ""}`}
          onClick={() => setClickedButton(3)}
        >
          3
        </button>
        <button
          className={`4 oval ${clickedButton === 4 ? "active" : ""}`}
          onClick={() => setClickedButton(4)}
        >
          4
        </button>
        <button
          className={`5 oval ${clickedButton === 5 ? "active" : ""}`}
          onClick={() => setClickedButton(5)}
        >
          5
        </button>
      </div>
      <button className="submit" onClick={() => {}}>
        SUBMIT
      </button>
    </div>
  );
}

export default RateWindow;
