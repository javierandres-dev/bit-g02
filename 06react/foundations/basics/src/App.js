import { Fragment } from "react";
import ClassComponent from "./components/ClassComponent";
import { ConditionalComponent } from "./components/ConditionalComponent";
import { FuntionalComponent } from "./components/FuntionalComponent";
import { Arrays } from "./components/Arrays";
import Parts from "./components/Parts";
import { HandleEvents } from "./components/HandleEvents";

function App() {
  return (
    <Fragment>
      <HandleEvents/>
      <hr/>
      <Arrays/>
      <hr/>
      <ConditionalComponent/>
      <hr/>
      <FuntionalComponent/>
      <hr/>
      <ClassComponent/>
      <hr/>
      <Parts/>
    </Fragment>
  );
}

export default App;
