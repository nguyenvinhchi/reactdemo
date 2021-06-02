import React, { useRef, useState } from "react";
import styles from "./Checkout.css";

const Checkout = (props) => {
  const nameRef = useRef();
  const postalRef = useRef();
  const streetRef = useRef();
  const cityRef = useRef();

  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true
  })

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredStreet = streetRef.current.value;
    const enteredPostalCode = postalRef.current.value;
    const enteredCity = cityRef.current.value;

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      potalCode: enteredPostalCode,
      city: enteredCity
    })
    console.log('Submited order')
  };
  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div className={styles.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="postalcode">Postal Code</label>
        <input type="text" id="postalcode" ref={postalRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityRef} />
      </div>
      <button type="button" onClick={props.onCancel}>
        Cancel
      </button>
      <button>Confirm</button>
    </form>
  );
};

export default Checkout;
