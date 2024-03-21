import './Cardds.css';
import Cardd from './Cardd';

function Cardds(){
    return <div className="card-cont">
        <Cardd title="Web Development" desc="We provide best showcase to your business" plans={["Basic", "Advance", "Fully Custom", "Domain"]} price= {20000} />
        <Cardd title="App Development" desc="We provide best showcase to your business" plans={["Basic", "Advance", "Fully Custom", "Domain"]} price= {30000} />
        <Cardd title="AI Development" desc="We provide best showcase to your business" plans={["Basic", "Advance", "Fully Custom", "Domain"]} price= {40000} />
    </div>
}

export default Cardds;