import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  companyHistory = {
    title: 'Our Journey',
    content:
      'Soor Technology Group began with a vision to revolutionize the digital landscape in East Africa. Founded by a group of passionate technologists, we recognized the immense potential for innovation to drive business success and social impact. Today, we stand as a premier technology partner, helping organizations navigate the complexities of the digital era.',
  };

  leadership = [
    {
      name: '[CEO Name]',
      role: 'Chief Executive Officer',
      bio: 'Visionary leader driving digital transformation across Africa.',
    },
    {
      name: '[CTO Name]',
      role: 'Chief Technology Officer',
      bio: 'Expert in scalable architectures and emerging technologies.',
    },
    {
      name: '[COO Name]',
      role: 'Chief Operations Officer',
      bio: 'Focus on operational excellence and client success.',
    },
  ];

  employees = [
    {
      name: 'Obsa Temesgen',
      role: 'Senior Software Architect',
      department: 'Engineering',
      image: '/assets/experts/obsa.png',
    },
    {
      name: 'Daniel Tesfaye',
      role: 'Technical Lead',
      department: 'Engineering',
      image: '/assets/experts/daniel.png',
    },
    {
      name: 'Sara Tesfaye',
      role: 'UI/UX Lead Designer',
      department: 'Product',
      image: '/assets/experts/sara.png',
    },
    {
      name: 'Tewodros Alemu',
      role: 'Full Stack Developer',
      department: 'Engineering',
      image:
        'https://images.unsplash.com/photo-1531123897727-8f129e16fd47?q=80&w=1974&auto=format&fit=crop',
    },
    {
      name: 'Marta Hailu',
      role: 'Project Manager',
      department: 'Operations',
      image: '/assets/experts/marta.png',
    },
    {
      name: 'Samuel Bekele',
      role: 'Cloud Infrastructure Architect',
      department: 'DevOps',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    },
    {
      name: 'Lydia Solomon',
      role: 'FinTech Solution Consultant',
      department: 'Business',
      image:
        'https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=1978&auto=format&fit=crop',
    },
    {
      name: 'Brook Alemu',
      role: 'Backend Developer (.NET)',
      department: 'Engineering',
      image: '/assets/experts/brook.png',
    },
    {
      name: 'Daniel Abebe',
      role: 'Full Stack Developer',
      department: 'Engineering',
      image:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop',
    },
    {
      name: 'Helen Girma',
      role: 'QA & Automation Engineer',
      department: 'Engineering',
      image:
        'https://images.unsplash.com/photo-1567532939604-b6c5b0adcc2c?q=80&w=1974&auto=format&fit=crop',
    },
  ];
}
