const PROJECTS = Object.freeze([
  {
    id: 'serviceforge',
    slug: 'serviceforge',
    title: 'ServiceForge',
    subtitle: 'Enterprise service management for modern SaaS',
    category: 'Enterprise Platform',
    status: 'Production',
    statusType: 'active',
    featured: true,
    year: 2024,
    description: 'ServiceForge is a comprehensive enterprise service management platform designed for multi-tenant SaaS environments. It provides workflow orchestration, role-based access control, event-driven architecture, and deep observability across distributed microservices. Built to handle thousands of concurrent tenants, ServiceForge enables organizations to deploy, manage, and scale their service ecosystems with confidence and operational clarity.',
    shortDescription: 'Enterprise service management platform for multi-tenant SaaS with workflow orchestration and RBAC.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
    architecture: {
      Frontend: 'React with TypeScript featuring a component library built on Radix UI, real-time dashboards with WebSocket subscriptions, and a dynamic form engine for tenant-configurable workflows.',
      Backend: 'Node.js microservices using Fastify with schema-based validation, event-driven messaging via RabbitMQ, and a centralized orchestration engine for cross-service workflows.',
      Database: 'PostgreSQL with row-level security for multi-tenant isolation, Redis for session management and caching, and partitioned tables for high-volume audit logs.',
      Cloud: 'Deployed on AWS ECS with Fargate for serverless container orchestration, CloudFront CDN, S3 for artifact storage, and CloudWatch for full observability.',
      Security: 'OAuth 2.0 and OIDC authentication, RBAC with attribute-based policy evaluation, AES-256 encryption at rest, TLS 1.3 in transit, and comprehensive audit logging.',
      Integrations: 'REST and GraphQL APIs, webhook event delivery with retry logic, Slack and Microsoft Teams notifications, and SAML-based SSO for enterprise identity providers.',
      Scalability: 'Horizontal auto-scaling based on request throughput and queue depth, read replicas for PostgreSQL, Redis Cluster for distributed caching, and partitioned event streams.'
    },
    tags: ['Enterprise', 'API', 'Workflow', 'RBAC', 'Security', 'Cloud'],
    coverImage: 'projects/serviceforge/images/cover.webp',
    heroImage: 'projects/serviceforge/images/hero.webp',
    gallery: [
      { src: 'projects/serviceforge/images/gallery-01.webp', alt: 'ServiceForge dashboard with real-time metrics and tenant overview', type: 'Desktop' },
      { src: 'projects/serviceforge/images/gallery-02.webp', alt: 'Workflow orchestration canvas with visual node editor', type: 'Screenshot' },
      { src: 'projects/serviceforge/images/gallery-03.webp', alt: 'Multi-tenant architecture diagram showing isolation boundaries', type: 'Diagram' }
    ],
    github: 'https://github.com/pycriador/serviceforge',
    demo: '',
    documentation: '',
    overview: {
      objective: 'Build a scalable enterprise service management platform that enables organizations to orchestrate complex multi-tenant workflows with fine-grained access control and real-time observability.',
      problem: 'Existing service management tools lack native multi-tenant isolation, require extensive customization for workflow orchestration, and fail to provide unified observability across distributed service ecosystems.',
      solution: 'Designed a microservices architecture with event-driven communication, implemented row-level security in PostgreSQL for tenant isolation, built a visual workflow orchestration engine, and integrated comprehensive RBAC with attribute-based policies.',
      results: 'Successfully deployed across multiple enterprise environments handling thousands of concurrent tenants with sub-100ms response times, 99.99% uptime, and full audit trail compliance.'
    },
    timeline: [
      { date: 'Q1 2024', title: 'Architecture Design', description: 'Defined microservices architecture, multi-tenant data model, and event-driven communication patterns.' },
      { date: 'Q2 2024', title: 'Core Platform', description: 'Implemented tenant management, RBAC engine, and workflow orchestration core services.' },
      { date: 'Q3 2024', title: 'Integrations & Observability', description: 'Built SSO integration, webhook delivery system, and real-time monitoring dashboards.' },
      { date: 'Q4 2024', title: 'Production Launch', description: 'Completed security audit, performance optimization, and deployed to production with enterprise clients.' }
    ],
    roadmap: [
      { title: 'Multi-tenant workflow engine', status: 'completed' },
      { title: 'RBAC with attribute-based policies', status: 'completed' },
      { title: 'Real-time observability dashboard', status: 'completed' },
      { title: 'Custom plugin marketplace', status: 'in-progress' },
      { title: 'AI-assisted workflow optimization', status: 'planned' }
    ],
    challenges: [
      'Maintaining strict data isolation between tenants while sharing underlying infrastructure efficiently',
      'Designing a workflow orchestration engine flexible enough for diverse enterprise use cases without sacrificing performance',
      'Achieving sub-100ms latency for authorization checks across distributed microservices'
    ],
    solutions: [
      'Implemented PostgreSQL row-level security with dynamic policy generation and automated tenant context propagation across all services',
      'Built a DAG-based workflow engine with pluggable action nodes, conditional branching, and compensation logic for saga patterns',
      'Developed a distributed policy cache in Redis with invalidation via event streaming, ensuring authorization decisions are served from edge nodes'
    ]
  },
  {
    id: 'specforge',
    slug: 'specforge',
    title: 'SpecForge',
    subtitle: 'Automated API specification and documentation generator',
    category: 'Developer Tool',
    status: 'Production',
    statusType: 'active',
    featured: true,
    year: 2024,
    description: 'SpecForge is an automated API specification and documentation generator that produces type-safe SDKs and comprehensive OpenAPI documentation from source code analysis. By parsing TypeScript and Go codebases using AST analysis, SpecForge extracts type information, route definitions, and validation schemas to generate accurate, always-up-to-date API specifications without manual annotation overhead.',
    shortDescription: 'Automated API specification and documentation generator with type-safe SDK output.',
    technologies: ['TypeScript', 'Go', 'OpenAPI', 'AST Parsing', 'Docker', 'GitHub Actions'],
    architecture: {
      Frontend: 'A documentation viewer built with Next.js featuring interactive API explorer, live request testing, and versioned documentation with diff visualization between spec versions.',
      Backend: 'Go-based AST parser for TypeScript and TypeScript-based orchestrator managing the pipeline from code analysis to spec generation, with a caching layer for incremental updates.',
      Database: 'SQLite for local spec caching and metadata storage, with optional PostgreSQL backend for team-based deployments with shared spec history.',
      Cloud: 'Docker containers for CI/CD integration, GitHub Actions marketplace for automated spec generation on every push, and optional cloud hosting for published documentation sites.',
      Security: 'Scoped repository access via GitHub tokens, no source code leaves the build environment during parsing, and generated specs can be published behind authentication.',
      Integrations: 'GitHub Actions for CI/CD automation, npm and PyPI package publishing for generated SDKs, Swagger UI and Redoc rendering, and Slack notifications for spec drift detection.',
      Scalability: 'Incremental parsing with AST diff caching, parallel processing of independent modules, and support for monorepo structures with cross-package type resolution.'
    },
    tags: ['Developer Tool', 'API', 'Automation', 'Documentation', 'CI/CD'],
    coverImage: 'projects/specforge/images/cover.webp',
    heroImage: 'projects/specforge/images/hero.webp',
    gallery: [
      { src: 'projects/specforge/images/gallery-01.webp', alt: 'SpecForge CLI output showing generated OpenAPI specification', type: 'Screenshot' },
      { src: 'projects/specforge/images/gallery-02.webp', alt: 'Interactive API documentation viewer with live testing', type: 'Desktop' },
      { src: 'projects/specforge/images/gallery-03.webp', alt: 'AST parsing pipeline diagram showing code-to-spec flow', type: 'Diagram' }
    ],
    github: 'https://github.com/pycriador/specforge',
    demo: '',
    documentation: '',
    overview: {
      objective: 'Eliminate the gap between API source code and documentation by automatically generating accurate, type-safe specifications and SDKs from codebase analysis.',
      problem: 'API documentation frequently falls out of sync with implementation, manual OpenAPI annotation is error-prone and tedious, and generating type-safe SDKs requires maintaining separate type definitions.',
      solution: 'Built an AST-based parser that analyzes TypeScript and Go source code to extract route definitions, type information, and validation rules, then generates OpenAPI specifications and type-safe client SDKs in multiple languages.',
      results: 'Reduced documentation maintenance overhead by 90%, eliminated SDK type mismatches, and integrated into CI/CD pipelines to ensure every API change is automatically reflected in published specs.'
    },
    timeline: [
      { date: 'Q1 2024', title: 'Parser Core', description: 'Developed the TypeScript AST parser with type extraction and OpenAPI schema generation.' },
      { date: 'Q2 2024', title: 'Go Support & SDK Generation', description: 'Added Go AST parsing and implemented multi-language SDK generation pipeline.' },
      { date: 'Q3 2024', title: 'CI/CD Integration', description: 'Built GitHub Actions integration, incremental caching, and documentation viewer.' },
      { date: 'Q4 2024', title: 'Stabilization & Release', description: 'Completed edge case handling, published to GitHub Actions marketplace, and open-sourced.' }
    ],
    roadmap: [
      { title: 'TypeScript AST parser', status: 'completed' },
      { title: 'Go AST parser', status: 'completed' },
      { title: 'Multi-language SDK generation', status: 'completed' },
      { title: 'GitHub Actions marketplace listing', status: 'completed' },
      { title: 'Python and Rust language support', status: 'in-progress' },
      { title: 'Visual API diff viewer', status: 'planned' }
    ],
    challenges: [
      'Accurately resolving complex TypeScript generic types and union types through the AST without losing fidelity',
      'Handling monorepo structures with cross-package dependencies and shared type definitions',
      'Ensuring generated specifications remain backward-compatible with existing client SDKs'
    ],
    solutions: [
      'Implemented a custom type resolution engine that walks the TypeScript compiler API to flatten generics and resolve conditional types into concrete OpenAPI schemas',
      'Built a workspace-aware parser that indexes package.json references and tsconfig paths to resolve cross-package type imports',
      'Added a spec diffing engine that compares generated output against the previous version and flags breaking changes with migration guidance'
    ]
  },
  {
    id: 'knowledge-platform',
    slug: 'knowledge-platform',
    title: 'Knowledge Platform',
    subtitle: 'Centralized technical knowledge base',
    category: 'Enterprise Knowledge Management',
    status: 'In Development',
    statusType: 'warning',
    featured: false,
    year: 2026,
    description: 'Knowledge Platform is an enterprise knowledge management platform that centralizes technical knowledge — documentation, procedures, manuals, equipment catalogs, and solution articles — into a connected relational network. It combines versioned content with semantic search, an AI assistant grounded in approved sources (RAG), and complete catalog governance for equipment, models, firmware, and drivers, so every answer is traceable and always up to date.',
    shortDescription: 'Centralized technical knowledge base with semantic search, AI assistant, and relational catalogs.',
    technologies: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'REST APIs', 'Workflow', 'RLS', 'RBAC', 'Versioning', 'Webhooks', 'I18n', 'Realtime'],
    architecture: {
      Frontend: 'React interface with a Markdown editor and live preview, semantic search bar, AI assistant panel, equipment catalog views, and an admin console for governance and approval flows.',
      Backend: 'TypeScript services orchestrating content versioning, a relational knowledge engine that links documents, assets, and procedures, and an AI layer for semantic search and RAG-based Q&A.',
      Database: 'PostgreSQL with row-level security for multi-tenant isolation, versioned tables for documents and revisions, and an immutable audit trail for approvals and content changes.',
      Cloud: 'Supabase for managed authentication, database, storage, and realtime updates, with webhook delivery for external systems and scheduled review reminders.',
      Security: 'RBAC with granular permissions per module and content type, role-based approval gates before publication, and complete audit trails for every revision.',
      Integrations: 'REST API for external systems, webhook notifications for content lifecycle events, i18n-ready content model, and realtime updates across sessions.',
      Scalability: 'Structured relational data with indexed catalog lookups, full-text and vector search across large document collections, and paginated list views for catalogs and search results.'
    },
    tags: ['Enterprise', 'Knowledge Base', 'Documentation', 'AI', 'Search', 'Governance', 'RAG'],
    coverImage: 'projects/knowledge-platform/images/cover.webp',
    heroImage: 'projects/knowledge-platform/images/hero.webp',
    gallery: [
      { src: 'projects/knowledge-platform/images/gallery-01.webp', alt: 'Knowledge base dashboard with document and activity overview', type: 'Desktop' },
      { src: 'projects/knowledge-platform/images/gallery-02.webp', alt: 'Semantic search and AI assistant returning answers with cited sources', type: 'Screenshot' },
      { src: 'projects/knowledge-platform/images/gallery-03.webp', alt: 'Knowledge relationships flow from equipment to solution articles', type: 'Diagram' }
    ],
    github: 'https://github.com/pycriador/knowledge-platform',
    demo: '',
    documentation: '',
    overview: {
      objective: 'Centralize technical knowledge into a connected relational network where documents, equipment, procedures, and solutions are versioned, governed, and findable through semantic search and an AI assistant.',
      problem: 'Technical knowledge is scattered across network folders, spreadsheets, and chat messages. Manuals and procedures become outdated, and locating the right, approved answer takes time across multiple systems.',
      solution: 'Built a unified platform with versioned content, an equipment and model catalog, a relational knowledge engine linking every item, and a semantic search plus RAG assistant that answers citing approved sources.',
      results: 'Connects 500+ documents, 100+ procedures, and 1000+ related items in one network, with traceable versions, role-based approval, and answers grounded in audited content.'
    },
    timeline: [
      { date: 'P1 2026', title: 'Knowledge Core', description: 'Documentation module with Markdown editor, versioning, and the equipment and model catalog foundation.' },
      { date: 'P2 2026', title: 'Procedures & Catalog', description: 'Procedures with checklists and responsible parties, plus firmware, driver, manual, and electrical diagram modules.' },
      { date: 'P3 2026', title: 'Relationships & Governance', description: 'Relational engine linking assets to documents, approval workflows, RBAC, RLS, and the audit trail.' },
      { date: 'P4 2026', title: 'AI Intelligence', description: 'Semantic search and the RAG assistant answering with cited, approved sources.' },
      { date: 'P5 2027', title: 'Enterprise Collaboration', description: 'Realtime collaboration, i18n, webhooks, API-first distribution, and ecosystem integrations.' }
    ],
    roadmap: [
      { title: 'Documentation and versioning', status: 'completed' },
      { title: 'Equipment and model catalog', status: 'completed' },
      { title: 'Knowledge relationships engine', status: 'completed' },
      { title: 'Semantic search and AI assistant', status: 'in-progress' },
      { title: 'Approval workflows and RBAC', status: 'in-progress' },
      { title: 'Enterprise collaboration and i18n', status: 'planned' }
    ],
    challenges: [
      'Keeping technical content versioned and approved without creating a slow, bureaucratic publishing flow',
      'Ensuring the AI assistant only answers from approved, current sources so responses stay compliant',
      'Modeling the many relationships between equipment, firmware, drivers, manuals, and procedures without duplicating content'
    ],
    solutions: [
      'Designed a lightweight revision and approval flow with role-based gates, draft states, and a full audit trail for every change',
      'Implemented RAG grounded exclusively on published documents with citation links and automatic invalidations when sources change',
      'Built a relational knowledge model where each item references the others, keeping a single source of truth with many connections'
    ]
  },
  {
    id: 'dataforge',
    slug: 'dataforge',
    title: 'DataForge',
    subtitle: 'Governed spreadsheet & data integration platform',
    category: 'Enterprise Data Platform',
    status: 'In Development',
    statusType: 'warning',
    featured: true,
    year: 2026,
    description: 'DataForge is an enterprise data governance and integration platform that transforms spreadsheets, files, and multiple data sources into governed corporate assets. It eliminates manual data handling, reduces inconsistencies, and creates standardized flows for import, validation, transformation, audit, and secure sharing. Built for organizations that need to integrate data from different systems while maintaining traceability, quality, and compliance across the entire processing lifecycle.',
    shortDescription: 'Enterprise data governance and integration platform for governed spreadsheets and data pipelines.',
    technologies: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'REST APIs', 'Workflow', 'Business Rules', 'CSV', 'Excel', 'JSON', 'XML'],
    architecture: {
      Frontend: 'React interface with import wizards, a visual DE-PARA mapping assistant, rule editors, approval flows, and real-time monitoring dashboards.',
      Backend: 'TypeScript services orchestrating the import pipeline: parsing engines for CSV, Excel, JSON, and XML, a validation engine with isolated error reporting, and a declarative transformation engine.',
      Database: 'PostgreSQL with row-level security for multi-tenant isolation, versioned tables for import history, and an immutable audit trail built on append-only event records.',
      Cloud: 'Supabase for managed authentication, database, and storage, with scheduled processing jobs and webhook delivery for downstream integrations.',
      Security: 'RBAC with granular permissions per module and field, encrypted storage for files and versions, and complete audit trails for every operation.',
      Integrations: 'REST API integration with pagination and authentication, webhook delivery, connectors for PostgreSQL, MySQL, MariaDB, SQLite, SQL Server, and cloud sources like Supabase.',
      Scalability: 'Segmented import processing for large files, queue-based scheduling for recurring loads, and read-optimized reporting views built on governed, validated data.'
    },
    tags: ['Enterprise', 'Data', 'Governance', 'Integration', 'Automation', 'Analytics'],
    coverImage: 'projects/dataforge/images/cover.webp',
    heroImage: 'projects/dataforge/images/hero.webp',
    gallery: [
      { src: 'projects/dataforge/images/gallery-01.webp', alt: 'DataForge dashboard with data quality and import metrics', type: 'Desktop' },
      { src: 'projects/dataforge/images/gallery-02.webp', alt: 'Visual DE-PARA mapping assistant connecting source columns to target fields', type: 'Screenshot' },
      { src: 'projects/dataforge/images/gallery-03.webp', alt: 'Data processing pipeline diagram from source to audit', type: 'Diagram' }
    ],
    github: 'https://github.com/pycriador/dataforge',
    demo: '',
    documentation: '',
    overview: {
      objective: 'Turn spreadsheets, files, and fragmented data sources into governed corporate assets with standardized flows for import, validation, transformation, audit, and secure sharing.',
      problem: 'Organizations still rely heavily on distributed spreadsheets and manual data handling, producing inconsistent records, rework, and no auditability across finance, HR, logistics, and operations.',
      solution: 'Built a governed platform with native connectors, DE-PARA mapping, a validation and business rules engine, approval workflows, and an immutable audit service that centralizes and automates the whole data lifecycle.',
      results: 'Standardizes data intake across teams, reduces manual reconciliation, enforces quality before persistence, and provides full traceability for compliance-ready reporting.'
    },
    timeline: [
      { date: 'Q1 2026', title: 'Core Platform', description: 'Built Data Import, Spreadsheet Processing, and the DE-PARA mapping assistant on a multi-tenant foundation.' },
      { date: 'Q2 2026', title: 'Processing Engine', description: 'Implemented Validation Engine, Transformation Engine, Business Rules, and error isolation for large files.' },
      { date: 'Q3 2026', title: 'Workflow & Governance', description: 'Added Approval Flow, Audit Platform, RBAC, scheduling, and the export center.' },
      { date: 'Q4 2026', title: 'Advanced Integrations', description: 'Expanded connectors, REST/webhook delivery, monitoring dashboards, and reporting.' }
    ],
    roadmap: [
      { title: 'Core Platform with Data Import', status: 'completed' },
      { title: 'Spreadsheet Processing and DE-PARA Mapping', status: 'completed' },
      { title: 'Validation and Transformation Engine', status: 'completed' },
      { title: 'Workflow and Approval Flow', status: 'in-progress' },
      { title: 'Audit Platform and RBAC', status: 'in-progress' },
      { title: 'Advanced Integrations and AI-assisted mapping', status: 'planned' }
    ],
    challenges: [
      'Handling the wide variety of spreadsheet formats, encodings, and layouts that arrive from different business areas',
      'Keeping quality and compliance guarantees when data flows through validation, transformation, and approval stages',
      'Scaling governed import processing for large files without blocking the operational interface'
    ],
    solutions: [
      'Built a unified import engine with automatic delimiter, encoding, and schema detection plus a DE-PARA assistant that normalizes any source to the corporate model',
      'Designed an approval-gated pipeline where data is validated and rule-checked before persistence, with an immutable audit trail capturing every stage',
      'Implemented segmented, queue-based processing so large imports run in the background with progress, while dashboards surface exceptions in real time'
    ]
  },
  {
    id: 'people-identity-hub',
    slug: 'people-identity-hub',
    title: 'People Identity Hub',
    subtitle: 'Identity and access management with SSO and MFA',
    category: 'Identity',
    status: 'Concept',
    statusType: 'info',
    featured: false,
    year: 2025,
    description: 'People Identity Hub is a modern identity and access management platform that provides single sign-on, multi-factor authentication, and comprehensive identity lifecycle management. Designed for organizations managing thousands of users across multiple applications, it centralizes authentication policies, enforces security compliance, and automates provisioning and deprovisioning workflows tied to HR events.',
    shortDescription: 'Identity and access management platform with SSO, MFA, and lifecycle management.',
    technologies: ['Go', 'React', 'PostgreSQL', 'Redis', 'OAuth 2.0', 'SAML', 'LDAP'],
    architecture: {
      Frontend: 'React admin console with user management dashboards, self-service password reset and MFA enrollment flows, and a branding engine for customizable login pages per application.',
      Backend: 'Go high-performance authentication service handling OAuth 2.0 and SAML flows, a policy engine for access decisions, and a workflow engine for identity lifecycle automation.',
      Database: 'PostgreSQL for identity store and audit logs, Redis for session management and token caching, and LDAP connector for syncing with existing directory services.',
      Cloud: 'Kubernetes deployment with Helm charts, PostgreSQL and Redis managed services, and cloud HSM integration for cryptographic key management.',
      Security: 'FIDO2/WebAuthn passwordless authentication, hardware token MFA support, encrypted audit logs, and compliance with SOC 2 and GDPR requirements.',
      Integrations: 'SCIM 2.0 for automated provisioning, SAML 2.0 and OIDC for SSO, LDAP and Active Directory sync, and webhook-based lifecycle event notifications.',
      Scalability: 'Stateless authentication nodes behind a load balancer, distributed session storage in Redis Cluster, and batch identity sync processing with configurable concurrency limits.'
    },
    tags: ['Identity', 'Security', 'Enterprise', 'RBAC', 'Authentication', 'SSO'],
    coverImage: 'projects/people-identity-hub/images/cover.webp',
    heroImage: 'projects/people-identity-hub/images/hero.webp',
    gallery: [
      { src: 'projects/people-identity-hub/images/gallery-01.webp', alt: 'Identity management console with user overview', type: 'Desktop' },
      { src: 'projects/people-identity-hub/images/gallery-02.webp', alt: 'SSO configuration wizard with protocol selection', type: 'Screenshot' },
      { src: 'projects/people-identity-hub/images/gallery-03.webp', alt: 'Identity lifecycle automation flow diagram', type: 'Diagram' }
    ],
    github: 'https://github.com/pycriador/people-identity-hub',
    demo: '',
    documentation: '',
    overview: {
      objective: 'Create a centralized identity platform that simplifies authentication, enforces security policies, and automates identity lifecycle management across enterprise application ecosystems.',
      problem: 'Organizations manage identities across dozens of applications with inconsistent authentication policies, manual provisioning processes, and no unified view of user access across the organization.',
      solution: 'Designed a Go-based authentication service supporting OAuth 2.0, SAML, and OIDC, with a policy engine for access decisions and SCIM-based automated provisioning tied to HR system events.',
      results: 'Concept architecture achieves sub-5ms authentication latency at scale, supports integration with 50+ application types, and reduces manual provisioning time from hours to seconds.'
    },
    timeline: [
      { date: 'Q1 2025', title: 'Concept & Design', description: 'Defined architecture, threat model, and protocol support matrix for the identity platform.' },
      { date: 'Q2 2025', title: 'Auth Core', description: 'Implement core OAuth 2.0 and OIDC provider with token management and session handling.' },
      { date: 'Q3 2025', title: 'SSO & MFA', description: 'Build SAML SSO integration, FIDO2/WebAuthn MFA, and self-service enrollment flows.' },
      { date: 'Q4 2025', title: 'Lifecycle & Launch', description: 'Implement SCIM provisioning, HR event integration, and complete compliance documentation.' }
    ],
    roadmap: [
      { title: 'OAuth 2.0 and OIDC provider', status: 'planned' },
      { title: 'SAML 2.0 SSO integration', status: 'planned' },
      { title: 'FIDO2/WebAuthn MFA', status: 'planned' },
      { title: 'SCIM 2.0 provisioning', status: 'planned' },
      { title: 'LDAP and AD sync connector', status: 'planned' }
    ],
    challenges: [
      'Implementing a protocol-agnostic authentication core that handles OAuth 2.0, SAML, and OIDC without duplicating security-critical logic',
      'Ensuring FIDO2/WebAuthn compatibility across the wide variety of browsers and authenticator devices in enterprise environments',
      'Designing lifecycle automation that correctly handles complex HR events like transfers, leaves, and contractor transitions'
    ],
    solutions: [
      'Built a plugin-based protocol handler architecture where each protocol implements a common interface, sharing token management and session infrastructure',
      'Implemented a device capability detection layer with progressive enhancement, falling back to supported authentication methods per device profile',
      'Created a state machine-based lifecycle engine with configurable transition rules, approval workflows, and rollback capabilities for complex identity events'
    ]
  },
  {
    id: 'clauseforge',
    slug: 'clauseforge',
    title: 'ClauseForge',
    subtitle: 'Legal clause management and document automation',
    category: 'Document Management',
    status: 'Beta',
    statusType: 'info',
    featured: false,
    year: 2024,
    description: 'ClauseForge is a legal clause management and document automation platform that helps legal teams create, manage, and assemble contract clauses with AI-powered suggestions. It provides a clause library with version control, conditional logic for dynamic document generation, and integration with legal review workflows to streamline contract creation and reduce turnaround time.',
    shortDescription: 'Legal clause management and document automation platform.',
    technologies: ['TypeScript', 'Python', 'PostgreSQL', 'OpenAI', 'React', 'Docker'],
    architecture: {
      Frontend: 'React rich text editor with legal-specific formatting, clause insertion sidebar with drag-and-drop, real-time collaboration with operational transforms, and a document preview panel with PDF rendering.',
      Backend: 'TypeScript NestJS API handling clause CRUD, document assembly engine, and Python microservice for AI-powered clause analysis and suggestion generation using OpenAI.',
      Database: 'PostgreSQL with full-text search for clause retrieval, JSONB for flexible clause metadata and conditional logic definitions, and Redis for collaboration session state.',
      Cloud: 'Docker Compose deployment with Nginx reverse proxy, S3 for generated document storage, and background job processing for PDF generation and AI analysis.',
      Security: 'Role-based access with legal team hierarchies, clause-level permissions, encrypted document storage, and comprehensive audit trails for compliance.',
      Integrations: 'DOCX and PDF generation via LibreOffice, email notifications for review workflows, webhook integration with legal management systems, and OpenAI API for clause risk analysis.',
      Scalability: 'Background document assembly queue with priority levels, clause library caching for frequent access patterns, and connection pooling for concurrent editing sessions.'
    },
    tags: ['Document Management', 'AI', 'Enterprise', 'Legal', 'Automation', 'API'],
    coverImage: 'projects/clauseforge/images/cover.webp',
    heroImage: 'projects/clauseforge/images/hero.webp',
    gallery: [
      { src: 'projects/clauseforge/images/gallery-01.webp', alt: 'Clause library with version history and metadata', type: 'Desktop' },
      { src: 'projects/clauseforge/images/gallery-02.webp', alt: 'Document assembly interface with conditional clauses', type: 'Screenshot' },
      { src: 'projects/clauseforge/images/gallery-03.webp', alt: 'AI clause analysis showing risk assessment results', type: 'UI' }
    ],
    github: 'https://github.com/pycriador/clauseforge',
    demo: '',
    documentation: '',
    overview: {
      objective: 'Streamline legal document creation by providing a structured clause management system with AI-powered analysis and automated assembly capabilities.',
      problem: 'Legal teams spend excessive time searching for approved clauses, manually assembling contracts, and reviewing documents for risk and compliance issues, leading to slow turnaround and inconsistent language.',
      solution: 'Built a clause library with full-text search and version control, implemented a document assembly engine with conditional logic and variable substitution, and integrated OpenAI for clause risk analysis and alternative suggestions.',
      results: 'Beta users report 60% reduction in contract assembly time, 40% fewer review cycles due to pre-approved clause content, and improved consistency across contract portfolios.'
    },
    timeline: [
      { date: 'Q1 2024', title: 'Clause Engine', description: 'Built clause library with version control, full-text search, and metadata management.' },
      { date: 'Q2 2024', title: 'Document Assembly', description: 'Implemented template-based document assembly with conditional logic and variable substitution.' },
      { date: 'Q3 2024', title: 'AI Integration', description: 'Integrated OpenAI for clause risk analysis, alternative suggestions, and plain-language summaries.' },
      { date: 'Q4 2024', title: 'Beta Release', description: 'Launched beta with collaborative editing, review workflows, and PDF generation.' }
    ],
    roadmap: [
      { title: 'Clause library with version control', status: 'completed' },
      { title: 'Document assembly engine', status: 'completed' },
      { title: 'AI-powered clause analysis', status: 'completed' },
      { title: 'Real-time collaborative editing', status: 'in-progress' },
      { title: 'E-signature integration', status: 'planned' },
      { title: 'Multi-language clause support', status: 'planned' }
    ],
    challenges: [
      'Handling complex conditional clause logic that must resolve correctly across nested document templates',
      'Ensuring AI-generated clause suggestions maintain legal accuracy and do not introduce compliance risks',
      'Supporting real-time collaborative editing on legal documents where precision of changes is critical'
    ],
    solutions: [
      'Built a custom expression evaluator with a sandboxed execution context that resolves conditional logic deterministically and validates all variable references before assembly',
      'Implemented a two-layer AI analysis where OpenAI generates suggestions and a rule-based validator checks them against a configurable compliance policy before presenting to users',
      'Used operational transforms with change attribution tracking so each edit in a collaborative session is attributed to a specific user with full revision history'
    ]
  },
  {
    id: 'metadata-platform',
    slug: 'metadata-platform',
    title: 'Metadata Platform',
    subtitle: 'Metadata management and data catalog for governance',
    category: 'Metadata',
    status: 'Production',
    statusType: 'active',
    featured: false,
    year: 2023,
    description: 'Metadata Platform is a metadata management and data catalog platform for enterprise data governance. It provides automated metadata discovery, data lineage tracking, quality scoring, and a searchable catalog that helps data teams understand, trust, and comply with data governance policies across the organization.',
    shortDescription: 'Metadata management and data catalog platform for enterprise data governance.',
    technologies: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Elasticsearch', 'Docker'],
    architecture: {
      Frontend: 'React catalog interface with faceted search, data lineage visualization using D3.js, quality score dashboards, and a metadata editor with schema comparison views.',
      Backend: 'FastAPI services for metadata CRUD, automated discovery connectors, Elasticsearch indexing for search, and a lineage computation engine that processes metadata change events.',
      Database: 'PostgreSQL for metadata storage with JSONB for flexible attribute schemas, Elasticsearch for full-text search and faceted queries, and Redis for search result caching.',
      Cloud: 'Docker deployment with Elasticsearch cluster, PostgreSQL primary-replica setup, and scheduled discovery jobs running as containerized workers.',
      Security: 'SSO integration for authentication, column-level access controls for sensitive metadata, audit logging of all catalog changes, and API token management for programmatic access.',
      Integrations: 'Database introspection connectors for PostgreSQL, MySQL, and Snowflake, Airflow integration for pipeline lineage, and Slack notifications for metadata change alerts.',
      Scalability: 'Elasticsearch sharding for catalog search at scale, incremental metadata discovery with change detection, and background lineage computation with configurable processing windows.'
    },
    tags: ['Metadata', 'Enterprise', 'Data Governance', 'API', 'Catalog', 'Cloud'],
    coverImage: 'projects/metadata-platform/images/cover.webp',
    heroImage: 'projects/metadata-platform/images/hero.webp',
    gallery: [
      { src: 'projects/metadata-platform/images/gallery-01.webp', alt: 'Data catalog search with faceted filtering', type: 'Desktop' },
      { src: 'projects/metadata-platform/images/gallery-02.webp', alt: 'Data lineage visualization showing upstream and downstream dependencies', type: 'Diagram' },
      { src: 'projects/metadata-platform/images/gallery-03.webp', alt: 'Quality score dashboard with trend analysis', type: 'Screenshot' }
    ],
    github: 'https://github.com/pycriador/metadata-platform',
    demo: '',
    documentation: '',
    overview: {
      objective: 'Provide a single source of truth for organizational metadata that enables data discovery, lineage tracking, and governance compliance across all data assets.',
      problem: 'Organizations lack visibility into their data assets, have no centralized catalog for discovery, cannot trace data lineage for compliance, and suffer from data quality issues that erode trust in analytics.',
      solution: 'Built automated metadata discovery connectors, implemented a lineage computation engine, designed a quality scoring framework, and created a searchable catalog with faceted navigation and visualization.',
      results: 'Catalogs over 10,000 data assets across 50 databases, tracks lineage for 200+ data pipelines, and provides quality scores that have helped teams identify and fix 300+ data quality issues.'
    },
    timeline: [
      { date: 'Q3 2023', title: 'Discovery Engine', description: 'Built automated metadata discovery connectors for PostgreSQL and MySQL databases.' },
      { date: 'Q4 2023', title: 'Catalog & Search', description: 'Implemented Elasticsearch-backed catalog with faceted search and metadata management UI.' },
      { date: 'Q1 2024', title: 'Lineage & Quality', description: 'Added data lineage computation and quality scoring framework.' },
      { date: 'Q2 2024', title: 'Production Deployment', description: 'Deployed to production with SSO, access controls, and Airflow integration.' }
    ],
    roadmap: [
      { title: 'Database introspection connectors', status: 'completed' },
      { title: 'Full-text catalog search', status: 'completed' },
      { title: 'Data lineage computation', status: 'completed' },
      { title: 'Quality scoring framework', status: 'completed' },
      { title: 'Snowflake connector', status: 'in-progress' },
      { title: 'Automated governance policy enforcement', status: 'planned' }
    ],
    challenges: [
      'Keeping metadata synchronized across rapidly changing database schemas without overwhelming the discovery system',
      'Computing accurate data lineage across complex ETL pipelines that span multiple tools and technologies',
      'Designing quality metrics that are meaningful and actionable for different types of data assets'
    ],
    solutions: [
      'Implemented schema fingerprinting with hash comparison to detect changes efficiently, using incremental discovery that only re-processes modified objects',
      'Built a lineage collector framework that integrates with Airflow, dbt, and Spark to capture pipeline metadata from execution logs and DAG definitions',
      'Created a configurable quality rule engine with domain-specific scoring profiles that combine completeness, freshness, uniqueness, and consistency metrics'
    ]
  },
  {
    id: 'mug-artwork-extractor',
    slug: 'mug-artwork-extractor',
    title: 'Mug Artwork Extractor',
    subtitle: 'AI-powered artwork extraction from physical mugs',
    category: 'AI',
    status: 'Production',
    statusType: 'active',
    featured: false,
    year: 2023,
    description: 'Mug Artwork Extractor is an AI-powered tool that extracts and digitizes artwork from photographs of physical mugs. Using computer vision for perspective correction and segmentation, combined with OpenAI Vision for artistic interpretation, it produces clean digital versions of mug artwork suitable for cataloging, reproduction, or digital collection management.',
    shortDescription: 'AI-powered tool that extracts and digitizes artwork from physical mugs.',
    technologies: ['Python', 'OpenCV', 'OpenAI Vision', 'FastAPI', 'React', 'Docker'],
    architecture: {
      Frontend: 'React single-page application with drag-and-drop image upload, real-time processing status, side-by-side original and extracted artwork comparison, and a gallery view for processed results.',
      Backend: 'FastAPI service orchestrating the extraction pipeline: image preprocessing with OpenCV, mug detection and segmentation, perspective correction, artwork extraction, and OpenAI Vision for enhancement and categorization.',
      Database: 'PostgreSQL for artwork metadata and processing history, file system storage for original and processed images, and Redis for processing queue management.',
      Cloud: 'Docker deployment with GPU-enabled container support for OpenCV processing, S3 for image storage, and background task processing with Celery and Redis.',
      Security: 'API key authentication, rate limiting on processing endpoints, image size and format validation, and optional encryption for stored artwork images.',
      Integrations: 'REST API for programmatic access, batch processing mode for bulk extraction, CSV export for catalog data, and optional CMS integration for publishing extracted artwork.',
      Scalability: 'Celery worker pool for parallel processing, image processing pipeline with configurable quality tiers, and thumbnail generation for efficient gallery browsing.'
    },
    tags: ['AI', 'Computer Vision', 'Image Processing', 'Automation'],
    coverImage: 'projects/mug-artwork-extractor/images/cover.webp',
    heroImage: 'projects/mug-artwork-extractor/images/hero.webp',
    gallery: [
      { src: 'projects/mug-artwork-extractor/images/gallery-01.webp', alt: 'Upload interface with drag-and-drop image area', type: 'Desktop' },
      { src: 'projects/mug-artwork-extractor/images/gallery-02.webp', alt: 'Side-by-side comparison of original photo and extracted artwork', type: 'Screenshot' },
      { src: 'projects/mug-artwork-extractor/images/gallery-03.webp', alt: 'Processing pipeline diagram with computer vision stages', type: 'Diagram' }
    ],
    github: 'https://github.com/pycriador/mug-artwork-extractor',
    demo: '',
    documentation: '',
    overview: {
      objective: 'Automate the digitization of artwork from physical mug photographs, producing clean digital versions suitable for cataloging and collection management.',
      problem: 'Manually extracting artwork from mug photographs requires graphic design skills, is time-consuming for large collections, and perspective distortion from curved surfaces degrades quality.',
      solution: 'Combined OpenCV for mug detection, perspective correction, and artwork segmentation with OpenAI Vision for artistic interpretation and enhancement, wrapped in a FastAPI processing pipeline.',
      results: 'Processes mug photographs in under 30 seconds, achieves clean extraction on 88% of test images without manual intervention, and has digitized over 500 mug artworks.'
    },
    timeline: [
      { date: 'Q3 2023', title: 'Core Pipeline', description: 'Built the OpenCV-based mug detection, perspective correction, and artwork segmentation pipeline.' },
      { date: 'Q4 2023', title: 'AI Enhancement', description: 'Integrated OpenAI Vision for artwork interpretation, cleanup, and automatic categorization.' },
      { date: 'Q1 2024', title: 'Web Interface', description: 'Developed React frontend with upload, gallery, and comparison views.' },
      { date: 'Q2 2024', title: 'Batch Processing', description: 'Added batch processing mode, API access, and export capabilities.' }
    ],
    roadmap: [
      { title: 'Core extraction pipeline', status: 'completed' },
      { title: 'AI-powered artwork enhancement', status: 'completed' },
      { title: 'Web interface with gallery', status: 'completed' },
      { title: 'Batch processing and API', status: 'completed' },
      { title: 'Multi-angle mug support', status: 'in-progress' },
      { title: 'Mobile app for live capture', status: 'planned' }
    ],
    challenges: [
      'Correctly segmenting artwork from mug surfaces with complex backgrounds and reflective glazes',
      'Handling perspective distortion caused by the cylindrical shape of mugs at various camera angles',
      'Maintaining color accuracy of extracted artwork when original photographs have inconsistent lighting'
    ],
    solutions: [
      'Implemented a multi-stage segmentation pipeline using edge detection, color clustering, and morphological operations to isolate artwork boundaries from background noise',
      'Built a cylindrical perspective correction model that estimates mug geometry from detected edges and unwraps the artwork surface to a flat plane',
      'Applied white balance correction and histogram matching against a reference color chart to normalize lighting before extraction'
    ]
  },
  {
    id: 'mug-gallery',
    slug: 'mug-gallery',
    title: 'Mug Gallery',
    subtitle: 'Desktop mug artwork collection browser',
    category: 'Desktop',
    status: 'Production',
    statusType: 'active',
    featured: false,
    year: 2023,
    description: 'Mug Gallery is a desktop application for browsing, organizing, and managing collections of mug artwork. Built with Electron, it provides a fast, offline-capable gallery experience with tagging, search, grid and list view modes, and metadata editing for cataloging artwork extracted by the Mug Artwork Extractor or added manually.',
    shortDescription: 'Desktop application for browsing and organizing mug artwork collections.',
    technologies: ['Electron', 'TypeScript', 'React', 'SQLite'],
    architecture: {
      Frontend: 'React renderer process with virtualized grid and list views, image zoom and pan controls, tag-based filtering sidebar, and metadata editing forms with keyboard shortcuts.',
      Backend: 'Electron main process handling file system operations, SQLite database management via better-sqlite3, image thumbnail generation pipeline, and IPC communication between main and renderer processes.',
      Database: 'SQLite for artwork metadata, tags, and collections with full-text search support, and local file system storage organized by collection directories.',
      Cloud: 'Fully offline desktop application with no cloud dependencies. Optional export to JSON or CSV for sharing collection data.',
      Security: 'Local file system access only with no network communication, encrypted SQLite database option for sensitive collections, and configurable backup paths.',
      Integrations: 'Import from Mug Artwork Extractor output format, drag-and-drop image import, clipboard paste support, and metadata export to common catalog formats.',
      Scalability: 'Virtualized rendering for galleries with thousands of images, lazy thumbnail loading with disk cache, and efficient SQLite queries with indexed search across all metadata fields.'
    },
    tags: ['Desktop', 'Gallery', 'Electron', 'UI', 'Collection'],
    coverImage: 'projects/mug-gallery/images/cover.webp',
    heroImage: 'projects/mug-gallery/images/hero.webp',
    gallery: [
      { src: 'projects/mug-gallery/images/gallery-01.webp', alt: 'Gallery grid view with thumbnail previews', type: 'Desktop' },
      { src: 'projects/mug-gallery/images/gallery-02.webp', alt: 'Detail view with metadata editing and tagging', type: 'Screenshot' },
      { src: 'projects/mug-gallery/images/gallery-03.webp', alt: 'Search and filter sidebar with tag management', type: 'UI' }
    ],
    github: 'https://github.com/pycriador/mug-gallery',
    demo: '',
    documentation: '',
    overview: {
      objective: 'Provide a fast, intuitive desktop application for browsing and organizing mug artwork collections with full offline support.',
      problem: 'Collectors need a dedicated tool to catalog, tag, and browse their mug artwork collections that works offline and handles large image libraries without performance degradation.',
      solution: 'Built an Electron application with React, using virtualized rendering for performance, SQLite for metadata storage and search, and a thumbnail caching system for instant gallery browsing.',
      results: 'Handles collections of 10,000+ images with smooth scrolling, provides sub-100ms search results, and works entirely offline with no external service dependencies.'
    },
    timeline: [
      { date: 'Q3 2023', title: 'Core Application', description: 'Built Electron shell with React renderer, SQLite integration, and basic gallery views.' },
      { date: 'Q4 2023', title: 'Search & Organization', description: 'Implemented full-text search, tag management, and collection organization features.' },
      { date: 'Q1 2024', title: 'Performance & Polish', description: 'Added virtualized rendering, thumbnail caching, and keyboard navigation.' },
      { date: 'Q2 2024', title: 'Import & Export', description: 'Built import from Mug Artwork Extractor, drag-and-drop support, and metadata export.' }
    ],
    roadmap: [
      { title: 'Virtualized gallery rendering', status: 'completed' },
      { title: 'SQLite metadata storage', status: 'completed' },
      { title: 'Full-text search and tagging', status: 'completed' },
      { title: 'Import from extraction pipeline', status: 'completed' },
      { title: 'Cross-platform auto-update', status: 'in-progress' },
      { title: 'Custom themes and layout options', status: 'planned' }
    ],
    challenges: [
      'Maintaining smooth scrolling performance when rendering galleries with thousands of high-resolution images',
      'Efficiently generating and caching thumbnails without blocking the main UI thread',
      'Designing a metadata editing workflow that feels native and responsive in an Electron environment'
    ],
    solutions: [
      'Implemented a virtualized grid using react-window that only renders visible items plus a buffer, reducing DOM nodes from thousands to dozens',
      'Offloaded thumbnail generation to a background worker process using sharp, with an LRU disk cache that persists across application sessions',
      'Built a form-based metadata editor with real-time validation, keyboard shortcuts for rapid tag editing, and debounced auto-save to avoid UI lag'
    ]
  },
  {
    id: 'slack-conversation-bridge',
    slug: 'slack-conversation-bridge',
    title: 'Slack Conversation Bridge',
    subtitle: 'Bridge conversations across Slack workspaces',
    category: 'Integration',
    status: 'Production',
    statusType: 'active',
    featured: false,
    year: 2024,
    description: 'Slack Conversation Bridge is an integration tool that enables seamless conversation bridging across multiple Slack workspaces. It synchronizes messages, maintains conversation context, and supports cross-workspace channel mirroring, allowing distributed teams to collaborate as if they were in a single workspace without switching accounts.',
    shortDescription: 'Integration tool that bridges conversations across multiple Slack workspaces.',
    technologies: ['TypeScript', 'Node.js', 'Slack API', 'Redis', 'Docker'],
    architecture: {
      Frontend: 'Slack Bolt application framework with slash command handlers, interactive message components for bridge configuration, and admin dashboard built with Express and EJS templates for monitoring and management.',
      Backend: 'Node.js service using Slack Bolt for event handling, Redis for message deduplication and rate limiting, and a bridge engine that manages bidirectional message forwarding with context preservation.',
      Database: 'Redis for message deduplication cache, channel mapping storage, and rate limit tracking, with optional PostgreSQL for persistent bridge configuration and message audit logs.',
      Cloud: 'Docker container deployment with health check endpoints, Redis for state management, and environment-based configuration for multi-workspace credentials.',
      Security: 'Slack app scopes follow least-privilege principle, workspace tokens stored encrypted, no message content persisted beyond deduplication window, and admin actions require workspace-level approval.',
      Integrations: 'Slack Events API for real-time message capture, Slack Web API for message posting, channel topic and purpose synchronization, and thread bridging across workspace boundaries.',
      Scalability: 'Redis-backed deduplication handles high-volume channels, configurable rate limiting per workspace, and horizontal scaling via Redis-backed session sharing across bridge instances.'
    },
    tags: ['Integration', 'Slack', 'API', 'Automation', 'Workflow', 'SaaS'],
    coverImage: 'projects/slack-conversation-bridge/images/cover.webp',
    heroImage: 'projects/slack-conversation-bridge/images/hero.webp',
    gallery: [
      { src: 'projects/slack-conversation-bridge/images/gallery-01.webp', alt: 'Bridge configuration wizard in Slack', type: 'UI' },
      { src: 'projects/slack-conversation-bridge/images/gallery-02.webp', alt: 'Cross-workspace message synchronization in action', type: 'Screenshot' },
      { src: 'projects/slack-conversation-bridge/images/gallery-03.webp', alt: 'Architecture diagram of bridge communication flow', type: 'Diagram' }
    ],
    github: 'https://github.com/pycriador/slack-conversation-bridge',
    demo: '',
    documentation: '',
    overview: {
      objective: 'Enable seamless communication across multiple Slack workspaces by bridging conversations while preserving context, threading, and user attribution.',
      problem: 'Organizations using multiple Slack workspaces for different teams or security domains face communication silos, requiring users to switch between workspaces and lose conversation context.',
      solution: 'Built a Slack Bolt application that listens to events on configured channels, deduplicates cross-posted messages using Redis, and forwards messages with workspace attribution and thread context preservation.',
      results: 'Supports bridging across 10+ workspaces simultaneously, handles channels with 1000+ messages per hour, and maintains 99.9% message delivery reliability with automatic retry and deduplication.'
    },
    timeline: [
      { date: 'Q1 2024', title: 'Core Bridge', description: 'Implemented bidirectional message forwarding with basic channel mapping.' },
      { date: 'Q2 2024', title: 'Thread & Context', description: 'Added thread bridging, message formatting preservation, and workspace attribution.' },
      { date: 'Q3 2024', title: 'Reliability', description: 'Implemented Redis-based deduplication, rate limiting, and automatic retry with backoff.' },
      { date: 'Q4 2024', title: 'Admin & Monitoring', description: 'Built admin dashboard, health monitoring, and Slack slash commands for bridge management.' }
    ],
    roadmap: [
      { title: 'Bidirectional message forwarding', status: 'completed' },
      { title: 'Thread bridging across workspaces', status: 'completed' },
      { title: 'Message deduplication', status: 'completed' },
      { title: 'Admin dashboard and monitoring', status: 'completed' },
      { title: 'File and attachment bridging', status: 'in-progress' },
      { title: 'Slack Connect integration', status: 'planned' }
    ],
    challenges: [
      'Preventing infinite message loops when messages are bridged back to the originating workspace',
      'Preserving rich message formatting, mentions, and reactions across workspace boundaries',
      'Managing Slack API rate limits when bridging high-volume channels across multiple workspaces'
    ],
    solutions: [
      'Implemented a message fingerprinting system using workspace ID, channel ID, timestamp, and content hash stored in Redis to detect and block looped messages within a configurable time window',
      'Built a format translation layer that converts workspace-specific mentions, emoji references, and rich text blocks into workspace-neutral representations before re-formatting for the target workspace',
      'Designed a per-workspace rate limiter with token bucket algorithm and priority queuing that ensures critical messages are forwarded immediately while batching lower-priority traffic'
    ]
  },
  {
    id: 'gemini-pdf-studio',
    slug: 'gemini-pdf-studio',
    title: 'Gemini PDF Studio',
    subtitle: 'AI-powered PDF analysis and generation studio',
    category: 'AI',
    status: 'In Development',
    statusType: 'warning',
    featured: true,
    year: 2025,
    description: 'Gemini PDF Studio is an AI-powered PDF analysis and generation studio that leverages Google Gemini for intelligent document processing. It provides tools for extracting structured data from PDFs, generating summaries, answering questions about document content, and creating new PDF documents with AI-assisted formatting and content organization.',
    shortDescription: 'AI-powered PDF analysis and generation studio using Google Gemini.',
    technologies: ['TypeScript', 'Python', 'Google Gemini API', 'React', 'FastAPI', 'Docker'],
    architecture: {
      Frontend: 'React application with a PDF viewer using react-pdf, side-by-side analysis panel, chat interface for conversational document interaction, and a generation wizard for creating new PDFs with AI assistance.',
      Backend: 'Python FastAPI service handling PDF parsing with PyPDF2, Google Gemini API integration for analysis and generation, document chunking for context management, and a generation pipeline for structured PDF output.',
      Database: 'PostgreSQL for document metadata and analysis history, file system for PDF storage, Redis for conversation context caching, and Elasticsearch for full-text search across analyzed documents.',
      Cloud: 'Docker deployment with FastAPI backend and React frontend, Google Cloud for Gemini API access, and optional GCS integration for document storage at scale.',
      Security: 'JWT authentication, document-level access controls, encrypted PDF storage, and API key management for Gemini access with usage tracking and quotas.',
      Integrations: 'Google Gemini API for analysis and generation, PyPDF2 and pdfplumber for parsing, ReportLab for PDF generation, and REST API for programmatic document processing.',
      Scalability: 'Async document processing with background workers, paginated analysis for large PDFs, conversation context management with sliding window, and concurrent Gemini API request handling with rate limiting.'
    },
    tags: ['AI', 'Document Management', 'PDF', 'API', 'Automation', 'Cloud'],
    coverImage: 'projects/gemini-pdf-studio/images/cover.webp',
    heroImage: 'projects/gemini-pdf-studio/images/hero.webp',
    gallery: [
      { src: 'projects/gemini-pdf-studio/images/gallery-01.webp', alt: 'PDF viewer with AI analysis panel', type: 'Desktop' },
      { src: 'projects/gemini-pdf-studio/images/gallery-02.webp', alt: 'Conversational interface for document Q&A', type: 'Screenshot' },
      { src: 'projects/gemini-pdf-studio/images/gallery-03.webp', alt: 'PDF generation wizard with AI formatting options', type: 'UI' }
    ],
    github: 'https://github.com/pycriador/gemini-pdf-studio',
    demo: '',
    documentation: '',
    overview: {
      objective: 'Create an intelligent PDF workspace where users can analyze, query, and generate PDF documents using Google Gemini for understanding and content creation.',
      problem: 'PDF documents are information-dense but difficult to search, analyze, and extract insights from programmatically. Existing tools lack AI-powered understanding and generative capabilities.',
      solution: 'Combined Python PDF parsing with Google Gemini for document understanding, built a conversational Q&A interface for document interaction, and implemented an AI-assisted PDF generation pipeline for creating structured output documents.',
      results: 'Prototype achieves accurate extraction of structured data from complex PDFs, generates coherent summaries preserving key information, and produces well-formatted output PDFs from natural language descriptions.'
    },
    timeline: [
      { date: 'Q1 2025', title: 'Analysis Core', description: 'Built PDF parsing pipeline with Gemini integration for content extraction and summarization.' },
      { date: 'Q2 2025', title: 'Conversational Q&A', description: 'Implemented chat interface with context management for multi-turn document conversations.' },
      { date: 'Q3 2025', title: 'Generation Engine', description: 'Developed AI-assisted PDF generation with template system and content organization.' },
      { date: 'Q4 2025', title: 'Studio Release', description: 'Complete studio interface with viewer, analysis, Q&A, and generation in unified workflow.' }
    ],
    roadmap: [
      { title: 'PDF content extraction with Gemini', status: 'completed' },
      { title: 'Document summarization', status: 'in-progress' },
      { title: 'Conversational document Q&A', status: 'in-progress' },
      { title: 'AI-assisted PDF generation', status: 'planned' },
      { title: 'Multi-document analysis workflows', status: 'planned' }
    ],
    challenges: [
      'Managing context window limitations when analyzing large PDFs with hundreds of pages',
      'Maintaining accurate references and citations when generating responses about specific document sections',
      'Generating visually well-formatted PDFs from AI-produced content without losing structure and hierarchy'
    ],
    solutions: [
      'Implemented intelligent document chunking with overlap that respects page and section boundaries, using Gemini embeddings to maintain semantic coherence across chunks',
      'Built a citation tracking system that maps Gemini responses back to specific PDF page numbers and text coordinates, enabling verified source attribution',
      'Designed a template-based PDF generation pipeline that takes structured JSON output from Gemini and renders it through ReportLab with configurable style templates'
    ]
  }
]);

if (typeof module !== 'undefined') module.exports = PROJECTS;
