import styles from './ProjectsStyles.module.css'
import cliffPic from '../../assets/lake.png'
import heartPic from '../../assets/heart.png'
import chartPic from '../../assets/statistics.png'
import ProjectCard from '../../common/ProjectCard'

function Projects() {

    const projects = {
        modchartsProj: {
            link: 'https://www.chartworks.io/',
            pic: chartPic,
            title: 'Chartworks',
            desc: 'Chartworks is a rich interactive charting experience all in the browser with zero plugins. Fully responsive so it looks great on any device. Add it to your site with just a few lines of JavaScript.',
            alt: 'A colorful logo of a line graph'
        },
        wywhProj: {
            link: 'https://github.com/zwsaile/wish-you-were-here-client',
            pic: heartPic,
            title: 'Wish You Were Here',
            desc: 'Wish You Were Here leverages React, Websockets, HTML Canvas, and Node.js to allow users to create a collective virtual photo reminiscent of a class photograph, designed during a time when remote interaction was prevalent.',
            alt: 'Blue and purple heart logo for the project Wish You Were Here'
        },
        cliffProj: {
            link: 'https://github.com/zwsaile/cliff-jumps',
            pic: cliffPic,
            title: 'Send It',
            desc: 'Send It is responsive web application written with React and Node.js that offers adventurers and cliff divers a robust list of cliff diving spots across the U.S.A.',
            alt: 'Red and wite logo of trees and a lake for cliff jumping project'
        }
    }
    return (
        <section
            id='projects'
            className={styles.container}
        >
            <h1
                className='sectionTitle'
            >
                Projects
            </h1>
            <div
                className={styles.projectsContainer}
            >
                {Object.values(projects).map((project, index) => (
                    <ProjectCard
                        key={index}
                        link={project.link}
                        src={project.pic}
                        title={project.title}
                        desc={project.desc}
                        alt={project.alt}
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects