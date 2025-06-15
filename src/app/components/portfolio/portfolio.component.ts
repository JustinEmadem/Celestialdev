import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  codeUrl?: string;
  status: 'completed' | 'in-progress' | 'planned';
  category: 'web-app' | 'mobile' | 'desktop' | 'api' | 'machine-learning';
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent {

  activeFilter: 'all' | 'completed' | 'in-progress' | 'planned' = 'all';

  portfolioItems: PortfolioItem[] = [
    {
      id: 'calculator',
      title: 'Advanced Calculator',
      description: 'A feature-rich calculator with scientific functions, history, and theme support. Built with Angular and modern CSS.',
      technologies: ['Angular', 'TypeScript', 'CSS Grid', 'Localhost storage'],
      image: 'https://images.pexels.com/photos/960558/pexels-photo-960558.jpeg?auto=compress&cs=tinysrgb&w=400',
      demoUrl: '/calculator',
      codeUrl: 'https://github.com/yourusername/calculator',
      status: 'completed',
      category: 'web-app'
    },
    {
      id: 'todo-app',
      title: 'Smart Todo Manager',
      description: 'An intelligent todo application with categories, priorities, drag & drop, and progress tracking.',
      technologies: ['Angular', 'RxJS', 'Angular CDK', 'PostgresDB'],
      image: 'https://images.pexels.com/photos/19905181/pexels-photo-19905181.jpeg?auto=compress&cs=tinysrgb&w=400',
      demoUrl: '/todo',
      codeUrl: 'https://github.com/yourusername/todo-app',
      status: 'completed',
      category: 'web-app'
    },
    {
      id: 'weather-app',
      title: 'Weather Dashboard',
      description: 'Real-time weather application with forecasts, maps, and location-based services.',
      technologies: ['Angular', 'Weather API', 'Geolocation', 'Charts.js'],
      image: 'https://images.pexels.com/photos/1809644/pexels-photo-1809644.jpeg?auto=compress&cs=tinysrgb&w=400',
      demoUrl: '#',
      codeUrl: 'https://github.com/yourusername/weather-app',
      status: 'in-progress',
      category: 'web-app'
    },
    {
      id: 'expense-tracker',
      title: 'Expense Tracker',
      description: 'Personal finance management app with budget tracking, expense categorization, and analytics.',
      technologies: ['Angular', 'Chart.js', 'PWA'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400',
      demoUrl: '#',
      codeUrl: 'https://github.com/yourusername/expense-tracker',
      status: 'planned',
      category: 'web-app'
    },
    {
      id: 'portfolio-api',
      title: 'Portfolio API',
      description: 'RESTful API built with Laravel for managing portfolio projects, skills, and contact forms.',
      technologies: ['Laravel', 'PHP', 'MySQL', 'Sanctum'],
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400',
      demoUrl: '#',
      codeUrl: 'https://github.com/yourusername/portfolio-api',
      status: 'completed',
      category: 'api'
    },
    {
      id: 'document-classification',
      title: 'Document Classification using SVM',
      description: 'Classifies scanned documents using an SVM model, with a Laravel API for managing access and results.',
      technologies: ['Python', 'SVM', 'OCR', 'Laravel', 'PHP', 'MySQL', 'Sanctum'],
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400',
      demoUrl: '#',
      codeUrl: 'https://github.com/yourusername/document-classification-api',
      status: 'completed',
      category: 'machine-learning',
    }
  ];

  setFilter(filter: 'all' | 'completed' | 'in-progress' | 'planned') {
    this.activeFilter = filter;
  }

  get filteredItems(): PortfolioItem[] {
    return this.activeFilter === 'all'
      ? this.portfolioItems
      : this.portfolioItems.filter(item => item.status === this.activeFilter);
  }

  getStatusText(status: PortfolioItem['status']): string {
    switch (status) {
      case 'completed': return 'Completed';
      case 'in-progress': return 'In Progress';
      case 'planned': return 'Planned';
      default: return '';
    }
  }

  trackByFn(index: number, item: PortfolioItem) {
    return item.id;
  }
}
