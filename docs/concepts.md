# Concepts

## The main building blocks of Lunar

| Concept | Definition |
| ----------- | ----------- |
| Component | A component is a discrete unit of work in a Lunar process (called a workflow). A component can generally be seen as a programming function with **typed** inputs and one **typed** output. |
| Workflow | A Lunar workflow can be seen as a directed acyclic graph (DAG) where each node represents a component and each directed edge defines the order and component coordination. A workflow the a central concept in Lunar and the core design pattern for defining intelligent AI agents. |
| Workflow editor | A web-based graphical user interface that enables the creation of workflows and component configuration. |
| Component library | The collection of all component available for creating workflows. |
| Custom component | A special type of **user-defined** component. It can be derived from an existing component with **user-specified** configuration or it can be a brand new component with a **user-defined** functionality via Python coding. Custom components enable the extension of the component library with units of work and functionalities required by the user. Such components are only available to the user who defined them. |
| Component inputs | Every component expects at least one input value. These values are **typed** meaning that the component definition specifies the expected data types of the values passed at input, e.g., *TEXT*, *JSON*, *LIST*, etc. Violations of the data types lead to execution errors. |
| Templated inputs | A special type of inputs with data type **TEMPLATE**. They are essentially textual inputs that allow the user to define arbitrary variables with values received at runtime from downstream components. Templated inputs enable the union of multiple component outputs into a single component. |
| Component output | Similarly, every component outputs one (and only one) **typed** value. Returning multiple values can be achieved via grouping in a JSON object. |
| Component configuration | Components may require configuration upon execution. This is usually expected as Key - Value pairs, with the former specified when the component is defined and the latter specified by the user before running the component. The user can save the configuration of a component (and so avoid re-configuration on future uses) by creating a custom component - a new component available only to the creating user with similar functionality as its parent and specific configuration defined by the user. |
| Terminal component | A terminal component's output is not linked to any other downstream components making it (one of) the output of the workflow. Workflow can, hence, have more than one output. |
| Subworkflow | A special type of conponent that encapsulates an entire workflow. Any workflow with a **single output** can act as a component in another workflow, enabling arbitrary compositionallity of workflows in Lunar. Workflows have single outputs when they contain only one terminal component. |