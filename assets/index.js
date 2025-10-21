const lectures = [
    {
        id: "html-1",
        number: 1,
        title: "Intro + HTML Fundamentals: Structure and Basic Tags",
        description: "Introduction, Setup, HTML Introduction, HTML Syntax, Links and Anchor Elements, HTML Formatting and Spacing",
        image: "./assets/images/logos/html.webp",
        status: "completed",
        content: "HTML"
    },
    {
        id: "html-2",
        number: 2,
        title: "Head Element, Text Elements, Multimedia",
        description: "Head Element, Text Elements, Text Formating, Multimedia",
        image: "./assets/images/logos/html.webp",
        status: "completed",
        content: "HTML"
    },
    {
        id: "html-3",
        number: 3,
        title: "Images, Lists, Tables, Semantic Elements",
        description: "Images and Multimedia, Lists, HTML Tables, Container Elements and Layout, Advanced Multimedia, Preformatted Text Element, IFrame Element",
        image: "./assets/images/logos/html.webp",
        status: "completed",
        content: "HTML"
    },
    {
        id: "html-4",
        number: 4,
        title: "HTML Forms",
        description: "HTML Forms, HTML Entities and Special Characters, HTML5 Semantic Elements Deep Dive, HTML Accessibility",
        image: "./assets/images/logos/html.webp",
        status: "completed",
        content: "HTML"
    },
    {
        id: "css-1",
        number: 5,
        title: "CSS Introduction, Selectors, Typography, Colors",
        description: "CSS Introduction & Syntax, CSS Selectors & Specificity, Typography, Colors & CSS Variables",
        image: "./assets/images/logos/CSS.webp",
        status: "completed",
        content: "CSS"
    },
    {
        id: "css-2",
        number: 6,
        title: "Icons, Box Model, Borders",
        description: "Google Fonts Integration, Working with Icons, CSS Box Model - Complete Layout Foundation, Borders",
        image: "./assets/images/logos/CSS.webp",
        status: "completed",
        content: "CSS"
    },
    {
        id: "css-3",
        number: 7,
        title: "Backgrounds, Display & Positioning",
        description: "Backgrounds, Display, Position values (static, relative, absolute, fixed, sticky), top/right/bottom/left offsets, z-index stacking, float/clear properties, and when to avoid floats in modern layouts",
        image: "./assets/images/logos/CSS.webp",
        status: "completed",
        content: "CSS"
    },
    {
        id: "css-4",
        number: 8,
        title: "CSS Flexbox & CSS Grid",
        description: "Flexbox overview, display: flex, main/cross axis, flex-direction (row/column), justify-content (flex-start, center, space-between), align-items (stretch, center, baseline), and flex-wrap, Display: grid, grid-template-columns/rows (fixed, fr, auto), grid-gap (row/column), justify-items/align-items, and grid-auto-flow",
        image: "./assets/images/logos/CSS.webp",
        status: "completed",
        content: "CSS"
    },
    {
        id: "css-5",
        number: 9,
        title: "CSS Units, Small CSS Properties",
        description: "CSS Units & Measurements - Complete Guide, Small but Powerful CSS Properties",
        image: "./assets/images/logos/CSS.webp",
        status: "completed",
        content: "CSS"
    },
    {
        id: "css-6",
        number: 10,
        title: "Pseudo-elements, CSS Transitions, CSS Transforms",
        description: "Pseudo-elements & Pseudo-classes - Advanced Selectors, CSS Transitions - Smooth Animations, CSS Transforms - 2D & 3D Transformations",
        image: "./assets/images/logos/CSS.webp",
        status: "completed",
        content: "CSS"
    },
    {
        id: "css-7",
        number: 11,
        title: "Responsive Design & Animations",
        description: "Width, Height & Responsive Properties, Responsive Design & Animations",
        image: "./assets/images/logos/CSS.webp",
        status: "completed",
        content: "CSS"
    },
    {
        id: "css-8",
        number: 12,
        title: "Guides & Advanced Level",
        description: "Centering Elements - Complete Guide, Image Styling & Manipulation, Card Components - Modern Design Patterns, Hero Sections - Landing Page Masters, Navigation Systems - From Simple to Complex, Footer Design - Complete Website Closure, Form Styling - User-Friendly Inputs, CSS Methodologies & Architecture, CSS Performance Optimization, Cross-Browser Compatibility & Vendor Prefixes, Accessibility (A11y) Deep Dive",
        image: "./assets/images/logos/CSS.webp",
        status: "in-progress",
        content: "CSS"
    },
    {
        id: "tailwind",
        number: 13,
        title: "Tailwind CSS: Classes, Flexbox, Grid, and Responsive Design",
        description: "Tailwind classes for flex (flex, justify, items), grid (grid-cols, gap), responsive prefixes (sm:, md:, lg:), and building mobile-first components with hover/focus states",
        image: "./assets/images/logos/tailwind-css.webp",
        status: "not-started",
        content: "Full content for Tailwind layouts..."
    },
    {
        id: "js-syntax-variables",
        number: 14,
        title: "JavaScript Syntax: Variables, Data Types, and Operators",
        description: "Declaring variables (var, let, const), primitive types (string, number, boolean, null, undefined, symbol, bigint), objects/arrays literals, type coercion, and operators (arithmetic, assignment, comparison, logical, ternary)",
        image: "./assets/images/logos/JS.webp",
        status: "not-started",
        content: "Full content for JS variables and types..."
    },
    {
        id: "js-functions-scope",
        number: 15,
        title: "Functions, Scope, Hoisting, and Closures",
        description: "Function declarations vs. expressions vs. arrow functions, parameters/rest/spread, default values, scope (global, function, block), hoisting behavior, and basic closures",
        image: "./assets/images/logos/JS.webp",
        status: "not-started",
        content: "Full content for JS functions and scope..."
    },
    {
        id: "js-control-structures",
        number: 16,
        title: "Control Structures: Conditionals, Loops, and Error Handling",
        description: "If/else, switch, ternary operators; loops (for, while, do-while, for...of/in); break/continue/return; try/catch for errors",
        image: "./assets/images/logos/JS.webp",
        status: "not-started",
        content: "Full content for JS control flow..."
    },
    {
        id: "js-arrays-methods",
        number: 17,
        title: "Arrays: Methods and Manipulation",
        description: "Array creation, indexing, methods (push/pop/shift/unshift, slice/splice, concat, includes, indexOf); iteration (forEach, map, filter, reduce, every/some/find)",
        image: "./assets/images/logos/JS.webp",
        status: "not-started",
        content: "Full content for JS arrays..."
    },
    {
        id: "js-objects-es6-destructuring",
        number: 18,
        title: "Objects, Prototypes, and ES6+ Destructuring/Spread Operators",
        description: "Object creation (literals, constructors), accessing properties (dot/bracket), methods, this keyword, Object methods (keys/values/entries, assign), and prototype basics; array/object destructuring with defaults/nesting, spread operator for shallow copies/merging, rest parameters for functions",
        image: "./assets/images/logos/JS.webp",
        status: "not-started",
        content: "Full content for JS objects, prototypes, and ES6 destructuring/spread..."
    },
    {
        id: "es6-modules-promises",
        number: 19,
        title: "ES6+: Modules, Promises, and Async Basics",
        description: "Import/export syntax (default/named), dynamic imports; promises (resolve/reject, chaining, .then/.catch), async/await with try/catch",
        image: "./assets/images/logos/JS.webp",
        status: "not-started",
        content: "Full content for ES6 modules and promises..."
    },
    {
        id: "js-dom-selection",
        number: 20,
        title: "JavaScript DOM: Selecting and Traversing Elements",
        description: "DOM tree overview, selecting elements (getElementById, getElementsByClassName/TagName, querySelector/All), node properties (parent/child/siblings), traversing (next/previousElementSibling)",
        image: "./assets/images/logos/JS.webp",
        status: "not-started",
        content: "Full content for JS DOM selection..."
    },
    {
        id: "js-dom-manipulation-events",
        number: 21,
        title: "DOM Manipulation and Event Handling",
        description: "Modifying elements (innerHTML/textContent, attributes, styles, classList); creating/removing elements (createElement, appendChild, remove); events (addEventListener, event object, bubbling, preventDefault, delegation)",
        image: "./assets/images/logos/JS.webp",
        status: "not-started",
        content: "Full content for JS DOM manipulation and events..."
    },
    {
        id: "js-apis-fetch",
        number: 22,
        title: "Working with APIs: Fetch, JSON, and Async Data Handling",
        description: "Fetch API for GET/POST requests, handling responses (json(), text()), headers, async/await with APIs, CORS basics, and error handling for network issues",
        image: "./assets/images/logos/JS.webp",
        status: "not-started",
        content: "Full content for JS APIs and fetch..."
    },
    {
        id: "git-intro",
        number: 23,
        title: "Git Version Control: Basics and Local Workflow",
        description: "Git installation, configuration (user.name/email), initializing repos, staging changes (git add), committing (git commit -m), viewing history (git log/status/diff), and undoing changes (git checkout/reset)",
        image: "./assets/images/logos/github.webp",
        status: "not-started",
        content: "Full content for Git basics..."
    },
    {
        id: "github-collaboration",
        number: 24,
        title: "GitHub: Remote Repositories, Branching, and Collaboration",
        description: "Creating/pushing to GitHub repos (git remote/clone/push/pull), branching (git branch/checkout), merging conflicts, pull requests, forks, and collaborative workflows like feature branches and code reviews",
        image: "./assets/images/logos/github.webp",
        status: "not-started",
        content: "Full content for GitHub and collaboration..."
    },
    {
        id: "react-setup-components",
        number: 25,
        title: "React Fundamentals: Setup, Components, and JSX",
        description: "Creating a React app with Create React App or Vite, functional components, JSX syntax (expressions, attributes, fragments), rendering lists, and props for data passing",
        image: "./assets/images/logos/React.webp",
        status: "not-started",
        content: "Full content for React setup and components..."
    },
    {
        id: "react-state-effects",
        number: 26,
        title: "React State Management and Hooks: useState & useEffect",
        description: "Local state with useState (initializers, updaters), rules of hooks; useEffect for side effects (fetching data, subscriptions), dependencies, cleanup, and lifecycle simulation",
        image: "./assets/images/logos/React.webp",
        status: "not-started",
        content: "Full content for React state and effects..."
    },
    {
        id: "react-events-forms",
        number: 27,
        title: "React Events, Forms, and Conditional Rendering",
        description: "Event handling in React (onClick, onChange), controlled components for forms, validation, conditional rendering (&&, ternary), and keys in lists",
        image: "./assets/images/logos/React.webp",
        status: "not-started",
        content: "Full content for React events and forms..."
    },
    {
        id: "react-advanced-hooks",
        number: 28,
        title: "React Advanced Hooks: useReducer, useMemo, useCallback, and Custom Hooks",
        description: "Complex state logic with useReducer (actions, dispatchers); performance optimization using useMemo for computed values and useCallback for stable functions; creating reusable custom hooks for logic extraction",
        image: "./assets/images/logos/React.webp",
        status: "not-started",
        content: "Full content for React advanced hooks..."
    },
    {
        id: "react-router-context",
        number: 29,
        title: "React Router, Context API, and Advanced Patterns",
        description: "Installing/configuring React Router (Routes, Route, Link, useParams/useNavigate); Context API for global state (createContext, Provider, useContext); integrating with Tailwind for styling",
        image: "./assets/images/logos/React.webp",
        status: "not-started",
        content: "Full content for React Router and Context..."
    },
    {
        id: "zustand-state",
        number: 30,
        title: "State Management with Zustand",
        description: "Installing Zustand, creating stores (create), selectors (useStore), actions/updates, persistence, and combining with React hooks for scalable global state without prop drilling",
        image: "./assets/images/logos/zus.png",
        status: "not-started",
        content: "Full content for Zustand..."
    },
    {
        id: "axios-deployment-ai",
        number: 31,
        title: "Real-World Tools: Axios, Deployment to Render, and AI Integration",
        description: "Using Axios for API requests (interceptors, auth); building/deploying React apps to Render (environment vars, CI/CD with GitHub); leveraging AI tools (e.g., GitHub Copilot, ChatGPT) for code generation, debugging, and problem-solving in frontend development",
        image: "./assets/images/logos/hosting.webp",
        status: "not-started",
        content: "Full content for Axios, deployment, and AI..."
    }
];

// DOM Elements
const lecturesTableBody = document.getElementById('lectures-table-body');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const statusFilter = document.getElementById('status-filter');
const sortBy = document.getElementById('sort-by');
const totalLecturesEl = document.getElementById('total-lectures');
const completedLecturesEl = document.getElementById('completed-lectures');
const inProgressLecturesEl = document.getElementById('in-progress-lectures');
const totalDurationEl = document.getElementById('total-duration');

// Initialize the portal
function initPortal() {
    renderLecturesTable(lectures);
    updateStatistics();
    setupEventListeners();
}

// Render the lectures table
function renderLecturesTable(lecturesToRender) {
    lecturesTableBody.innerHTML = '';
    
    lecturesToRender.forEach(lecture => {
        const row = document.createElement('tr');
        
        // Determine status badge class
        let statusClass = '';
        let statusText = '';
        
        switch(lecture.status) {
            case 'completed':
                statusClass = 'status-completed';
                statusText = 'Completed';
                break;
            case 'in-progress':
                statusClass = 'status-in-progress';
                statusText = 'In Progress';
                break;
            default:
                statusClass = 'status-not-started';
                statusText = 'Not Started';
        }
        
        row.innerHTML = `
            <td class="lecture-number">${lecture.number}</td>
            <td class="lecture-img">
                <img src="${lecture.image}" alt="image-${lecture.number}">
            </td>
            <td>
                <div class="lecture-title">${lecture.title}</div>
            </td>
            <td class="lecture-description">${lecture.description}</td>
            <td class="lecture-status">
                <span class="status-badge ${statusClass}">${statusText}</span>
            </td>
            <td>
                <button class="action-btn" data-lecture-id="${lecture.number}">View</button>
            </td>
        `;
        
        lecturesTableBody.appendChild(row);
    });
    
    // Add event listeners to view buttons
    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lectureId = this.getAttribute('data-lecture-id');
            viewLecture(lectureId);
        });
    });
}

// Update statistics
function updateStatistics() {
    const total = lectures.length;
    const completed = lectures.filter(l => l.status === 'completed').length;
    const inProgress = lectures.filter(l => l.status === 'in-progress').length;
    
    // Calculate total duration    
    const totalHours = Math.round(lectures.length * 2);
    
    totalLecturesEl.textContent = total;
    completedLecturesEl.textContent = completed;
    inProgressLecturesEl.textContent = inProgress;
    totalDurationEl.textContent = `${totalHours}h`;
}

// Filter and search lectures
function filterLectures() {
    const searchTerm = searchInput.value.toLowerCase();
    const statusValue = statusFilter.value;
    const sortValue = sortBy.value;
    
    let filteredLectures = lectures.filter(lecture => {
        const matchesSearch = lecture.title.toLowerCase().includes(searchTerm) || 
                                lecture.description.toLowerCase().includes(searchTerm);
        
        const matchesStatus = statusValue === 'all' || lecture.status === statusValue;
        
        return matchesSearch && matchesStatus;
    });
    
    // Sort lectures
    filteredLectures.sort((a, b) => {
        if (sortValue === 'title') {
            return a.title.localeCompare(b.title);
        } else if (sortValue === 'duration') {
            const aDuration = parseFloat(a.duration);
            const bDuration = parseFloat(b.duration);
            return bDuration - aDuration;
        } else {
            return a.number - b.number;
        }
    });
    
    renderLecturesTable(filteredLectures);
}

// View lecture details
function viewLecture(lectureId) {        
    if(!lectureId) {
        alert(`Invalid Lecture Id`);
        return;
    }

    const lecture = lectures.find(e => e.number === +lectureId);    

    if(!lecture) {
        alert("Invalid Lecture Id");
        return;
    }

    if(lecture.status === "not-started") {
        alert("You can not visit not-completed lecture");
        return;
    }
    // For demonstration, we'll highlight the selected lecture
    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.textContent = 'View';
        btn.style.backgroundColor = '';
    });
    
    const selectedBtn = document.querySelector(`.action-btn[data-lecture-id="${lectureId}"]`);

    if (selectedBtn) {
        window.location.assign(`lecture${lectureId}.html`)
    }
}

// Set up event listeners
function setupEventListeners() {
    searchBtn.addEventListener('click', filterLectures);
    searchInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            filterLectures();
        }
    });
    statusFilter.addEventListener('change', filterLectures);
    sortBy.addEventListener('change', filterLectures);
}

// Initialize the portal when the DOM is loaded
document.addEventListener('DOMContentLoaded', initPortal);
