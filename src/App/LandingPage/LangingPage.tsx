import WordSphere from "../WordSphere/WordSphere";
import './LandingPage.scss';
import { Link } from "react-router-dom";

const LandingPage = () => {
	return (
		<div className="home">
			<div className="main-text">
				<div className="home-text">
					<div className="text">H</div>
					<div className="text">i</div>
					<div className="text">,</div>
					<br></br>
					<div className="text">I</div>
					<div className="text">'</div>
					<div className="text-b">m</div>
					<div className="text">D</div>
					<div className="text">o</div>
					<div className="text">m</div>
					<div className="text">i</div>
					<div className="text">n</div>
					<div className="text">i</div>
					<div className="text">k</div>
					<div className="text">,</div>
					<br></br>
					<div className="text">W</div>
					<div className="text">e</div>
					<div className="text-b">b</div>
					<div className="text">D</div>
					<div className="text">e</div>
					<div className="text">v</div>
					<div className="text">e</div>
					<div className="text">l</div>
					<div className="text">o</div>
					<div className="text">p</div>
					<div className="text">e</div>
					<div className="text">r</div>
					<div className="text">.</div>
				</div>
			<div className="info">
				Full Stack Web Developer / Angular / React / Vue
			</div>
			<div className="button-container">
				<Link to='/contact'>
					<button>
						Get in touch.
					</button>
				</Link>
			</div>
		</div>
		<WordSphere />
	</div>
	);
};

export default LandingPage;