import React from 'react';
import {Todo} from './Todo';

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
		const items = this.props.todoList;
		const listItems = items.map((item) =>
			<li key={item.text}>
				<Todo todo={item}/>
			</li>
		);
        return (
			<ul>{listItems}</ul>
        );
    }
};