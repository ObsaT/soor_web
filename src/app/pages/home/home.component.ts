import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  companyName = 'SOOR TECHNOLOGY GROUP';
  tagline = 'Transforming Businesses Through Technology';

  ceoMessage = {
    title: 'CEO Message',
    content: [
      'Soor Technology Group was founded with a clear purpose—to empower organizations through technology that drives measurable impact. The company believes that innovation, integrity, and excellence are the cornerstones of sustainable growth in the digital era.',
      'As a modern technology company, Soor Technology Group is committed to delivering solutions that not only solve today’s challenges but also prepare businesses for the future. The team’s focus on collaboration and customer success ensures that every engagement creates long-term value.',
      'With a passionate team, a culture of innovation, and a vision to lead Africa’s digital transformation, Soor Technology Group continues to build technology that transforms businesses and communities.',
    ],
    ceoName: 'Nimona Ejerso',
    ceoTitle: 'Chief Executive Officer',
  };

  overview = {
    title: 'Company Overview',
    content:
      'Soor Technology Group is a modern technology and digital innovation company specializing in enterprise software development, FinTech solutions, digital transformation, and cloud-enabled platforms. The company helps organizations leverage modern technologies to improve operational efficiency, accelerate growth, and build sustainable competitive advantages.',
  };

  visionMission = {
    vision:
      'To become a leading African technology company recognized for innovation, excellence, and transformative digital solutions.',
    mission:
      'To empower organizations through innovative technology, enabling them to operate smarter, grow faster, and compete effectively in the digital economy.',
  };

  values = [
    {
      name: 'Innovation',
      description: 'Continuously exploring new technologies and approaches.',
    },
    {
      name: 'Excellence',
      description: 'Delivering high-quality solutions and services.',
    },
    {
      name: 'Integrity',
      description: 'Building trust through transparency and accountability.',
    },
    {
      name: 'Collaboration',
      description: 'Working closely with clients and partners.',
    },
    {
      name: 'Customer Success',
      description: 'Ensuring measurable value and long-term success.',
    },
  ];

  services = [
    {
      title: 'Enterprise Software Development',
      description:
        'Custom software solutions designed to support business growth and operational efficiency.',
    },
    {
      title: 'Digital Transformation',
      description:
        'Modernizing business processes through technology-driven innovation.',
    },
    {
      title: 'FinTech Solutions',
      description:
        'Developing secure and scalable financial technology platforms and integrations.',
    },
    {
      title: 'Cloud Solutions',
      description: 'Building reliable, scalable, and cloud-ready systems.',
    },
    {
      title: 'Mobile App Development',
      description:
        'Developing high-performance native and cross-platform mobile applications for iOS and Android.',
    },
    {
      title: 'Technology Consulting',
      description:
        'Providing strategic guidance for digital initiatives and technology adoption.',
    },
  ];

  expertise = [
    {
      category: 'Financial Technology (FinTech)',
      items: [
        'Payment Integration',
        'Digital Financial Services',
        'Transaction Processing',
        'Financial Platforms',
      ],
    },
    {
      category: 'SACCO & Cooperative Solutions',
      items: [
        'Savings Management',
        'Loan Management',
        'Member Management',
        'Financial Reporting',
      ],
    },
    {
      category: 'Inventory & Supply Chain Solutions',
      items: [
        'Inventory Management',
        'Warehouse Management',
        'Stock Control',
        'Procurement Automation',
      ],
    },
    {
      category: 'Enterprise Solutions',
      items: [
        'Workflow Automation',
        'Business Process Management',
        'Reporting & Analytics',
        'System Integration',
      ],
    },
    {
      category: 'Mobile Applications',
      items: [
        'Native iOS & Android',
        'Cross-Platform Development',
        'Mobile Wallet Integration',
        'Offline-First Apps',
      ],
    },
  ];

  techStack = {
    frontend: [
      'Angular',
      'React',
      'TypeScript',
      'Flutter',
      'React Native',
      'Swift',
      'Kotlin',
    ],
    backend: [
      '.NET',
      'ASP.NET Core',
      'C#',
      'RESTful APIs',
      'Microservices Architecture',
      'spring Boot',
    ],
    database: ['PostgreSQL', 'SQL Server', 'MySQL'],
    devOps: ['Docker', 'Kubernetes', 'Azure', 'AWS', 'CI/CD Pipelines'],
    architecture: [
      'Clean Architecture',
      'Domain-Driven Design (DDD)',
      'Event-Driven Architecture',
      'API-First Design',
    ],
  };

  products = [
    {
      name: 'SoorPay',
      description:
        'A secure digital payment and transaction processing platform.',
    },
    {
      name: 'SoorSACCO',
      description: 'A comprehensive SACCO and cooperative management system.',
    },
    {
      name: 'SoorCloud',
      description: 'Cloud-based enterprise management and analytics platform.',
    },
    {
      name: 'SoorConnect',
      description:
        'Integration and API management solution for enterprise systems.',
    },
  ];

  team = [
    { name: '[CEO Name]', title: 'Chief Executive Officer' },
    { name: '[CTO Name]', title: 'Chief Technology Officer' },
    { name: '[COO Name]', title: 'Chief Operations Officer' },
    { name: '[Head of Engineering]', title: 'Software Development Lead' },
    { name: '[Head of Business Development]', title: 'Partnerships & Growth' },
  ];

  contact = {
    email: 'info@soortech.com',
    phone: '+251 921 828 049',
    website: 'www.soortech.com',
  };

  industries = [
    'Financial Services',
    'Cooperatives & Microfinance',
    'Retail & Distribution',
    'Manufacturing',
    'Public Sector',
    'Technology Startups',
  ];

  advantages = [
    {
      title: 'Technical Excellence',
      description:
        'A highly skilled team with expertise in modern software engineering practices.',
    },
    {
      title: 'Business Understanding',
      description: 'Technology solutions aligned with business objectives.',
    },
    {
      title: 'Scalable Solutions',
      description: 'Systems designed to support future growth.',
    },
    {
      title: 'Security First',
      description: 'Strong focus on security, compliance, and reliability.',
    },
    {
      title: 'Long-Term Partnership',
      description: 'Commitment to supporting clients beyond project delivery.',
    },
  ];

  achievements = [
    'Development of proprietary FinTech and enterprise platforms.',
    'Expansion of client base across multiple industries in East Africa.',
    'Recognition for innovation and excellence in digital transformation initiatives.',
    'Strategic partnerships with leading cloud and technology providers.',
  ];
  employees = [
    {
      name: 'Masresha Yaye',
      role: 'Senior Software Engineer',
      image: '/assets/experts/masresha.png',
    },
    {
      name: 'Sara Tesfaye',
      role: 'UI/UX Lead Designer',
      image: '/assets/experts/sara.png',
    },
    {
      name: 'Brook Alemu',
      role: 'Full Stack Developer',
      image: '/assets/experts/brook.png',
    },
    {
      name: 'Marta Hailu',
      role: 'Project Manager',
      image: '/assets/experts/marta.png',
    },
  ];
}
