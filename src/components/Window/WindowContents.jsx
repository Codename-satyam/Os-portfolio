import folder from '../../assets/icons/folder.png';
import Music from '../Misc/music/music';
import Pictures from '../Misc/pictures/pictures';
import Documents from '../Misc/documents/documents';
import MyComputer from '../Misc/mycomputer/MyComputer';
import Projects from '../Misc/Projects/Projects';
import music from '../../assets/icons/music.png';
import pic from '../../assets/icons/pic.png';

export const getWindowContent = (appId) => {
    const appContents = {
        myComputer: ({ onOpenWindow }) => (
            <MyComputer onOpenWindow={onOpenWindow} />
        ),
        projects: <Projects />,
        resume: (
            <div>
                <h2>Resume.txt</h2>

                <h3>Satyam Anand</h3>
                <p>
                    <strong>
                        B.Tech Computer Science & Engineering Student
                    </strong>
                </p>

                <h3>Contact Information</h3>
                <p>Email: satyamanand643@gmail.com</p>
                <p>Mobile: +91 8427861995</p>
                <p>LinkedIn: linkedin.com/in/satyam-anand33</p>
                <p>GitHub: github.com/Codename-satyam</p>

                <h3>Skills</h3>
                <ul>
                    <li>Languages: Java, C++, JavaScript, HTML, CSS</li>
                    <li>Frameworks: React.js, Laravel</li>
                    <li>Databases: MongoDB, Oracle</li>
                    <li>Tools: Visual Studio, IntelliJ</li>
                    <li>Soft Skills: Attentive, Reliable, Organized, Team Player, Adaptable</li>
                </ul>

                <h3>Projects</h3>

                <p>
                    <strong>Jigyasa — Gamified Quiz Platform</strong> (React, Nov 2025)
                </p>
                <ul>
                    <li>Developed an interactive quiz platform with scoring, replayability, and instant feedback.</li>
                    <li>Implemented component-based architecture for scalability.</li>
                    <li>Optimized UI rendering for smooth gameplay without reloads.</li>
                    <li>Tech: React.js | GitHub: Quizy2</li>
                </ul>

                <p>
                    <strong>AniBuy — Anime Merchandise Platform</strong> (Apr 2024)
                </p>
                <ul>
                    <li>Built a responsive anime e-commerce platform with cart and checkout flow.</li>
                    <li>Implemented authentication and session-based login.</li>
                    <li>Used MongoDB for product data and React for reusable UI components.</li>
                    <li>Tech: React.js, MongoDB | GitHub: Anibuy</li>
                </ul>

                <p>
                    <strong>Quizzy — Laravel Quiz Application</strong> (May 2025)
                </p>
                <ul>
                    <li>Developed full-stack quiz system with timers, scores, and leaderboards.</li>
                    <li>Implemented secure authentication and question CRUD operations.</li>
                    <li>Added admin control for question management.</li>
                    <li>Tech: Laravel, HTML, CSS | GitHub: Quizy</li>
                </ul>

                <p>
                    <strong>Recipe Generator Web Application</strong> (March 2025)
                </p>
                <ul>
                    <li>Built a recipe recommendation app based on ingredient input.</li>
                    <li>Implemented pattern-matching logic for accurate suggestions.</li>
                    <li>Enabled live updates without page refresh.</li>
                    <li>Tech: HTML, CSS, JavaScript | GitHub: RecipeGen</li>
                </ul>

                <h3>Training</h3>
                <p>
                    <strong>Summer Training – C++ with DSA</strong> (Jun–Jul 2024)
                </p>
                <ul>
                    <li>Completed 6-week intensive training on algorithms and data structures.</li>
                    <li>Built file management systems and a mini search engine.</li>
                    <li>Worked with recursion, linked lists, trees, sorting, and dynamic programming.</li>
                    <li>Tech Stack: C++, DSA</li>
                </ul>

                <h3>Certificates</h3>
                <ul>
                    <li>Google UX Design Professional Certificate — Coursera (Nov 2025)</li>
                    <li>Cloud Computing — NPTEL (Jan–Apr 2025)</li>
                    <li>Advance Your Thought Leadership — LinkedIn Learning (Jul–Oct 2024)</li>
                    <li>Prompt Engineering for ChatGPT — Coursera (Jan–Feb 2024)</li>
                    <li>Build AI Apps with ChatGPT, DALL·E, GPT-4 — Coursera (Jan–May 2024)</li>
                    <li>Data Structures & Algorithms — NeoColab (Aug 2023–Jan 2024)</li>
                    <li>C++ Programming — NeoColab (Aug 2023–Jan 2024)</li>
                    <li>ReactJS Essentials — LinkedIn Learning (Nov–Dec 2023)</li>
                    <li>Programming in C++ (Hands-on) — Coursera (Sep 2024)</li>
                </ul>

                <h3>Achievements</h3>
                <ul>
                    <li>Earned 4⭐ in Java and 4⭐ in C++ on HackerRank.</li>
                    <li>Solved 100+ DSA problems on LeetCode.</li>
                    <li>2nd Runner-Up — Speech / Declamation Competition.</li>
                </ul>

                <h3>Education</h3>
                <p>
                    <strong>Bachelor of Technology — Computer Science & Engineering</strong><br />
                    Lovely Professional University, Punjab (2022–Present)<br />
                    CGPA: 7.03
                </p>

                <p>
                    <strong>Intermediate</strong><br />
                    Kendriya Vidyalaya Adampur (2020–2022) — 78.2%
                </p>

                <p>
                    <strong>Matriculation</strong><br />
                    Emm Aar International, Adampur (2019–2020) — 85%
                </p>
            </div>
        ),
        contact: (
                <div>
                    <h2>Contact Me</h2>
                    <h3>Get In Touch</h3>
                    <p>I'd love to hear from you! Feel free to reach out through any of the following channels:</p>

                    <h3>Email</h3>
                    <p><a href="mailto:satyamanand643@gmail.com">satyamanand643@gmail.com</a></p>

                    <h3>Social Media</h3>
                    <p><a href="https://www.linkedin.com/in/satyam-anand33/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                    <p><a href="https://github.com/Codename-satyam" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                    <p><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></p>

                    <h3>Location</h3>
                    <p>City, State, Country</p>

                    <h3>Availability</h3>
                    <p>Available for freelance projects and full-time opportunities.</p>
                </div>
                ),
                explorer: (
                <div style={{ width: '100%', height: '100%' }}>
                    <iframe 
                        title="Portfolio Website"
                        src="https://my-portfolio-pi-kohl-66.vercel.app/" 
                        frameBorder="0"
                        style={{ width: '100%', height: '100%', border: 'none' }}
                    />
                </div>
        ),
        music: (
            <div>
                <Music />
            </div>
        ),
        pictures: (
            <div>
                <Pictures />
            </div>
        ),
        documents: (
            <div style={{ width: '100%', height: '100%' }}>
                <Documents />
            </div>
        )
    };

    return appContents[appId] || null;
};

export const appConfig = {
    myComputer: {
        id: 'myComputer',
        title: 'My Computer'
    },
    projects: {
        id: 'projects',
        title: 'Projects'
    },
    resume: {
        id: 'resume',
        title: 'Resume.txt'
    },
    contact: {
        id: 'contact',
        title: 'Contact'
    },
    explorer: {
        id: 'explorer',
        title: 'Windows Explorer'
    },
    music: {
        id: 'music',
        title: 'Windows Media Player'
    },
    pictures: {
        id: 'pictures',
        title: 'Windows Picture Viewer'
    },
    documents: {
        id: 'documents',
        title: 'My Documents'
    }
};
