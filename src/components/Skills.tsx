import { Code2, Server, Database, GitBranch } from 'lucide-react';

export default function Skills() {
  const skills = [
    {
      icon: <Code2 size={48} className="text-yellow-500" />,
      title: 'JavaScript, React',
    },
    {
      icon: <Server size={48} className="text-green-500" />,
      title: 'Node.js, APIs',
    },
    {
      icon: <Database size={48} className="text-blue-500" />,
      title: 'Supabase, PostgreSQL',
    },
    {
      icon: <GitBranch size={48} className="text-gray-500" />,
      title: 'Git',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{skill.icon}</div>
              <p className="text-gray-700">{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
