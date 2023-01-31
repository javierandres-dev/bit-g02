import { Fragment } from "react";
import ClassComponent from "./components/ClassComponent";
import { ConditionalComponent } from "./components/ConditionalComponent";
import { FuntionalComponent } from "./components/FuntionalComponent";
import { Arrays } from "./components/Arrays";
import Parts from "./components/Parts";
import { HandleEvents } from "./components/HandleEvents";
import { FragmentComponent } from "./components/FragmentComponent";
import { Props } from "./components/Props";
import { PropsChildren } from "./components/PropsChildren";
import { Styles } from "./components/Styles";
import { StylesModul } from "./components/StylesModul";
import { StateHook } from "./components/StateHook";
import { CustomHook } from "./components/CustomHook";
import { Lifecycle } from "./components/Lifecycle";

function App() {
  return (
    <Fragment>
      <Lifecycle/>
      <hr/>
      <CustomHook/>
      <hr/>
      <StateHook/>
      <hr/>
      <StylesModul/>
      <hr/>
      <Styles/>
      <hr/>
      <PropsChildren>
        <p>soy un párrafo</p>
        <p>soy otro párrafo</p>
      </PropsChildren>
      <hr/>
      <Props name='pepita'/>
      <hr/>
      <HandleEvents/>
      <hr/>
      <Arrays/>
      <hr/>
      <FragmentComponent/>
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
