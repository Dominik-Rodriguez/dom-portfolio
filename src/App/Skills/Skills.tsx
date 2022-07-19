import { Link } from "react-router-dom"

const Skills = () => {
    return(
        <div className="skills">
            <div className="left-side">
                <div className="text-container">
                    <div className="header">
                        <div className="text">S</div>
                        <div className="text">k</div>
                        <div className="text">i</div>
                        <div className="text">l</div>
                        <div className="text">l</div>
                        <div className="text">s</div>
                    </div>
                    <div className="skills-info">
                        <p>
                            I have spent 1.5 years working professionally as a web developer.
                            <br></br>
                            I work with React now but most of my experience is in Angular. I enjoy creating things and
                            solving tough problems. Tough problems are fun (and frustrating) but are the most rewarding 
                            once you figure them out! I have built tools to help manufacturers communicate and network 
                            with each other and my current activity helps companies improve their numbers through win-loss 
                            analysis.
                            <br></br>
                            Let's connect <a href='https://www.linkedin.com/in/dominikrodriguez/'>Linkedin</a>,
                            or <Link to='/contact'>contact me!</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills