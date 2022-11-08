import React, {useState} from 'react'

export default function Form(props) {
    const [text, setText] = useState({})

    function handleSubmit(todolst){
      setText(text + todolst)
    }
  return (
    <div className='row'>
            <h3 className="text-center">Todo list</h3>
        <div className="col">
            <ul>
                <li key={props.item}>{props.text}</li>
            </ul>
        </div>
        <div className="col">
            <form onSubmit={this.handleClick}>
                <label>
                    Todo list<textarea value={props.state.value} onChange={props.handleCllick} />
                </label>
                <button className={`btn btn-${props.color}`} onClick={() => handleSubmit(props.text)}>Add to list</button>
            </form>
        </div>
    </div>
  );
}
