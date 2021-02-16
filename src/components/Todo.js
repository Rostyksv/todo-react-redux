import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {useState} from 'react';
import {delTodo, editTodo} from '../actions';

function Todo({ todo }) {
    const [edit, setEdit] = useState(false);
    const {id, item} = todo;
    const [text, setText] = useState(item);
    function handleEdit(e) {
        e.preventDefault();
        setText(e.target.value);
    }
    useEffect(() => {
        if(edit === false && text != item) {
            dispatch(editTodo({item: text, id}));
        }
    }, [edit])

    const dispatch = useDispatch();
    return (
    <div>
    <div className="Todo">
        <h3>#{id+1}</h3>
        <h3>{edit ? <input className="form-control" onChange={((e) => handleEdit(e))} value={text} type='text'></input> : <div style={{maxWidth:'50rem', wordWrap:'break-word'}}>{item}</div>}</h3>
        <div className="Todos-btns">
            <button onClick={() => setEdit(!edit)} className='btn btn-primary mr-3'>{edit ? 'Save' : 'Edit'}</button>
            <button onClick={() => dispatch(delTodo(id))} className='btn btn-danger' disabled={edit ? true : false} >Delete</button>
        </div>
    </div>
    </div>
    )
}

export default Todo;