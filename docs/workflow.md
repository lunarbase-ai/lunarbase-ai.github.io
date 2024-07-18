# Lunar workflows

Workflows are the core objects of Lunar and they represent the task to be performed using one or more [Lunar Components](./component.md).

A workflow can be interpreted as a directed acyclic graph of components connected by dependencies (edges).

## Workflow run

For every workflow run, a new process is created, and it also dynamically creates an isolated Python environment with all resources and libraries needed for the execution of every workflow component.

## Workflow attributes

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
