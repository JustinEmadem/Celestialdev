import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  techStack = [
    'Angular',
    'Vue', 
    'Laravel', 
    'TypeScript',
    'Node.js', 
    'MySQL', 
    'Figma', 
    'Git',
    'Python'
  ];

  terminalCode = [
    '<span class="keyword">function</span> <span class="function">createPortfolio</span>() {',
    '  <span class="keyword">const</span> <span class="variable">skills</span> = [',
    '    <span class="string">"Frontend Development"</span>,',
    '    <span class="string">"Backend Development"</span>,',
    '    <span class="string">"UI/UX Design"</span>',
    '  ];',
    '  ',
    '  <span class="keyword">return</span> <span class="variable">skills</span>.<span class="method">map</span>(',
    '    <span class="variable">skill</span> => <span class="template">`Amazing ${skill}`</span>',
    '  );',
    '}'
  ];

  ngOnInit() {
    // Component initialization
  }
}
