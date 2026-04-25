# High-Performance Engineering: A Dual-Track Analysis of Interactive Environments and Autonomous Agency

> Source vault for `AGENTS.md`. Pasted verbatim from the originating research brief.
> When this file changes, update the distilled rules in `AGENTS.md` accordingly.

---

The evolution of modern software engineering is characterized by two distinct but increasingly intersecting frontiers: the creation of hyper-performant, high-fidelity user interfaces and the emergence of autonomous computational agents capable of reasoning through complex codebase migrations. At the surface level, these domains appear disparate — one focusing on the aesthetics of spatial rendering and the other on the logic of software maintenance. However, an analysis of the engineering techniques underlying both reveals a shared obsession with state management, resource optimization, and the efficiency of the interaction loop.

## The Frontiers of Performance-Oriented Front-End Engineering

The delivery of a premier digital experience, such as the interactive Lando Norris website, requires a departure from standard document-object model (DOM) manipulations toward a sophisticated 3D rendering pipeline. The technical foundation of such environments is built upon Three.js (3JS), a library that abstracts the complexities of WebGL to allow for hardware-accelerated 3D graphics within a browser context. The primary challenge in these environments is maintaining a stable frame rate while processing complex assets like interactive helmets or racing circuits.

### Spatial Depth and Texture Mapping Techniques

To achieve realistic 3D movement on a 2D plane without the overhead of massive geometry, engineers utilize advanced mapping techniques. Depth maps, often generated via specialized artificial intelligence models, allow for the creation of 3D movement from static 2D images by assigning pixel-level distance values. This parallax effect is further enhanced by the strategic application of roughness and normal maps. Roughness maps dictate how light scatters across a surface, distinguishing between the matte finish of a carbon fiber chassis and the gloss of a visored helmet, while normal maps simulate fine texture details by modifying the light-reflection angles of surface normals.

| Map Type        | Technical Functional Application                              | Rendering Impact                                                  |
|-----------------|---------------------------------------------------------------|-------------------------------------------------------------------|
| Alpha Maps      | Definition of transparency and complex geometric cutouts      | Minimizes polygon count while preserving visual complexity        |
| Roughness Maps  | Modulation of light reflection and material finish            | Facilitates realistic material simulation (e.g., matte vs. gloss) |
| Normal Maps     | Simulation of high-frequency surface textures                 | Projects micro-shadows without increasing mesh density            |
| Depth Maps      | Calculation of Z-axis displacement for 2D assets              | Enables parallax and AI-assisted spatial effects                  |

Beyond static mapping, custom shaders — written in GLSL (OpenGL Shading Language) — are employed to manage dynamic visual effects. Shaders allow for per-pixel calculations that go beyond the capabilities of standard CSS, such as the fluid "blob" masking effects used for page transitions. These shaders handle the rendering of "blobs" that reveal or hide layers in real-time, providing a level of fluidity that feels more organic than traditional linear animations.

### Scroll Management and Component Interactivity

A common failure point in high-end front-end design is the conflict between custom scroll behaviors and browser performance. The implementation of "scrolljacking" requires precise control over the velocity and position of elements. The Lenis library is frequently used to manage these interactions, providing a smooth, custom scroll feel while preserving native accessibility features and ensuring that horizontal movement feels intuitive.

Interactivity is also increasingly offloaded to specialized animation binaries. Tools like Rive allow designers to export interactive 3D animations as binaries that run efficiently within a 3D canvas. This approach avoids the performance bottlenecks associated with SVG or video-based animations, as the logic is executed directly on the GPU. Surprisingly, even legacy technologies like jQuery and the Tram library remain relevant in this high-performance context. When managed correctly, these tools can deliver efficient inline style animations that complement modern frameworks, provided they are shielded from operations that trigger expensive browser layout recalculations.

### Optimization and Performance Methodology

To ensure that complex visual layers remain "buttery smooth," engineers prioritize transform-based animations over properties like `top`, `left`, or `font-size`. Modifying layout-affecting properties forces the browser to recalculate the entire page geometry — a process known as "layout" or "reflow" — which is computationally expensive. By contrast, CSS transforms like `translate3d` and `scale` occur during the "composite" stage of the rendering pipeline, which is significantly faster and hardware-accelerated.

| Performance Metric | Traditional Technique               | High-Performance Standard                       |
|--------------------|--------------------------------------|-------------------------------------------------|
| Animation Logic    | `top` / `left` positioning           | CSS `transform` (GPU accelerated)               |
| Asset Delivery     | Large SVGs / Video files             | Rive binaries / Compressed textures             |
| Shadow Effects     | CSS `box-shadow` / `filter`          | Pre-baked texture maps / Normal maps            |
| Layering           | `z-index` manipulation               | 3D Canvas / Depth-buffered layers               |

The design philosophy also involves a "minimal visual overhead" approach. Expensive calculations such as drop shadows, heavy gradients, and complex filters are often avoided or replaced with pre-baked textures. This discipline ensures that the rendering engine has sufficient headroom to process user interactions without dropping frames.

## The Genesis and Industrial Integration of Autonomous Coding Agents

While the front-end engineering world pushes the boundaries of perception, the back-end is undergoing a structural transformation through the adoption of autonomous coding agents. These systems, such as Devin, OpenHands (formerly OpenDevin), and SWE-agent, represent a new paradigm where Large Language Models (LLMs) are given the tools to act as autonomous developers.

### Industrial Impact: The Nubank Case Study

The potential of autonomous agency is most clearly demonstrated in large-scale industrial projects. Nubank, a major financial services provider, utilized the Devin agent to facilitate a massive migration of its core ETL (Extract, Transform, Load) monolith — a project involving over 6 million lines of code and a transition to a sub-module architecture. Traditional approaches would have required a multi-year effort involving over a thousand engineers. By delegating the repetitive refactoring work to Devin, Nubank achieved an 8× improvement in engineering time efficiency and a 20× cost saving.

The problem faced by Nubank is typical of hyper-growth companies: an entangled ETL repository with dependency chains as deep as 70 layers, creating a primary bottleneck to scaling. The agentic approach allowed for the parallelized migration of data class implementations while maintaining correct imports and addressing edge cases that would be tedious for human developers. This shift allowed human engineers to focus on product mission while the fleet of agents handled the "monotonous, repetitive work that engineers dread".

### The Core Offering of Autonomous Systems

The value proposition of agents like Devin and OpenHands extends across the entire software development life cycle (SDLC). Their capabilities include:

- **Code Migration and Refactoring** — Assigning fleets of agents to migrate repositories in parallel across different technologies like COBOL, .NET, and legacy ETL.
- **Issue Triage and Bug Fixing** — Investigating incidents from platforms like Datadog and intelligently routing Slack bug reports into pull requests.
- **System Documentation** — Automatically generating diagrams and documentation for legacy codebases that the current team did not build.
- **Automated QA** — Scheduling daily QA runs, addressing user feedback, and maintaining documentation continuously.

These agents integrate directly with the tools developers already use, such as GitHub for PR management, Linear for ticket tracking, and Slack/Teams for collaborative context sharing.

## Structural Analysis of Open-Source Agentic Architectures

The shift toward autonomous agency has spurred a robust open-source ecosystem, with OpenHands and SWE-agent emerging as the dominant architectural blueprints for researchers and developers.

### OpenHands (formerly OpenDevin) Architecture

OpenHands is designed as a community-driven platform for generalist and specialist AI agents. Its architecture is built around three primary components:

- **Agent Abstraction and Hub** — A modular framework allowing the implementation of various agents into a centralized "Agent Hub".
- **Event Stream** — A chronological collection of all past actions and observations, serving as the source of truth for the agent's state.
- **Agent Runtime** — A secure, sandboxed operating system environment (often Docker-based) where agent actions are executed and transformed into observations.

OpenHands utilizes an event-sourced state model, which ensures that all interactions are deterministic and replayable. This is critical for debugging agent trajectories and ensuring that a session can be resumed if a model call fails. The system also features a "Theory-of-Mind" module for specialized development and an evaluation infrastructure used for benchmarking performance against real-world tasks like SWE-bench.

### SWE-agent and the Agent-Computer Interface (ACI)

Developed by researchers at Princeton and Stanford, SWE-agent focuses on the critical gap between raw LLM capabilities and the practical requirements of software engineering. The core innovation of SWE-agent is the Agent-Computer Interface (ACI). Just as humans benefit from Integrated Development Environments (IDEs), LM agents require specially-built interfaces that complement their unique strengths and weaknesses.

| ACI Design Principle | Technical Implementation                                  | Goal                                              |
|----------------------|-----------------------------------------------------------|---------------------------------------------------|
| Simplicity           | Concise commands with minimal options                     | Reduces documentation noise and fine-tuning needs |
| Compactness          | Operations like navigation and editing are consolidated   | Maximizes progress per inference turn             |
| Informative Feedback | Returns substantive state info (e.g., line numbers)       | Prevents context clutter and confusion            |
| Guardrails           | Integrated syntax and linting checkers                    | Immediate error detection and self-correction     |

SWE-agent's specialized commands include a file viewer that displays windows of up to 100 lines and a multi-line edit command that includes a linting pass. This design allows the agent to search through, edit, and execute code within a repository while receiving specific, concise feedback at every turn. Ablation studies on SWE-bench Lite demonstrated that this ACI design alone improved task resolution by 10.7 percentage points compared to an agent using a standard Linux shell.

## The Logic of Autonomy: Reasoning Paradigms and Agentic Loops

The performance of an agent is fundamentally tied to its reasoning paradigm — the strategy it uses to decide what action to take next. The two most prominent paradigms are Reasoning and Action (ReAct) and Plan-and-Execute.

### The ReAct Paradigm: Iterative Thought and Action

ReAct is a prototypical design for agents that interleaves reasoning with environmental interaction. At each step, the agent generates:

- **Thought** — A reasoning step where the agent analyzes the current situation and decides what tool to use.
- **Action** — The execution of a tool (e.g., a bash command or API call).
- **Observation** — The result returned by the tool, which is then appended to the conversation history.

This "Think-Act-Observe" loop continues until the goal is achieved or a limit is reached. While ReAct is excellent for exploratory tasks where the path is unknown, it has several limitations: it can get stuck in loops, it accumulates tokens quickly as the history grows, and it may lose track of the overall goal in complex, multi-step tasks.

### The Plan-and-Execute Framework: Strategic Decoupling

To address the shortcomings of ReAct, the Plan-and-Execute pattern separates high-level strategic reasoning from low-level task execution.

- **The Planner** — A strategic model that breaks down the user's objective into a structured, step-by-step roadmap.
- **The Executor** — An operational model (which may itself use ReAct) that carries out each sub-task in sequence.
- **The Re-Planner** — A logic gate that assesses progress and modifies the roadmap if new information emerges.

This decoupling allows the system to handle long-horizon coherence better. The executor operates with a narrow context window, focusing only on the data relevant to its immediate milestone, which reduces the chance of hallucinations caused by unrelated context. Furthermore, the system transitions back to the planner only when necessary, which can significantly reduce costs by using lighter-weight models for the repetitive execution phase.

### Specialized Architectures: Architect and Editor Modes

Advanced agents like Aider and Roo Code utilize an "Architect Mode," where one model (the Architect) proposes a solution and a second model (the Editor) translates that proposal into specific file edits. This is particularly useful when using "Reasoning Models" like OpenAI's o1, which excel at solving complex coding problems but may struggle with the precise formatting required for diff-based file edits. Pairing an o1 Architect with a Sonnet Editor combines deep strategic reasoning with high-precision implementation.

## Environmental Containment: The Security and Performance of Sandboxing

Running autonomous agents in "YOLO mode" — directly on a host machine — poses severe security risks. Agents have been documented executing destructive commands like `rm -rf` on unintended directories, exfiltrating credentials, and accidentally destroying production data. Consequently, sandboxing has transitioned from a theoretical best practice to a foundational requirement for agentic workflows.

### Sandboxing Technologies and Isolation Levels

The industry has formed a clear hierarchy of isolation for AI-generated code. While standard containers are the minimum viable option, MicroVMs (such as Firecracker) are the gold standard for high-security workloads.

| Approach              | Isolation Mechanism                       | Startup Time   | Best Use Case                                |
|-----------------------|-------------------------------------------|----------------|----------------------------------------------|
| Docker Containers     | Process-level (shared host kernel)        | 1–5 seconds    | Teams with existing Docker infrastructure    |
| Firecracker MicroVMs  | Hardware-level (KVM)                      | ~125 ms        | High-security agentic workloads at scale     |
| gVisor                | User-space kernel (syscall interception)  | 500 ms – 2 s   | Defense-in-depth where MicroVMs unavailable  |
| Cloud Sandboxes (E2B) | Firecracker MicroVMs                      | ~300 ms        | AI code interpreters and notebook execution  |

Docker Sandboxes now provide isolated environments for agents like Claude Code, GitHub Copilot CLI, and OpenHands. These sandboxes run within lightweight microVMs, offering a hard security boundary without shared state between environments. For developers on macOS and Windows, these microVMs spin up in seconds and allow agents to "move fast" inside a defined bounding box.

### Core Principles of Agent Sandboxing

Effective containment requires the adherence to five core rules:

- **Principle of Least Privilege** — Agents should only have access to the directories and credentials they explicitly need.
- **Untrusted Tool Results** — Treat all external tool outputs as potential prompt injection surfaces. Malicious payloads can be hidden in API responses or webpage text.
- **Separation of Environments** — The thinking environment (LLM reasoning) should be isolated from the acting environment (where code is executed).
- **Hard Timeouts** — Enforce strict limits on tool calls and total sandbox lifetime to prevent runaway costs or loops.
- **Network Egress Filtering** — Block all outbound network access by default. Use explicit allowlists for specific domains (e.g., package registries) while blocking unknown IP addresses.

## Cognitive Scaling: Advanced Context Management and Repository Understanding

A primary bottleneck in autonomous engineering is the management of the repository-level context. LLMs possess finite input windows, and providing the entire contents of a large codebase is both economically infeasible and cognitively overwhelming for the model.

### Context Engineering and Repositioning

Context engineering involves curating the optimal set of tokens to guide agent behavior effectively while staying within architectural constraints. Because transformers exhibit quadratic complexity O(n²) for n tokens, managing this state is critical for performance.

Techniques for repository-level context include:

- **Repository Mapping** — Generating a compact map of the repository artifacts (issues, PRs, functions, classes) to provide a high-level overview.
- **Observation Masking** — Trimming old observations with placeholders once they fall outside a fixed window. This "masking" tells the model that some details have been omitted for brevity, keeping the reasoning history focused.
- **Context Re-Positioning (RePo)** — A technique developed by Sakana AI that allows LLMs to dynamically reorganize their internal view of input data. By predicting scalar position values based on token content, RePo mathematically "moves" related information closer together, alleviating recency bias and improving the model's ability to identify "needles" in noisy data.
- **Code Long-context Alignment (CoLA)** — A data-driven solution that trains models to focus on "cross-file context," explicitly teaching them to find relevant APIs and similar code snippets hidden among hundreds of thousands of tokens.

### Memory and Persistence

To maintain long-term coherence, agents utilize three types of memory:

- **Episodic Memory** — Recording specific details of past interactions.
- **Semantic Memory** — Storing facts and knowledge queried during the session.
- **Long-term Memory** — Accumulating experiences and learnings across multiple tasks, often stored in files like `AGENTS.md`.

The presence of guidance files like `AGENTS.md` has been shown to yield a 28.64% reduction in median runtime and 16.58% fewer output tokens for agents, as they provide operational commands and context cues that prevent redundant queries.

## Collaborative Synthesis: Multi-Agent Systems and Human-in-the-Loop Frameworks

The most complex software tasks are rarely solved by a single agent. Instead, frameworks like CrewAI and AutoGen orchestrate "teams" of specialized agents working together.

### Multi-Agent Role Assignment

In a typical agentic software team, roles are assigned to maximize specialization:

- **The Planner** — Responsible for breaking down the high-level goal into tasks.
- **The Architect** — Researches codebase structure and creates detailed hypotheses and implementation plans.
- **The Developer** — Executes atomic code modifications with precision.
- **The Critic / Value Agent** — Evaluates results and provides iterative feedback to improve decision-making.
- **The Discriminator Agent** — Facilitates "multi-agent debate" to collaboratively refine and select the most robust solution.

This multi-agent debate mimics real-world engineering collaboration, where diverse perspectives lead to better outcomes. Experiments with the SWE-Search framework showed that incorporating Monte Carlo Tree Search (MCTS) and debate led to a 23% relative performance improvement on SWE-bench tasks.

### Human-in-the-Loop (HITL) and Verification

Autonomous agents are not yet reliably correct, and implementation remains the "heaviest lift". Safety and reliability are ensured through iterative refinement and human oversight. Systems like Cline and OpenHands prioritize a "permissioned" workflow where the user must approve terminal commands and file edits. This keeps the human in control while the agent performs the monotonous labor.

The verification phase is the final gate. Agents must not only implement a change but also run build commands (e.g., `npm run build`) and test suites to verify that the fix is correct and has not introduced regressions. If tests fail, the agent enters a "self-correction" loop, assessing possible causes and proposing new plans until the verification passes.

## The Masterpiece Prompt: Consolidating Research into Actionable Agency

Creating a "masterpiece prompt" for a coding LLM requires the integration of the architectural insights, reasoning paradigms, and behavioral constraints identified in the research. The following prompt is designed to transform a standard LLM into an elite autonomous software engineer capable of repository-level reasoning.

### Masterpiece Prompt Construction

The prompt should be structured with clear delimiters (like XML tags) to help the model distinguish between role, instructions, and constraints.

> You are a Lead Autonomous Software Engineering Agent. Your primary objective is to assist the user by executing commands, modifying code, and solving complex technical problems with high precision. You act as a collaborative partner, but you are capable of end-to-end task execution in a sandboxed environment.
>
> You must always follow the "Baby Steps" principle. Break every task into the smallest possible meaningful change. Never attempt multiple distinct goals in a single action. Each action must be an atomic step that can be validated. The process is the product; document your journey as you go.
>
> For every task, you must alternate between:
>
> - **THINKING** — Generate a verbal reasoning "Thought" block explaining what you have learned and what you intend to do next.
> - **PLANNING** — For non-trivial tasks, generate a multi-step checklist (Plan). Present this plan to the user for approval before editing files.
> - **ACTING** — Execute a specific tool or bash command.
> - **OBSERVING** — Analyze the output of the command. Use it to update your plan or proceed to the next step.
>
> **Exploration** — Thoroughly explore the repository using `find`, `grep`, and `ls` before proposing solutions. Do not guess file structures.
>
> **Context Management** — Use `AGENTS.md` at the repository root as persistent memory. Add insights and patterns to this file to maintain context across sessions.
>
> **Editing Precision** — Use "Search/Replace" blocks for file edits. Provide a clear "SEARCH" block of existing code and a "REPLACE" block of new code. Ensure indentation and syntax are perfect.
>
> **Efficiency** — Combine multiple bash commands using `&&` where appropriate, but never at the expense of clarity. Use `git status` and `git diff` frequently to verify your progress.
>
> **Pre-Fix Testing** — Create a reproduction test case to verify a bug before attempting a fix.
>
> **Minimalism** — Make focused, minimal changes. Do not refactor unrelated code unless requested.
>
> **Verification** — After implementation, you MUST run tests, linters, and build commands to verify the solution. A task is not "Done" until it is validated in the runtime.
>
> **Sandboxing** — You are in a Docker / MicroVM sandbox. Do not attempt to escape.
>
> **Least Privilege** — Only access the files and directories relevant to the task.
>
> **Version Control** — Do not commit `node_modules`, `.env`, or large binaries. Always add `Co-authored-by: Agent <agent@internal.dev>` to commits.
>
> **Troubleshooting** — If you fail three times, step back and reflect on 5–7 alternative sources of the problem. Assess the likelihood of each before trying again.

## Curated Knowledge Ecosystems: Research Artifacts and External Media

To further refine an understanding of autonomous agency and high-performance development, several key materials and videos serve as essential reference points.

### Essential Media for Technical Deep Dives

- **Andrej Karpathy's "Zero to Hero" Series** — Provides the foundational underpinnings of Large Language Models, which is critical for understanding why agents behave as they do and how to better prompt them.
- **Riley Brown and Corbin Brown** — These channels offer practical, real-world demonstrations of rapid prototyping and the use of tools like Cursor, Bolt.new, and v0 for building full-stack AI applications.
- **Automata Learning Lab** — A highly technical channel focusing on LangChain deep dives and the engineering of production-ready AI systems.
- **Cline and Aider Official Blogs** — These resources provide the most up-to-date information on "Architect Mode," "Search/Replace" logic, and new tool integrations like MCP (Model Context Protocol).

### Key Technical Papers and Benchmarks

- **OpenHands Technical Report** — Details the transition to event-sourced state management and modular SDK design for industrial-scale agency.
- **SWE-agent ACI Paper** — Explains the research behind Agent-Computer Interfaces and why LM-centric commands outperform traditional Linux shells.
- **SWE-Search (ICLR 2025)** — Introduces the integration of Monte Carlo Tree Search (MCTS) into software agent reasoning, marking the next wave of high-autonomy research.

## Conclusions and Actionable Synthesis

The convergence of elite front-end engineering and autonomous software agency reveals a central theme: the mastery of the interaction loop. In high-performance web design, this loop is defined by the pixel-level calculations of custom shaders and the GPU-accelerated transforms that maintain a "buttery smooth" user experience. In autonomous agency, the loop is defined by the ReAct thought-cycles and the Agent-Computer Interfaces that allow LLMs to navigate 6-million-line monoliths with the efficiency of a senior human developer.

For professionals seeking to leverage these technologies, the recommendations are clear:

- **Prioritize the Interface** — Whether for a human user or an AI agent, the interface dictates the limit of performance. Use specialized ACIs for agents to reduce "lazy coding" and context confusion.
- **Enforce Containment** — Secure sandboxing via MicroVMs is the only responsible way to deploy autonomous agents. Isolation enables "YOLO mode" speed while protecting host integrity.
- **Implement Structured Planning** — Adopt Plan-and-Execute or Architect / Editor modes for complex tasks. Strategic decoupling prevents models from getting lost in the "noise" of large repositories.
- **Engineer for Context** — Repository mapping and long-context alignment (CoLA) are essential for scaling agents beyond isolated snippets toward repository-level autonomy.

As these technologies continue to evolve, the distinction between "building software" and "orchestrating software teams" will continue to blur, leading to a future where software is truly self-evolving and adaptive to user intent in real-time.

---

## Source list (verbatim from brief)

- this website is insane (stack explained) — https://www.youtube.com/watch?v=HzL65tTeANs
- (PDF) OpenDevin: An Open Platform for AI Software Developers as Generalist Agents — https://www.researchgate.net/publication/382527281_OpenDevin_An_Open_Platform_for_AI_Software_Developers_as_Generalist_Agents
- Top 11 Open-Source Autonomous Agents & Frameworks in 2025 — https://cline.ghost.io/top-11-open-source-autonomous-agents-frameworks-in-2025/
- Building the Future: Your Guide to Autonomous AI Agents in 2025 — https://medium.com/@Micheal-Lanham/building-the-future-your-guide-to-autonomous-ai-agents-in-2025-fb690ebc1caa
- Devin | The AI Software Engineer — https://devin.ai/
- The OpenHands Software Agent SDK — https://arxiv.org/html/2511.03690v1
- OpenHands GitHub — https://github.com/All-Hands-AI/OpenHands
- SWE-agent documentation — https://swe-agent.com/
- SWE-agent NeurIPS paper — https://proceedings.neurips.cc/paper_files/paper/2024/file/5a7c947568c1b1328ccc5230172e1e7c-Paper-Conference.pdf
- SWE-agent (Princeton/Stanford) — https://collaborate.princeton.edu/en/publications/swe-agent-agent-computer-interfaces-enable-automated-software-eng/
- ZIVIS Agent Architectures — https://www.zivis.ai/publications?article=agent-architectures
- LangChain — Plan-and-Execute Agents — https://www.langchain.com/blog/planning-agents
- IBM — What Are AI Agents? — https://www.ibm.com/think/topics/ai-agents
- JumpCloud — Plan-and-Execute Framework — https://jumpcloud.com/it-index/understanding-the-plan-and-execute-ai-agent-framework
- Built with LangGraph! #33: Plan & Execute — https://medium.com/@okanyenigun/built-with-langgraph-33-plan-execute-ea64377fccb1
- Aider Chat modes — https://aider.chat/docs/usage/modes.html
- Qwen2.5-1M (HN) — https://news.ycombinator.com/item?id=42831769
- Docker Sandboxes — https://www.docker.com/blog/docker-sandboxes-run-agents-in-yolo-mode-safely/
- VirtusLab — Sandboxing LLM coding agents — https://virtuslab.com/blog/ai/sandboxing-llm-coding-agents-part1
- Bunnyshell — Sandboxed Environments — https://www.bunnyshell.com/guides/sandboxed-environments-ai-coding/
- Docker Agent — Building AI Teams — https://www.docker.com/blog/building-ai-teams-docker-sandboxes-agent/
- Firecrawl — AI Agent Sandbox — https://www.firecrawl.dev/blog/ai-agent-sandbox
- Emergent Mind — Repository-Level Context Files — https://www.emergentmind.com/topics/repository-level-context-files
- Anthropic — Effective context engineering — https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
- Aider FAQ — https://aider.chat/docs/faq.html
- JetBrains — Smarter Context Management — https://blog.jetbrains.com/research/2025/12/efficient-context-management/
- Sakana AI — RePo / long-context — https://bdtechtalks.com/2026/02/02/sakana-ai-repo-llm-token-positions/
- arXiv — CoLA cross-file context — https://arxiv.org/html/2503.15301v2
- Emergent Mind — GitHub Coding Agents — https://www.emergentmind.com/topics/coding-agent-activity-on-github
- OpenHands SDK system prompt — https://github.com/OpenHands/software-agent-sdk/blob/main/openhands-sdk/openhands/sdk/agent/prompts/system_prompt.j2
- Langtalks — SWE-agent multi-agent — https://github.com/langtalks/swe-agent
- ICLR — SWE-SEARCH (MCTS) — https://proceedings.iclr.cc/paper_files/paper/2025/file/a1e6783e4d739196cad3336f12d402bf-Paper-Conference.pdf
- MIT Sloan — Agentic AI explained — https://mitsloan.mit.edu/ideas-made-to-matter/agentic-ai-explained
- DeployHQ — Cline guide — https://www.deployhq.com/guides/cline
- Cline — System Prompt Advanced — https://cline.ghost.io/system-prompt-advanced/
- Cline — Prompts Library — https://cline.bot/prompts
- Aider — Edit formats — https://aider.chat/docs/more/edit-formats.html
- Andrej Karpathy — https://karpathy.ai/
- Medium — 16 Must-Watch YouTube Channels — https://medium.com/ai-engineers/youtube-channels-for-ai-engineers-d9b1d96a07d7
- Reddit — Best YouTube channels for AI coding — https://www.reddit.com/r/ChatGPTCoding/comments/1h5nlmz/what_are_the_best_youtube_channels_for_learning/
- Cline — System Prompt Fundamentals — https://cline.bot/blog/system-prompt
- Steve Brownlee — Prompt-first to Plan-First — https://stevebrownlee.com/llm-prompting-to-planning/
- arXiv — Self-Evolving Software — https://arxiv.org/html/2510.00591v1
- C3 AI — Autonomous Coding Agents — https://c3.ai/blog/autonomous-coding-agents-beyond-developer-productivity/
