import React from "react";

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);

      response = await fetch(url, options);
   
      json = await response.json();
      console.log(json);

      if (response.ok === false) throw new Error(json.message);
    } catch (err) {
      json = null 
      setError(err.message)
    } finally {
      setLoading(false);
      setData(json);
      return { response, json };
    }
  });

  return {
    data,
    loading,
    error,
    request,
  };
};

export default useFetch;
