import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import {
  Diamond,
  Menu,
  X,
  ExternalLink,
  Code,
  Terminal,
  Database,
  CheckCircle2,
  ArrowUpRight,
  ShoppingBag,
  Layout,
  Globe,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Cpu,
  FastForward,
  Layers,
  Sparkles,
  Palette,
  Eye,
  Smartphone,
  AppWindow,
  Search,
  ArrowRight,
  Command,
  Monitor,
  Archive as ArchiveIcon
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Lenis from 'lenis';
import SplitType from 'split-type';
import logoImg from './assets/lamaportimg.jpeg';
import homestaImg from './assets/Homesta.jpeg';
import edunexaImg from './assets/edunexa.png';
import botBeamImg from './assets/bot&beam.png';

// New Project Assets
import businessImg from './assets/p3.png';
import aiHackathonImg from './assets/ai.png';
import xoGameImg from './assets/xo.png';
import mimicImg from './assets/leluxemimic.png';
import reactBlogImg from './assets/reactblog.png';
import portfolioProjectImg from './assets/protofolio.png';
import securityTrackerImg from './assets/GP1.png';
import rainbowiosImg from './assets/Rainbowios.png';
import iosAppImg from './assets/IOS.png';

// Resume
import resumePDF from './assets/LamaDarawsheh.pdf';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const themes = [
  { id: 'dark', name: 'Full Black', colors: ['#000000', '#ffffff'] },
  { id: 'light', name: 'Full White', colors: ['#ffffff', '#000000'] }
];

const Magnetic = ({ children }) => {
  const magneticRef = useRef(null);

  useEffect(() => {
    const xTo = gsap.quickTo(magneticRef.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(magneticRef.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = magneticRef.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.35);
      yTo(y * 0.35);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    magneticRef.current.addEventListener("mousemove", handleMouseMove);
    magneticRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (magneticRef.current) {
        magneticRef.current.removeEventListener("mousemove", handleMouseMove);
        magneticRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return React.cloneElement(children, { ref: magneticRef });
};

const CaseStudy = ({ project, onClose }) => {
  const modalRef = useRef(null);

  useGSAP(() => {
    // Tell ScrollTrigger to use the modal container for scrolling
    const sections = gsap.utils.toArray('.story-section');

    sections.forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          scroller: modalRef.current, // Use modal as scroll container
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      });
    });
  }, { scope: modalRef, dependencies: [project] });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200]"
      ref={modalRef}
      style={{
        background: 'var(--bg-dark)',
        overflowY: 'auto',
        overflowX: 'hidden',
        WebkitOverflowScrolling: 'touch'
      }}
    >      <div className="fixed top-8 right-8 z-[210]">
        <Magnetic>
          <button onClick={onClose} className="size-14 lg:size-16 rounded-full bg-[var(--primary)] text-[var(--bg-dark)] flex items-center justify-center hover:scale-110 transition-all duration-500 shadow-2xl">
            <X size={20} className="lg:hidden" /><X size={24} className="hidden lg:block" />
          </button>
        </Magnetic>
      </div>
      <div className="relative h-[60vh] lg:h-[80vh] w-full overflow-hidden bg-[var(--bg-dark)]">
        <div className="absolute inset-0 bg-[var(--bg-dark)] z-10 opacity-60" />
        <img src={project.image} className="absolute inset-0 w-full h-full object-cover" alt={project.title} />
        <div className="absolute bottom-0 left-0 right-0 z-20 px-6 lg:px-20 pb-12 lg:pb-20">
          <div className="max-w-[1400px] mx-auto">
            <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>
              <span className="text-xs lg:text-sm font-black uppercase tracking-[0.3em] text-[var(--text-muted)] block mb-4">Case Study // 0{project.id}</span>
              <h1 className="text-5xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-[var(--text-main)] font-serif italic mb-6">{project.title}</h1>
              <p className="text-xl lg:text-2xl font-light text-[var(--text-main)] max-w-2xl leading-relaxed">{project.description}</p>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="relative z-20 bg-[var(--bg-dark)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20 py-20 lg:py-32 space-y-32 lg:space-y-40">
          <div className="story-section grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <span className="text-xs font-black uppercase tracking-[0.4em] text-[var(--text-muted)]">01 // The Challenge</span>
                <h2 className="text-4xl lg:text-6xl font-serif italic font-light text-[var(--text-main)] leading-tight">Solving the unsolvable</h2>
              </div>
              <p className="text-lg lg:text-xl font-light leading-relaxed text-[var(--text-main)]">{project.details?.challenge || "Every great project starts with a complex problem."}</p>
              <div className="flex flex-wrap gap-3 pt-4">
                {project.tags.slice(0, 3).map(tag => <span key={tag} className="px-4 py-2 rounded-full bg-[var(--bg-soft)] border border-[var(--border-color)] text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">{tag}</span>)}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className={`${project.type === 'website' ? 'browser-frame' : 'mobile-frame shadow-2xl border-[var(--border-color)]'} transition-all duration-1000`}>
                <img src={project.image} className="w-full h-full object-cover" alt="" />
              </div>
            </div>
          </div>
          <div className="story-section grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="rounded-3xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-soft)] p-1">
              <div className="aspect-video rounded-2xl overflow-hidden bg-[var(--bg-soft)] flex items-center justify-center">
                <div className="text-center space-y-4 p-8"><Database size={64} className="mx-auto text-[var(--text-muted)]" strokeWidth={1} />
                  <p className="text-sm font-mono text-[var(--text-muted)] uppercase tracking-widest">System Architecture</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-black uppercase tracking-[0.4em] text-[var(--text-muted)]">02 // The Architecture</span>
                <h2 className="text-4xl lg:text-6xl font-serif italic font-light text-[var(--text-main)] leading-tight">Built for scale</h2>
              </div>
              <p className="text-lg lg:text-xl font-light leading-relaxed text-[var(--text-main)]">{project.details?.architecture || "A robust foundation designed to handle millions."}</p>
              <p className="text-base lg:text-lg font-light leading-relaxed text-[var(--text-muted)]">{project.details?.longDescription || project.description}</p>
            </div>
          </div>
          <div className="story-section">
            <div className="text-center space-y-8 mb-16">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-[var(--text-muted)]">03 // The Impact</span>
              <h2 className="text-4xl lg:text-6xl font-serif italic font-light text-[var(--text-main)] leading-tight">Delivered excellence</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {project.details?.features?.map((feature, idx) => (
                <div key={feature} className="group relative overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--bg-soft)] p-8 lg:p-10 hover:border-primary transition-all duration-500">
                  <div className="absolute top-0 right-0 text-8xl font-black text-[var(--text-muted)] opacity-10 -mr-4 -mt-4">{String(idx + 1).padStart(2, '0')}</div>
                  <div className="relative z-10 space-y-4">
                    <CheckCircle2 size={24} className="text-[var(--text-muted)]" />
                    <p className="text-base lg:text-lg font-medium text-[var(--text-main)] leading-relaxed">{feature}</p>
                  </div>
                </div>
              )) || <div className="col-span-full text-center py-12"><p className="text-lg text-[var(--text-muted)]">Additional features coming soon</p></div>}
            </div>
          </div>
          <div className="story-section text-center space-y-8 py-20">
            {(project.liveUrl || project.githubUrl) && (
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/20">
                <div className="size-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-black uppercase tracking-widest text-[#22c55e]">
                  {project.liveUrl ? 'Live in Production' : 'Available on GitHub'}
                </span>
              </div>
            )}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {project.liveUrl && (
                <Magnetic>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-[var(--primary)] text-[var(--bg-dark)] rounded-full font-black uppercase text-sm tracking-wider hover:opacity-90 transition-all flex items-center gap-3 shadow-2xl"
                  >
                    View Live Project <ArrowUpRight size={18} />
                  </a>
                </Magnetic>
              )}
              {project.githubUrl && (
                <Magnetic>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-[var(--bg-soft)] backdrop-blur-xl border border-[var(--border-color)] text-[var(--text-main)] rounded-full font-black uppercase text-sm tracking-wider hover:opacity-80 transition-all flex items-center gap-3"
                  >
                    <Github size={18} /> View on GitHub
                  </a>
                </Magnetic>
              )}
              <Magnetic>
                <button
                  onClick={onClose}
                  className="px-8 py-4 bg-[var(--bg-soft)] backdrop-blur-xl border border-[var(--border-color)] text-[var(--text-main)] rounded-full font-bold uppercase text-sm tracking-wider hover:opacity-80 transition-all"
                >
                  Close Case Study
                </button>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ArchiveRow = ({ project, onOpen }) => {
  const rowRef = useRef(null);
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!imgRef.current) return;
    const { clientX, clientY } = e;

    // Animate image position to cursor with slight delay
    gsap.to(imgRef.current, {
      x: clientX,
      y: clientY - 100, // Offset to not cover cursor
      duration: 0.4,
      ease: "power2.out"
    });
  };

  const handleMouseEnter = () => {
    gsap.to(imgRef.current, { scale: 1, opacity: 1, duration: 0.3 });
  };

  const handleMouseLeave = () => {
    gsap.to(imgRef.current, { scale: 0.8, opacity: 0, duration: 0.3 });
  };

  return (
    <>
      <div
        ref={rowRef}
        onClick={() => onOpen(project)}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="group relative border-t border-[var(--border-color)] py-6 lg:py-8 grid grid-cols-1 lg:grid-cols-12 items-center gap-4 cursor-pointer hover:bg-[var(--bg-soft)] transition-colors duration-300"
      >
        <div className="col-span-1 lg:col-span-2 text-xs lg:text-sm text-[var(--text-muted)] font-mono">20{project.year}</div>
        <div className="col-span-1 lg:col-span-5 text-xl lg:text-2xl font-bold text-[var(--text-main)] group-hover:translate-x-4 transition-transform duration-300">{project.title}</div>
        <div className="hidden lg:flex col-span-3 text-xs uppercase tracking-widest text-[var(--text-muted)] gap-2">
          {project.tags.slice(0, 2).map((t, i) => <span key={i} className="border border-[var(--border-color)] px-2 py-1 rounded-full">{t}</span>)}
        </div>
        <div className="col-span-1 lg:col-span-2 flex justify-end">
          <div className="size-10 rounded-full border border-[var(--border-color)] flex items-center justify-center group-hover:bg-[var(--primary)] group-hover:text-[var(--bg-dark)] transition-all duration-300 text-[var(--text-main)]">
            <ArrowUpRight size={16} />
          </div>
        </div>
      </div>

      {/* Floating Preview Image Portal */}
      <div
        ref={imgRef}
        className="fixed top-0 left-0 w-[300px] h-[200px] pointer-events-none z-[60] rounded-xl overflow-hidden opacity-0 scale-75 origin-center hidden lg:block"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <img src={project.image} className="w-full h-full object-cover" />
      </div>
    </>
  )
}

const App = () => {
  const [currentTheme, setCurrentTheme] = useState('dark');
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    return () => {
      lenis.destroy();
    };
  }, []);

  // Disable Lenis completely when modal is open
  useEffect(() => {
    if (selectedProject && lenisRef.current) {
      lenisRef.current.destroy();
      lenisRef.current = null;
    } else if (!selectedProject && !lenisRef.current) {
      // Recreate Lenis after modal closes
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
      lenisRef.current = lenis;

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }
  }, [selectedProject]);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, { x: e.clientX, y: e.clientY, duration: 0.5, ease: 'power3.out' });
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  useGSAP(() => {
    const split = new SplitType('.split-text', { types: 'lines,words', lineClass: 'line-wrapper' });
    gsap.from('.line-wrapper .word', {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.05,
      ease: 'power4.out',
      delay: 0.5
    });

    document.querySelectorAll('.reveal-on-scroll').forEach((reveal) => {
      gsap.from(reveal, {
        scrollTrigger: { trigger: reveal, start: 'top 85%', toggleActions: 'play none none none' },
        y: 60, opacity: 0, duration: 1.5, ease: 'power3.out'
      });
    });

    return () => split.revert();
  }, { scope: containerRef });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.className = `theme-${currentTheme}`;
  }, [currentTheme]);

  const projects = [
    {
      id: 1,
      year: "24",
      title: "Homesta",
      subtitle: "Multi-Vendor E-Commerce Ecosystem",
      type: "application",
      category: "E-Commerce Platform",
      tags: ["React 19", "Vite", "Tailwind CSS", "ASP.NET Core", "SQL Server", "AI Modules"],
      image: homestaImg,
      description: "Platform supporting Users, Sellers, and Admins. Defined frontend–backend integration flows, API contracts, and data modeling.",
      liveUrl: "https://homesta-website-v-1.vercel.app",
      githubUrl: "https://github.com/lamadarawsheh/HomestaFullProject",
      details: {
        challenge: "Technical Lead/Co-Lead: Building a large-scale platform while ensuring seamless integration across multi-branch Git architecture (frontend, backend, UI/UX, AI).",
        architecture: "Co-led delivery using Component-driven React 19 architecture with Vite, ASP.NET Core backend, and SQL Server. Intelligent AI-powered recommendations.",
        longDescription: "Architected a scalable React frontend, implemented seller dashboards, inventory management, and order tracking. Collaborated on API contracts and data modeling while coordinating work with cross-functional teams to ensure high-quality UX.",
        features: [
          "Technical Lead / Co-Lead role",
          "Multi-vendor marketplace architecture",
          "Seller dashboards & inventory management",
          "API contract & Data modeling focus",
          "AI-powered product recommendations",
          "Real-time order tracking"
        ]
      }
    },
    {
      id: 2,
      year: "24",
      title: "EduNEXA",
      subtitle: "Learning Management System (LMS)",
      type: "website",
      category: "Education Technology",
      tags: ["React.js", "Tailwind CSS", "REST APIs", "JWT", "Jira", "Agile"],
      image: edunexaImg,
      description: "Team Lead for an Agile team. Designed and launched an LMS MVP within a strict 2-week sprint using Jira workflows.",
      githubUrl: "https://github.com/lamadarawsheh/EduNEXA",
      details: {
        challenge: "Team Lead role: Managing task prioritization, daily coordination, and progress reporting under extreme time pressure for a 2-week MVP delivery.",
        architecture: "React.js architecture with RESTful API integration. Coordinated work across frontend, backend, UI/UX, and AI teams using Git and Jira.",
        longDescription: "Led an Agile team through the end-to-end design and launch cycle. Implemented role-based authentication and student/instructor dashboards while maintaining strict delivery milestones.",
        features: [
          "Team Lead & Full-Stack Developer",
          "2-week MVP sprint delivery",
          "Agile/Jira workflow management",
          "Role-based authentication & dashboards",
          "Cross-team collaboration (UI/UX, AI, QA)",
          "RESTful API integration"
        ]
      }
    },
    {
      id: 3,
      year: "24",
      title: "Bot & Beam",
      subtitle: "AI-Augmented Coding Platform",
      type: "website",
      category: "Education Technology",
      tags: ["Next.js", "React", "Sanity CMS", "AI-Augmented Dev", "SEO"],
      image: botBeamImg,
      description: "Project Lead for an AI-enhanced education platform. Migrated from React SPA to Next.js for superior SEO and scalability.",
      liveUrl: "https://botandbeam.vercel.app/",
      details: {
        challenge: "Project Lead role: Delivering an end-to-end AI-augmented coding platform while improving performance and search discoverability.",
        architecture: "Next.js SSR architecture migrated from React SPA. Integrated Sanity CMS for flexible content and delivered a custom Academy module.",
        longDescription: "Led the migration strategy to Next.js, significantly improving discoverability and overall user experience. Integrated AI-assisted development tools and managed end-to-end delivery of custom education modules.",
        features: [
          "Project Lead role",
          "Next.js SSR migration for SEO",
          "Sanity CMS integration",
          "AI-augmented development workflow",
          "Custom Academy education module",
          "High-throughput design architecture"
        ]
      }
    },
    {
      id: 4,
      year: "24",
      title: "Security Guard Tracker",
      type: "application",
      tags: ["React Native", "Node.js", "MongoDB"],
      image: securityTrackerImg,
      description: "Mobile application and website to manage and monitor property security, including scheduling and tracking guard shifts.",
      liveUrl: "https://drive.google.com/drive/folders/1NVnFfUHGSbp_ShxZKrnYRjPouNTFy3Fl?usp=sharing",
      githubUrl: "https://github.com/orgs/Software-GraduationProject/repositories",
      details: {
        challenge: "Real-time tracking and management of security personnel across multiple locations.",
        architecture: "Full-stack implementation using React Native for mobile, Node.js for backend, and MongoDB for data storage.",
        longDescription: "Developed a comprehensive system for real-time security monitoring. The project included scheduling logic, automated shift tracking, and a unified dashboard for administrators to oversee operations.",
        features: ["Real-time shift tracking", "Automated scheduling", "Mobile-first experience", "Admin management dashboard"]
      }
    },
    {
      id: 5,
      year: "24",
      title: "Business Landing Website",
      type: "website",
      tags: ["HTML", "CSS", "Flexbox", "Grid"],
      image: businessImg,
      description: "Fully responsive business landing page designed from scratch with a focus on seamless user experience.",
      liveUrl: "https://business-landing-web.netlify.app/",
      githubUrl: "https://github.com/lamadarawsheh/Business-landing-Website",
      details: {
        challenge: "Creating a pixel-perfect, fully responsive layout from scratch without external frameworks.",
        architecture: "Pure HTML and CSS implementation utilizing Flexbox and Grid layouts for maximum flexibility.",
        longDescription: "Designed every element to ensure a cohesive brand identity and smooth navigation. Optimized assets and structure for high performance and accessibility across all device types.",
        features: ["Responsive design", "Custom UI components", "Performance optimization", "Cross-browser compatibility"]
      }
    },
    {
      id: 6,
      year: "24",
      title: "PLwG AI Solution",
      type: "application",
      tags: ["AI", "React", "Sentiment Analysis"],
      image: aiHackathonImg,
      description: "Real-time Arabic chat tool with AI-driven sentiment analysis, built during a 72-hour hackathon.",
      liveUrl: "https://drive.google.com/file/d/15M1BnUzjz11EswgMsbZJRJmlSlc5G2Ls/view",
      githubUrl: "https://github.com/Hackathon4-Team20",
      details: {
        challenge: "Implementing accurate Arabic sentiment analysis under an intense 72-hour deadline.",
        architecture: "React-based interface integrated with AI models for real-time natural language processing.",
        longDescription: "Led the development of this real-time communication tool designed to help support teams prioritize and address negative feedback instantly through automated sentiment tracking.",
        features: ["Arabic NLP", "Real-time status updates", "Sentiment visualization", "Rapid MVP delivery"]
      }
    },
    {
      id: 7,
      year: "24",
      title: "Website Mimic",
      type: "website",
      tags: ["React", "UI/UX", "Responsive"],
      image: mimicImg,
      description: "Modernized reconstruction of a jewelry store website with enhanced performance and UI consistency.",
      liveUrl: "https://leluxe-wmimic.netlify.app/",
      githubUrl: "https://github.com/lamadarawsheh/Leluxe-mimic",
      details: {
        challenge: "Improving an existing UI while maintaining the brand's core visual identity and luxury feel.",
        architecture: "Modern React architecture with optimized rendering and state management.",
        longDescription: "Rebuilt a local brand's digital presence to modern standards, focusing on high-quality imagery and fluid transitions that reflect the premium nature of the products.",
        features: ["Luxury UI design", "Optimized image loading", "Fluid animations", "Modern React components"]
      }
    },
    {
      id: 8,
      year: "24",
      title: "XO Game",
      type: "application",
      tags: ["JavaScript", "Logic", "CSS"],
      image: xoGameImg,
      description: "Classic Tic-Tac-Toe implementation with smart game logic and clean interactive interface.",
      liveUrl: "https://xojs.netlify.app/",
      githubUrl: "https://github.com/lamadarawsheh/XO-game.git",
      details: {
        challenge: "Designing a clean, bug-free game loop with intuitive user interactions.",
        architecture: "Vanilla JavaScript logic with dynamic DOM manipulation and CSS transitions.",
        longDescription: "A focused project on mastering core JavaScript logic, state management, and interactive UI feedback loops.",
        features: ["Two-player mode", "Dynamic UI updates", "Responsive game grid", "Win/Draw detection"]
      }
    },
    {
      id: 9,
      year: "24",
      title: "ALE Rainbow App",
      type: "mobile",
      tags: ["iOS", "Swift", "Rainbow SDK"],
      image: rainbowiosImg,
      description: "iOS communication platform integrating Rainbow SDK for voice, video, and group collaborations.",
      githubUrl: "https://github.com/lamadarawsheh/aleRainbowIOSApp",
      details: {
        challenge: "Seamlessly integrating complex third-party SDKs for real-time media streaming.",
        architecture: "Swift-based iOS application leveraging external SDKs for unified communications.",
        longDescription: "Developed a secure messaging and calling app that supports enterprise-grade collaboration features, including file sharing and multi-party conferences.",
        features: ["Video calls", "Voice messaging", "Secure group chat", "File sharing integration"]
      }
    },
    {
      id: 10,
      year: "24",
      title: "iOS Swift App",
      type: "mobile",
      tags: ["Swift", "MVC", "MVVM", "CoreData"],
      image: iosAppImg,
      description: "Advanced iOS application highlighting design patterns and robust data persistence.",
      githubUrl: "https://github.com/lamadarawsheh/IOSApplication",
      details: {
        challenge: "Balancing complex data management with a fluid and responsive native iOS interface.",
        architecture: "Clean architecture using MVC/MVVM patterns with CoreData for local persistence and Alamofire for networking.",
        longDescription: "Designed for scalability and maintainability, this app demonstrates expert-level knowledge of iOS design patterns and lifecycle management.",
        features: ["MVC/MVVM patterns", "CoreData persistence", "Alamofire networking", "Native UI animations"]
      }
    },
    {
      id: 11,
      year: "23",
      title: "React Blog Platform",
      type: "website",
      tags: ["React", "JSON Server", "Routing"],
      image: reactBlogImg,
      description: "Dynamic blog platform with mock API integration and fluid client-side routing.",
      githubUrl: "https://github.com/lamadarawsheh/reactBlog",
      details: {
        challenge: "Managing dynamic routes and state consistency across a content-heavy application.",
        architecture: "Modular React components with React Router and JSON Server for mock backend integration.",
        longDescription: "Built to showcase effective state management and routing strategies in React, providing a smooth, single-page application experience for content consumption.",
        features: ["Dynamic routing", "Mock API integration", "Modular architecture", "Interactive content blocks"]
      }
    },
    {
      id: 12,
      year: "23",
      title: "Legacy Portfolio",
      type: "website",
      tags: ["BEM", "SASS", "Accessibility"],
      image: portfolioProjectImg,
      description: "High-performance landing page with 95% accessibility score and WCAG compliance.",
      liveUrl: "https://lamadarawshehportfolio.netlify.app/",
      githubUrl: "https://github.com/lamadarawsheh/Portfolio_Project",
      details: {
        challenge: "Achieving a near-perfect accessibility score while maintaining high-fidelity animations.",
        architecture: "Structured SASS with BEM methodology and semantic HTML for superior SEO and accessibility.",
        longDescription: "A project dedicated to inclusive design standards, ensuring that high-end visual experiences are accessible to everyone through careful coding and aria-label implementation.",
        features: ["WCAG 2.1 compliance", "BEM methodology", "Custom SASS variables", "95+ accessibility rating"]
      }
    }
  ];

  const featuredProjects = projects.slice(0, 3);
  const archiveProjects = projects.slice(3);

  return (
    <div ref={containerRef} className={`theme-${currentTheme} relative min-h-screen overflow-x-hidden selection:bg-[var(--primary)] selection:text-[var(--bg-dark)] bg-[var(--bg-dark)] text-[var(--text-main)] transition-colors duration-1000`}>
      <div ref={cursorRef} className="custom-cursor hidden lg:block" />
      <div className="noise-overlay" />

      <AnimatePresence>
        {selectedProject && <CaseStudy project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>

      <div className="fixed inset-0 z-0 pointer-events-none bg-[var(--bg-dark)]" />

      <motion.div
        className="fixed top-0 left-0 right-0 h-[1px] bg-[var(--primary)] z-[100] origin-left"
        style={{ scaleX: useSpring(useScroll().scrollYProgress, { stiffness: 100, damping: 30 }) }}
      />

      <div className="fixed bottom-12 right-12 z-[60] flex items-center gap-4 bg-[var(--bg-dark)] border border-[var(--border-color)] shadow-2xl px-6 py-3 rounded-full">
        {themes.map(theme => (
          <Magnetic key={theme.id}>
            <button
              onClick={() => setCurrentTheme(theme.id)}
              className={`size-5 rounded-full transition-all duration-500 border border-[var(--border-color)] ring-offset-2 ${currentTheme === theme.id ? 'ring-2 ring-[var(--primary)] scale-125' : 'scale-100 opacity-40 hover:opacity-100'}`}
              style={{ backgroundColor: theme.colors[0] }}
            />
          </Magnetic>
        ))}
      </div>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ${scrolled ? 'glass-nav py-4' : 'py-12'}`}>
        <div className="max-w-[1600px] mx-auto flex items-center justify-between px-6 lg:px-12">
          <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="size-10 bg-[var(--primary)] flex items-center justify-center rounded-lg overflow-hidden group-hover:rotate-[-10deg] transition-transform duration-500 p-1">
              <img src={logoImg} alt="Lama Darawsheh" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-black tracking-[0.2em] text-[var(--text-main)]">LAMA DARAWSHEH</span>
              <span className="text-[8px] font-bold tracking-[0.4em] text-[var(--text-muted)] uppercase">Computer Engineer | Full-Stack Developer | Junior PO</span>
            </div>
          </div>

          <div className="flex items-center gap-12">
            <div className="hidden lg:flex items-center gap-16">
              {[
                { name: 'Works', href: '#work' },
                { name: 'Resume', href: '#Resume' },
                { name: 'Contact', href: '#Contact' }
              ].map((item) => (
                <a key={item.name} href={item.href} className="text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--text-muted)] hover:text-[var(--text-main)] transition-all">
                  {item.name}
                </a>
              ))}
            </div>
            <Magnetic>
              <button
                className="size-12 rounded-full border border-[var(--border-color)] flex items-center justify-center hover:bg-[var(--primary)] hover:text-[var(--bg-dark)] transition-all duration-500 text-[var(--text-main)]"
              >
                <Command size={16} />
              </button>
            </Magnetic>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 lg:px-12 pt-32">
        <div className="w-full max-w-[1400px] relative">
          <div className="flex flex-col items-start gap-8 lg:gap-12">
            <div className="flex items-center gap-6 overflow-hidden">
              <div className="h-[1px] w-12 bg-[var(--border-color)]" />
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[var(--text-muted)]">AESTHETICS & ARCHITECTURE</span>
            </div>

            <h1 className="text-[14vw] lg:text-[9vw] font-black leading-[0.9] lg:leading-[0.8] tracking-[-0.06em] text-[var(--text-main)] split-text">
              Curating <br /> <span className="text-[var(--text-main)] italic font-light">Digital Flow.</span>
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 w-full mt-12 lg:mt-20">
              <div className="space-y-8 reveal-on-scroll">
                <p className="text-xl lg:text-2xl font-light leading-relaxed text-[var(--text-muted)] max-w-xl">
                  Computer Engineer specialized in full-stack development and Agile product delivery. I bridge the gap between business requirements and technical excellence, managing Jira workflows and leading cross-functional teams to deliver high-impact digital solutions.
                </p>
                <Magnetic>
                  <button
                    onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })}
                    className="flex items-center gap-6 group py-4 text-[var(--text-main)]"
                  >
                    <span className="text-xs font-black uppercase tracking-[0.4em]">Explore Selected Archive</span>
                    <div className="size-10 rounded-full border border-[var(--border-color)] flex items-center justify-center group-hover:bg-[var(--primary)] group-hover:text-[var(--bg-dark)] transition-all">
                      <ArrowRight size={16} />
                    </div>
                  </button>
                </Magnetic>
              </div>

              <div className="hidden lg:flex justify-end pr-20 reveal-on-scroll">
                <div className="relative z-10 size-64 rounded-3xl overflow-hidden glass-card p-2 border border-[var(--border-color)]">
                  <div className="w-full h-full rounded-2xl overflow-hidden border border-border-base bg-[var(--bg-dark)]">
                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                      {/* Sub-grid interaction */}
                      <svg className="absolute inset-0 size-full opacity-10" viewBox="0 0 100 100">
                        <line x1="0" y1="20" x2="100" y2="20" stroke="var(--text-main)" strokeWidth="0.1" />
                        <line x1="0" y1="50" x2="100" y2="50" stroke="var(--text-main)" strokeWidth="0.1" />
                        <line x1="0" y1="80" x2="100" y2="80" stroke="var(--text-main)" strokeWidth="0.1" />
                        <line x1="20" y1="0" x2="20" y2="100" stroke="var(--text-main)" strokeWidth="0.1" />
                        <line x1="50" y1="0" x2="50" y2="100" stroke="var(--text-main)" strokeWidth="0.1" />
                        <line x1="80" y1="0" x2="80" y2="100" stroke="var(--text-main)" strokeWidth="0.1" />
                      </svg>

                      {/* Pulse Rings */}
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{
                            scale: [0.5, 1.5],
                            opacity: [0, 0.4, 0]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 1,
                            ease: "linear"
                          }}
                          className="absolute size-32 rounded-full border border-[var(--primary)]"
                        />
                      ))}

                      <div className="size-1 rounded-full bg-[var(--primary)] shadow-[0_0_15px_var(--primary)]" />
                    </div>
                    <motion.div
                      animate={{ y: [-100, 100], opacity: [0, 1, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="w-full h-[1px] bg-[var(--primary)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-6 lg:bottom-20 lg:left-12">
          <ChevronDown className="size-6 text-[var(--text-muted)] animate-bounce" />
        </div>
      </section>

      <section id="work" className="py-32 lg:py-60 px-6 lg:px-12 max-w-[1400px] mx-auto bg-[var(--bg-dark)]">
        <div className="mb-20 lg:mb-40 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 lg:gap-16 reveal-on-scroll">
          <h3 className="text-5xl lg:text-9xl font-black tracking-tighter leading-none split-text text-[var(--text-main)]">
            Selected <br /> <span className="text-[var(--text-muted)] italic font-light">Artifacts.</span>
          </h3>
          <div className="max-w-md text-left lg:text-right">
            <p className="text-[var(--text-muted)] text-sm lg:text-lg uppercase tracking-widest leading-loose">
              High-fidelity engineering solutions for global systems. Each project is a testament to precision and performance.
            </p>
          </div>
        </div>

        {/* Featured Projects (Big Cards) */}
        <div className="grid grid-cols-1 gap-32 lg:gap-60 mb-32 lg:mb-60">
          {featuredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
            >
              <div className="w-full lg:w-3/5 group cursor-crosshair overflow-hidden reveal-on-scroll" onClick={() => setSelectedProject(project)}>
                <div className={`${project.type === 'website' ? 'browser-frame' : 'mobile-frame shadow-2xl border-[var(--border-color)]'} transition-all duration-1000`}>
                  <img src={project.image} className="w-full grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 parallax-img" />
                </div>
              </div>

              <div className="w-full lg:w-2/5 space-y-8 lg:space-y-12 reveal-on-scroll">
                <div className="space-y-4">
                  <span className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-[0.6em] block">Case Study // 0{project.id}</span>
                  <h4 className="text-4xl lg:text-6xl font-black tracking-tighter leading-none cursor-pointer hover:text-[var(--primary)] transition-colors text-[var(--text-main)]" onClick={() => setSelectedProject(project)}>{project.title}</h4>
                </div>
                <p className="text-lg lg:text-xl text-[var(--text-muted)] font-light leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 lg:px-6 rounded-full border border-[var(--border-color)] bg-[var(--bg-soft)] text-[9px] font-black uppercase tracking-widest text-[var(--text-muted)]">{tag}</span>
                  ))}
                </div>
                <Magnetic>
                  <button onClick={() => setSelectedProject(project)} className="flex items-center gap-6 py-4 border-b border-[var(--border-color)] w-full group text-[var(--text-main)]">
                    <span className="text-xs font-black uppercase tracking-[0.4em]">View Project Detail</span>
                    <ArrowUpRight className="text-[var(--text-muted)] group-hover:text-[var(--text-main)] transition-all" size={20} />
                  </button>
                </Magnetic>
              </div>
            </div>
          ))}
        </div>

        {/* Archive Section (Table View for "Too Many Projects") */}
        <div className="reveal-on-scroll mt-32 lg:mt-60">
          <div className="flex items-center gap-6 mb-12 lg:mb-20">
            <div className="h-[1px] w-12 bg-[var(--border-color)]" />
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[var(--text-muted)]">FULL ARCHIVE</span>
          </div>

          <div className="w-full overflow-x-auto">
            {archiveProjects.map((project) => (
              <ArchiveRow key={project.id} project={project} onOpen={setSelectedProject} />
            ))}
          </div>
        </div>

      </section>

      <section id="Resume" className="py-32 lg:py-60 px-6 lg:px-12 bg-[var(--bg-soft)] text-[var(--text-main)] relative z-10 transition-colors duration-1000">
        <div className="max-w-[1400px] mx-auto text-center space-y-12">
          <h2 className="text-5xl lg:text-9xl font-black tracking-tighter italic split-text text-[var(--text-main)]">Resume.</h2>
          <p className="text-xl lg:text-2xl font-light text-[var(--text-muted)]">
            Experienced Computer Engineer and Junior Product Owner skilled in leading projects through Jira workflows and high-fidelity full-stack engineering.
          </p>
          <Magnetic>
            <a
              href={resumePDF}
              download="Lama_Darawsheh_Resume.pdf"
              className="inline-flex items-center gap-6 group py-4 px-12 border border-[var(--border-color)] rounded-full hover:bg-[var(--primary)] hover:text-[var(--bg-dark)] transition-all"
            >
              <span className="text-sm font-black uppercase tracking-[0.4em] text-[var(--text-main)]">Download Archive (CV)</span>
              <div className="size-10 rounded-full flex items-center justify-center border border-[var(--border-color)] group-hover:border-[var(--bg-dark)]">
                <ArrowRight size={16} />
              </div>
            </a>
          </Magnetic>
        </div>
      </section>

      <footer id="Contact" className="py-32 lg:py-60 bg-[var(--bg-dark)] text-center relative overflow-hidden transition-colors duration-1000 border-t border-border-base">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
          <h2 className="text-[30vw] font-black tracking-[-0.1em] text-[var(--text-main)]">LAMA</h2>
        </div>
        <div className="relative z-10 space-y-12 reveal-on-scroll">
          <span className="text-[10px] font-black uppercase tracking-[1em] text-[var(--text-muted)]">READY FOR GLOBAL SCALE?</span>
          <h4 className="text-5xl md:text-[10vw] font-black text-[var(--text-main)] leading-none tracking-tighter px-4">Let's connect.</h4>
          <div className="flex flex-wrap justify-center gap-12 pt-20">
            <Magnetic>
              <a href="https://github.com/lamadarawsheh" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-muted)] hover:text-[var(--text-main)] transition-all hover:translate-y-[-4px] block">GitHub</a>
            </Magnetic>
            <Magnetic>
              <a href="https://www.linkedin.com/in/lamadarawsheh/" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-muted)] hover:text-[var(--text-main)] transition-all hover:translate-y-[-4px] block">LinkedIn</a>
            </Magnetic>
            <Magnetic>
              <a href="mailto:lama.ndarawsheh@gmail.com" className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-muted)] hover:text-[var(--text-main)] transition-all hover:translate-y-[-4px] block">Email</a>
            </Magnetic>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
