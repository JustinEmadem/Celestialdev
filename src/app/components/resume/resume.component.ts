import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface ResumeSection {
  title: string;
  items: ResumeItem[];
}

interface ResumeItem {
  title: string;
  company?: string;
  location?: string;
  period: string;
  description: string[];
  technologies?: string[];
}

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})

export class ResumeComponent {
  resumeSections: ResumeSection[] = [
    {
      title: 'Work Experience',
      items: [
        {
          title: 'Senior Full-Stack Developer',
          company: 'TechCorp Solutions',
          location: 'San Francisco, CA',
          period: '2022 - Present',
          description: [
            'Led development of enterprise web applications serving 10,000+ users',
            'Architected and implemented microservices using Laravel and Angular',
            'Improved application performance by 40% through optimization techniques',
            'Mentored junior developers and conducted code reviews'
          ],
          technologies: ['Angular', 'Laravel', 'MySQL', 'AWS', 'Docker']
        },
        {
          title: 'Full-Stack Developer',
          company: 'StartupXYZ',
          location: 'Remote',
          period: '2021 - 2022',
          description: [
            'Built responsive web applications from concept to deployment',
            'Collaborated with design team to implement pixel-perfect UIs',
            'Integrated third-party APIs and payment systems',
            'Maintained 99.9% uptime for production applications'
          ],
          technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe API']
        },
        {
          title: 'Junior Web Developer',
          company: 'WebDev Agency',
          location: 'New York, NY',
          period: '2020 - 2021',
          description: [
            'Developed custom WordPress themes and plugins',
            'Created responsive websites for small to medium businesses',
            'Optimized websites for SEO and performance',
            'Provided technical support and maintenance'
          ],
          technologies: ['WordPress', 'PHP', 'JavaScript', 'MySQL']
        }
      ]
    },
    {
      title: 'Education',
      items: [
        {
          title: 'Bachelor of Science in Computer Science',
          company: 'University of California, Berkeley',
          location: 'Berkeley, CA',
          period: '2016 - 2020',
          description: [
            'Graduated Magna Cum Laude with GPA 3.8/4.0',
            'Relevant coursework: Data Structures, Algorithms, Database Systems',
            'Senior project: E-commerce platform with real-time analytics'
          ]
        }
      ]
    },
    {
      title: 'Projects',
      items: [
        {
          title: 'E-Commerce Platform',
          period: '2023',
          description: [
            'Full-stack e-commerce solution with admin dashboard',
            'Implemented secure payment processing and inventory management',
            'Built with Angular frontend and Laravel API backend'
          ],
          technologies: ['Angular', 'Laravel', 'Stripe', 'Redis']
        },
        {
          title: 'Task Management App',
          period: '2022',
          description: [
            'Real-time collaborative task management application',
            'Features include drag-and-drop, notifications, and team collaboration',
            'Progressive Web App with offline capabilities'
          ],
          technologies: ['Vue.js', 'Socket.io', 'MongoDB', 'PWA']
        }
      ]
    }
  ];

  skillCategories = [
    {
      name: 'Frontend',
      skills: [
        { name: 'Angular', level: 90 },
        { name: 'React', level: 85 },
        { name: 'TypeScript', level: 88 },
        { name: 'JavaScript', level: 92 },
        { name: 'CSS/SCSS', level: 85 }
      ]
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Laravel', level: 88 },
        { name: 'Node.js', level: 82 },
        { name: 'PHP', level: 85 },
        { name: 'Python', level: 75 }
      ]
    },
    {
      name: 'Database',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 75 }
      ]
    },
    {
      name: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 78 },
        { name: 'AWS', level: 75 },
        { name: 'Linux', level: 80 }
      ]
    }
  ];

  languages = [
    { name: 'English', level: 'Native' },
    { name: 'Spanish', level: 'Intermediate' },
    { name: 'French', level: 'Basic' }
  ];

  getSectionIcon(title: string): string {
    switch (title) {
      case 'Work Experience': return '💼';
      case 'Education': return '🎓';
      case 'Projects': return '🚀';
      default: return '📋';
    }
  }

  downloadResume() {
    alert('Resume download would start here. In a real app, this would generate a PDF.');
  }

  printResume() {
    window.print();
  }
}
