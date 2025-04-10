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

The `LunarComponent` class is the base class for all components. It provides:

- Component lifecycle management
- Data type validation
- Configuration management

For more details, see the [LunarComponent](/docs/components/lunar-component) documentation.

### Data Types

Lunarcore includes these core data types:

- `TEXT`: For text processing
- `IMAGE`: For image handling
- `TABLE`: For tabular data
- `PROPERTY_SELECTOR`: For property selection
- `PROPERTY_GETTER`: For property retrieval
- `FILE`: For file operations
- `CSV`: For CSV files
- `JSON`: For JSON data
- `EMBEDDINGS`: For vector embeddings
- `BAR_CHART`: For bar charts
- `LINE_CHART`: For line charts

For a complete list and usage, see [Data Types](/docs/components/data-types).

### Component Groups

Components are organized into these groups:

- `DATABASES`: Database operations
- `GENAI`: Generative AI
- `DATA_SCIENCE`: Data science
- `CODERS`: Code generation
- `DATA_EXTRACTION`: Data extraction
- `DATA_VECTORIZERS`: Vectorization
- `DATA_VISUALIZATION`: Visualization
- `DATA_TRANSFORMATION`: Data transformation
- `IO`: Input/output
- `NLP`: Natural language processing
- `API_TOOLS`: API integration
- `BIOMEDICAL`: Bio-medical
- `MUSICGEN`: Music generation
- `UTILS`: Utility functions
- `LUNAR`: Core system components

For more details, see [Component Groups](/docs/components/component-groups).


## Next Steps

- Learn more about [Component Development](/docs/components/component-development)
- Explore [First Party Components](/docs/components/first-party-components)
- Understand [Data Types](/docs/components/data-types)
- Get started with [Component Groups](/docs/components/component-groups)