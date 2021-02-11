import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
        return (  
          <h2>Title: {this.props.todo.text} Priority: {this.props.todo.priority} Date: {this.props.todo.dueDate.toString()}</h2> 
        );
    }

};

