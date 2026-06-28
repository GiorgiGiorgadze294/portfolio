import { Component } from '@angular/core';
type Project = {
  id: number;
  title: string;
  short: string;
  description: string;
  image: string;
  category: string;
  tech: string[];
  year: number;
  repo?: string;
  live?: string;
};

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

  filters = ['Angular'];
  selectedFilter = 'Angular';

  projects: Project[] = [
    {
      id: 1,
      title: 'FootWear Portfolio (Angular)',
      short: 'An online shoe store built with Angular.',
      description: 'FootWear is a modern, animated, and responsive online store built with Angular. It includes a home page, product catalog, shopping cart, checkout page (cash on delivery), an about section, and a contact section. It uses component-based architecture, Angular Router, Reactive Forms, and localStorage to persist cart data. The design is fully adaptive across all devices and features smooth animations and polished UI elements.',
      image: 'assets/sheoweb.png',
      category: 'Angular',
      tech: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      year: 2025,
      repo: 'https://github.com/GiorgiGiorgadze294/PortfoloShoeWeb',
      live: 'https://giorgigiorgadze294.github.io/PortfoloShoeWeb/'
    },
    {
      id: 2,
      title: 'Portfolio (Personal)',
      short: 'Personal portfolio site — responsive and animated UI.',
      description: 'A personal portfolio page designed to showcase projects, attract visitors, and offer a CV download. Built with modern CSS and subtle animations.',
      image: 'assets/portfolo.jpg',
      category: 'Angular',
      tech: ['HTML', 'CSS', 'JavaScript'],
      year: 2025,
      live: '/'
    },
    {
      id: 3,
      title: 'Watch Shop (Angular)',
      short: 'An online watch store website built with Angular.',
      description: 'Full functionality: product listing, shopping cart, category filters, reactive forms, and local storage persistence. Built with a component-first approach and fully responsive across all devices.',
      image: 'https://i.pinimg.com/1200x/22/3b/ca/223bca8b871830f64f737f91e48f59b0.jpg',
      category: 'Angular',
      tech: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      year: 2024,
      repo: 'https://github.com/giorgadze897/watch-shop',
      live: 'https://giorgadze897.github.io/watch-shop/'
    },
    // {
    //   id: 4,
    //   title: 'Rio is Hero? (Unity 3D Game)',
    //   short: 'A Unity 3D game where the player must rescue a princess.',
    //   description: 'A 3D Unity game combining character movement, enemy AI, collision, and polished UI/UX. The player must complete missions, collect rewards, and win stages. Built in Unity 3D style.',
    //   image: 'https://assetstorev1-prd-cdn.unity3d.com/key-image/c8c3be83-fe45-4ac7-b257-ab3d04ab56b9.webp',
    //   category: 'Unity 3D',
    //   tech: ['Unity', 'C#', '3D Modeling', 'Animation'],
    //   year: 2025,
    //   repo: 'https://github.com/yourname/rio-is-hero'
    // },
    {
      id: 5,
      title: 'Fashion Shop (Angular)',
      short: 'An online fashion store website built with Angular.',
      description: 'Full functionality: product listing, shopping cart, category sections, reactive forms, and local storage persistence. Built with a component-first approach and fully responsive across all devices.',
      image: 'https://i.pinimg.com/1200x/8b/29/6c/8b296c7735232fa1cbc69e415ac7c25b.jpg',
      category: 'Angular',
      tech: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      year: 2024,
      repo: 'https://github.com/giorgadze897/fashion-shop',
      live: 'https://giorgadze897.github.io/fashion-shop/'
    },
    {
      id: 6,
      title: 'KeyStore (Angular)',
      short: 'A mechanical keyboard online store built with Angular.',
      description: 'KeyStore is a fully functional e-commerce website for mechanical keyboards. It includes detailed product pages with variants (color and model), a cart system, category filtering, reactive checkout forms, and localStorage-based data persistence. Built with a component-first architecture, responsive design, and modern UI animations — working seamlessly on both desktop and mobile.',
      image: 'assets/KEYSTORE.jpg',
      category: 'Angular',
      tech: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      year: 2026,
      repo: 'https://github.com/GiorgiGiorgadze294/keystore.git',
      live: 'https://giorgigiorgadze294.github.io/keystore/'
    }
  ];

  activeProject: Project | null = null;

  selectFilter(filter: string) {
    this.selectedFilter = filter;
  }

  filteredProjects() {
    if (this.selectedFilter === 'All') return this.projects;
    return this.projects.filter(p => p.category === this.selectedFilter);
  }

  openModal(p: Project) {
    this.activeProject = p;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.activeProject = null;
    document.body.style.overflow = '';
  }
}