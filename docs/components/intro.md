# Introduction

Components are the fundamental building blocks for creating AI agents in the Lunar system. Each component is a reusable, observable unit that encapsulates a specific task, enabling the development of modular and maintainable AI agents.

Components can handle tasks ranging from simple operations (like reading text or files) to complex processes (such as database queries, API interactions, and AI/ML model executions). They can connect to external services, databases, and other resources to perform tasks and return results.

In Lunar, components are designed as plug-and-play units that can be combined to create complex systems. The architecture follows a tree-based directed acyclic graph (DAG) structure, where each component is a node and connections between them are edges. This visual flowchart representation makes it easy to understand and modify agent workflows.

Under the hood, components are Python packages that extend the [`LunarComponent`](/docs/components/lunar-component) base class from `lunarcore`, our first-party Python package. This base class provides essential methods and attributes, allowing developers to create custom components that integrate seamlessly with the system.

Lunar offers a wide range of first-party components, tested and ready for use in your workflows. These components cover various functionalities, from data extraction and transformation to advanced machine learning and visualization. You can find a comprehensive list in the [First Party Components](/docs/components/first-party-components) section.

If you need a specific component that isn't available in the first-party components, you can build your own by following the [Component Development](/docs/components/component-development) guide.

