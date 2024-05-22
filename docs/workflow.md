# Lunar workflows

Workflows are the core objects of Lunar and they represent the task to be performed using one or more [Lunar Components](./component.md).

A workflow can be interpreted as a directed acyclic graph of components connected by dependencies (edges).

## Workflow run

For every workflow run, a new process is created, and it dynamically creates an isolated Python environment with all resources and libraries needed for the execution of every workflow component.