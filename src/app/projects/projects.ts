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
      short: 'ფეხსაცმელების ონლაინ მაღაზია, აწყობილი Angular-ით.',
      description:'FootWear არის თანამედროვე, ანიმაციური და რესპონსიული ონლაინ მაღაზია, შექმნილი Angular-ით. მასში შედის მთავარი გვერდი, პროდუქტების კატალოგი, კალათა, Checkout ფეიჯი (გადახდა ქეშზე), ჩვენს შესახებ და კონტაქტის სექცია. გამოყენებულია component-based არქიტექტურა, Angular Router, Reactive Forms და localStorage კალათის მონაცემების შესანახად. დიზაინი ადაპტირებულია ყველა მოწყობილობაზე და მოიცავს ლამაზ ანიმაციებსა და UI ელემენტებს.',
      image:'assets/sheoweb.png',
      category: 'Angular',
      tech: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      year: 2025,
      repo: 'https://github.com/GiorgiGiorgadze294/PortfoloShoeWeb',
      live: 'https://giorgigiorgadze294.github.io/PortfoloShoeWeb/'
    },
    {
      id: 2,
      title: 'Portfolio (Personal)',
      short: 'პორთფოლიოს საიტი — responsive და ანიმაციური UI.',
      description: 'პერსონალური პორტფოლიო გვერდი,რისი მიზანია ნახვები, პროექტების ჩვენება და CV-ის შეთავაზება. გამოყენებულია modern CSS და small animations.',
      image: 'assets/portfolo.jpg',
      category: 'Angular' ,
      tech: ['HTML', 'CSS', 'JavaScript'],
      year: 2025,
      live: '/'
    },
    {
      id: 3,
      title: 'Watch Shop (Angular)',
      short: 'ვებსაიტი საათების ონლაინ მაღაზიისთვის, Angular.',
      description: 'სრული ფუნქციონალი: პროდუქტის სია, კალათა, კატეგორიების მიხედვით ფილტრი, რეაქტიული ფორმები და ლოკალური შენახვა. პროექტი აწყობილია component-first სტილით და ადაპტირებადია ნებისმიერი მოწყობილობაზე.',
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
    //   short: 'Unity 3D თამაში, სადაც მოთამაშემ უნდა გადაარჩინოს პრინცესა.',
    //   description: '3D Unity თამაში, რომელიც აერთიანებს პერსონაჟების მოძრაობას, მტრების AI, კოლიზიას, და ლამაზი UI/UX. მოთამაშეს უწევს მისიების , აიღოს ჯილდოები და გაიმარჯვოს ეტაპებზე. პროექტი აწყობილია Unity 3D  სტილით.',
    //   image: 'https://assetstorev1-prd-cdn.unity3d.com/key-image/c8c3be83-fe45-4ac7-b257-ab3d04ab56b9.webp',
    //   category: 'Unity 3D',
    //   tech: ['Unity', 'C#', '3D Modeling', 'Animation'],
    //   year: 2025,
    //   repo: 'https://github.com/yourname/rio-is-hero'
    // },
    {
      id: 5,
      title: 'Fashion Shop ( Angular )',
      short: 'ვებსაიტი ონლაინ მაღაზიისთვის, Angular.',
      description: 'სრული ფუნქციონალი: პროდუქტის სია, კალათა, სექციები კატეგორიების მიხედვით, რეაქტიული ფორმები და ლოკალური შენახვა. პროექტი აწყობილია component-first სტილით და ადაპტირებადია ნებისმიერი მოწყობილობაზე.',
      image: 'https://i.pinimg.com/1200x/8b/29/6c/8b296c7735232fa1cbc69e415ac7c25b.jpg',
      category: 'Angular',
      tech: ['Angular', 'TypeScript', 'Html', 'CSS'],
      year: 2024,
      repo: 'https://github.com/giorgadze897/fashion-shop',
      live: 'https://giorgadze897.github.io/fashion-shop/'
    },
    {
      id: 6,
      title: 'KeyStore (Angular)',
      short: 'Mechanical Keyboard ონლაინ მაღაზია Angular-ზე.',
      description: 'KeyStore არის სრულფუნქციური e-commerce ვებსაიტი მექანიკური კლავიატურებისთვის. მოიცავს პროდუქტის დეტალურ გვერდებს ვარიანტებით (ფერი და მოდელი), კალათის სისტემას, კატეგორიების მიხედვით ფილტრაციას, რეაქტიულ checkout ფორმებს და localStorage-ზე დაფუძნებულ მონაცემების შენახვას. პროექტი აგებულია component-first არქიტექტურით, responsive დიზაინით და თანამედროვე UI ანიმაციებით, რაც უზრუნველყოფს სწორ მუშაობას როგორც desktop-ზე, ისე მობილურზე.',
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
    if (this.selectedFilter === 'ყველა') return this.projects;
    return this.projects.filter(p => p.category === this.selectedFilter);
  }

  openModal(p: Project) {
    this.activeProject = p;
    // prevent background scroll
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.activeProject = null;
    document.body.style.overflow = '';
  }
}