import React from "react";
import Typewriter from "typewriter-effect";
import { NEXT_DEVELOPER, REACT_DEVELOPER, SOFTWARE_DEVELOPER } from "../../constant";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          REACT_DEVELOPER,
          NEXT_DEVELOPER,
          SOFTWARE_DEVELOPER,
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
