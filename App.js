let parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h2", {}, "I am a h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h2", {}, "I am a h2 tag"),
  ]),
]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React"
// ); // createElement("tag", {attributes}, "content" )
const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(heading); //logs the react element which is a JS object of type h1, and has props: children+attributes

root.render(parent);
