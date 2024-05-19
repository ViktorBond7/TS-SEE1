// import { useState } from 'react'
// import React from "react";
// import "./App.css";

import React from "react";
import { Battlefield } from "./Battlefield";
import { HeaderWithCounter } from "./HeaderWithCounter";
import { ResetButton } from "./ResetButton";
import { useGameState } from "./state/useGameState";

function App() {
  const { turn, reset, matrix, fire, won } = useGameState();
  // const onFire = (y: number, x: number) => console.log(y, x);

  React.useEffect(() => {
    if (won) {
      setTimeout(() => alert("MOSCOW DOWN!"), 2000);
    }
  }, [won]);

  return (
    <div className={"app"}>
      <HeaderWithCounter turn={turn} />
      <Battlefield disabled={won} matrix={matrix} onFire={fire} />
      <ResetButton reset={reset} />
    </div>
  );
}

export default App;
