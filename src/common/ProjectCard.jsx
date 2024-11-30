function ProjectCard({ link, src, alt, title, desc }) {
  return (
    <>
        <a
            href={link}
        >
            <img
                className='hover'
                src={src}
                alt={alt} />
            <h3>
                { title }
            </h3>
        </a>
        <p>
            { desc }
        </p>
    </>
  )
}

export default ProjectCard