const projects = [
  {
    title: 'Project One',
    image: 'https://i.postimg.cc/QMKfsvkz/Screenshot-2026-09-19-104459.png',
    desc: 'A cool project.',
    link: 'https://github.com/ibukuntijesu/movie-app',
  },
  {
    title: 'Project Two',
    image: 'https://i.postimg.cc/wBXbtYL7/Screenshot-2026-09-16-110913.png',
    desc: 'Another cool project.',
    link: 'https://github.com/ibukuntijesu/typescptproj2',
  },
];

export default function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.title} className="project-card">
            <img src={p.image} alt={p.title} width={300} height={200} />
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <a href={p.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}