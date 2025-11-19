# CLAUDE.md - Agentic Development Environment Guide

**Project**: Project Management Dashboard (Frontend)  
**Version**: 2.0.0  
**Last Updated**: November 20, 2025

## Overview

This project uses an **agentic development environment** powered by Claude AI to coordinate React frontend development. Multiple specialized AI agents work collaboratively to design, implement, test, and deploy UI features while maintaining architectural consistency and code quality.

This document is the **canonical reference** for understanding and using the agent ecosystem.

**Note**: This is a **frontend-only** project using React, TypeScript, and Vite. Backend APIs are consumed but not developed here.

---

## Agent Architecture

### Core Principles

1. **Separation of Concerns**: Each agent has a clearly defined role and scope
2. **Collaborative Workflow**: Agents coordinate through well-defined handoff protocols
3. **Documentation-Driven**: All decisions and implementations are documented
4. **Incremental Development**: Work proceeds in small, validated increments
5. **Quality-First**: Multiple validation layers (QA, Security, Review)

### Agent Directory

All agent definitions are located in `.claude/agents/`. Each YAML file contains:
- Role and responsibilities
- Scope boundaries
- Collaboration rules
- Communication protocols
- Deliverable templates
- Best practices and anti-patterns

---

## Available Agents

### 🎯 Orchestrator Agent
**File**: `.claude/agents/orchestrator.yaml`  
**Invocation**: `@orchestrator`

**Primary Role**: Project coordination and workflow management

**When to Use**:
- Planning multi-step features
- Coordinating work between multiple agents
- Tracking project milestones
- Resolving architectural conflicts
- Breaking down complex requirements

**Example**:
```
@orchestrator Plan the implementation of a project kanban board component
```

---

### 📊 Product Manager Agent
**File**: `.claude/agents/product-manager.yaml`  
**Invocation**: `@product-manager`

**Primary Role**: Product strategy and requirements definition

**When to Use**:
- Defining new UI features
- Creating user stories
- Prioritizing backlog
- Defining acceptance criteria
- Gathering requirements

**Example**:
```
@product-manager Create user stories for the team collaboration dashboard
```

---

### 🏗️ Architect Agent
**File**: `.claude/agents/architect.yaml`  
**Invocation**: `@architect`

**Primary Role**: Frontend architecture and technical strategy

**When to Use**:
- Making React architectural decisions
- Designing component hierarchies
- Selecting state management approaches
- Defining performance optimization strategies
- Creating technical specifications

**Example**:
```
@architect Design the state management strategy for project data
```

---

### ⚛️ Frontend Agent
**File**: `.claude/agents/frontend.yaml`  
**Invocation**: `@frontend`

**Primary Role**: React UI implementation

**When to Use**:
- Implementing React components
- Managing state (Context, hooks, etc.)
- Integrating with backend APIs
- Optimizing performance
- Ensuring accessibility

**Example**:
```
@frontend Implement the task kanban board with drag-and-drop
```

---

### 🎨 Design Agent
**File**: `.claude/agents/design.yaml`  
**Invocation**: `@design`

**Primary Role**: UI/UX design and design system

**When to Use**:
- Specifying UI components
- Ensuring accessibility
- Maintaining design consistency
- Defining interactions
- Responsive design

**Example**:
```
@design Specify the notification center UI with priority indicators
```

---

### 🚀 DevOps Agent
**File**: `.claude/agents/devops.yaml`  
**Invocation**: `@devops`

**Primary Role**: Infrastructure and deployment

**When to Use**:
- Setting up CI/CD
- Configuring environments
- Deploying applications
- Setting up monitoring
- Managing secrets

**Example**:
```
@devops Configure staging environment with automatic deployments
```

---

### ✅ QA Agent
**File**: `.claude/agents/qa.yaml`  
**Invocation**: `@qa`

**Primary Role**: Quality assurance and testing

**When to Use**:
- Creating test plans
- Defining test cases
- Validating features
- Reporting bugs
- Ensuring quality

**Example**:
```
@qa Create test plan for multi-tenant project isolation
```

---

### 🔒 Security Agent
**File**: `.claude/agents/security.yaml`  
**Invocation**: `@security`

**Primary Role**: Security and compliance

**When to Use**:
- Reviewing security implementations
- Defining security requirements
- Identifying vulnerabilities
- Ensuring compliance
- Auditing code

**Example**:
```
@security Review the file upload feature for security vulnerabilities
```

---

### 📚 Documentation Agent
**File**: `.claude/agents/documentation.yaml`  
**Invocation**: `@documentation`

**Primary Role**: Technical documentation

**When to Use**:
- Writing API docs
- Maintaining architecture docs
- Creating developer guides
- Documenting decisions
- Knowledge management

**Example**:
```
@documentation Create API reference for all project endpoints
```

---

## Workflow Patterns

### 1. Feature Implementation Workflow

**Scenario**: Implementing a new UI feature from requirements to deployment

```mermaid
graph TD
    A[User Request] --> B[@orchestrator: Plan Feature]
    B --> C[@product-manager: Create User Stories]
    C --> D[@architect: Design Component Architecture]
    D --> E[@design: Specify UI/UX]
    E --> F[@frontend: Implement Components]
    F --> G[@qa: Test Feature]
    G --> H[@devops: Deploy]
    H --> I[@documentation: Update Docs]
```

**Step-by-Step**:
1. **Planning**: `@orchestrator Plan implementation of [UI feature]`
2. **Requirements**: `@product-manager Create user stories for [feature]`
3. **Architecture**: `@architect Design component hierarchy and state management for [feature]`
4. **Design**: `@design Specify UI components and interactions for [feature]`
5. **Implementation**: `@frontend Implement [React components and state logic]`
6. **Quality**: `@qa Create test plan for [feature]`
7. **Security**: `@security Review [feature] for XSS, data exposure vulnerabilities`
8. **Deployment**: `@devops Deploy [feature] to staging`
9. **Documentation**: `@documentation Document [feature]`

---

### 2. Bug Fix Workflow

**Scenario**: Identifying and fixing a UI bug

```
1. Report bug to @orchestrator with component/page details
2. @orchestrator analyzes and assigns to @frontend (or @design for UI issues)
3. Agent implements fix
4. @qa validates fix across browsers and devices
5. @devops deploys fix
```

---

### 3. Architectural Change Workflow

**Scenario**: Making significant frontend architectural changes

```
1. @orchestrator Initiate architectural review
2. @architect Propose React architecture solution with ADR
3. Review with affected agents (@frontend, @design, @qa)
4. @orchestrator Coordinate component refactoring
5. @documentation Update architecture docs
```

---

### 4. New Developer Onboarding

**Scenario**: Getting a new developer up to speed

```
@documentation Provide onboarding guide
@architect Share architecture overview
@devops Share development environment setup
```

---

## Agent Communication Protocols

### Handoff Template

When one agent hands off to another, use this structure:

```
**Task**: [Clear description of what needs to be done]
**Assigned Agent**: @[agent-name]
**Context**: [Background information]
**Dependencies**: [What must be completed first]
**Success Criteria**: [How to verify completion]
**Artifacts**: [Expected deliverables]
```

### Example Handoff

```
**Task**: Implement login UI with form validation
**Assigned Agent**: @frontend
**Context**: We need a login page that integrates with existing auth API
**Dependencies**: Design system components (completed)
**Success Criteria**: 
  - Login form with email/password fields
  - Client-side validation using Zod
  - Error handling for failed login
  - Redirect to dashboard on success
  - Loading states during API calls
**Artifacts**: 
  - React component implementation
  - Unit tests with React Testing Library
  - Integration with auth Context
```

---

## Context Files

All architectural decisions and specifications are stored in `claude/outputs/`:

### Essential Documents

1. **01_Product_Definition.md** - Product vision, goals, user types
2. **02_Functional_Specification.md** - Features and workflows
3. **03_Information_Architecture.yaml** - Screens, routes, data models, API contracts
4. **04_Design_System_Spec.md** - UI components and design tokens

### Agent-Specific Outputs

- `architecture/` - ADRs, component diagrams, state management specs
- `qa/` - Test plans and test cases
- `security/` - Frontend security requirements and audits
- `devops/` - Deployment runbooks and configs

---

## Best Practices

### DO ✅

- **Tag the right agent** for the task at hand
- **Provide context** from relevant documentation files
- **Break down complex work** into smaller tasks
- **Document decisions** in the appropriate format
- **Validate with QA** before considering work complete
- **Update documentation** when implementation changes
- **Review security** for any user-facing features

### DON'T ❌

- **Don't skip planning** - engage @orchestrator for complex work
- **Don't ignore dependencies** - check what needs to be done first
- **Don't bypass QA** - all features must be tested
- **Don't forget documentation** - update docs with changes
- **Don't make isolated decisions** - coordinate with relevant agents
- **Don't skip security review** - especially for auth/data handling

---

## Agent Coordination Examples

### Example 1: Adding Drag-and-Drop Task Board

```
User: We need a kanban board with drag-and-drop for task management

1. @orchestrator Plan drag-and-drop task board implementation

2. @product-manager Define kanban board requirements:
   - What columns/statuses?
   - What data is shown per task?
   - What actions are available?

3. @architect Design component hierarchy and state management approach

4. @design Specify kanban board UI, card design, and drag animations

5. @frontend Implement kanban board with react-beautiful-dnd or dnd-kit

6. @qa Create test plan for drag-and-drop interactions

7. @security Review for any data exposure during drag operations

8. @devops Ensure build supports drag-and-drop library

9. @documentation Document kanban board component usage
```

---

### Example 2: Optimizing Frontend Performance

```
User: The project list page is slow with 1000+ projects

1. @orchestrator Analyze frontend performance bottleneck

2. @qa Measure current performance metrics (lighthouse, React DevTools)

3. @architect Design optimization strategy (virtualization, pagination, memoization)

4. @frontend Implement virtual scrolling with react-window or TanStack Virtual

5. @frontend Add React.memo, useMemo, and useCallback optimizations

6. @frontend Implement pagination or infinite scroll

7. @qa Validate performance improvements

8. @documentation Document performance optimization strategies
```

---

## Current Project Status

### Technology Stack

**Frontend** (This Project):
- React 18.3.1 with TypeScript
- Vite (build tool)
- Tailwind CSS v4.1.3 (styling)
- Radix UI (accessible component primitives)
- React Router DOM (routing)
- Lucide React (icons)
- React Hook Form (forms)
- Zod (validation)
- Recharts (data visualization)
- Sonner (toast notifications)

**Backend** (External - APIs consumed by this frontend):
- RESTful APIs
- JWT-based authentication
- Mock data used for development (see `src/data/mockData.ts`)

### Implemented Features

- Landing page with cosmic/glassmorphic design
- Authentication UI (login page)
- Dashboard with KPIs
- Projects list and detail pages
- Mock data layer
- Protected routes
- Responsive layouts

### Pending Frontend Work

- Enhanced task management UI (kanban board, calendar view)
- Team collaboration features (commenting, mentions)
- Real-time updates (WebSocket integration with backend)
- File upload UI and preview
- Notification center UI
- Analytics dashboards with interactive charts
- Advanced filtering and search UI
- User profile and settings pages
- Dark mode enhancements
- Mobile responsive improvements

---

## Getting Started

### For New Features

```bash
# 1. Start with planning
@orchestrator I need to implement [feature]

# 2. Follow the workflow
# The orchestrator will coordinate the necessary agents

# 3. Validate
@qa Test [feature]

# 4. Document
@documentation Document [feature]
```

### For Bug Fixes

```bash
# 1. Report the bug
@orchestrator Bug: [description]

# 2. Orchestrator will assign to appropriate agent
# Agent will implement fix

# 3. Validate
@qa Verify bug fix for [issue]
```

### For Questions

```bash
# Architecture questions
@architect How should I implement [technical aspect]?

# Product questions
@product-manager What are the requirements for [feature]?

# Implementation questions
@frontend / @backend How should I implement [specific thing]?
```

---

## Troubleshooting

### "I don't know which agent to use"

Start with `@orchestrator` - it will coordinate and delegate appropriately.

### "Multiple agents seem relevant"

Use `@orchestrator` to coordinate multi-agent work.

### "I need to make a big architectural change"

Always involve `@architect` and `@orchestrator` for major changes.

### "The agents are giving conflicting advice"

Escalate to `@orchestrator` to resolve conflicts and make final decisions.

---

## Versioning and Evolution

This agent ecosystem will evolve as the project grows:

- **Agent definitions** may be refined based on usage
- **New agents** may be added for specialized needs
- **Workflows** may be optimized based on what works
- **Documentation** will be updated continuously

Check the `version` field in each agent YAML file for the current version.

---

## Contributing to the Agent Ecosystem

If you identify gaps or improvements in the agent system:

1. Propose changes to `@orchestrator`
2. Update the relevant agent YAML file
3. Update this CLAUDE.md document
4. Communicate changes to the team

---

## Quick Reference

| Need | Agent | Example |
|------|-------|---------|
| Coordinate complex work | `@orchestrator` | Plan multi-step UI feature |
| Define requirements | `@product-manager` | Create user stories |
| Make technical decisions | `@architect` | Design component architecture |
| Build UI components | `@frontend` | Implement React component |
| Design interface | `@design` | Specify UI states |
| Deploy frontend | `@devops` | Set up Vercel deployment |
| Test UI | `@qa` | Create test plan |
| Frontend security | `@security` | Review for XSS vulnerabilities |
| Document | `@documentation` | Write component docs |

---

## Support and Questions

For questions about the agent system itself, start with:

```
@orchestrator Explain how to [use agents for specific scenario]
```

For technical implementation questions, use the appropriate specialist agent.

---

**Remember**: The agent system is here to help you build better software faster. Don't hesitate to engage agents early and often!
