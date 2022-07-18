import './AboutMe.scss';

const AboutMe = () => {
    return (
        <div className='about'>
            <div className='left-side'>
                <div className='main-text'>
                    <div className='text'>A</div>
                    <div className='text'>b</div>
                    <div className='text'>o</div>
                    <div className='text'>u</div>
                    <div className='text-b'>t</div>
                    <div className='text'>m</div>
                    <div className='text'>e</div>
                </div>
                <br></br>
                <div className='about-text'>
                    <p>
                        I have been a professional web developer for 1 1/2 years, during my develpoment career I have been
                        able to work with three major frameworks: Vue, Angular, and React. I spent 1 1/2 years at i5Services. I currently work 
                        in React professionally but that change is only recent with Angular being my most familiar framework.
                        I have greatly improved my development skills while working in the field and though I still have <i>what feels like</i> 
                        everything to learn I am happy to talk with anyone about anything tech related and maybe even work together!
                    </p><br></br>
                    {/*
                        TODO: Create a little timeline showcase my development experience in an aesthetic way.
                        I will probably host this picture on amazon in an s3 bucket (?)
                    */}
                    {/* <img /> */}
                </div>
            </div>
        </div>
    )
}

export default AboutMe;