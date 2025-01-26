# Peter Lee's Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

![Portfolio Preview](/dist/peter_lee.jpg)

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean and professional interface using Tailwind CSS
- **Interactive Elements**: Smooth scrolling, animations, and hover effects
- **PDF Resume**: Generate and download a beautifully formatted resume
- **Contact Form**: Integrated email contact form using EmailJS
- **Project Showcase**: Organized display of projects with live demos and source code links

## 🛠️ Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- EmailJS
- html2pdf.js
- Lucide React Icons

## 🚀 Live Demo

Visit the live portfolio at: [https://elegant-alpaca-16fd99.netlify.app/](https://elegant-alpaca-16fd99.netlify.app/)

## 💻 Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 📧 Contact Form Setup

The contact form uses EmailJS. To set up your own:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Update the EmailJS configuration in `src/components/Contact.tsx`

## 📄 Resume Generation

The portfolio includes a feature to generate and download a PDF resume using html2pdf.js. The resume is dynamically generated from your portfolio content.

## 📱 Project Structure

```
src/
├── components/         # React components
│   ├── About.tsx      # About section
│   ├── Contact.tsx    # Contact form
│   ├── Header.tsx     # Navigation header
│   ├── Hero.tsx       # Hero section
│   ├── Projects.tsx   # Projects showcase
│   ├── Skills.tsx     # Skills section
│   └── Footer.tsx     # Footer component
├── App.tsx            # Main app component
└── main.tsx          # Entry point
```

## 🎨 Customization

- Update content in respective components
- Modify styles in Tailwind classes
- Add new sections by creating components
- Customize PDF resume template in Header.tsx

## 📝 License

MIT License - feel free to use this project as a template for your own portfolio!

## 👤 Author

**Peter Lee**

- GitHub: [https://github.com/peterlee155]