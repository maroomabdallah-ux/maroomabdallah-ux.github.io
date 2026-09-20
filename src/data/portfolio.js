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

export const projects = [
  {
    number: '01', slug: 'career-pilot', title: 'CareerPilot', subtitle: 'AI-Powered Career Platform', kind: 'concept', monogram: 'CP', featured: true,
    description: "An intelligent career platform that turns a user's CV, preferences, and location into personalized real-world job opportunities.",
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
    number: '02', slug: 'mini-erp-ai-agent', title: 'Mini-ERP AI Agent', subtitle: 'Agentic ERP System', kind: 'agent', monogram: 'AI', featured: true,
    description: 'An intelligent ERP assistant built on a secure service layer, enabling role-aware interaction with ERP data and workflows without direct database access.',
    technologies: ['FastAPI', 'Python', 'PostgreSQL', 'React', 'AI Agents', 'Docker'],
    overview: 'The intelligent interface within the Mini-ERP ecosystem, presented separately to explain its agent architecture and security model.',
    problem: 'Operational data spans many modules, but giving an AI model unrestricted access to business data would create unacceptable security and control risks.',
    solution: 'A tool-driven assistant that works through approved backend services, honors role permissions, and keeps controlled actions auditable.',
    role: 'Agent workflow design, backend tool integration, access-control patterns, and conversational UX.',
    features: ['Controlled tool calling', 'Role-based access', 'ERP analytics', 'Secure API layer', 'Multilingual interaction', 'Conversation history'],
    approach: 'The agent never connects directly to the database. Explicit tools pass through the application service and authorization layers before reaching ERP data.',
    outcome: 'A practical exploration of bringing agentic AI into a real operational system without weakening its security boundaries.',
  },
  {
    number: '03', slug: 'mini-erp-system', title: 'Mini-ERP', subtitle: 'Full-Stack ERP System', featured: true,
    description: 'A modular ERP platform covering products, warehouses, purchasing, customers, quotations, sales, invoicing, payments, accounting, RBAC, and inventory workflows.',
    images: miniErpImages, imageAlt: 'Mini ERP business management platform dashboard', technologies: ['FastAPI', 'React', 'PostgreSQL', 'Docker', 'REST APIs'],
    overview: 'A connected full-stack platform for managing the central workflows of a modern business.',
    problem: 'Disconnected tools create repeated entry, inconsistent records, and poor visibility across inventory, purchasing, sales, and finance.',
    solution: 'A unified, role-aware system where business modules share reliable data and connected workflows.',
    role: 'Full-stack engineering, domain modeling, API design, interface development, and database architecture.',
    features: ['Products and warehouses', 'Purchasing and inventory', 'Customers and quotations', 'Sales and invoicing', 'Payments and accounting', 'Reporting and RBAC'],
    approach: 'The system uses modular business domains, REST APIs, relational data, containerized development, and authorization around sensitive operations.',
    outcome: 'A serious end-to-end engineering project that strengthened my understanding of transactional workflows and maintainable system architecture.',
  },
  {
    number: '04', slug: 'cartly', title: 'Cartly', subtitle: 'Full-Stack E-Commerce Platform',
    description: 'A modern shopping product with product discovery, cart workflows, secure purchasing, orders, and responsive customer experiences.',
    images: ['/projects/cartly.png', '/projects/cartly-products.png', '/projects/cartly-cart.png', '/projects/cartly-payment.png', '/projects/cartly-orders.png', '/projects/cartly-email.png'], imageAlt: 'Cartly e-commerce storefront', technologies: ['React', 'Python', 'FastAPI', 'Docker', 'PostgreSQL'],
    overview: 'A connected commerce experience spanning product discovery through purchase confirmation.', role: 'Full-stack product development.', features: ['Product browsing', 'Cart workflow', 'Payment flow', 'Order management', 'Email communication'], outcome: 'A practical study in stateful customer journeys and connected frontend/backend workflows.',
  },
  {
    number: '05', slug: 'skychain', title: 'SkyChain', subtitle: 'Blockchain E-Ticketing System',
    description: 'A flight-booking platform using blockchain technology and smart contracts to protect and manage digital tickets.', coverImage: '/projects/skychain.png',
    images: ['/projects/skychain-login.png', '/projects/skychain-signup.png', '/projects/skychain.png', '/projects/skychain-assistant.png', '/projects/skychain-assistant-chat.png', '/projects/skychain-flights-cards.png', '/projects/skychain-flights-list.png', '/projects/skychain-booking-options.png', '/projects/skychain-otp-email.png', '/projects/skychain-otp-verification.png', '/projects/skychain-payment.png', '/projects/skychain-tickets.png', '/projects/skychain-ticket-change.png', '/projects/skychain-change-status.png', '/projects/skychain-airline-add.png', '/projects/skychain-airline-flights.png', '/projects/skychain-airline-bookings.png', '/projects/skychain-change-requests.png', '/projects/skychain-change-request-detail.png', '/projects/skychain-admin.png', '/projects/skychain-verification.png', '/projects/skychain-verification-loading.png', '/projects/skychain-integrity.png', '/projects/skychain-integrity-mismatch.png'],
    imageAlt: 'SkyChain blockchain flight booking platform', technologies: ['Node.js', 'REST APIs', 'Blockchain', 'Smart Contracts', 'SQL'],
    overview: 'A digital flight-ticketing system spanning booking, verification, ticket changes, and airline administration.', role: 'Full-stack product and workflow development.', features: ['Flight booking', 'OTP verification', 'Digital tickets', 'Ticket change requests', 'Airline administration', 'Blockchain integrity checks'], outcome: 'A complex multi-role product exploring digital ticket integrity and end-to-end travel workflows.',
  },
]

export const experience = [
  { company: 'Ebtikar AI', role: 'Full-Stack Web Development Trainee', period: 'Jul 2026 — Present', status: 'Current', summary: 'Building an adaptable full-stack foundation where the technology stack is selected around each project rather than a single fixed language.', tags: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Agentic AI'] },
  { company: 'Adaptive TechSoft (ATS)', role: 'Java Web Development Trainee', period: 'May 2026 — Jul 2026', summary: 'Expanded from backend fundamentals into full-stack Java web development and database-driven enterprise applications.', tags: ['Java', 'JavaBeans', 'JSP', 'JSF', 'Oracle'] },
  { company: 'Acabes', role: 'Backend Software Engineering Intern', period: 'Sep 2025 — Jan 2026', summary: 'Built a strong backend engineering foundation through practical projects focused on object-oriented design, APIs, and scalable architecture.', tags: ['Java', 'Spring Boot', 'REST APIs', 'Microservices', 'MySQL'] },
]
