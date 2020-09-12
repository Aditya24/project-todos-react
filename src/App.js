import React from "react";
import "./App.css";
import Todo from "./components/Todo.js";
//rafce :- create arrow function
class App extends React.Component {
  state = {
    todo: [
      {
        id: "1",
        title: "Fold the Laundry",
        completed: false,
      },
      {
        id: "2",
        title: "Pickup kids at 3",
        completed: false,
      },
      {
        id: "3",
        title: "Lasagnia for dinner",
        completed: false,
      },
      {
        id: "4",
        title: "Prep for interview",
        completed: false,
      },
    ],
  };
  render() {
    return (
      <div>
        <Todo todo={this.state.todo} />
      </div>
    );
  }
}

export default App;
