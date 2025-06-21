import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: Date;
  readTime: number;
  tags: string[];
  image: string;
  featured: boolean;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent {
  activeFilter: 'all' | 'tutorial' | 'opinion' | 'news' = 'all';
  selectedPost: BlogPost | null = null;

    blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Building Angular Applications: Best Practices for 2024',
      excerpt: 'Learn the essential patterns and practices for building maintainable Angular applications that can scale with your team and user base.',
      content: `
        <h3>Introduction</h3>
        <p>Building scalable Angular applications requires careful planning and adherence to best practices. In this comprehensive guide, we'll explore the key strategies that will help you create maintainable and performant applications.</p>
        
        <h3>1. Project Structure</h3>
        <p>A well-organized project structure is the foundation of any scalable application. Consider using feature modules to organize your code:</p>
        <code>
        src/
        ├── app/
        │   ├── core/
        │   ├── shared/
        │   ├── features/
        │   │   ├── user/
        │   │   └── product/
        │   └── layout/
        </code>
        
        <h3>2. State Management</h3>
        <p>For complex applications, consider using NgRx or Akita for state management. This helps maintain a predictable state flow and makes debugging easier.</p>
        
        <h3>3. Performance Optimization</h3>
        <p>Implement OnPush change detection strategy, lazy loading, and tree shaking to improve your application's performance.</p>
      `,
      author: 'Justin Emadem',
      publishDate: new Date('2024-01-15'),
      readTime: 8,
      tags: ['Angular', 'Best Practices', 'Architecture', 'Performance'],
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: true
    },
    {
      id: '2',
      title: 'Laravel API Development: From Basics to Advanced',
      excerpt: 'A comprehensive guide to building robust APIs with Laravel, covering authentication, validation, and performance optimization.',
      content: `
        <h3>Getting Started with Laravel APIs</h3>
        <p>Laravel provides excellent tools for building RESTful APIs. In this tutorial, we'll cover everything from basic setup to advanced features.</p>
        
        <h3>Setting Up Routes</h3>
        <p>Use Laravel's API routes for better organization and middleware handling.</p>
        
        <h3>Authentication with Sanctum</h3>
        <p>Laravel Sanctum provides a simple way to authenticate SPAs and mobile applications.</p>
      `,
      author: 'Justin Emadem',
      publishDate: new Date('2024-01-10'),
      readTime: 12,
      tags: ['Laravel', 'API', 'PHP', 'Backend'],
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false
    },
    {
      id: '3',
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Exploring the emerging trends and technologies that will shape web development in the coming year.',
      content: `
        <h3>Emerging Technologies</h3>
        <p>The web development landscape is constantly evolving. Here are the key trends to watch in 2024.</p>
        
        <h3>AI Integration</h3>
        <p>AI-powered development tools are becoming more sophisticated and accessible.</p>
        
        <h3>WebAssembly Growth</h3>
        <p>WebAssembly is enabling new possibilities for web applications.</p>
      `,
      author: 'Justin Emadem',
      publishDate: new Date('2024-01-05'),
      readTime: 6,
      tags: ['Web Development', 'Trends', 'AI', 'WebAssembly'],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false
    },
    {
      id: '4',
      title: 'TypeScript Tips and Tricks for Better Code',
      excerpt: 'Advanced TypeScript techniques that will make your code more robust and maintainable.',
      content: `
        <h3>Advanced TypeScript Features</h3>
        <p>TypeScript offers many powerful features beyond basic type checking. Let's explore some advanced techniques.</p>
        
        <h3>Utility Types</h3>
        <p>Learn how to use built-in utility types like Partial, Pick, and Omit effectively.</p>
        
        <h3>Generic Constraints</h3>
        <p>Use generic constraints to create more flexible and type-safe functions.</p>
      `,
      author: 'Justin Emadem',
      publishDate: new Date('2023-12-28'),
      readTime: 10,
      tags: ['TypeScript', 'JavaScript', 'Programming', 'Tutorial'],
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false
    },
    {
      id: '5',
      title: 'CSS Grid vs Flexbox: When to Use Which',
      excerpt: 'Understanding the differences between CSS Grid and Flexbox and when to use each layout method.',
      content: `
        <h3>Layout Methods Comparison</h3>
        <p>Both CSS Grid and Flexbox are powerful layout tools, but they serve different purposes.</p>
        
        <h3>When to Use Flexbox</h3>
        <p>Flexbox is ideal for one-dimensional layouts and component-level design.</p>
        
        <h3>When to Use CSS Grid</h3>
        <p>CSS Grid excels at two-dimensional layouts and page-level design.</p>
      `,
      author: 'John Doe',
      publishDate: new Date('2023-12-20'),
      readTime: 7,
      tags: ['CSS', 'Layout', 'Grid', 'Flexbox'],
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false
    },
    {
      id: '6',
      title: 'Database Optimization Techniques for Web Applications',
      excerpt: 'Learn how to optimize your database queries and improve application performance.',
      content: `
        <h3>Database Performance Matters</h3>
        <p>Database optimization is crucial for application performance. Here are key techniques to improve your database operations.</p>
        
        <h3>Indexing Strategies</h3>
        <p>Proper indexing can dramatically improve query performance.</p>
        
        <h3>Query Optimization</h3>
        <p>Learn how to write efficient queries and avoid common pitfalls.</p>
      `,
      author: 'Justin Emadem',
      publishDate: new Date('2023-12-15'),
      readTime: 9,
      tags: ['Database', 'Performance', 'SQL', 'Optimization'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false
    }
  ];

  get featuredPost(): BlogPost | null {
    return this.blogPosts.find(post => post.featured) || null;
  }

  get filteredPosts(): BlogPost[] {
    let posts = this.blogPosts.filter(post => !post.featured);

    if (this.activeFilter === 'all') {
      return posts;
    }

    return posts.filter(post =>
      post.tags.some(tag =>
        tag.toLowerCase().includes(this.activeFilter.toLowerCase())
      )
    );
  }

  setFilter(filter: 'all' | 'tutorial' | 'opinion' | 'news') {
    this.activeFilter = filter;
  }

  readPost(post: BlogPost) {
    this.selectedPost = post;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.selectedPost = null;
    document.body.style.overflow = 'auto';
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  trackByFn(index: number, post: BlogPost): string {
    return post.id;
  }
}