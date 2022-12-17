import React from "react";

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    messages: "Preencha um email valido",
  },
};

function useForm(type) {
  const [value, setValue] = React.useState("");
  const [checked, setChecked] = React.useState('');
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].messages);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if(error) validate(target.value);
    setValue(target.value);
    setChecked(target.checked);
  }

  return {
    value,
    setValue,
    checked,
    setChecked,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
}

export default useForm;
