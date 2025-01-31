# Contributing to ChatBreeze

Thank you for your interest in contributing to ChatBreeze! We welcome contributions from the community and are grateful for any time you're willing to contribute.

## Getting Started

1. Fork the repository
2. Clone your fork
3. Create a new branch for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Contributing Guidelines

### Issues

- Only work on issues that are assigned to you
- If an issue isn't assigned to you but you'd like to work on it:
  1. Comment on the issue expressing your interest
  2. Wait for a maintainer to assign it to you
  3. Begin work only after the issue is assigned to you. (Important)
- **Important**: Issues will be closed without merging if PRs are submitted by contributors who weren't assigned to them

### Code Style Requirements

1. **Formatting**

   - Before submitting your PR, run Prettier in any client or server directory where you've made changes:
     ```bash
     npx prettier . --write
     ```

2. **Component Style**
   - Use functional components with hooks instead of class-based components
   - Good:
     ```javascript
     const MyComponent = () => {
       const [state, setState] = useState(null);
       return <div>{state}</div>;
     };
     ```
   - Avoid:
     ```javascript
     class MyComponent extends React.Component {
       constructor(props) {
         super(props);
         this.state = {};
       }
       render() {
         return <div></div>;
       }
     }
     ```

### Pull Request Process

1. Create your PR from your forked repository
2. Ensure all tests pass and code is properly formatted
3. Link the PR to the related issue
4. **Visual Documentation**:
   - Include screenshots of UI changes
   - For interactive features, attach a short screen recording
   - Screenshots/videos should show both before and after states when applicable
   - Recommended tools:
     - Screenshots: Built-in OS screenshot tools
     - Screen recording: [Loom](https://www.loom.com/) (free), [OBS](https://obsproject.com/) (free), or built-in OS screen recorder
   - Place visual documentation at the top of your PR description for easy review
5. Wait for review from maintainers
6. Address any requested changes
7. Once approved, your PR will be merged

### Code Review Checklist

Before submitting your PR, ensure:

- Code is formatted with Prettier
- Only functional components are used
- All new code has proper documentation
- No unnecessary console logs or debugging code
- Code follows project's naming conventions
- You've tested your changes locally
- Screenshots/recordings are attached for visual changes

### Visual Documentation Guidelines

#### When to Include Visuals

- UI component changes
- New features with visual elements
- Layout modifications
- Animation changes (screen recording required)
- Responsive design implementations (screenshots at multiple breakpoints)

#### Best Practices for Visuals

1. **Screenshots**

   - Capture the entire relevant window/component
   - Use high-resolution images
   - Highlight important changes if necessary

2. **Screen Recordings**
   - Keep videos brief (15-30 seconds)
   - Demonstrate the feature's complete workflow
   - Include audio explanation if helpful

## Need Help?

If you have questions or need help, please:

1. Check existing issues and discussions
2. Create a new issue with the "question" label
3. Be specific about what you're trying to accomplish

Thank you for contributing!
