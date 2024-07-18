# Natural Language to SQL Query Component

## Overview

The **Natural Language to SQL Query** component generates an SQL query based on a natural language query statement and a data definition schema. This component utilizes natural language processing to interpret the user's query and map it to the appropriate SQL query statements, making it easier to interact with databases without requiring in-depth knowledge of SQL syntax.

## Features

- **Natural Language Processing**: Converts human-readable queries into SQL statements.
- **Schema-Aware**: Understands the structure of your database through a provided schema.
- **Customizable**: Configurable parameters to tailor the component to specific needs and environments.

## Input Types

The component accepts the following input types:

- **Query**: A natural language query statement that describes the data retrieval requirements.
- **Schema**: A JSON object defining the data structure, with table names as keys and dictionaries of column names and types as values.

### Example Schema

```json
{
    "users": {
        "id": "integer",
        "name": "string",
        "email": "string"
    },
    "orders": {
        "order_id": "integer",
        "user_id": "integer",
        "amount": "float"
    }
}
```

## Output Type

- **TEXT**: The resulting SQL query as a string.

## Configuration Parameters

The component can be configured with the following parameters:

- **model_name**: The name of the model to use for processing the natural language query.
- **openai_api_type**: The type of OpenAI API to be utilized.
- **openai_api_version**: The version of the OpenAI API to be used.
- **deployment_name**: The name of the deployment environment.
- **temperature**: The temperature setting for the OpenAI model, affecting the randomness of the generated query.
- **openai_api_key**: The API key for accessing OpenAI services.
- **azure_endpoint**: The endpoint for Azure services, if applicable.

## How It Works

1. **Input Parsing**: The component takes a natural language query and a schema definition as inputs.
2. **Query Processing**: Using the defined model and configuration parameters, the component interprets the natural language input.
3. **SQL Generation**: Based on the parsed input and schema, the component generates a valid SQL query.
4. **Output**: The resulting SQL query is returned as a string.

