```markdown
# AGENTS.md - AI Coding Agent Guidelines

These guidelines outline the principles and rules for development of AGENTS.md, a repository for AI coding agents. Adherence to these principles is crucial for ensuring maintainability, reliability, and efficient development.

## 1. DRY (Don't Repeat Yourself)

*   All code within the repository must be self-contained and reusable.
*   Avoid duplication of logic or implementation across multiple files.
*   Favor solutions that can be easily adapted for different scenarios.
*   Document reusable components thoroughly.

## 2. KISS (Keep It Simple, Stupid)

*   Strive for simplicity in design and implementation.
*   Prioritize readability and maintainability.
*   Avoid unnecessary complexity.
*   Keep the code concise and focused on its primary purpose.

## 3. SOLID Principles

*   **Single Responsibility Principle:** Each class/module/agent should have a single, well-defined responsibility.
*   **Open/Closed Principle:**  The system should be extensible through public interfaces without modifying the core implementation.
*   **Liskov Substitution Principle:**  Subclasses should be able to replace a base class without affecting the correctness of the program.
*   **Interface Segregation Principle:** Clients should not be forced to depend on methods they do not use.
*   **Dependency Inversion Principle:**  High-level modules should be dependent on low-level modules, which in turn depend on abstractions.

## 4. YAGNI (You Aren't Gonna Need It)

*   Implement only the necessary functionality.
*   Don’t introduce features or code that is not currently required.
*   Defer implementation details to later iterations when they become necessary.
*   Refactor and improve as needed, but avoid unnecessary code.

## 5. Testability and Mocking

*   All mocks and fake implementations must be used **EXCLUSIVELY** for unit testing.  They should not be incorporated into the core logic.
*   Unit tests should thoroughly verify the functionality of individual agents and components.
*   Maintain clear separation between testing and production code.
*   Test coverage should exceed 80% for all critical components.

## 6. Code Length Limit (180 Lines)

*   The total length of all code within the repository (including comments, documentation, and setup files) must not exceed 180 lines.
*   Code should be organized logically and avoid overly long functions or methods.

## 7.  Code Style & Formatting

*   Use a consistent code style (e.g., ESLint, Prettier) throughout the project.
*   Follow a specific code formatting style (e.g., Black, Docstrings).
*   Include clear and concise comments to explain complex logic.

## 8.  Documentation Requirements

*   Each file should include a detailed README.md with a description of the file's purpose, inputs, outputs, and usage.
*   Docstrings should be provided for all functions and classes, explaining their purpose, parameters, and return values.
*   Consider using a standard format for documentation (e.g., Sphinx).

## 9.  File Structure (Example - Adapt as needed)

```
AGENTS.md
├── README.md
├── agents/
│   ├── agent_1.py
│   ├── agent_2.py
│   └── ...
├── utils/
│   ├── data_processing.py
│   ├── network_logic.py
│   └── ...
├── tests/
│   ├── test_agent_1.py
│   ├── test_agent_2.py
│   └── ...
└── .gitignore
```

## 10.  Specific Considerations for AI Agents

*   Prioritize modular design for agent components.
*   Implement state management mechanisms clearly.
*   Consider using version control for agent configurations and data.
*   Establish clear API contracts for agent communication.

## 11.  Continuous Improvement

*   Regularly review and update this guideline as needed.
*   Monitor code quality and identify areas for improvement.
*   Encourage peer review and code review.
```