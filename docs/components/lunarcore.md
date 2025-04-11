# `Lunarcore` package

Lunarcore is the foundational Python package that powers Lunar's component-based architecture. It serves as the core infrastructure that enables developers to create, manage, and integrate components within the Lunar ecosystem.

## What is Lunarcore?

Lunarcore is the backbone of Lunar's component system, providing:
- The base `LunarComponent` class that all components extend from
- Standardized interfaces for component communication
- Core data type definitions and validation
- Component group categorization

## Why is Lunarcore Important?

Lunarcore is essential because it:
1. Enables consistent component development across the Lunar ecosystem
2. Provides standardized interfaces for component interaction
3. Ensures type safety through its data type system
4. Facilitates component categorization and organization

## Installation

Install Lunarcore directly from GitHub:
```bash
pip install git+https://github.com/lunarbase-ai/lunar.git@develop#subdirectory=lunarbase/core
```

## Key Components

### LunarComponent Base Class

The `LunarComponent` class is the base class for all components.

For more details, see the [LunarComponent](/docs/components/lunar-component) documentation.

### Data Types

Lunarcore includes core I/O data types that components can use.

For a complete list and usage, see [Data Types](/docs/components/data-types).

### Component Groups

Components are organized and categorized into groups, defined and available at the lunarcore level.

For more details, see [Component Groups](/docs/components/component-groups).


## Next Steps

- Learn more about [Component Development](/docs/components/component-development)
- Explore [First Party Components](/docs/components/first-party-components)
- Understand [Data Types](/docs/components/data-types)
- Get started with [Component Groups](/docs/components/component-groups)