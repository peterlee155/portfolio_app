import { Menu, Download } from 'lucide-react';
import { useState } from 'react';
import html2pdf from 'html2pdf.js';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleExportPDF = () => {
    const pdfContent = document.createElement('div');
    pdfContent.innerHTML = `
      <div style="padding: 40px; font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; text-align: center;">
        <!-- Header Section -->
        <div style="text-align: center; margin-bottom: 40px; background: linear-gradient(135deg, #1a365d 0%, #2d3748 100%); padding: 40px; border-radius: 10px; color: white;">
          <h1 style="font-size: 36px; margin-bottom: 10px; text-align: center;">Peter Lee</h1>
          <h2 style="font-size: 22px; margin-bottom: 10px; opacity: 0.9; text-align: center;">Full Stack Web Developer</h2>
          <p style="opacity: 0.8; text-align: center;">Transforming ideas into elegant digital solutions</p>
          <div style="margin-top: 20px; text-align: center;">
            <span style="background: #2b6cb0; padding: 6px 12px; border-radius: 15px; font-size: 14px; margin: 0 5px;">TypeScript</span>
            <span style="background: #38a169; padding: 6px 12px; border-radius: 15px; font-size: 14px; margin: 0 5px;">React</span>
            <span style="background: #805ad5; padding: 6px 12px; border-radius: 15px; font-size: 14px; margin: 0 5px;">Node.js</span>
          </div>
        </div>

        <!-- About Section -->
        <div style="margin-bottom: 40px; background: #f7fafc; padding: 24px; border-radius: 10px; border: 1px solid #e2e8f0;">
          <h2 style="font-size: 24px; color: #2d3748; border-bottom: 2px solid #4299e1; padding-bottom: 8px; margin-bottom: 16px; text-align: center;">👨‍💻 About Me</h2>
          <p style="color: #4a5568; line-height: 1.6; text-align: center;">
            Hello! I'm Peter Lee, a dedicated Next.js developer with a unique journey that has shaped my passion for technology and innovation. Originally from Myanmar, I overcame numerous challenges to pursue my dream of becoming a developer.
          </p>
        </div>

        <!-- Skills Section -->
        <div style="margin-bottom: 40px; background: #f7fafc; padding: 24px; border-radius: 10px; border: 1px solid #e2e8f0;">
          <h2 style="font-size: 24px; color: #2d3748; border-bottom: 2px solid #4299e1; padding-bottom: 8px; margin-bottom: 16px; text-align: center;">🛠️ Technical Skills</h2>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
            <div>
              <h3 style="font-size: 18px; color: #2b6cb0; margin-bottom: 12px; text-align: center;">Frontend</h3>
              <div style="display: flex; flex-wrap: wrap; gap: 8px; justify-content: center;">
                <span style="background: #ebf8ff; color: #2b6cb0; padding: 4px 10px; border-radius: 15px; font-size: 14px;">JavaScript</span>
                <span style="background: #e6fffa; color: #319795; padding: 4px 10px; border-radius: 15px; font-size: 14px;">TypeScript</span>
                <span style="background: #ebf8ff; color: #2b6cb0; padding: 4px 10px; border-radius: 15px; font-size: 14px;">React.js</span>
                <span style="background: #ebf8ff; color: #2b6cb0; padding: 4px 10px; border-radius: 15px; font-size: 14px;">Next.js</span>
                <span style="background: #ebf8ff; color: #2b6cb0; padding: 4px 10px; border-radius: 15px; font-size: 14px;">Tailwind CSS</span>
              </div>
            </div>
            <div>
              <h3 style="font-size: 18px; color: #2b6cb0; margin-bottom: 12px; text-align: center;">Backend</h3>
              <div style="display: flex; flex-wrap: wrap; gap: 8px; justify-content: center;">
                <span style="background: #f0fff4; color: #38a169; padding: 4px 10px; border-radius: 15px; font-size: 14px;">Node.js</span>
                <span style="background: #f0fff4; color: #38a169; padding: 4px 10px; border-radius: 15px; font-size: 14px;">Supabase</span>
                <span style="background: #f0fff4; color: #38a169; padding: 4px 10px; border-radius: 15px; font-size: 14px;">PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Projects Section -->
        <div style="margin-bottom: 40px; background: #f7fafc; padding: 24px; border-radius: 10px; border: 1px solid #e2e8f0;">
          <h2 style="font-size: 24px; color: #2d3748; border-bottom: 2px solid #4299e1; padding-bottom: 8px; margin-bottom: 16px; text-align: center;">🚀 Featured Projects</h2>
          ${document.querySelectorAll('#projects .bg-white').length ? 
            Array.from(document.querySelectorAll('#projects .bg-white')).map(project => {
              const title = project.querySelector('h3').textContent;
              const description = project.querySelector('p').textContent;
              const demoUrl = project.querySelector('a[href*="netlify"]')?.getAttribute('href');
              const sourceUrl = project.querySelector('a[href*="github"]')?.getAttribute('href');
              const technologies = Array.from(project.querySelectorAll('ul li')).map(tech => tech.textContent);
              
              return `
                <div style="margin-bottom: 30px; padding: 20px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); text-align: center;">
                  <h3 style="font-size: 20px; color: #2d3748; margin-bottom: 12px; text-align: center;">${title}</h3>
                  <p style="color: #4a5568; margin-bottom: 16px; text-align: center;">${description}</p>
                  <div style="margin-bottom: 16px;">
                    <div style="display: flex; flex-wrap: wrap; gap: 8px; justify-content: center;">
                      ${technologies.map(tech => `
                        <span style="background: #f7fafc; color: #4a5568; padding: 4px 10px; border-radius: 15px; font-size: 14px; border: 1px solid #e2e8f0;">${tech}</span>
                      `).join('')}
                    </div>
                  </div>
                  <div style="display: flex; gap: 12px; justify-content: center;">
                    ${demoUrl ? `
                      <a href="${demoUrl}" style="display: inline-block; padding: 8px 16px; background: #4299e1; color: white; text-decoration: none; border-radius: 5px; font-size: 14px;">🌐 Live Demo</a>
                    ` : ''}
                    ${sourceUrl ? `
                      <a href="${sourceUrl}" style="display: inline-block; padding: 8px 16px; background: #2d3748; color: white; text-decoration: none; border-radius: 5px; font-size: 14px;">📂 Source Code</a>
                    ` : ''}
                  </div>
                </div>
              `;
            }).join('') : ''
          }
        </div>

        <!-- Contact Section -->
        <div style="margin-bottom: 30px; background: #f7fafc; padding: 24px; border-radius: 10px; border: 1px solid #e2e8f0;">
          <h2 style="font-size: 24px; color: #2d3748; border-bottom: 2px solid #4299e1; padding-bottom: 8px; margin-bottom: 16px; text-align: center;">📫 Contact</h2>
          <p style="color: #4a5568; text-align: center;">
            Feel free to reach out for collaboration opportunities or inquiries.
          </p>
        </div>

        <!-- Footer -->
        <div style="text-align: center; margin-top: 40px; padding: 20px; background: #2d3748; color: white; border-radius: 10px;">
          Generated from Peter Lee's Portfolio Website
        </div>
      </div>
    `;

    const opt = {
      margin: 0.5,
      filename: 'peter-lee-portfolio.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2,
        useCORS: true,
        logging: false
      },
      jsPDF: { 
        unit: 'in', 
        format: 'letter', 
        orientation: 'portrait'
      },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    html2pdf().set(opt).from(pdfContent).save();
  };

  return (
    <header>
      <nav className="bg-gray-900 shadow">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="text-white font-bold text-xl">
              Peter Lee's Portfolio
            </a>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white hover:text-gray-300"
            >
              <Menu size={24} />
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white">
                About
              </a>
              <a href="#projects" className="text-gray-300 hover:text-white">
                Projects
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white">
                Contact
              </a>
              <button
                onClick={handleExportPDF}
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="text-gray-300 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </a>
                <button
                  onClick={handleExportPDF}
                  className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200 w-full"
                >
                  <Download size={16} />
                  <span>Download Resume</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}