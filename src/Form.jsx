import './Form.css';

function handleSubmit(event){
    event.preventDefault();
    console.log("Form Submitted");
}
export default function Form() {
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Name'/>
            <input type="text" placeholder='Education'/>
            <input type="number" placeholder='age'/>
            <button>Submit</button>
        </form>

    )
}