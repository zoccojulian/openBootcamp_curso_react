import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteconContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/greetingStyled';
import Father from './components/container/father';
import OptionalRender from './components/pure/optionalRender';
import LoginFormik from './components/pure/forms/loginFormik';
import RegiterFormik from './components/pure/forms/regiterFormik';



function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/*Componente propio Greeting.jsx */}
        {/*<Greeting name="Julian"></Greeting>*/}
        {/*<GreetingF name="Julian"></GreetingF>*/}
        {/* <TaskListComponent></TaskListComponent> */}
        {/*<Ejemplo1></Ejemplo1>*/}
        {/*<Ejemplo2></Ejemplo2>*/}
        {/*<MiComponenteconContexto></MiComponenteconContexto>*/}
        {/*Todo loque hay aquí, es tratado como props.children */}
        {/* <Ejemplo4 nombre = "Martín">
          
            <h3>
              Contenido del props.Children
            </h3>
        </Ejemplo4> */}
        {/* <GreetingStyled name="Martín"></GreetingStyled> */}
      {/* </header> */}
      {/*Gestión de eventos */}
      {/* <Father></Father> */}

      {/*ejemplos de renderizado condicional */}
      {/* <OptionalRender></OptionalRender> */}

      {/**Ejemplo de uso de Formik y Yup */}
      {/* <LoginFormik></LoginFormik> */}
      {/* <RegiterFormik></RegiterFormik> */}

      {/*PROYECTO FINAL */}
      <TaskListComponent></TaskListComponent>
    </div>
  );
}

export default App;
