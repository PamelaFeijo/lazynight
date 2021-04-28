import "./App.css";
import "./styles.css";
import { Switch, Route, Router } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Quiz from "./components/Quiz";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/food-quiz" component={Quiz} />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
