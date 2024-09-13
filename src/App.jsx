import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Task from './Task';




function App() {
  return (
    <div className="">
      <Header title='Task Tracker' />
      <Form />
   <Task/>

    
    </div>
  );
}

export default App;
