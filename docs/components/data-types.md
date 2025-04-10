# Data Types

Lunar provides a comprehensive set of data types for data validation between components in a workflow and ensures the correct visual representation of the data on the interface (Lunarflow).

## Basic Types

| Name              | Primitive Type | Description                                                                            |
|-------------------|----------------|----------------------------------------------------------------------------------------|
| `TEXT`            | str            | Represents text data                                                                  |
| `INT`             | int            | Represents integer values                                                              |
| `FLOAT`           | float          | Represents floating-point numbers                                                     |
| `BOOL`            | bool           | Represents boolean values                                                             |
| `NULL`            | None           | Represents null/None values                                                           |
| `ANY`             | any            | Represents any data type (use with caution)                                           |

## File and Media Types

| Name              | Primitive Type | Description                                                                            |
|-------------------|----------------|----------------------------------------------------------------------------------------|
| `FILE`            | File           | Represents a file object                                                              |
| `IMAGE`           | str            | Base64 string representation of an image                                               |
| `AUDIO`           | str            | Base64 string representation of audio data                                             |
| `CSV`             | str            | Represents CSV formatted text                                                          |

## Code and Query Types

| Name              | Primitive Type | Description                                                                            |
|-------------------|----------------|----------------------------------------------------------------------------------------|
| `CODE`            | str            | Represents Python code                                                                 |
| `R_CODE`          | str            | Represents R code                                                                      |
| `SPARQL`          | str            | Represents a SPARQL query                                                             |
| `SQL`             | str            | Represents an SQL query                                                               |
| `GRAPHQL`         | str            | Represents a GraphQL query                                                             |

## Data Processing Types

| Name              | Primitive Type | Description                                                                            |
|-------------------|----------------|----------------------------------------------------------------------------------------|
| `EMBEDDINGS`      | list           | Represents embeddings as a list of floats                                              |
| `JSON`            | dict           | Represents a JSON object                                                               |
| `LIST`            | list           | Represents a list of items                                                             |
| `AGGREGATED`      | dict           | Allows the input to receive multiple outputs as a dictionary                           |

## UI Components

| Name              | Primitive Type | Description                                                                            |
|-------------------|----------------|----------------------------------------------------------------------------------------|
| `SELECT`          | Select         | Represents a selection component with predefined options                               |
| `PROPERTY_SELECTOR` | str           | Displays a property selector component on the interface                                |
| `PROPERTY_GETTER` | str           | Displays a property getter component on the interface                                  |
| `LIST_INDEX_GETTER` | str          | Allows getting specific items from a list                                              |

## Visualization Types

| Name              | Primitive Type | Description                                                                            |
|-------------------|----------------|----------------------------------------------------------------------------------------|
| `BAR_CHART`       | dict           | Represents bar chart visualization data                                                |
| `LINE_CHART`      | dict           | Represents line chart visualization data                                               |
| `BSGN_GRAPH`      | dict           | Represents BSGN graph visualization data                                               |
| `CYTOSCAPE`       | dict           | Represents Cytoscape graph visualization data                                          |

## Workflow Types

| Name              | Primitive Type | Description                                                                            |
|-------------------|----------------|----------------------------------------------------------------------------------------|
| `WORKFLOW`        | Union[str, dict] | Represents a workflow. Used to run workflows recursively                               |
| `TEMPLATE`        | str            | Represents a template with replaceable variables                                       |
| `REPORT`          | str            | Represents a report. Allows the creation of an editable rich text editor               |

## Security Types

| Name              | Primitive Type | Description                                                                            |
|-------------------|----------------|----------------------------------------------------------------------------------------|
| `PASSWORD`        | str            | Represents a password value (should be handled securely)                               |

## Stream Types

| Name              | Primitive Type | Description                                                                            |
|-------------------|----------------|----------------------------------------------------------------------------------------|
| `STREAM`          | GeneratorType  | Represents a stream of data (for real-time processing)                                 |

## Special Types

| Name              | Primitive Type | Description                                                                            |
|-------------------|----------------|----------------------------------------------------------------------------------------|
| `ANY`             | any            | Represents any data type (use with caution)                                           |
| `NULL`            | None           | Represents null/None values                                                           |


