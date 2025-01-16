import styles from './HeroStyles.module.css'
import profilePic from '../../assets/profile-pic.jpeg'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import instagramLight from '../../assets/instagram-light.png'
import instagramDark from '../../assets/instagram-dark.png'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import resume from '../../assets/zws-resume.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const instagramIcon = theme === 'light' ? instagramLight : instagramDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;

    return (
        <section 
            id='hero'
            className={styles.container}
        >
            <div
                className={styles.darkModeContainer}
            >
                <img
                    id='profile-pic'
                    className={styles.hero}
                    alt='Headshot of Zachary Saile with a peach background'
                    src={profilePic}
                />
                <img
                    className={styles.darkMode}
                    alt='Dark/light mode icon'
                    src={themeIcon}
                    onClick={toggleTheme}
                />
            </div>
            <div
                className={styles.info}
            >
                <h1>
                    Zachary
                    <br />
                    Saile
                </h1>
                <h2>
                    Software Engineer
                </h2>
                <span
                    id='socials'
                >
                    <a
                        href='https://www.linkedin.com/in/zachary-saile'
                        target='_blank'
                    >
                        <img
                            alt='LinkedIn icon'
                            src={linkedinIcon}
                            className='hover'
                        />
                    </a>
                    <a
                        href='https://www.github.com/zwsaile'
                        target='_blank'
                    >
                        <img
                            alt='Github icon'
                            src={githubIcon}
                            className='hover'
                        />
                    </a>
                </span>
                <p
                    className={styles.description}
                >
                    Full-stack Software Engineer with expertise in C#, JavaScript, and Node.js, specializing in building scalable web applications and backend services, with extensive experience in modern frontend frameworks like React and Vue.
                </p>
                <a
                    href={resume}
                    download
                >
                    <button
                        className='hover'
                    >
                        Resume
                    </button>
                </a>
            </div>
        </section>
    )
}

export default Hero