import React from 'react';

function Summery(props) {
  const tax = 6.00;
  const total = props.subtotal > 0 ?
    props.subtotal + tax :
    0;
  return (
    <div className="Summery">
      <div className="Summery-item">
        <p className="subtitle">Subtotal</p>
        <p>{parseFloat(props.subtotal).toFixed(2)}</p>
      </div>
      <div className="Summery-item">
        <p className="subtitle">Shipping</p>
        <p>${parseFloat(0).toFixed(2)}</p>
      </div>
      <div className="Summery-item">
        <p className="subtitle">Taxes(6%)</p>
        <p>${parseFloat(tax).toFixed(2)}</p>
      </div>
      <div className="Summery-item">
        <p className="subtitle">Total</p>
        <p>
          ${parseFloat(total).toFixed(2)}
        </p>
      </div>
      <div className="Summery-item Summery-item-checkout">
        <button>Checkout</button>
      </div>
    </div>
  );
}

export default Summery;
