import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
        return (  
          <h2>{this.props.todo.text} {this.props.todo.priority} {this.props.todo.dueDate.toString()}</h2> 
        );
    }

};

