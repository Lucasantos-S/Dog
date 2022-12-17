import React from "react";

function UseMedia(media) {
  const [metch, setMatch] = React.useState(null);

  React.useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media);

      setMatch(matches);
    }
    changeMatch()
    window.addEventListener("resize", changeMatch);
    return () => window.removeEventListener("resize", changeMatch);
  }, [media]);
  return metch;
}

export default UseMedia;
