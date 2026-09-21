export const profile = {
  email: 'maroomabdallah@gmail.com', phone: '+962790026786', phoneLabel: '+962 79 002 6786',
  github: 'https://github.com/maroomabdallah-ux', linkedin: 'https://www.linkedin.com/in/maroom-abdalla', cv: '/Maroom_Abdalla_CV.pdf',
}

export const skills = [
  { title: 'AI & Agentic Systems', icon: 'sparkles', description: 'Intelligent, tool-enabled software grounded in real workflows.', items: ['OpenAI APIs', 'AI Agents', 'Agentic AI', 'Guardrails', 'LLM Integration', 'Prompt Engineering', 'RAG'] },
  { title: 'Backend', icon: 'server', description: 'Reliable services, clear domain logic, and APIs built to evolve.', items: ['FastAPI', 'Python', 'Java', 'Spring Boot', 'REST APIs', 'JWT', 'Microservices'] },
  { title: 'Frontend & Database', icon: 'layout', description: 'Responsive interfaces connected to practical, data-driven systems.', items: ['React', 'TypeScript', 'JavaScript', 'PostgreSQL', 'MySQL', 'Oracle'] },
  { title: 'Tools & Practices', icon: 'tools', description: 'The everyday toolkit behind repeatable development and delivery.', items: ['Docker', 'Git', 'GitHub', 'Postman', 'Swagger', 'Vite', 'Alembic'] },
]

const miniErpImages = ['/projects/mini-erp.png', '/projects/mini-erp-overview.png', '/projects/mini-erp-products.png', '/projects/mini-erp-suppliers.png', '/projects/mini-erp-inventory.png', '/projects/mini-erp-quotations.png', '/projects/mini-erp-sales-orders.png', '/projects/mini-erp-invoices.png', '/projects/mini-erp-accounting.png', '/projects/mini-erp-reports.png', '/projects/mini-erp-roles.png', '/projects/mini-erp-settings.png']

const careerPilotImages = [
  '/projects/career-pilot-landing.png',
  '/projects/career-pilot-signup.png',
  '/projects/career-pilot-profile-start.png',
  '/projects/career-pilot-cv-review.png',
  '/projects/career-pilot-skills.png',
  '/projects/career-pilot-dashboard.png',
  '/projects/career-pilot-experience.png',
  '/projects/career-pilot-ai-assistant.png',
  '/projects/career-pilot-resume-templates.png',
  '/projects/career-pilot-resume-ai-writer.png',
  '/projects/career-pilot-resume-designer.png',
  '/projects/career-pilot-resumes.png',
  '/projects/career-pilot-job-search.png',
  '/projects/career-pilot-application-prepare.png',
  '/projects/career-pilot-application-review.png',
  '/projects/career-pilot-applications.png',
  '/projects/career-pilot-roadmap.png',
  '/projects/career-pilot-roadmap-phases.png',
  '/projects/career-pilot-learning-library.png',
  '/projects/career-pilot-ai-usage.png',
  '/projects/career-pilot-ai-accounting.png',
]

export const projects = [
  {
    number: '01', slug: 'career-pilot', title: 'CareerPilot', subtitle: 'AI-Powered Career Platform', kind: 'concept', monogram: 'CP', featured: true,
    description: "An intelligent career platform that turns a user's CV, preferences, and location into personalized real-world job opportunities.",
    images: careerPilotImages, imageAlt: 'CareerPilot AI-powered career platform interface',
    technologies: ['AI / LLM', 'Job APIs', 'Intelligent Ranking', 'Backend Architecture'],
    overview: 'CareerPilot connects profile understanding with real job data to make career discovery more relevant, personal, and useful.',
    problem: 'Job discovery is noisy. Generic search results rarely account for a candidate’s actual experience, preferences, or location.',
    solution: 'A profile-aware recommendation flow that understands CV content, retrieves opportunities through an abstracted provider layer, and ranks results around the individual user.',
    role: 'AI engineering, backend system design, API integration, and product development.',
    features: ['CV and profile understanding', 'Location-aware recommendations', 'Real job listing retrieval', 'Multiple provider abstraction', 'Intelligent ranking', 'Usage and AI-consumption awareness'],
    approach: 'The system separates job-provider integrations from recommendation logic, allowing data sources to change without rewriting the product flow. Personalization and ranking sit behind controlled backend services.',
    outcome: 'A focused exploration of how AI understanding and production backend architecture can work together in a real user-facing product.',
  },
  {
    number: '02', slug: 'mini-erp', title: 'Mini ERP', subtitle: 'AI-Powered Business Management System', kind: 'agent', monogram: 'ERP', featured: true,
    description: 'A full-stack ERP platform that brings business operations together with an integrated AI agent for intelligent, conversational interaction.',
    images: miniErpImages, imageAlt: 'Mini ERP business management platform with its integrated AI agent',
    technologies: ['FastAPI', 'Python', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'AI Agents'],
    overview: 'A connected business management platform that unifies core ERP workflows with a secure, role-aware AI agent inside the same system.',
    problem: 'Disconnected business tools create repeated entry and limited visibility, while giving an AI model unrestricted access to operational data would introduce serious security and control risks.',
    solution: 'A unified ERP with shared business data and an integrated, tool-driven assistant that reaches supported operations only through approved application services and permissions.',
    architecture: 'A React and TypeScript interface connects to modular FastAPI services backed by PostgreSQL. Docker provides a consistent development environment, while REST APIs keep the frontend, business domains, and AI tools clearly separated.',
    agent: 'The conversational agent is part of the ERP experience. It uses explicit tools to retrieve supported product and customer information, surface business analytics, and interact with approved workflows.',
    security: 'Role-based permissions and guardrails are applied through the application service layer. The agent does not receive direct database access, so its requests remain subject to the same authorization boundaries as the rest of the ERP.',
    role: 'Full-stack engineering, domain modeling, API and database design, agent workflow integration, access-control patterns, and conversational UX.',
    features: ['Products, suppliers, and warehouses', 'Purchasing and inventory', 'Customers, quotations, and sales', 'Invoicing, payments, and accounting', 'Reporting and role-based access control', 'Integrated AI agent with controlled tool calling', 'ERP information retrieval and business analytics', 'Guardrails and secure application-service access'],
    approach: 'Modular business domains share relational data through REST APIs and containerized services. The integrated agent never connects directly to the database; its explicit tools pass through the same application service and authorization layers used by the ERP.',
    outcome: 'An end-to-end system demonstrating how transactional business workflows and agentic AI can coexist without weakening application security boundaries.',
  },
  {
    number: '03', slug: 'cartly', title: 'Cartly', subtitle: 'Full-Stack E-Commerce Platform',
    description: 'A modern shopping product with product discovery, cart workflows, secure purchasing, orders, and responsive customer experiences.',
    images: ['/projects/cartly.png', '/projects/cartly-products.png', '/projects/cartly-cart.png', '/projects/cartly-payment.png', '/projects/cartly-orders.png', '/projects/cartly-email.png'], imageAlt: 'Cartly e-commerce storefront', technologies: ['React', 'Python', 'FastAPI', 'Docker', 'PostgreSQL'],
    overview: 'A connected commerce experience spanning product discovery through purchase confirmation.', role: 'Full-stack product development.', features: ['Product browsing', 'Cart workflow', 'Payment flow', 'Order management', 'Email communication'], outcome: 'A practical study in stateful customer journeys and connected frontend/backend workflows.',
  },
  {
    number: '04', slug: 'skychain', title: 'SkyChain', subtitle: 'Blockchain E-Ticketing System',
    description: 'A flight-booking platform using blockchain technology and smart contracts to protect and manage digital tickets.', coverImage: '/projects/skychain.png',
    images: ['/projects/skychain.png', '/projects/skychain-login.png', '/projects/skychain-signup.png', '/projects/skychain-assistant.png', '/projects/skychain-assistant-chat.png', '/projects/skychain-flights-cards.png', '/projects/skychain-flights-list.png', '/projects/skychain-booking-options.png', '/projects/skychain-otp-email.png', '/projects/skychain-otp-verification.png', '/projects/skychain-payment.png', '/projects/skychain-tickets.png', '/projects/skychain-ticket-change.png', '/projects/skychain-change-status.png', '/projects/skychain-airline-add.png', '/projects/skychain-airline-flights.png', '/projects/skychain-airline-bookings.png', '/projects/skychain-change-requests.png', '/projects/skychain-change-request-detail.png', '/projects/skychain-admin.png', '/projects/skychain-verification.png', '/projects/skychain-verification-loading.png', '/projects/skychain-integrity.png', '/projects/skychain-integrity-mismatch.png'],
    imageAlt: 'SkyChain blockchain flight booking platform', technologies: ['Node.js', 'REST APIs', 'Blockchain', 'Smart Contracts', 'SQL'],
    overview: 'A digital flight-ticketing system spanning booking, verification, ticket changes, and airline administration.', role: 'Full-stack product and workflow development.', features: ['Flight booking', 'OTP verification', 'Digital tickets', 'Ticket change requests', 'Airline administration', 'Blockchain integrity checks'], outcome: 'A complex multi-role product exploring digital ticket integrity and end-to-end travel workflows.',
  },
]

export const experience = [
  { company: 'Ebtikar AI', role: 'Full-Stack Web Development Trainee', period: 'Jul 2026 — Present', status: 'Current', summary: 'Building an adaptable full-stack foundation where the technology stack is selected around each project rather than a single fixed language.', tags: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Agentic AI'] },
  { company: 'Adaptive TechSoft (ATS)', role: 'Java Web Development Trainee', period: 'May 2026 — Jul 2026', summary: 'Expanded from backend fundamentals into full-stack Java web development and database-driven enterprise applications.', tags: ['Java', 'JavaBeans', 'JSP', 'JSF', 'Oracle'] },
  { company: 'Acabes', role: 'Backend Software Engineering Intern', period: 'Sep 2025 — Jan 2026', summary: 'Built a strong backend engineering foundation through practical projects focused on object-oriented design, APIs, and scalable architecture.', tags: ['Java', 'Spring Boot', 'REST APIs', 'Microservices', 'MySQL'] },
]
