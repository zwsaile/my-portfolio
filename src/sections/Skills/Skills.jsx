import SkillCard from '../../common/SkillCard';
import styles from '../Skills/SkillsStyles.module.css'

function Skills() {
    const skillsData = [
        {
            section: 'Frontend Development',
            skills: [
                'HTML',
                'CSS',
                'JavaScript',
                'Vue',
                'Pinia',
                'Vuex',
                'React',
                'Redux',
                'D3.js',
                'Responsive Design',
                'Accessibility'
            ],
        },
        {
            section: 'Backend Development',
            skills: [
                'C#',
                'Node.js',
                'Python',
                'WebSockets',
                'GraphQL',
                'Apollo',
            ],
        },
        {
            section: 'Testing',
            skills: [
                'Jest',
                'Cypress',
                'Mocha',
                'NUnit',
            ],
        },
        {
            section: 'DevOps and Tooling',
            skills: [
                'Docker',
                'Jenkins',
                'Groovy',
                'Filebeat',
                'Logstash',
                'Git',
            ],
        },
        {
            section: 'General Practices',
            skills: [
                'Scrum',
                'Sprints',
                'Kanban'
            ]
        }
    ];
    

    return (
        <section id='skills' className={styles.container}>
            <h1>Skills</h1>
            <div className={styles.skillList}>
                {skillsData.map((section, sectionIndex) => (
                    <div key={sectionIndex} className={styles.section}>
                        <h2 className={styles.sectionHeader}>
                            {section.section}
                        </h2>
                        <div className={styles.skillsContainer}>
                            {section.skills.map((skill, skillIndex) => (
                                <SkillCard key={skillIndex} skill={skill} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}


export default Skills