import React from "react";
import styles from "./Input.module.css";
function Input({ label, value, onChange, type, name, error, onBlur}) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.input}
        id={name}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        onBlur={onBlur}
      />
     {error && <p className='error'>{error}</p>}
    </div>
  );
}

export default Input;
