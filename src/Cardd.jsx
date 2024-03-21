import './Cardd.css';
import imgSrc from './assets/profile.png';

function Cardd({title, desc, plans, price}){
    let isDiscount = price > 20000;
    const styles = {color: isDiscount ? "red" : ""}
    return <div className="Card">
        <div className="card-img">
            <img src={imgSrc} alt="profile" />
        </div>
        <div className="card-body">
            <h3>{title}</h3>
            <p>{desc}</p>
            <p>{plans.map((e)=><li>--{e}</li>)}</p>
            <p><b>Price: </b>{price}</p>
            {/* <p>{isDiscount}</p> */}
            {/* {price > 20000 ? <p>5% off</p> : null} */}
            {isDiscount && <p style={styles}>5% off</p>}
        </div>
    </div>
}

export default Cardd;