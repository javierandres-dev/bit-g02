import { Fragment } from 'react';
import ClassComponent from './components/ClassComponent';
import { ConditionalComponent } from './components/ConditionalComponent';
import { FuntionalComponent } from './components/FuntionalComponent';
import { Arrays } from './components/Arrays';
import Parts from './components/Parts';
import { HandleEvents } from './components/HandleEvents';
import { FragmentComponent } from './components/FragmentComponent';
import { Props } from './components/Props';
import { PropsChildren } from './components/PropsChildren';
import { Styles } from './components/Styles';
import { StylesModul } from './components/StylesModul';
import { StateHook } from './components/StateHook';
import { CustomHook } from './components/CustomHook';
import { Lifecycle } from './components/Lifecycle';
import { EffectHook } from './components/EffectHook';
import { ContextHook } from './components/ContextHook';

function App() {
  return (
    <Fragment>
      <ContextHook />
    </Fragment>
  );
}

export default App;
/*
<EffectHook />
<Lifecycle />
<CustomHook />
<StateHook />
<StylesModul />
<Styles />
<PropsChildren>
  <p>soy un párrafo</p>
  <p>soy otro párrafo</p>
</PropsChildren>
<Props name='pepita' />
<HandleEvents />
<Arrays />
<FragmentComponent />
<ConditionalComponent />
<FuntionalComponent />
<ClassComponent />
<Parts />
*/
