import { useState } from "react";

export function ServiceCard() {
  const [selected, setSelected] = useState(false);
  function handleClick() {
    setSelected((selected) => !selected);
  }
  return (
    <div className={selected ? "card selected" : "card"} onClick={handleClick}>
      <div className="card-heading">
        <div>
          <h5>Its all fine</h5>
          <p id="description">One on One</p>
        </div>
        <p>$00.00</p>
      </div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </div>
  );
}
