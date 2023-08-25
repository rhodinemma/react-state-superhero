import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="container">
      <div className="smallContainer">
        <Header />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
