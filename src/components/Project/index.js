function Project({ project }) {
    return (
        <div>
            <img src={require(`../../assets/images/${project.img_file}.png`)} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.live_url && <a href={project.live_url} target="_blank" class="button">View Live</a>}
            {project.repo_url && <a href={project.repo_url} target="_blank" class="button">View Repo</a>}
        </div>
    );
}

export default Project;