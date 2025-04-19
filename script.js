document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('output');
    const commandInput = document.querySelector('.command-input');
    const terminal = document.querySelector('.terminal-content');

    // Available commands
    const commands = {
        'me -h': () => `
<div class="social-links">
<span style="color: #7aa2f7">•</span> <a href="https://github.com/Aaditya-5281" target="_blank" rel="noopener noreferrer" style="color: #9ece6a; text-decoration: none" onmouseover="this.style.color='#000000'" onmouseout="this.style.color='#9ece6a'">GitHub</a>
<br>
<span style="color: #7aa2f7">•</span> <a href="https://x.com/Aaditya26082004" target="_blank" rel="noopener noreferrer" style="color: #9ece6a; text-decoration: none" onmouseover="this.style.color='#1DA1F2'" onmouseout="this.style.color='#9ece6a'">Twitter</a>
<br>
<span style="color: #7aa2f7">•</span> <a href="https://medium.com/@aadityakumar26082004" target="_blank" rel="noopener noreferrer" style="color: #9ece6a; text-decoration: none" onmouseover="this.style.color='#808080'" onmouseout="this.style.color='#9ece6a'">Medium</a>
</div>

<div class="about-me">
<span style="color: #7dcfff">I'm a software developer and content creator who builds amazing things.</span>
<br>
<span style="color: #7dcfff">I love working on open source projects and sharing my knowledge with others.</span>
</div>

<div class="help-prompt">
Type <span style="color: #f7768e">'help'</span> to see all available commands.
</div>`,
        'help': () => `<div class="help-header">
<span style="color: #7aa2f7">Available commands:</span>
</div>

<div class="help-commands">
<span style="color: #9ece6a">•</span> <span style="color: #f7768e">me -h</span> - Display about me information
<br>
<span style="color: #9ece6a">•</span> <span style="color: #f7768e">interests</span> - Show my interests
<br>
<span style="color: #9ece6a">•</span> <span style="color: #f7768e">contact</span> - Display contact information
<br>
<span style="color: #9ece6a">•</span> <span style="color: #f7768e">clear</span> - Clear the terminal
<br>
<span style="color: #9ece6a">•</span> <span style="color: #f7768e">help</span> - Show this help message
</div>`,
        'interests': () => `<div class="interests-header">
<span style="color: #7aa2f7">Programming Languages:</span>
</div>
<div class="interests-list">
<span style="color: #9ece6a">•</span> <span style="color: #7dcfff">Python, C, C++, Java, JavaScript, SQL</span>
</div>

<div class="interests-header">
<span style="color: #7aa2f7">Web Development:</span>
</div>
<div class="interests-list">
<span style="color: #9ece6a">•</span> <span style="color: #7dcfff">Frontend:</span> HTML, CSS, JavaScript, React.js, Tailwind CSS
<br>
<span style="color: #9ece6a">•</span> <span style="color: #7dcfff">Backend:</span> Node.js, Express.js
<br>
<span style="color: #9ece6a">•</span> <span style="color: #7dcfff">Database:</span> MongoDB (NoSQL), MySQL/PostgreSQL (SQL)
<br>
<span style="color: #9ece6a">•</span> <span style="color: #7dcfff">Full Stack:</span> MERN Stack Development
</div>

<div class="interests-header">
<span style="color: #7aa2f7">Artificial Intelligence & Machine Learning:</span>
</div>
<div class="interests-list">
<span style="color: #9ece6a">•</span> <span style="color: #7dcfff">Deep Learning:</span> CNNs, GANs
<br>
<span style="color: #9ece6a">•</span> <span style="color: #7dcfff">NLP:</span> Hugging Face Transformers, LangChain, Text Classification, Summarization
<br>
<span style="color: #9ece6a">•</span> <span style="color: #7dcfff">Agentic AI:</span> Multi-agent orchestration using AutoGen and LangChain
<br>
<span style="color: #9ece6a">•</span> <span style="color: #7dcfff">Libraries/Frameworks:</span> OpenCV, NumPy, Pandas, Scikit-learn, TensorFlow
</div>

<div class="interests-header">
<span style="color: #7aa2f7">Cloud Computing & Engineering:</span>
</div>
<div class="interests-list">
<span style="color: #9ece6a">•</span> <span style="color: #7dcfff">Cloud Platforms:</span> AWS, Azure, GCP
<br>
<span style="color: #9ece6a">•</span> <span style="color: #7dcfff">Infrastructure as Code:</span> Ansible
<br>
<span style="color: #9ece6a">•</span> <span style="color: #7dcfff">Containerization & Orchestration:</span> Docker, Kubernetes
<br>
<span style="color: #9ece6a">•</span> <span style="color: #7dcfff">Operating Systems:</span> Linux, WSL
<br>
<span style="color: #9ece6a">•</span> <span style="color: #7dcfff">CI/CD:</span> Basic knowledge of pipelines
</div>

<div class="interests-header">
<span style="color: #7aa2f7">Big Data & Distributed Systems:</span>
</div>
<div class="interests-list">
<span style="color: #9ece6a">•</span> <span style="color: #7dcfff">Technologies:</span> Apache Hadoop, Apache Spark
</div>

<div class="interests-header">
<span style="color: #7aa2f7">Computer Science Fundamentals:</span>
</div>
<div class="interests-list">
<span style="color: #9ece6a">•</span> <span style="color: #7dcfff">Core Subjects:</span> OS, Networks, DBMS, Software Engineering
<br>
<span style="color: #9ece6a">•</span> <span style="color: #7dcfff">Programming:</span> OOP, Version Control (Git)
</div>`,
        'contact': () => `<div class="contact-header">
<span style="color: #7aa2f7">Official channels:</span>
</div>

<div class="contact-list">
<span style="color: #9ece6a">•</span> <span style="color: #7dcfff">Email:</span> <a href="mailto:aadityakumar26082004@gmail.com" target="_blank" rel="noopener noreferrer" style="color: #f7768e; text-decoration: none">aadityakumar26082004@gmail.com</a>
<br>
<span style="color: #9ece6a">•</span> <span style="color: #7dcfff">GitHub:</span> <a href="https://github.com/Aaditya-5281" target="_blank" rel="noopener noreferrer" style="color: #f7768e; text-decoration: none" onmouseover="this.style.color='#000000'" onmouseout="this.style.color='#f7768e'">@Aaditya-5281</a>
<br>
<span style="color: #9ece6a">•</span> <span style="color: #7dcfff">Twitter:</span> <a href="https://x.com/Aaditya26082004" target="_blank" rel="noopener noreferrer" style="color: #f7768e; text-decoration: none" onmouseover="this.style.color='#1DA1F2'" onmouseout="this.style.color='#f7768e'">@Aaditya26082004</a>
<br>
<span style="color: #9ece6a">•</span> <span style="color: #7dcfff">Medium:</span> <a href="https://medium.com/@aadityakumar26082004" target="_blank" rel="noopener noreferrer" style="color: #f7768e; text-decoration: none" onmouseover="this.style.color='#808080'" onmouseout="this.style.color='#f7768e'">@aadityakumar26082004</a>
</div>`,
        'clear': () => {
            output.innerHTML = '';
            return '';
        }
    };

    // Initial command output
    output.innerHTML = commands['me -h']();

    // Handle command input
    commandInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const command = commandInput.textContent.trim().toLowerCase();
            
            // Create new command line
            const commandLine = document.createElement('div');
            commandLine.className = 'line';
            commandLine.innerHTML = `
                <span class="prompt">aaditya@portfolio</span>
                <span class="path">~</span>
                <span class="dollar">$</span>
                <span class="command">${command}</span>
            `;
            output.appendChild(commandLine);

            // Execute command and show output
            if (commands[command]) {
                const result = commands[command]();
                if (result) {
                    const outputElement = document.createElement('div');
                    outputElement.className = 'command-output';
                    outputElement.innerHTML = result;
                    output.appendChild(outputElement);
                }
            } else if (command !== '') {
                const errorElement = document.createElement('div');
                errorElement.className = 'command-output';
                errorElement.innerHTML = `<span style="color: #f7768e">Command not found: ${command}</span>`;
                output.appendChild(errorElement);
            }

            // Clear input and scroll to bottom
            commandInput.textContent = '';
            terminal.scrollTop = terminal.scrollHeight;
        }
    });

    // Focus input on terminal click
    terminal.addEventListener('click', () => {
        commandInput.focus();
    });

    // Initial focus
    commandInput.focus();
});