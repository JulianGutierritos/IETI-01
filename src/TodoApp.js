import React from 'react';
import {TodoList} from './TodoList';
export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '', priority: 0, dueDate: new Date()};
    this.handleChangeText = this.handleChangeText.bind(this);
	this.handleChangePriority = this.handleChangePriority.bind(this);
	this.handleChangeDueDate = this.handleChangeDueDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList todoList={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo-text"
            onChange={this.handleChangeText}
            value={this.state.text}
          />
		  <input
            id="new-todo-priority"
            onChange={this.handleChangePriority}
            value={this.state.priority}
          />
		  <input
            id="new-todo-dueDate"
            onChange={this.handleChangeDueDate}
            value={this.state.dueDate.toString()}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChangeText(e) {
    this.setState({ text: e.target.value });
  }
  
  handleChangePriority(e){
	this.setState({ priority : e.target.value });
  }
  
  handleChangeDueDate(e){
	this.setState({ dueDate : new Date(e.target.value) }); 
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      priority: this.state.priority,
	  dueDate: this.state.dueDate
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: '',
	  priority: 0,
	  dueDate: new Date()
    }));
  }
}