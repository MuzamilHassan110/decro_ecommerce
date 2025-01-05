import "./proceedToCheckOutButton.scss";
import { Button } from "antd"
import { Link } from "react-router-dom";

const ProceedToCheckOutButton = () => {
  return (
    <>
    <Link to='/detail/shopping_card/order'>
      <div className="procced-to-check-out">
            <Button >
          Proceed To Check Out
        </Button>
      </div>

  </Link>
     </>
  )
}

export default ProceedToCheckOutButton
