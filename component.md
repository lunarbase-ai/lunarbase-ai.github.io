# Lunar components

Components are distinguishbale units of work that combine to create workflows. Components enable the encapsulation of workflow logic in observable units that can be reused across workflows and subworkflows.

Components can encapsulate any discrete task in a process, from textual input or file reading operations, to field selection, database and API querying or more complex AI/ML algorithms.


## Running components

Every component will include a `run()` function that defines the running behaviour of the component. This bihaviour can be triggered by calling the `run()` function programmatically with a component instance (i.e., components are defined as Python objects) or by using the **run** button in the interface.

**!! IMAGE HERE !!**

At runtime, the component inputs are either provided by the user in the form of text inputs or data inputs (i.e., file upload) or received from downstream components - via in-edges, while the output is printed in the interface as seen above in Figure XXX. Inputs/output received/sent from/to downstream/upstream components requires data type compatibility. This can be ensured following the rules below:

**!! Type compatibilty rules table HERE!!**

## Creating components

There are four main ways of creating new components and extending the Lunar Component Library:

1. Programmatically - this can serve well when Lunar is deployed locally. Creating a new component programtically assumes familiarity with Python and Object Oriented Programming (OOP) concepts. Details can be consulted [here](**!! LINK HERE !!**). Components defined programmatically are included in the component library and will be available to all users of the local system.
2. Web-programmatically - this is a version of the above that does not require local deployment. Components can be defined programmatically in the web interface provided by Lunar. The interface requires the definition of input/output types and the main function (i.e., `run()`) defining the component's functionality at the least. Components created web-programmatically will be available only to the defining user.
3. Via inheritance from other components - this only allows for specifying the configuration of an existing component and saving it for future re-use - the component functionality remains unchanged. nd the latter specified by the user before running the component. The new component will only be available to the creating user.
4. Via **\*Coder** components - these special component types allow the user to write the code defining the component's functionality. This is similar to 2. above, except for the input/output definitions - **\*Coder** components will allow arbitrary input types that are compatible with the underlying programming language. **\*Coder** components can be used in the current workflow or saved for future re-use by the same user, similar to variants 2. and 3. above. Currently **\*Coder** components can be defined using *Python* and *R*.