import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { getBaketTotal } from "./utils";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router";
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const history = useHistory();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              subtotal ({basket.length} items):
              <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBaketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button onClick={(e) => history.push("/payment")}>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
