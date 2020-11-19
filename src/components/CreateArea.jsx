import React, {useState} from "react";

function CreateArea(props) {
    const [input, setInput] = useState({title: "", content: ""})

    function handleChange (event) {
        const {name, value} = event.target;

        setInput(prevValue => {
            return {...prevValue, [name]: value}
        })
    }

function addSubmit (event) {
    props.onAdd(input);
    setInput({title: "", content: ""})
    event.preventDefault();
}


  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={input.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={input.content} />
        <button onClick={addSubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;