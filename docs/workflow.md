# Lunar workflows

Workflows are the fundamental units in Lunar, representing tasks to be performed using one or more [Lunar Components](./component.md). They are constructed by linking various components, creating a data flow that culminates in the desired outcome. You are free to assemble components together, creating a pipeline that will at the very end give you the results you need, efficiently and effectively.

Conceptually, a workflow can be interpreted as a directed acyclic graph of components connected by dependencies (edges). Think of a workflow as a flowchart where each step (or component) is connected by arrows (dependencies). This flowchart doesn't loop back on itself, meaning it moves in one direction from start to finish. Components further down the chart depend on the results of components earlier in the chart, ensuring a logical and sequential flow of data and tasks.

## Workflow run

For every workflow run, a new process is created. This process dynamically sets up an isolated Python environment, ensuring that all necessary resources and libraries are available for the execution of each workflow component. This isolation helps to avoid conflicts between dependencies and ensures that each workflow runs in a clean environment. Additionally, it allows for better resource management and security, as each workflow is contained within its own environment.

## Workflow attributes

The workflow attributes define the essential properties and metadata associated with each workflow. These attributes ensure that each workflow is uniquely identifiable, properly described, and correctly configured for execution. Below is a detailed description of each attribute:

| Name | Type | Description |
| ----- | ----- | ----- |
| id | str | A unique identifier for the workflow. Automatically generated using uuid4(). |
| user_id | str | Identifier for the user associated with this workflow. This is a required field. |
| name | str | The name of the workflow. This is a required field. |
| description | str | A description of the workflow. This is a required field. |
| version | Optional[str] | The version of the workflow. Defaults to None. |
| components | List[ComponentModel] | A list of components included in the workflow. Defaults to an empty list. | 
| dependencies | List[ComponentDependency] | A list of dependencies between components. Defaults to an empty list. |
| timeout | int | The timeout duration for the workflow in seconds. Defaults to 3600. |
| invalid_errors | List[str] | A list of validation error messages. Defaults to an empty list. |
