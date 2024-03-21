import './Intro.css';
import imgSrc from './assets/profile.png';

function ClickMe(){
    alert('You Clicked...')
}

function Intro(){
    return <div className="Intro">
        <div className="Intro-Text">
            <h2>Global IT Solutions</h2>
            <h3>We Provide Best Solutions</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut soluta at blanditiis voluptates suscipit debitis laboriosam recusandae eaque. Dignissimos in ut perspiciatis est minima totam officia culpa impedit esse dolorem! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad perspiciatis officia placeat, dignissimos, laboriosam amet cupiditate modi ab commodi exercitationem illum nemo. At excepturi distinctio quas optio, aperiam sed adipisci.</p>
            <button onClick={ClickMe}>More Info..!</button>
        </div>
        <div className="Intro-Img">
            <img src={imgSrc} alt="profile img" />
        </div>
    </div>
}
export default Intro;