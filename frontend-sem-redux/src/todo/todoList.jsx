import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

    const  renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton style="success" icon="check" hide={todo.done}
                        onClick={() => props.handleMarkAsDone(todo)}></IconButton>
                    <IconButton style="warning" icon="undo" hide={!todo.done}
                                onClick={() => props.handleMarkAsPending(todo)}></IconButton>
                    <IconButton style="danger" icon="trash-o" hide={!todo.done}
                        onClick={() => props.handleRemove(todo)}></IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <td>Descrição</td>
                    <td className="tableActions">Ações</td>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}