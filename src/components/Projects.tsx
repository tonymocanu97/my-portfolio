import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    codeUrl: 'https://github.com/yourusername/ecommerce',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    imageUrl: '/ecommerce.png',
  },
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    codeUrl: 'https://github.com/yourusername/ecommerce',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    imageUrl: '/ecommerce.png',
  },
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    codeUrl: 'https://github.com/yourusername/ecommerce',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    imageUrl: '/ecommerce.png',
  },
];

export default function Projects() {
  return (
    <section id="work" className="w-full px-6 md:px-20 py-20 text-white relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/20 overflow-hidden shadow-[4px_4px_0px_rgba(0,0,0,0.7)] hover:scale-[1.01] transition-transform"
            >
              {/* Optimized Next.js Image */}
              {project.imageUrl && (
                <div className="w-full h-48 relative">
                  <Image src={project.imageUrl} alt={project.title} fill className="object-cover" />
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-white/10 border border-white/20 px-3 py-1 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-6">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-white/20 bg-white/5 rounded-md hover:bg-white/10 transition"
                  >
                    <FaGithub /> Code
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-700 transition rounded-md text-white ml-auto"
                  >
                    Live <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
