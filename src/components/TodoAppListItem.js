import React from 'react';
import {connect} from "react-redux";
import {toggleTodo} from "../redux/actions";
import {deleteTodo} from "../redux/actions";

const TodoAppListItem = ({content, id, completed, toggleTodo}) => {
    return (
        <div key={id} style={{
            textDecoration: completed ? "line-through" : "initial"
        }} onClick={() => toggleTodo(id)}>
            {content}
            <button onClick={() => deleteTodo(id)}>Sil</button>
        </div>
    );
};

const mapDispatchToProps = {
    toggleTodo: toggleTodo,
    deleteTodo: deleteTodo,
}

export default connect(null, mapDispatchToProps)(TodoAppListItem);