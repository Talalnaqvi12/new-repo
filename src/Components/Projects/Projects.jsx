// import React, { useState } from "react";
// import { Search, Calendar, User, TrendingUp, X } from "lucide-react";
// import "./Projects.css";

// const Projects = () => {
//   const [selectedFilter, setSelectedFilter] = useState("All Projects");
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   const filterOptions = [
//     "All Projects",
//     "Shopify",
//     "Odoo Development",
//     "Web Development",
//     "Full Stack",

//     "WordPress",
//     "AI & Machine Learning",
//     "Mobile Apps",
//     "Data Science",
//   ];

//   const projects = [
//     {
//       id: 1,
//       title: "Factory Motocross Graphics Store",
//       company: "Shopify",
//       description:
//         "Complete migration from WordPress to Shopify with custom product templates, advanced options, and Bitrix24 integration via Python-Flask backend.",
//       status: "completed",
//       featured: true,
//       category: "Shopify",
//       duration: "Aug 2024 - Dec 2024",
//       client: "Factory Motocross Graphics",
//       technologies: [
//         "Shopify Liquid",
//         "Python",
//         "Flask",
//         "Bitrix24 API",
//         "JavaScript",
//         "HTML/CSS",
//       ],
//       users: 1500,
//       productionUptime: "99.8%",
//       overview:
//         "Successfully migrated a complex WordPress-based motocross graphics store to Shopify, implementing custom product configurators and seamless CRM integration. The project focused on maintaining existing functionality while improving performance and user experience.",
//       challenges: [
//         "WordPress to Shopify migration with data preservation",
//         "Custom product templates with advanced configuration options",
//         "Bitrix24 CRM integration using custom Python-Flask backend",
//         "Maintaining SEO rankings during platform transition",
//       ],
//       impact: {
//         users: 1500,
//         productionUptime: "99.8%",
//         pageLoadSpeed: "65% improvement",
//         orderProcessing: "40% faster",
//         customerSatisfaction: "25% increase",
//       },
//     },
//     {
//       id: 2,
//       title: "Better Woman Labs Single-Product Store",
//       company: "Shopify",
//       description:
//         "High-conversion single-product storefront built from scratch with subscription functionality and optimized for female wellness supplements.",
//       status: "completed",
//       featured: true,
//       category: "Shopify",
//       duration: "Sep 2024 - Nov 2024",
//       client: "Better Woman Labs",
//       technologies: [
//         "Shopify Liquid",
//         "Bold Subscriptions",
//         "JavaScript",
//         "CSS3",
//         "Shopify APIs",
//       ],
//       users: 800,
//       productionUptime: "99.9%",
//       overview:
//         "Designed and developed a focused single-product ecommerce experience optimized for conversion. Implemented subscription-based purchasing with Bold app integration and created compelling product storytelling through custom sections.",
//       challenges: [
//         "Single-product store optimization for maximum conversion",
//         "Bold subscription integration and customization",
//         "Creating compelling product narrative and trust signals",
//         "Mobile-first design for wellness-focused audience",
//       ],
//       impact: {
//         users: 800,
//         productionUptime: "99.9%",
//         conversionRate: "3.2x increase",
//         subscriptionRate: "45% of orders",
//         customerRetention: "60% improvement",
//       },
//     },
//     {
//       id: 3,
//       title: "BBF Industrial Equipment Catalog",
//       company: "Shopify",
//       description:
//         "Large-scale product migration and organization project handling 20,000+ industrial products from Peach Software with ongoing UX improvements.",
//       status: "in-progress",
//       featured: false,
//       category: "Shopify",
//       duration: "Oct 2024 - Ongoing",
//       client: "BBF Industrial",
//       technologies: [
//         "Shopify Liquid",
//         "Peach Software API",
//         "JavaScript",
//         "Product CSV Management",
//         "Shopify Plus",
//       ],
//       users: 2200,
//       productionUptime: "99.7%",
//       overview:
//         "Managing the complex migration and organization of over 20,000 industrial products from Peach Software to Shopify. Currently focusing on improving product templates, category structure, and overall user experience for B2B customers.",
//       challenges: [
//         "Mass product import and data mapping from Peach Software",
//         "Complex product categorization and collection structure",
//         "B2B pricing and customer group management",
//         "Template design for diverse industrial product types",
//       ],
//       impact: {
//         users: 2200,
//         productionUptime: "99.7%",
//         productCatalogSize: "20,000+ products",
//         searchAccuracy: "85% improvement",
//         categoryNavigation: "50% more efficient",
//       },
//     },
//     {
//       id: 4,
//       title: "Better Man Labs Store Maintenance",
//       company: "Shopify",
//       description:
//         "Ongoing maintenance, UI improvements, and customer experience enhancements for established mens wellness supplement store.",
//       status: "in-progress",
//       featured: false,
//       category: "Shopify",
//       duration: "Nov 2024 - Ongoing",
//       client: "Better Man Labs",
//       technologies: [
//         "Shopify Liquid",
//         "JavaScript",
//         "CSS3",
//         "Shopify Apps",
//         "Performance Optimization",
//       ],
//       users: 1800,
//       productionUptime: "99.8%",
//       overview:
//         "Providing ongoing technical maintenance and user experience improvements for an established mens wellness brand. Focus on design refinements, bug fixes, and conversion optimization through iterative improvements.",
//       challenges: [
//         "Maintaining existing functionality while implementing improvements",
//         "Performance optimization without disrupting live operations",
//         "UI/UX enhancements based on customer feedback",
//         "Cross-browser compatibility and mobile optimization",
//       ],
//       impact: {
//         users: 1800,
//         productionUptime: "99.8%",
//         bugResolution: "95% within 24hrs",
//         userExperience: "20% improvement",
//         mobilePerformance: "30% faster loading",
//       },
//     },
//     {
//       id: 5,
//       title: "Odoo Inventory Mastery Suite",
//       company: "ODOO",
//       description:
//         "13 custom modules designed for robust inventory operations including real-time tracking, stock movement analytics, and warehouse control.",
//       status: "completed",
//       featured: true,
//       category: "Odoo Development",
//       duration: "Jun 2024 - Jan 2025",
//       client: "International Logistics Company",
//       technologies: ["Odoo 15/16", "Python", "PostgreSQL", "JavaScript", "XML"],
//       users: 600,
//       productionUptime: "99.9%",
//       overview:
//         "Inventory operations were optimized through serial tracking, cross-docking support, mobile barcode scanning, lot expiration alerts, and cycle count modules. Each module supports better control, scalability, and auditing capability across warehouses.",
//       challenges: [
//         "Complex multi-warehouse inventory tracking",
//         "Real-time stock synchronization across locations",
//         "Integration with existing ERP systems",
//         "Mobile scanning compatibility",
//       ],
//       impact: {
//         users: 600,
//         productionUptime: "99.9%",
//         warehouseEfficiency: "35% increase",
//         errorReduction: "80% decrease",
//       },
//     },
//     {
//       id: 2,
//       title: "E-commerce Platform Redesign",
//       company: "TechCorp",
//       description:
//         "Complete redesign of e-commerce platform with modern UI/UX and enhanced performance.",
//       status: "in-progress",
//       featured: false,
//       category: "Web Development",
//       duration: "Mar 2024 - Dec 2024",
//       client: "E-commerce Solutions Inc.",
//       technologies: ["React", "Node.js", "MongoDB", "AWS"],
//       users: 1200,
//       productionUptime: "99.5%",
//       overview:
//         "Modern e-commerce platform built with React and Node.js, featuring responsive design, real-time inventory management, and integrated payment processing.",
//       challenges: [
//         "Legacy system migration",
//         "Performance optimization",
//         "Mobile responsiveness",
//         "Payment gateway integration",
//       ],
//       impact: {
//         users: 1200,
//         productionUptime: "99.5%",
//         salesIncrease: "45% increase",
//         loadTime: "60% faster",
//       },
//     },

//     {
//       id: 3,
//       title: "Cosmetic Brand Shopify Store",
//       company: "Shopify",
//       description:
//         "A high-conversion beauty and skincare store with custom product pages, seamless checkout, and influencer-friendly features.",
//       status: "completed",
//       featured: true,
//       category: "Shopify",
//       duration: "Feb 2024 - Jun 2024",
//       client: "Luxury Skincare Co.",
//       technologies: [
//         "Shopify Liquid",
//         "JavaScript",
//         "HTML/CSS",
//         "Klaviyo",
//         "Shopify APIs",
//       ],
//       users: 1200,
//       productionUptime: "100%",
//       overview:
//         "Built a visually compelling and performance-optimized eCommerce store for a luxury skincare brand. Focused on mobile UX, fast load times, and integrations with Klaviyo and Instagram.",
//       challenges: [
//         "Custom theme development with flexible CMS sections",
//         "Integration with marketing platforms like Klaviyo",
//         "Optimizing performance with large product images",
//         "Ensuring accessibility compliance",
//       ],
//       impact: {
//         users: 1200,
//         productionUptime: "100%",
//         conversionRate: "2.5x increase",
//         bounceRate: "40% decrease",
//       },
//     },
//     {
//       id: 6,
//       title: "Mobile Banking App",
//       company: "FinTech Solutions",
//       description:
//         "Secure mobile banking application with biometric authentication and real-time transactions.",
//       status: "completed",
//       featured: true,
//       category: "Mobile Apps",
//       duration: "Jan 2024 - Aug 2024",
//       client: "Regional Bank",
//       technologies: ["React Native", "Node.js", "PostgreSQL", "AWS"],
//       users: 50000,
//       productionUptime: "99.8%",
//       overview:
//         "Comprehensive mobile banking solution with advanced security features, real-time notifications, and intuitive user interface.",
//       challenges: [
//         "Security compliance",
//         "Biometric integration",
//         "Real-time processing",
//         "Cross-platform compatibility",
//       ],
//       impact: {
//         users: 50000,
//         productionUptime: "99.8%",
//         transactionSpeed: "70% faster",
//         securityIncidents: "0 incidents",
//       },
//     },

//     {
//       id: 7,
//       title: "Jewelry Brand Shopify Store",
//       company: "Shopify",
//       description:
//         "Premium jewelry storefront with stunning product galleries, customer testimonials, and secure checkout enhancements.",
//       status: "completed",
//       featured: true,
//       category: "Shopify",
//       duration: "Jan 2024 - May 2024",
//       client: "Aurora Gems",
//       technologies: [
//         "Shopify Liquid",
//         "Tailwind CSS",
//         "JavaScript",
//         "Shopify Plus",
//         "ReCharge",
//       ],
//       users: 950,
//       productionUptime: "99.9%",
//       overview:
//         "Created a luxurious online experience with high-resolution visuals, personalized gifting options, and subscription-based jewelry care packages.",
//       challenges: [
//         "Building interactive product zoom and 360° views",
//         "Subscription integration with ReCharge",
//         "Security enhancements for checkout flow",
//         "Mobile-first UX for a high-end feel",
//       ],
//       impact: {
//         users: 950,
//         productionUptime: "99.9%",
//         AOV: "15% increase",
//         returnRate: "25% reduction",
//       },
//     },
//     {
//       id: 8,
//       title: "Interactive Kids Toy Shopify Store",
//       company: "Shopify",
//       description:
//         "An engaging, colorful Shopify storefront built to showcase educational toys and maximize parental trust and conversions.",
//       status: "completed",
//       featured: false,
//       category: "Shopify",
//       duration: "Mar 2024 - Jul 2024",
//       client: "EduToys Inc.",
//       technologies: [
//         "Shopify Liquid",
//         "JavaScript",
//         "CSS Animations",
//         "Shopify Apps",
//         "Google Analytics",
//       ],
//       users: 850,
//       productionUptime: "99.8%",
//       overview:
//         "Focused on creating a playful UX with age filters, customer reviews, and a rewards system. Implemented real-time inventory sync and cart recovery tools.",
//       challenges: [
//         "Designing a playful yet performant theme",
//         "Inventory syncing across bundles and kits",
//         "Gamification and reward program integration",
//         "Responsive design across tablet and mobile",
//       ],
//       impact: {
//         users: 850,
//         productionUptime: "99.8%",
//         avgSessionTime: "30% increase",
//         cartRecoveryRate: "45% improvement",
//       },
//     },
//   ];

//   const filteredProjects = projects.filter((project) => {
//     const matchesFilter =
//       selectedFilter === "All Projects" || project.category === selectedFilter;
//     const matchesSearch =
//       project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       project.technologies.some((tech) =>
//         tech.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     return matchesFilter && matchesSearch;
//   });

//   const ProjectCard = ({ project }) => (
//     <div
//       className="project-card"
//       onClick={() => setSelectedProject(project)}
//       style={{ cursor: "pointer" }}
//     >
//       <div className="project-card-content">
//         <div className="project-icon">{project.company.charAt(0)}</div>

//         <div className="company-label">{project.company}</div>

//         <div className="project-card-header">
//           <h3 className="project-title">{project.title}</h3>
//           <div className="project-badges">
//             {project.status === "completed" && (
//               <span className="badge badge-completed">completed</span>
//             )}
//             {project.status === "in-progress" && (
//               <span className="badge badge-progress">in progress</span>
//             )}
//           </div>
//         </div>

//         <p className="project-card-description">{project.description}</p>

//         <div className="project-technologies">
//           {project.technologies.slice(0, 3).map((tech, index) => (
//             <span key={index} className="tech-badge">
//               {tech}
//             </span>
//           ))}
//           {project.technologies.length > 3 && (
//             <span className="tech-badge more-tech">
//               +{project.technologies.length - 3} more
//             </span>
//           )}
//         </div>
//       </div>

//       <div className="project-card-footer">
//         <div className="project-client">
//           <span className="client-indicator">●</span>
//           <span>{project.client}</span>
//         </div>
//         <div className="project-meta">
//           {project.featured && <span className="featured-badge">Featured</span>}
//           <span className="project-year">2024</span>
//         </div>
//       </div>
//     </div>
//   );

//   const ProjectDetail = ({ project, onClose }) => (
//     <div className="project-detail-overlay">
//       <div className="project-detail-modal">
//         <div className="project-detail-header">
//           <h2>{project.title}</h2>
//           <button className="close-btn" onClick={onClose}>
//             <X size={24} />
//           </button>
//         </div>

//         <p className="project-description">{project.description}</p>

//         <div className="project-badges-detail">
//           {project.status === "completed" && (
//             <span className="badge badge-completed">completed</span>
//           )}
//           {project.featured && (
//             <span className="badge badge-featured">⭐ Featured</span>
//           )}
//         </div>

//         <div className="project-detail-content">
//           <div className="project-main-content">
//             <div className="project-info-section">
//               <div className="project-icon-large">
//                 {project.company.charAt(0)}
//               </div>
//               <div className="project-title-section">
//                 <h3>{project.title}</h3>
//                 <p className="company-name">{project.company}</p>
//                 <span className="badge badge-completed">completed</span>
//               </div>
//             </div>

//             <div className="section">
//               <h4>Project Overview</h4>
//               <p>{project.overview}</p>
//             </div>

//             <div className="section">
//               <h4>Technologies Used</h4>
//               <div className="tech-tags">
//                 {project.technologies.map((tech, index) => (
//                   <span key={index} className="tech-tag">
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             <div className="section">
//               <h4>Key Challenges</h4>
//               <ul>
//                 {project.challenges.map((challenge, index) => (
//                   <li key={index}>{challenge}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           <div className="project-sidebar">
//             <div className="project-details-card">
//               <h4>Project Details</h4>

//               <div className="detail-item">
//                 <Calendar size={20} />
//                 <div>
//                   <strong>Duration</strong>
//                   <p>{project.duration}</p>
//                 </div>
//               </div>

//               <div className="detail-item">
//                 <User size={20} />
//                 <div>
//                   <strong>Client</strong>
//                   <p>{project.client}</p>
//                 </div>
//               </div>

//               <div className="detail-item">
//                 <TrendingUp size={20} />
//                 <div>
//                   <strong>Category</strong>
//                   <p>{project.category}</p>
//                 </div>
//               </div>
//             </div>

//             <div className="project-impact-card">
//               <h4>Project Impact</h4>

//               <div className="impact-item">
//                 <strong>Users</strong>
//                 <span className="impact-value">
//                   {project.users.toLocaleString()}
//                 </span>
//               </div>

//               <div className="impact-item">
//                 <strong>Production Uptime</strong>
//                 <span className="impact-value">{project.productionUptime}</span>
//               </div>

//               {Object.entries(project.impact).map(([key, value]) => {
//                 if (key !== "users" && key !== "productionUptime") {
//                   return (
//                     <div key={key} className="impact-item">
//                       <strong>
//                         {key
//                           .replace(/([A-Z])/g, " $1")
//                           .replace(/^./, (str) => str.toUpperCase())}
//                       </strong>
//                       <span className="impact-value">{value}</span>
//                     </div>
//                   );
//                 }
//                 return null;
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="project-section" id="projects">
//       <div className="filter-container">
//         <div className="filter-buttons">
//           {filterOptions.map((filter) => (
//             <button
//               key={filter}
//               className={`filter-btn ${selectedFilter === filter ? "active" : ""
//                 }`}
//               onClick={() => setSelectedFilter(filter)}
//             >
//               {filter}
//             </button>
//           ))}
//         </div>

//         <div className="search-container">
//           <Search className="search-icon" size={20} />
//           <input
//             type="text"
//             className="search-input"
//             placeholder="Search projects by title, description, technologies, or client"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//       </div>

//       <div className="projects-grid">
//         {filteredProjects.map((project) => (
//           <ProjectCard key={project.id} project={project} />
//         ))}
//       </div>

//       {filteredProjects.length === 0 && (
//         <div
//           style={{ textAlign: "center", padding: "60px 20px", color: "#666" }}
//         >
//           <p>No projects found matching your search criteria.</p>
//         </div>
//       )}

//       {selectedProject && (
//         <ProjectDetail
//           project={selectedProject}
//           onClose={() => setSelectedProject(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default Projects;


import React, { useState } from "react";
import { Search, Calendar, User, TrendingUp, X, ExternalLink, Image } from "lucide-react";
import "./Projects.css";
import BBF_sm from '../../assets/Projects/bbf-mobile.png';
import betterWomen_sm from '../../assets/Projects/betterWomen-mobile.png';
import bettermen_sm from '../../assets/Projects/betterman-sm.png';
import dirtmotor_sm from '../../assets/Projects/dirtmotor.png';
import barebloom_sm from '../../assets/Projects/barebloom-sm.png';
import playnest_sm from '../../assets/Projects/playnest-sm.png';




const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filterOptions = [
    "All Projects",
    // "Shopify",
    // "Odoo Development",
    // "Web Development",
    // "Full Stack",
    // "WordPress",
    // "AI & Machine Learning",
    // "Mobile Apps",
    // "Data Science",
  ];

  const projects = [
    {
      id: 1,
      title: "Factory Motocross Graphics Store",
      company: "Shopify",
      description:
        "Complete migration from WordPress to Shopify with custom product templates, advanced options, and Bitrix24 integration via Python-Flask backend.",
      status: "completed",
      featured: true,
      category: "Shopify",
      duration: "Aug 2024 - Dec 2024",
      client: "Factory Motocross Graphics",
      projectLink: "https://www.factorymotocrossgraphics.com/",
      // projectImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      projectImage: dirtmotor_sm,
      technologies: [
        "Shopify Liquid",
        "Python",
        "Flask",
        "Bitrix24 API",
        "JavaScript",
        "HTML/CSS",
      ],
      users: 1500,
      productionUptime: "99.8%",
      overview:
        "Successfully migrated a complex WordPress-based motocross graphics store to Shopify, implementing custom product configurators and seamless CRM integration. The project focused on maintaining existing functionality while improving performance and user experience.",
      challenges: [
        "WordPress to Shopify migration with data preservation",
        "Custom product templates with advanced configuration options",
        "Bitrix24 CRM integration using custom Python-Flask backend",
        "Maintaining SEO rankings during platform transition",
      ],
      impact: {
        users: 1500,
        productionUptime: "99.8%",
        pageLoadSpeed: "65% improvement",
        orderProcessing: "40% faster",
        customerSatisfaction: "25% increase",
      },
    },
    {
      id: 2,
      title: "Better Woman Labs",
      company: "Shopify",
      description:
        "High-conversion single-product storefront built from scratch with subscription functionality and optimized for female wellness supplements.",
      status: "completed",
      featured: true,
      category: "Shopify",
      duration: "Sep 2024 - Nov 2024",
      client: "Better Woman Labs",
      projectLink: "https://betterwomanlabs.com",
      // projectImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      projectImage: betterWomen_sm,
      technologies: [
        "Shopify Liquid",
        "Bold Subscriptions",
        "JavaScript",
        "CSS3",
        "Shopify APIs",
      ],
      users: 800,
      productionUptime: "99.9%",
      overview:
        "Designed and developed a focused single-product ecommerce experience optimized for conversion. Implemented subscription-based purchasing with Bold app integration and created compelling product storytelling through custom sections.",
      challenges: [
        "Single-product store optimization for maximum conversion",
        "Bold subscription integration and customization",
        "Creating compelling product narrative and trust signals",
        "Mobile-first design for wellness-focused audience",
      ],
      impact: {
        users: 800,
        productionUptime: "99.9%",
        conversionRate: "3.2x increase",
        subscriptionRate: "45% of orders",
        customerRetention: "60% improvement",
      },
    },
    {
      id: 3,
      title: "BBF Industrial Equipment",
      company: "Shopify",
      description:
        "Large-scale product migration and organization project handling 20,000+ industrial products from Peach Software with ongoing UX improvements.",
      status: "in-progress",
      featured: false,
      category: "Shopify",
      duration: "Oct 2024 - Ongoing",
      client: "BBF Industrial",
      projectLink: null, // No link for in-progress project
      // projectImage: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=600&h=400&fit=crop",
      projectImage: BBF_sm,

      technologies: [
        "Shopify Liquid",
        "Peach Software API",
        "JavaScript",
        "Product CSV Management",
        "Shopify Plus",
      ],
      users: 2200,
      productionUptime: "99.7%",
      overview:
        "Managing the complex migration and organization of over 20,000 industrial products from Peach Software to Shopify. Currently focusing on improving product templates, category structure, and overall user experience for B2B customers.",
      challenges: [
        "Mass product import and data mapping from Peach Software",
        "Complex product categorization and collection structure",
        "B2B pricing and customer group management",
        "Template design for diverse industrial product types",
      ],
      impact: {
        users: 2200,
        productionUptime: "99.7%",
        productCatalogSize: "20,000+ products",
        searchAccuracy: "85% improvement",
        categoryNavigation: "50% more efficient",
      },
    },
    {
      id: 4,
      title: "Better Man Labs Store",
      company: "Shopify",
      description:
        "Ongoing maintenance, UI improvements, and customer experience enhancements for established mens wellness supplement store.",
      status: "in-progress",
      featured: false,
      category: "Shopify",
      duration: "Nov 2024 - Ongoing",
      client: "Better Man Labs",
      projectLink: "https://bettermanlabs.co.uk/",
      // projectImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      projectImage: bettermen_sm,

      technologies: [
        "Shopify Liquid",
        "JavaScript",
        "CSS3",
        "Shopify Apps",
        "Performance Optimization",
      ],
      users: 1800,
      productionUptime: "99.8%",
      overview:
        "Providing ongoing technical maintenance and user experience improvements for an established mens wellness brand. Focus on design refinements, bug fixes, and conversion optimization through iterative improvements.",
      challenges: [
        "Maintaining existing functionality while implementing improvements",
        "Performance optimization without disrupting live operations",
        "UI/UX enhancements based on customer feedback",
        "Cross-browser compatibility and mobile optimization",
      ],
      impact: {
        users: 1800,
        productionUptime: "99.8%",
        bugResolution: "95% within 24hrs",
        userExperience: "20% improvement",
        mobilePerformance: "30% faster loading",
      },
    },
    
    // {
    //   id: 6,
    //   title: "E-commerce Platform Redesign",
    //   company: "TechCorp",
    //   description:
    //     "Complete redesign of e-commerce platform with modern UI/UX and enhanced performance.",
    //   status: "in-progress",
    //   featured: false,
    //   category: "Web Development",
    //   duration: "Mar 2024 - Dec 2024",
    //   client: "E-commerce Solutions Inc.",
    //   projectLink: "https://ecommerce-demo.techcorp.com",
    //   projectImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    //   technologies: ["React", "Node.js", "MongoDB", "AWS"],
    //   users: 1200,
    //   productionUptime: "99.5%",
    //   overview:
    //     "Modern e-commerce platform built with React and Node.js, featuring responsive design, real-time inventory management, and integrated payment processing.",
    //   challenges: [
    //     "Legacy system migration",
    //     "Performance optimization",
    //     "Mobile responsiveness",
    //     "Payment gateway integration",
    //   ],
    //   impact: {
    //     users: 1200,
    //     productionUptime: "99.5%",
    //     salesIncrease: "45% increase",
    //     loadTime: "60% faster",
    //   },
    // },
    {
      id: 7,
      title: "Cosmetic Brand Shopify Store",
      company: "Shopify",
      description:
        "A high-conversion beauty and skincare store with custom product pages, seamless checkout, and influencer-friendly features.",
      status: "completed",
      featured: true,
      category: "Shopify",
      duration: "Feb 2024 - Jun 2024",
      client: "Luxury Skincare Co.",
      projectLink: "https://barebloom3.myshopify.com/password",
      projectImage: barebloom_sm,
      technologies: [
        "Shopify Liquid",
        "JavaScript",
        "HTML/CSS",
        "Klaviyo",
        "Shopify APIs",
      ],
      users: 1200,
      productionUptime: "100%",
      overview:
        "Built a visually compelling and performance-optimized eCommerce store for a luxury skincare brand. Focused on mobile UX, fast load times, and integrations with Klaviyo and Instagram.",
      challenges: [
        "Custom theme development with flexible CMS sections",
        "Integration with marketing platforms like Klaviyo",
        "Optimizing performance with large product images",
        "Ensuring accessibility compliance",
      ],
      impact: {
        users: 1200,
        productionUptime: "100%",
        conversionRate: "2.5x increase",
        bounceRate: "40% decrease",
      },
    },
   
    {
      id: 9,
      title:  "Jewelery Brand Shopify Store",
      company: "Shopify",
      description:
        "Premium jewelry storefront with stunning product galleries, customer testimonials, and secure checkout enhancements.",
      status: "completed",
      featured: true,
      category: "Shopify",
      duration: "Jan 2024 - May 2024",
      client: "Aurora Gems",
      projectLink: "https://lushlocket.myshopify.com/password",
      projectImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop",
      technologies: [
        "Shopify Liquid",
        "Tailwind CSS",
        "JavaScript",
        "Shopify Plus",
        "ReCharge",
      ],
      users: 950,
      productionUptime: "99.9%",
      overview:
        "Created a luxurious online experience with high-resolution visuals, personalized gifting options, and subscription-based jewelry care packages.",
      challenges: [
        "Building interactive product zoom and 360° views",
        "Subscription integration with ReCharge",
        "Security enhancements for checkout flow",
        "Mobile-first UX for a high-end feel",
      ],
      impact: {
        users: 950,
        productionUptime: "99.9%",
        AOV: "15% increase",
        returnRate: "25% reduction",
      },
    },
    {
      id: 10,
      title: "Interactive Kids Toy Shopify Store",
      company: "Shopify",
      description:
        "An engaging, colorful Shopify storefront built to showcase educational toys and maximize parental trust and conversions.",
      status: "completed",
      featured: false,
      category: "Shopify",
      duration: "Mar 2024 - Jul 2024",
      client: "EduToys Inc.",
      projectLink: "https://playnest3.myshopify.com/password",
      projectImage: playnest_sm ,
      technologies: [
        "Shopify Liquid",
        "JavaScript",
        "CSS Animations",
        "Shopify Apps",
        "Google Analytics",
      ],
      users: 850,
      productionUptime: "99.8%",
      overview:
        "Focused on creating a playful UX with age filters, customer reviews, and a rewards system. Implemented real-time inventory sync and cart recovery tools.",
      challenges: [
        "Designing a playful yet performant theme",
        "Inventory syncing across bundles and kits",
        "Gamification and reward program integration",
        "Responsive design across tablet and mobile",
      ],
      impact: {
        users: 850,
        productionUptime: "99.8%",
        avgSessionTime: "30% increase",
        cartRecoveryRate: "45% improvement",
      },
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesFilter =
      selectedFilter === "All Projects" || project.category === selectedFilter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesFilter && matchesSearch;
  });

  const ProjectCard = ({ project }) => (
    <div
      className="project-card" id="projects"
      onClick={() => setSelectedProject(project)}
      style={{ cursor: "pointer" }}
    >
      {project.projectImage && (
        <div className="project-image-container">
          <img 
            src={project.projectImage} 
            alt={project.title}
            className="project-image"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <div className="project-image-overlay">
            <Image size={24} color="white" />
          </div>
        </div>
      )}
      
      <div className="project-card-content">
        <div className="project-icon">{project.company.charAt(0)}</div>

        <div className="company-label">{project.company}</div>

        <div className="project-card-header">
          <h3 className="project-title">{project.title}</h3>
          <div className="project-badges">
            {project.status === "completed" && (
              <span className="badge badge-completed">completed</span>
            )}
            {project.status === "in-progress" && (
              <span className="badge badge-progress">in progress</span>
            )}
          </div>
        </div>

        <p className="project-card-description">{project.description}</p>

        <div className="project-technologies">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="tech-badge more-tech">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
      </div>

      <div className="project-card-footer">
        <div className="project-client">
          <span className="client-indicator">●</span>
          <span>{project.client}</span>
        </div>
        <div className="project-meta">
          {project.featured && <span className="featured-badge">Featured</span>}
          <span className="project-year">2024</span>
        </div>
      </div>
    </div>
  );

  const ProjectDetail = ({ project, onClose }) => (
    <div className="project-detail-overlay">
      <div className="project-detail-modal">
        <div className="project-detail-header">
          <h2>{project.title}</h2>
          <div className="project-detail-actions">
            {project.projectLink && (
              <a 
                href={project.projectLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link-btn"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={18} />
                Visit Project
              </a>
            )}
            <button className="close-btn" onClick={onClose}>
              <X size={24} />
            </button>
          </div>
        </div>

        {project.projectImage && (
          <div className="project-detail-image">
            <img 
              src={project.projectImage} 
              alt={project.title}
              className="project-detail-img"
              onError={(e) => {
                e.target.parentElement.style.display = 'none';
              }}
            />
          </div>
        )}

        <p className="project-description">{project.description}</p>

        <div className="project-badges-detail">
          {project.status === "completed" && (
            <span className="badge badge-completed">completed</span>
          )}
          {project.status === "in-progress" && (
            <span className="badge badge-progress">in progress</span>
          )}
          {project.featured && (
            <span className="badge badge-featured">⭐ Featured</span>
          )}
        </div>

        <div className="project-detail-content">
          <div className="project-main-content">
            <div className="project-info-section">
              <div className="project-icon-large">
                {project.company.charAt(0)}
              </div>
              <div className="project-title-section">
                <h3>{project.title}</h3>
                <p className="company-name">{project.company}</p>
                <span className={`badge badge-${project.status === 'completed' ? 'completed' : 'progress'}`}>
                  {project.status}
                </span>
              </div>
            </div>

            <div className="section">
              <h4>Project Overview</h4>
              <p>{project.overview}</p>
            </div>

            <div className="section">
              <h4>Technologies Used</h4>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="section">
              <h4>Key Challenges</h4>
              <ul>
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="project-sidebar">
            <div className="project-details-card">
              <h4>Project Details</h4>

              <div className="detail-item">
                <Calendar size={20} />
                <div>
                  <strong>Duration</strong>
                  <p>{project.duration}</p>
                </div>
              </div>

              <div className="detail-item">
                <User size={20} />
                <div>
                  <strong>Client</strong>
                  <p>{project.client}</p>
                </div>
              </div>

              <div className="detail-item">
                <TrendingUp size={20} />
                <div>
                  <strong>Category</strong>
                  <p>{project.category}</p>
                </div>
              </div>

              {project.projectLink && (
                <div className="detail-item project-link-detail">
                  <ExternalLink size={20} />
                  <div>
                    <strong>Project Link</strong>
                    <a 
                      href={project.projectLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link-text"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Live Project
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="project-impact-card">
              <h4>Project Impact</h4>

              <div className="impact-item">
                <strong>Users</strong>
                <span className="impact-value">
                  {project.users.toLocaleString()}
                </span>
              </div>

              <div className="impact-item">
                <strong>Production Uptime</strong>
                <span className="impact-value">{project.productionUptime}</span>
              </div>

              {Object.entries(project.impact).map(([key, value]) => {
                if (key !== "users" && key !== "productionUptime") {
                  return (
                    <div key={key} className="impact-item">
                      <strong>
                        {key
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, (str) => str.toUpperCase())}
                      </strong>
                      <span className="impact-value">{value}</span>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="project-section" id="projects">
      <div className="filter-container">
        <div className="filter-buttons">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${selectedFilter === filter ? "active" : ""
                }`}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="search-container">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            className="search-input"
            placeholder="Search projects by title, description, technologies, or client"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div
          style={{ textAlign: "center", padding: "60px 20px", color: "#666" }}
        >
          <p>No projects found matching your search criteria.</p>
        </div>
      )}

      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Projects;
