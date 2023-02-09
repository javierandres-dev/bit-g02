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
import { RefHook } from './components/RefHook';
import { MemosHook } from './components/MemosHook';
import { ReducerHook } from './components/ReducerHook';
import { CallbackHook } from './components/CallbackHook';
import { Portal } from './components/Portal';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { PageHome } from './components/PageHome';
import { PageAbout } from './components/PageAbout';
import { PageContact } from './components/PageContact';
import { PageProducts } from './components/PageProducts';
import { PageServices } from './components/PageServices';
import { ApiCalls } from './components/ApiCalls';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Inicio</Link>
        <Link to='/nosotros'>Nosotros</Link>
        <Link to='/contacto'>Contacto</Link>
        <Link to='/productos'>Productos</Link>
        <Link to='/servicios'>Servicios</Link>
        <Link to='/api-calls'>API Calls</Link>
      </nav>
      <Routes>
        <Route path='/' element={<PageHome />} />
        <Route path='/nosotros' element={<PageAbout />} />
        <Route path='/contacto' element={<PageContact />} />
        <Route path='/productos' element={<PageProducts />} />
        <Route path='/servicios' element={<PageServices />} />
        <Route path='/api-calls' element={<ApiCalls />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
/*
<Portal />
<CallbackHook />
<ReducerHook />
<MemosHook />
<RefHook />
<ContextHook />
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
