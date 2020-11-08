// import logo from "./logo.svg";
// import HelloWorld from "./components/hello-world";

// import MainMenu from "./components/main-menu";
// import Button from "./components/common/button";

import DropDown from "./components/dropdown";

// import Counter from "./components/counter";

import "./App.css";

const list = ["Report", "Change Name", "Clear"];
// const list2 = ["Report1", "Change Name1", "Clear1"];

function App() {
  return (
    <div className="App">
      {/* <HelloWorld text="Hello!" />
      <HelloWorld text="Hello again!" />
      <HelloWorld /> */}
      {/* <MainMenu />
      <Button>Hi</Button> */}
      {/* <Counter count={23} size={4} color="red" /> */}
      {/* <Counter count={23} size={5} color="yellow" />
      <Counter count={23} size={5} color="{2}" /> */}
      <h3>DropDown</h3>
      <DropDown list={list} />
      {/* <DropDown list={list2} /> */}
    </div>
  );
}

export default App;
