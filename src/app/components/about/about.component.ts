import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})

export class AboutComponent {
  skillCategories = [
    {
      title: 'Frontend',
      skills: ['Angular', 'Vue JS', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Sass']
    },
    {
      title: 'Backend',
      skills: ['Laravel', 'Node.js', 'PHP', 'Python', 'REST APIs']
    },
    {
      title: 'Database',
      skills: ['MySQL', 'PostgreSQL']
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'JIRA', 'Docker', 'Linux', 'Figma', 'VS Code', 'LucidChart', 'Diagram.io']
    }
  ];

  stats = [
    { number: '20+', label: 'Projects' },
    { number: '1+', label: 'Years Experience' },
    { number: '20+', label: 'Technologies' },
    { number: '100%', label: 'Dedication' }
  ];

  aboutCode = [
    '<span class="keyword">class</span> <span class="class">Developer</span> {',
    '  <span class="keyword">constructor</span>() {',
    '    <span class="keyword">this</span>.<span class="property">name</span> = <span class="string">"Justin Emadem"</span>;',
    '    <span class="keyword">this</span>.<span class="property">title</span> = <span class="string">"Full Stack Developer"</span>;',
    '    <span class="keyword">this</span>.<span class="property">location</span> = <span class="string">"Tacloban City, Dagami Leyte"</span>;',
    '  }',
    '  ',
    '  <span class="method">getSkills</span>() {',
    '    <span class="keyword">return</span> [<span class="string">"Angular"</span>, <span class="string">"Laravel"</span>, <span class="string">"TypeScript"</span>];',
    '  }',
    '  ',
    '  <span class="method">code</span>() {',
    '    <span class="keyword">while</span> (<span class="boolean">true</span>) {',
    '      <span class="method">solve</span>(<span class="string">"problems"</span>);',
    '      <span class="method">learn</span>(<span class="string">"new technologies"</span>);',
    '      <span class="method">build</span>(<span class="string">"amazing apps"</span>);',
    '    }',
    '  }',
    '}'
  ];
}

