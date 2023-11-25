import './App.css';
import styles from './appStyles.module.css'
import './appStyles.css'
import ClassClick from './components/ClassClick';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import FunctionClick from './components/FunctionClick';
import Greet from './components/Greet';
import Hello from './components/Hello';
import Inline from './components/Inline';
import Message from './components/Message';
import NameList from './components/NameList';
import ParentComponent from './components/ParentComponent';
import Stylesheet from './components/Stylesheet';
import UserGreeting from './components/UserGreeting';
import Welcome from './components/Welcome';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
function App() {
  return (
    <div className="App">
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
       {/* <Greet name ='Teddy' heroName="Superman">
        <p>This is children props</p>
        </Greet>
       <Greet name ='Kale' heroName="Mar">
       <button>Action</button>
       </Greet>
       <Greet name ='Emi' heroName="Kimem"/>
       <Welcome name ='Teddy' heroName="Superman"/> 
       <Welcome name ='Kale' heroName="Mar"/> 
       <Welcome name ='Emi' heroName="Kimem"/>  */}
      {/* <Hello /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <Stylesheet  primary={true}/> */}
      {/* <Inline /> */}
      {/* <Form /> */}
      {/* <LifecycleA /> */}
      {/* <FragmentDemo /> */}
      <Table />
    </div>
  );
}

export default App;
