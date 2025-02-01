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
        cliffProj: {
            link: 'https://cliff-jumps.vercel.app/',
            pic: cliffPic,
            title: 'Send It',
            desc: 'Send It is responsive web application written with React, Node.js, and leverages the Google Maps API. It offers adventurers and cliff divers a robust list of cliff diving spots across the U.S.A.',
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