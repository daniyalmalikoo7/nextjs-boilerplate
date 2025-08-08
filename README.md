# 🚀 Next.js Boilerplate

A production-ready Next.js boilerplate designed for technical and rapid prototyping. Built with modern tools and best practices to help you build impressive projects quickly.

## ⚡ Quick Start

bash

# 1. Clone or use this template

git clone https://github.com/your-username/nextjs-interview-boilerplate.git your-project
cd your-project

# 2. Install dependencies (everything is already configured)

pnpm install

# 3. Install Playwright browsers (for E2E tests)

pnpm exec playwright install

# 4. Start development

pnpm dev
That's it! Open http://localhost:3000 and start building your project.
🔧 Alternative Setup Methods
GitHub Template:

Click "Use this template" on the GitHub repository
Create your new repository
Clone and run pnpm install && pnpm dev

Manual Setup (if you want to understand what's included):

<details>
<summary>Expand to see manual installation steps</summary>

```bash
# 1. Create Next.js project
pnpm create next-app@latest your-project --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

cd your-project

# 2. Install dependencies
pnpm add @tanstack/react-query @tanstack/react-query-devtools zod react-error-boundary clsx tailwind-merge lucide-react

# 3. Install dev dependencies
pnpm add -D prettier eslint-config-prettier @types/node @types/jest jest jest-environment-jsdom jest-transform-stub jest-watch-typeahead whatwg-fetch @testing-library/react @testing-library/jest-dom @testing-library/user-event @playwright/test

# 4. Copy all configuration files and components from this boilerplate

# 5. Install Playwright browsers
pnpm exec playwright install

# 6. Start development
pnpm dev
```

## 🎯 Perfect For

- ✅ **Technical** - Professional setup in minutes
- ✅ **Hackathons** - Focus on features, not configuration
- ✅ **Rapid Prototyping** - Modern tools and patterns ready to use
- ✅ **Learning Projects** - Best practices and modern React patterns

## 🛠️ Tech Stack

### **Core Framework**

- **Next.js 15** - App Router with TypeScript
- **React 18** - Latest React with hooks and concurrent features
- **TypeScript** - Full type safety throughout

### **Styling & UI**

- **Tailwind CSS** - Utility-first styling with custom configuration
- **Lucide React** - Beautiful, consistent icons
- **Custom Components** - Reusable Button, Loading, ErrorDisplay components

### **State Management & Data**

- **React Query (TanStack Query)** - Server state management with caching
- **Zod** - Runtime validation and type inference
- **Custom Hooks** - useLocalStorage and other utilities

### **Code Quality**

- **ESLint** - Modern flat config with Next.js and TypeScript rules
- **Prettier** - Consistent code formatting
- **TypeScript** - Strict type checking

### **Testing**

- **Jest** - Unit testing with comprehensive setup
- **React Testing Library** - Component testing best practices
- **Playwright** - End-to-end testing across browsers
- **Coverage Reports** - Detailed coverage with thresholds

### **Developer Experience**

- **VS Code Settings** - Auto-format on save, ESLint integration
- **Path Aliases** - Clean imports with `@/` and `~/`
- **Error Boundaries** - Graceful error handling
- **Loading States** - Professional UX patterns

## 📁 Project Structure

```
your-project/
├── .vscode/
│   └── settings.json                # VS Code configuration
├── src/
│   ├── app/
│   │   ├── demo/
│   │   │   └── page.tsx            # Demo page with UI patterns
│   │   ├── error.tsx               # Next.js error boundary
│   │   ├── layout.tsx              # Root layout with providers
│   │   ├── not-found.tsx           # 404 page
│   │   └── page.tsx                # Homepage
│   ├── components/
│   │   ├── layout/
│   │   │   └── header.tsx          # Navigation header
│   │   ├── ui/
│   │   │   ├── button.tsx          # Reusable button component
│   │   │   ├── error-display.tsx   # Error UI component
│   │   │   └── loading.tsx         # Loading spinner component
│   │   ├── error-boundary.tsx      # React error boundary
│   │   └── providers.tsx           # React Query provider
│   ├── hooks/
│   │   └── useLocalStorage.ts      # Local storage hook
│   ├── lib/
│   │   ├── utils.ts                # Utility functions (debounce, throttle, etc.)
│   │   └── validations.ts          # Zod schemas and types
│   ├── test/
│   │   ├── e2e/
│   │   │   ├── homepage.spec.ts    # E2E tests
│   │   │   └── demo.spec.ts
│   │   ├── unit/
│   │   │   ├── utils.test.ts       # Unit tests
│   │   │   └── components/
│   │   │       └── Button.test.tsx
│   │   ├── env-setup.ts            # Test environment setup
│   │   └── setup.ts                # Jest configuration
│   └── types/
│       └── index.ts                # Global TypeScript types
├── jest.config.mjs                 # Jest configuration
├── playwright.config.ts            # Playwright E2E configuration
├── tailwind.config.ts              # Tailwind configuration
├── tsconfig.json                   # TypeScript configuration
├── .eslintrc.json                  # ESLint configuration
├── .prettierrc                     # Prettier configuration
└── package.json                    # Dependencies and scripts
```

## 🎮 Available Scripts

### **Development**

```bash
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm start            # Start production server
```

### **Code Quality**

```bash
pnpm lint             # Check for linting errors
pnpm lint:fix         # Fix linting errors automatically
pnpm format           # Format code with Prettier
pnpm format:check     # Check if code is formatted
pnpm type-check       # Run TypeScript type checking
pnpm quality          # Run all quality checks + tests
pnpm precommit        # Full quality check before committing
```

### **Testing**

```bash
# Unit Tests (Jest)
pnpm test             # Run tests in watch mode
pnpm test:coverage    # Run tests with coverage report
pnpm test:watch       # Run tests in watch mode (explicit)

# E2E Tests (Playwright)
pnpm test:e2e         # Run E2E tests headless
pnpm test:e2e:ui      # Run E2E tests with UI
pnpm test:e2e:headed  # Run E2E tests with browser visible

# All Tests
pnpm test:all         # Run both unit and E2E tests
```

## 🧪 Testing Setup

### **Unit Testing Features**

- ✅ **Jest with Next.js integration** - Automatic Next.js configuration loading
- ✅ **React Testing Library** - Best practices for component testing
- ✅ **Coverage thresholds** - 70% coverage requirement across all metrics
- ✅ **Watch plugins** - Interactive test file and name search
- ✅ **Comprehensive mocking** - Next.js, browser APIs, and external libraries
- ✅ **TypeScript support** - Full type safety in tests

### **E2E Testing Features**

- ✅ **Cross-browser testing** - Chrome, Firefox, Safari, and mobile
- ✅ **Visual testing** - Screenshots on failure
- ✅ **Auto-retry** - Handles flaky tests automatically
- ✅ **Parallel execution** - Fast test runs
- ✅ **CI/CD ready** - Works in GitHub Actions

### **Example Test Commands**

```bash
# Run specific test file
pnpm test utils.test.ts

# Run tests with coverage
pnpm test:coverage

# Debug E2E tests
pnpm test:e2e:headed

# Update snapshots
jest --updateSnapshot
```

## 🎨 UI Components

### **Button Component**

```tsx
import { Button } from '@/components/ui/button';

// Variants: primary, secondary, outline, ghost
// Sizes: sm, md, lg
<Button variant="primary" size="md" onClick={handleClick}>
  Click me
</Button>

// Loading state
<Button isLoading disabled>
  Saving...
</Button>
```

### **Loading Component**

```tsx
import { Loading } from '@/components/ui/loading';

<Loading size="md" text="Loading data..." />;
```

### **Error Display**

```tsx
import { ErrorDisplay } from '@/components/ui/error-display';

<ErrorDisplay
  title="Something went wrong"
  message={error.message}
  onRetry={handleRetry}
/>;
```

## 🔧 Utility Functions

### **Performance Utilities**

```tsx
import { debounce, throttle } from '@/lib/utils';

// Debounce: Wait for user to stop typing
const debouncedSearch = debounce((query: string) => {
  searchAPI(query);
}, 300);

// Throttle: Limit scroll handler frequency
const throttledScroll = throttle(() => {
  updateScrollPosition();
}, 100);
```

### **Formatting Utilities**

```tsx
import { formatDate, formatBytes, generateId } from '@/lib/utils';

const formattedDate = formatDate(new Date()); // "January 15, 2024"
const fileSize = formatBytes(1024); // "1 KB"
const uniqueId = generateId(); // "abc123def"
```

### **CSS Utilities**

```tsx
import { cn } from '@/lib/utils';

// Conditional classes with Tailwind
<div
  className={cn(
    'px-4 py-2 rounded',
    isActive && 'bg-blue-500',
    isDisabled && 'opacity-50'
  )}
/>;
```

## 🗃️ Data Management

### **Zod Validation**

```tsx
import { contentSchema, type Content } from '@/lib/validations';

// Validate form data
const validatedContent = contentSchema.parse({
  title: 'My Title',
  content: 'My content',
  status: 'draft',
});
```

### **React Query Usage**

```tsx
import { useQuery } from '@tanstack/react-query';

function UserProfile({ userId }: { userId: string }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
  });

  if (isLoading) return <Loading />;
  if (error) return <ErrorDisplay message={error.message} />;
  return <div>{data.name}</div>;
}
```

### **Local Storage Hook**

```tsx
import { useLocalStorage } from '@/hooks/useLocalStorage';

function Settings() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <button onClick={() => setTheme('dark')}>Current theme: {theme}</button>
  );
}
```

## 🎯 Tips

### **Quick Feature Development**

1. **Start with the UI** - Use existing components and patterns
2. **Add state management** - Use React Query for server state, useState for local state
3. **Implement validation** - Use Zod schemas from validations.ts
4. **Add error handling** - Use ErrorDisplay component and error boundaries
5. **Write tests** - Start with one test to show testing knowledge

### **Demonstrating Skills**

```tsx
// Show TypeScript knowledge
interface UserProfileProps {
  user: User;
  onUpdate: (user: UpdateUser) => Promise<void>;
}

// Show modern React patterns
const UserProfile: React.FC<UserProfileProps> = ({ user, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  // Show performance optimization
  const debouncedSave = useMemo(() => debounce(onUpdate, 1000), [onUpdate]);

  // Show error handling
  const handleSubmit = async (data: UpdateUser) => {
    try {
      const validated = updateUserSchema.parse(data);
      await debouncedSave(validated);
      setIsEditing(false);
    } catch (error) {
      // Error boundary will catch this
      throw new Error('Failed to update user');
    }
  };

  return <ErrorBoundary>{/* Component JSX */}</ErrorBoundary>;
};
```

### **What to Say**

> _"I've set up a production-ready Next.js boilerplate with TypeScript, comprehensive testing with Jest and Playwright, and modern development tools. This lets me focus on building features rather than configuring tools. The setup includes error boundaries, loading states, and proper state management patterns that I'd use in production applications."_

## 🔧 Configuration Details

### **TypeScript Configuration**

- Strict type checking enabled
- Path aliases configured (`@/` for src, `~/` for root)
- Jest types included
- Next.js types automatically loaded

### **ESLint Configuration**

- Next.js recommended rules
- TypeScript integration
- Prettier compatibility
- Custom rules for code quality

### **Prettier Configuration**

- Consistent formatting rules
- Single quotes, semicolons, trailing commas
- 80 character line width
- Integration with VS Code

### **Tailwind Configuration**

- Custom design tokens
- Component-friendly configuration
- Dark mode support ready
- Purging optimized for production

## 🚨 Troubleshooting

### **Common Issues**

**Jest Tests Failing:**

```bash
# Clear Jest cache
npx jest --clearCache

# Update snapshots
npx jest --updateSnapshot

# Run specific test
pnpm test Button.test.tsx
```

**TypeScript Errors:**

```bash
# Check TypeScript configuration
pnpm type-check

# Restart TypeScript server in VS Code
Cmd/Ctrl + Shift + P → "TypeScript: Restart TS Server"
```

**Playwright Issues:**

```bash
# Reinstall browsers
pnpm exec playwright install

# Debug mode
pnpm test:e2e:headed
```

**Build Errors:**

```bash
# Clean Next.js cache
rm -rf .next

# Clean node_modules
rm -rf node_modules package-lock.json
pnpm install
```

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Query Documentation](https://tanstack.com/query/latest)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Zod Documentation](https://zod.dev/)

## 🤝 Contributing

This boilerplate is designed for rapid prototyping use. Feel free to customize it for your specific needs:

1. **Add features** you commonly need
2. **Remove dependencies** you don't use
3. **Customize components** to match your design system
4. **Extend testing setup** for your use cases

## 📄 License

MIT License - feel free to use this boilerplate for any purpose.

---

**Built with ❤️ for efficient development!**

🚀 **Ready to build something amazing? Run `pnpm dev` and start coding!**
