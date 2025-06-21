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
          title: 'Full-Stack Developer',
          company: 'Intechsive Software Development',
          location: 'Remote',
          period: '2024 - 2025',
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
          company: 'Intechsive Software Development',
          location: 'Tacloban City',
          period: '2024 - 2025',
          description: [
            'Developed custom WordPress themes and plugins',
            'Created responsive websites for small to medium businesses',
            'Optimized websites for SEO and performance',
            'Provided technical support and maintenance'
          ],
          technologies: ['Laravel', 'Angular', 'JavaScript', 'Postgres']
        }
      ]
    },
    {
      title: 'Education',
      items: [
        {
          title: 'Bachelor of Science in Information Technology',
          company: 'Leyte Normal University',
          location: 'Tacloban City',
          period: '2020 - 2025',
          description: [
            'Relevant coursework: Data Structures, Algorithms, Database Systems',
            'Senior project: E-commerce platform with real-time analytics',
            'Capstone Project: Document Classification using SVM',
            'Created Model and trainin using Support Vector Machines'
          ]
        }
      ]
    },
    {
      title: 'Projects',
      items: [
        {
          title: 'E-Commerce Platform',
          period: '2024',
          description: [
            'Full-stack e-commerce solution with admin dashboard',
            'Implemented secure payment processing and inventory management',
            'Built with Angular frontend and Laravel API backend'
          ],
          technologies: ['Angular', 'Laravel', 'Stripe', 'Redis']
        },
        {
          title: 'Task Management App',
          period: '2024',
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
        { name: 'Vue', level: 85 },
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
        { name: 'Linux', level: 80 }
      ]
    }
  ];

  languages = [
    { name: 'Waray-waray', level: 'Native' },
    { name: 'English', level: 'Intermediate' },
    { name: 'Filipino', level: 'Basic' }
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
    alert('Resume can not be downloaded at this momment');
  }

  printResume() {
    window.print();
  }
}
