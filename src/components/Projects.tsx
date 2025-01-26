import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  sourceUrl?: string;
}

const aiProjects: Project[] = [
  {
    title: 'Gemini AI Assistant',
    description:
      "An AI Assistant project powered by Google's Gemini 1.5 model, featuring real-time chat interface, message history, and modern UI design.",
    technologies: [
      'React 18 & TypeScript',
      'Google Generative AI SDK',
      'Tailwind CSS',
      'Vite & Lucide React',
    ],
    demoUrl: 'https://spectacular-lokum-f97d61.netlify.app/',
    sourceUrl:
      'https://github.com/peterlee155/simpleAIGemini?tab=readme-ov-file',
  },
];

const fullStackProjects: Project[] = [
  {
    title: 'Movie Database Platform',
    description:
      'A modern movie database app to browse popular movies, search, and create a watchlist with user authentication.',
    technologies: [
      'React 18',
      'TypeScript',
      'Tailwind CSS',
      'Tanstack Query',
      'Supabase (Auth & Database)',
      'TMDB API',
      'Vite',
      'Lucide React Icons',
    ],
    demoUrl: 'https://elegant-alpaca-16fd99.netlify.app/',
    sourceUrl: 'https://github.com/peterlee155/movie-database',
  },
];

const simpleProjects: Project[] = [
  {
    title: 'Weather Dashboard',
    description:
      'A modern weather application featuring real-time weather data, beautiful UI transitions, and responsive design. Users can search for weather information in any city worldwide.',
    technologies: [
      'React.js',
      'Tailwind CSS',
      'OpenWeather API',
      'Lucide Icons',
    ],
    demoUrl: 'https://monumental-bunny-7ccd84.netlify.app',
    sourceUrl: 'https://github.com/peterlee155/weather_app',
  },
  {
    title: 'Modern To-Do App',
    description:
      'A user-friendly to-do application with features like authentication, task management, and secure data storage.',
    technologies: [
      'Bootstrap 5',
      'Supabase (Backend & Authentication)',
      'Netlify (Hosting)',
      'JavaScript & HTML',
    ],
    demoUrl: 'https://shimmering-cascaron-180d19.netlify.app/',
    sourceUrl: 'https://github.com/peterlee155/simpleTodoapp',
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
      <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
      <div>
        <h4 className="font-semibold mb-2">Technologies Used:</h4>
        <ul className="space-y-2 mb-4">
          {project.technologies.map((tech, index) => (
            <li key={index} className="flex items-center text-gray-600">
              <span className="text-green-500 mr-2">✓</span>
              {tech}
            </li>
          ))}
        </ul>
        <div className="flex gap-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded hover:bg-gray-50"
            >
              <Github size={16} />
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectSection({
  title,
  projects,
  centered = false,
}: {
  title: string;
  projects: Project[];
  centered?: boolean;
}) {
  return (
    <>
      <h3 className="text-2xl font-bold text-center mb-8">{title}</h3>
      <div
        className={`grid gap-8 mb-16 ${
          centered
            ? 'md:grid-cols-1 lg:grid-cols-1 max-w-4xl mx-auto'
            : 'md:grid-cols-2 lg:grid-cols-3'
        }`}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <ProjectSection title="AI Projects" projects={aiProjects} centered />
        <ProjectSection
          title="Full Stack Projects"
          projects={fullStackProjects}
          centered
        />
        <ProjectSection
          title="Simple Projects"
          projects={simpleProjects}
          centered
        />
      </div>
    </section>
  );
}