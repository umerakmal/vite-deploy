import './Body.css';
import Title from './Title';
import Cardds from './Cardds';
import Intro from './Intro';
import Form from './Form';

function Body(){
    return <div className="Body">
        <Title />
        <Cardds />
        <Intro />
        <Form />
    </div>
}

export default Body;