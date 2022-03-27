import useFetch from '../../../hooks/useFetch';

import classes from './Projects.module.css';

const Projects = () => {
  const API_KEY = process.env.REACT_APP_JSONBIN_API_KEY;
  const BIN_ID = process.env.REACT_APP_JSONBIN_BIN_ID;

  const url = 'https://api.jsonbin.io/v3/b/' + BIN_ID;

  const { data: projects, isLoading } = useFetch(url, {
    method: 'GET',
    headers: { 'X-Master-Key': API_KEY },
  });

  return (
    <div className={classes.projects}>
      {projects?.record && (
        <div className={classes.projects__list}>
          {projects?.record.map((project) => (
            <div key={Math.random()} className={classes.project}>
              <a href={project.link}>
                <img src={project.src} alt={project.alt} />
              </a>
              <p className={classes.project__title}>{project.title}</p>
            </div>
          ))}
        </div>
      )}
      {isLoading && (
        <div className={classes['loading-wrappers']}>
          <div className={classes.loading}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
