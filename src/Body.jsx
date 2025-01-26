import './Body.css';

export default function Body() {
    return(
        <>        
            <section id='about' className='about'>
                <div className='about-me'>
                    <img src="src/assets/myPhoto.jpg" alt="Jose's Photo" className="profile-photo" />
                    <div className='about-text'>
                        <h2>About Me</h2>
                        <p>
                            I am a software developer with a passion for learning. I've finished my bachelor's degree in informatics engineering at Universidade de Coimbra (FCTUC), with special interest at software engineering. During my bachelor's I have developed solid skills at programming in pyhton, C, C++ and java.
                        </p>
                    </div>
                </div>
                <div className="divider"></div>
                <div className='contacts'>
                    <h2>Contacts</h2>
                    <p>Email: jd.natasantos@gmail.com</p>
                    <p>
                        <img src='src/assets/linked-logo.png' className='linkedIn-logo' alt='linkedIn-logo'></img>
                        <a href='https://www.linkedin.com/in/jose-dinis-nata-santos/'>LinkedIn</a>
                    </p>
                </div>
            </section>
            <section id='education' className='tab'>
                <h2>Education</h2>
                <div className='education-item'>
                    <h3>Universidade de Coimbra</h3>
                    <p>Bachelor's in Informatics Engineering</p>
                    <p>10/2021-01/2025</p>
                    <div className='website'>
                        <p>Website: </p>
                        <a href='https://www.uc.pt/fctuc/dei/ensino/licenciaturas/lei/'>LEI - DEI/UC</a>
                    </div>
                    <a href='https://apps.uc.pt/courses/EN/programme/362/2025-2026?id_branch=22529#branch-22529'>Study Programme</a>
                </div>
            </section>
            <section id='Curriculum Vitae' className='tab'>
                <h2>Curriculum Vitae</h2>
                <a href='src/assets/cv.pdf' download>Download CV</a>
            </section>
        </>
    )
}