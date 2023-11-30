import React from "react";
import "./App.css";
import styles from "./appStyles.module.css";
import "./appStyles.css";
import ClassClick from "./components/ClassClick";
import Counter from "./components/Counter";
import EventBind from "./components/EventBind";
import FunctionClick from "./components/FunctionClick";
import Greet from "./components/Greet";
import Hello from "./components/Hello";
import Inline from "./components/Inline";
import Message from "./components/Message";
import NameList from "./components/NameList";
import ParentComponent from "./components/ParentComponent";
import Stylesheet from "./components/Stylesheet";
import UserGreeting from "./components/UserGreeting";
import Welcome from "./components/Welcome";
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import { PureComponent } from "react";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";
import RenderCounter from "./components/RenderCounter";
import ComponentC from "./components/context/ComponentC";
import { UserProvider } from "./components/context/userContext";
import PostList from "./components/http-axios/PostList";
import PostForm from "./components/http-axios/PostForm";
import CounterHook from "./components/hooks/CounterHook";
import HookCounter from "./components/hooks/HookCounter";
import HookCounterTwo from "./components/hooks/HookCounterTwo";
import HookCounterThree from "./components/hooks/HookCounterThree";
import EffectHookOne from "./components/hooks/EffectHookOne";
import ClassCounterOne from "./components/hooks/ClassCounterOne";
import ClassCounterTwo from "./components/hooks/ClassCounterTwo";
import ClassMouse from "./components/hooks/ClassMouse";
import HookMouse from "./components/hooks/HookMouse";
import MouseContainer from "./components/hooks/MouseContainer";
import IntervalClassCounter from "./components/hooks/IntervalClassCounter";
import IntervalHookCounter from "./components/hooks/IntervalHookCounter";
import DataFetching from "./components/hooks/DataFetching";
import CountUseReducer from "./components/hooks/CountUseReducer";
import UseReducerCountTwo from "./components/hooks/UseReducerCounterTwo";
import CountReducerThree from "./components/hooks/CountReducerThree";

export const ChannelContext = React.createContext();
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
      {/* <Table /> */}
      {/* <ParentComp /> */}
      {/* <RefsDemo /> */}
      {/* <FocusInput /> */}
      {/* <FRParentInput /> */}
      {/* <PortalDemo /> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}
      {/* <ClickCounter name="Teddy"/> */}
      {/* <HoverCounter /> */}
      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={(isLoggedIn) => isLoggedIn?  "Teddy" : "Guest"} /> */}
      {/* <RenderCounter>
        {(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </RenderCounter>

      <RenderCounter>
        {(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </RenderCounter> */}

      {/* <RenderCounter
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      /> */}

      {/* Context */}
      {/* <UserProvider value="Teddy">
        <ComponentC />
      </UserProvider> */}
      {/* <PostList /> */}
      {/* <PostForm /> */}
      {/* <CounterHook /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <EffectHookOne /> */}
      {/* <ClassCounterOne /> */}
      {/* <ClassCounterTwo /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalClassCounter /> */}
      {/* <IntervalHookCounter /> */}
      {/* <DataFetching /> */}

      {/* <UserProvider value="Teddy">
        <ChannelContext.Provider value={"TeddyIctSolutions"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserProvider> */}

      {/* <CountUseReducer /> */}
      {/* <UseReducerCountTwo /> */}
      <CountReducerThree />
    </div>
  );
}

export default App;
