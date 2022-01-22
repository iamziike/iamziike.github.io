import useFetch from '../../hooks/useFetch';
import classes from './Projects.module.css';

const Projects = () => {
  const url =
    'https://res.cloudinary.com/dnagee/raw/upload/v1642856786/ziike/projects_list.json';
  const { data: projectsList, isLoading } = useFetch(url);

  return (
    <div className={classes.projects}>
      <h1>Some Projects</h1>
      {isLoading && <p className='loading'>Loading</p>}
      {projectsList && (
        <div className={classes.projects__list}>
          {projectsList.map((project) => (
            <div key={Math.random()} className={classes.project}>
              <a href={project.link}>
                <img src={project.src} alt={project.alt} />
              </a>
              <p className={classes.project__title}>{project.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
