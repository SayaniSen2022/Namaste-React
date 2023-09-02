import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 id="heading">Namaste React JSX</h1>; //React element

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <Title></Title>
    {Title()}
    <h1>Namaste React FC</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
