import { Link } from "react-router-dom";
import './Skills.scss';
import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import WordSphere from "../WordSphere/WordSphere";

const Skills = () => {
    const particlesInit = useCallback(async (engine: any) => { await loadFull(engine) }, []);

    const particlesLoaded = useCallback(async (container: any) => {}, []);

    return(
        <div className="skills">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 120,
                    interactivity:{
                        detectsOn: 'canvas',
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push'
                            },
                            resize: true
                        },
                    },
                    particles: {
                        color: {
                            value: '#FF00FF'
                        },
                        move: {
                            enable: true,
                        },
                        links: {
                            enable: true,
                            color: '#FF00FF'
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 800
                            },
                            value: 90
                        }
                    }
                }}
            />
            <div className="left-side">
                <div className="text-container">
                    <div className="headers">
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
            <div className="right-side">
                <div className="skill">
                    <span className="skill-title">Angular</span>
                    <footer className="gray-bar">
                        <div className="color-bar angular"></div>
                    </footer>
                </div>
                <div className="skill">
                    <span className="skill-title">React</span>
                    <footer className="gray-bar">
                        <div className="color-bar react"></div>
                    </footer>
                </div>
                <div className="skill">
                    <span className="skill-title">Vue</span>
                    <footer className="gray-bar">
                        <div className="color-bar vue"></div>
                    </footer>
                </div>
                <div className="card-container">
                    <div className="card">
                        <div className="card-title">Full Stack Web Developer</div>
                        <div className="card-emp-title">i5Services</div>
                        <div className="card-date">2021-2022</div>
                    </div>
                </div>
                <div className="card-container">
                    <div className="card">
                        <div className="card-title">Full Stack Engineer</div>
                        <div className="card-emp-title">Clozd</div>
                        <div className="card-date">2022-</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills