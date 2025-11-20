import React, { useEffect } from "react";

function PopUp() {
  useEffect(() => {
    alert("Clients starting in January 2026 will get a 10% discount!");
  }, []);

  return null;
}

export default PopUp;


