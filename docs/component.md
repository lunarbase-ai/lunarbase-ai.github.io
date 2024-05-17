# Lunar components

Components are distinguishable units of work that combine to create workflows. Components enable the encapsulation of workflow logic in observable units that can be reused across workflows and sub-workflows.

Components can encapsulate any discrete task in a process, from textual input or file reading operations, to field selection, database and API querying or more complex AI/ML algorithms.

The following is a list of pre-defined Lunar components, together with their descriptions.

| Component name | Component description |
|---|---|
| Azure Open AI prompt | Connects to an Azure OpenAI's LLM API, runs an input natural language prompt (str), and outputs the result as text (str).<br/>Input (str): The prompt to provide the LLM with. If needed, the prompt can be inputted manually by the user.<br/>Output (str): The answer provided by the LLM to the prompt. |
| Azure Open AI vectorizer | Encodes input texts as numerical vectors (embeddings) using Azure OpenAI models.<br/>Input (List[str]): A list of texts to encode. If needed, the list can be inputted manually by the user.<br/>Output (List[Dict]): A list of dictionaries -- one for each text in the input. Each dictionary contains the key text (str) mapped to the original text (str), and the key embeddings (str) mapped to the embedding (List[Union[float, int]]). |
| Bar chart | Plots a bar chart given a dictionary with numerical values. The output can be linked to a report component.<br/>Input (Dict[Any, Union[int, float]]): A dictionary with keys (any data type that can be converted to a str) mapped to numerical values (int or float).<br/>Output (Dict): A dictionary with the key data (str) mapped to the original input data (Dict[Any, Union[int, float]]), and the key images (str) mapped to a list with one element which is the produced image (the bar chart) encoded in base64 format (str). |
| Bing Search client | Searches data using Bing's Search API, starting from an inputted query string. |
| Csv Upload | Reads a .csv file.<br/>Input (File): A File object with a field path (str) containing the local path to the local .csv file to read. If needed, the local path can be inputted manually by the user.<br/>Output (File): A File object including Ta preview of the data. |
| Elasticsearch client | Search data in a given Elasticsearch instance.<br/>Input (dict): a dict containing data needed to do elasticsearch.<br/>Output (dict): the query response using the python elasticsearch format. |
| Elasticsearch store | Stores data into a given Elasticsearch instance for future search. |
| Emails Sender | Send emails |
| GraphQL Query | Fetches data from a GraphQL endpoint.<br/>Output (dict): The response for the query |
| Htmls2Texts | Convert HTMLs to texts |
| HTML Reports Builder | Build HTML reports |
| HuggingFace vectorizer | Encode texts using HuggingFace's models. The output is an embedding.<br/>Output (List[dict]): A list of dictionaries containing the original text (str) and the embeddings (List[Union[float, int]]) for each text item in the input. |
| Line chart | Plots a line chart given a dictionary with numerical keys and values. The output can be linked to a report component.<br/>Input (Dict[Union(int,float), Union(int,float)]): A dictionary with keys (int or float) mapped to numerical values (int or float).<br/>Output (Dict): A dictionary with the key data (str) mapped to the original input data (Dict[Any, Union[int, float]]), and the key images (str) mapped to a list (List[str]) with one element which is the produced image (the line chart) encoded in base64 format. |
| LlamaIndex Indexing | Index documents from a json dict with Azure OpenAI models in LlamaIndex.<br/>Please provide a list of keys to be selected in json string format by keys list json.<br/>Please provide a choice from summary or vector or keyword or tree for index name.<br/>Please provide a name for storage index by index persist dir.<br/>Please provide relevant Azure OpenAI details.<br/>Output (dict): dictionary containing the keys: original_json (copy of the input),index_dir (directory where the index is stored), index_name (name of the stored index), keys_list (list of the stored index keys),llm_config (configuration of the LLM),embed_model_config (configuration of the embedding model) |
| LlamaIndex Querying | Querying from a LlamaIndex index.<br/>Please provide a query prefix if needed.<br/>Please indicate whether to do retrieval only by filling retrieval only with True or False.<br/>Output (dict): |
| Milvus retriever | Queries embeddings from a Milvus server.<br/>Output (List[dict]): A list of dictionaries containing the original text (str) and the embeddings (List[Union[float, int]]) for each text item in the input. |
| Milvus vectorstore | Store embeddings on a Milvus server.<br/>Output (dict): a dictionary with a single key (stored), containing the number of stored embeddings. |
| Spacy NER | Performs Named Entity Recognition using spaCy.<br/>Input (str): A text to perform NER on.<br/>Output (list[dict[str, str]]): list of dictionaries containing two keys: text (str) mapped to the word/text (str), and label (str) mapped to the NER label (str). |
| Natural language to SQL Query | Produces an SQL query based on a natural language query and a tabular data source.<br/>Input (str, str): A string containing the natural language query, and a string containing the tabular data source (SQLAlchemy compatible connection string, a file path, or raw CSV data).<br/>Output (str): The resulting SQL query that can be used to get data from a database. |
| Online Spreadsheet | Download and forward content of an online spreadsheet |
| OpenAI prompt | Connects to OpenAI's API, runs natural language prompts and outputs the result as text.<br/>Output (str): The answer provided by the LLM to the prompt. |
| OpenAI vectorizer | Uses OpenAI models to encode texts. The output is the embeddings.<br/>Output (List[dict]): A list of dictionaries containing the original text (str) and the embeddings (List[Union[float, int]]) for each text item in the input. |
| PDF extractor | Extracts title, sections, references, tables and text from a PDF file.<br/>Input (str): A string containing the server path of the PDF file to extract from.<br/>Output (Dict): A dictionary containing the keys:title (str), mapped to the title in the PDF file (str), sections (str), mapped to a dictionary that maps section titles to section contents , references (str), mapped to a list of bibliographic references in the PDF file , tables (str), mapped to a list of record formatted pandas dataframes, text (str), mapped to list of strings containing the full document text |
| Property Getter | Extracts the mapped value of an inputted key/field/attribute in an inputted object/datastructure. It can be the value of a field/attribute in an object, or the mapped value of a key in a dictionary.<br/>Input (Any, str): An object and a string with the name of the key/field/attribute to extract the value from. The object can for example be a Dict or a File object. If needed, the key/field/attribute can be inputted manually by the user.<br/>Output (Any): The mapped value of the inputted key/field/attribute in the inputted dictionary. |
| Property Selector | Expose an input object properties for selection.<br/>Input (dict, str): a dictionary to extract values from, and a key (str) whose value in the dictionary is to be extracted.<br/>Output (dict): a map of the selected properties. |
| Python coder | Performs customized Python code execution. Outputs the value that the Python variable result is set to during the execution of the Python code.<br/>Input (str): A string of the Python code to execute. If needed, the Python code can be inputted manually by the user.<br/>Output (Any): The value of the variable result in the Python code after execution. |
| R coder | Performs customized R code execution. It might receive inputs from the context and it<br/>Outputs (Any): anything.outputs the result |
| ReACT Agent | Implements ReACT logic. |
| Report | Creates an editable report from the input it gets.<br/>Input (Dict): A dictionary containing data to be included in the report.<br/>Output (Dict): A dictionary containing instructions for building the report using the Quill editor format. |
| SPARQL Query | Fetch data from a SPARQL endpoint.<br/>Input (str): A string that is the SPARQL query.<br/>Output (dict): A dictionary containing the response to the SPARQL query in the python SPARQLWrapper library format. |
| SQL Query | Connects to a SQL database and returns the result of a query.<br/>Output (str): the query result. |
| SQL Schema Extractor | Connects to a SQL database and retrieves its schema, i.e., data definition language.<br/>Output (dict): a json describing the database schema. |
| Subworkflow | Component for selecting another workflow<br/>Output (Any): the output of the selected workflow. |
| Table2Text | Takes a CSV formatted table as input and converts it to a text by sentencifying each row.<br/>Input (str): A string of the table on CSV format.<br/>Output (Dict): A dictionary containing only the key results which is mapped to a list of the sentences corresponding to the inputted table rows. |
| Text Input | Allows the user to input a text (with optional variables) that can be used in other downstream components.<br/>Output (str): The input text. |
| URLs Scraper | Scrape URLs |
| Wikidata client | Retrieves data from Wikidata API. |
| Wikipedia client | Retrieves data from Wikipedia API. |
| WolfranAlpha client | Obtains a response from the WolfranAlpha API. |
| File Upload | Uploads local files to the server.<br/>Input (str): A string of the local path of the local file to upload to the server. If needed, tha local path can be inputted manually by the user.<br/>Output (str): A string of the server path of the uploaded file. |
| Yahoo Finance API | Connects to Yahoo Finance's public API and retrieves financial data about companies and their stocks.<br/>Input (List[str]): A list of strings of the tickers to the stocks to get data about.<br/>Output (Dict[str,Dict[str,Any]]): A dictionary mapping each inputted ticker (str) to the financial data about the corresponding stock in the form of a dictionary of indicators (str) mapped to their values (Any) |
| Zip file extractor | Extracts files from a ZIP file (.zip file) on the server.<br/>Input (str): A string of the server path to the ZIP file to extract.<br/>Output (List[str]): A list containing exactly one string which is the server path to the folder of the extracted ZIP file. |

## Running components

Every component will include a `run()` function that defines the running behavior of the component. This behavior can be triggered by calling the `run()` function programmatically with a component instance (i.e., components are defined as Python objects) or by using the **run** button in the interface, as seen in the image below. At runtime, the component inputs are either provided by the user in the form of text inputs or data inputs (i.e., file upload) or received from downstream components - via in-edges, while the output is printed in the interface as seen blow. 
**!! Type compatibility rules table HERE!!**

![Lunar workflow](img/chat_with_db.png)

___
Inputs/output received/sent from/to downstream/upstream components requires data type compatibility. Generally, a component _A_ with output of type _T_ could only link to a component _B_ that expects an input of the same type _T_. The only exception to this type compatibility requirement is the case where _A_ outputs a _list_ of multiple instance of _T_. In such a case component _B_ will automatically run in a loop for every instance received from _A_.

## Data types

Lunar provides a set of data types for data validation between components in a workflow and ensures the correct visual representation of the data on the interface (Lunarflow)

| Name              | Primitive Type | Description                                                                            |
|-------------------|----------------|----------------------------------------------------------------------------------------|
| FILE              | File           | Represents a file                                                                      |
| TEXT              | str            | Represents text                                                                        |
| CSV               | str            | Represents CSV formatted text                                                          |
| INT               | int            | Represents an integer                                                                  |
| FLOAT             | float          | Represents a floating-point number                                                     |
| CODE              | str            | Represents Python code                                                                 |
| R_CODE            | str            | Represents R code                                                                      |
| EMBEDDINGS        | list           | Represents embeddings as a list of floats                                              |
| JSON              | dict           | Represents a JSON object                                                               |
| IMAGE             | str            | The base64 string representation of an image                                           |
| REPORT            | str            | Represents a report. Allows the creation of an editable rich text editor               |
| TEMPLATE          | str            | Represents a template with replaceable variables                                       |
| LIST              | list           | Represents a list                                                                      |
| AGGREGATED        | dict           | Only assignable to component inputs. Allows the input to receive multiple outputs as a dictionary |
| PROPERTY_SELECTOR | str            | Displays a property selector component on the interface                                |
| PROPERTY_GETTER   | str            | Displays a property getter component on the interface                                  |
| WORKFLOW          | dict           | Represents a workflow. Used to run workflows recursively                               |
| SQL               | str            | Represents an SQL query                                                                |
| GRAPHQL           | str            | Represents a GraphQL query                                                             |
| SPARQL            | str            | Represents a SPARQL query                                                              |
| PASSWORD          | str            | Represents a secret                                                                    |
| ANY               | any            | Any type                                                                               |


## Creating components

There are four main ways of creating new components and extending the Lunar Component Library:

1. Programmatically - this can serve well when Lunar is deployed locally. Creating a new component programmatically assumes familiarity with Python and Object Oriented Programming (OOP) concepts. Details can be consulted [here](./creating_a_new_component.mdx). Components defined programmatically are included in the component library and will be available to all users of the local system.
2. Web-programmatically - this is a version of the above that does not require local deployment. Components can be defined programmatically in the web interface provided by Lunar. The interface requires the definition of input/output types and the main function (i.e., `run()`) defining the component's functionality at the least. Components created web-programmatically will be available only to the defining user.
3. Via inheritance from other components - this only allows for specifying the configuration of an existing component and saving it for future re-use - the component functionality remains unchanged. nd the latter specified by the user before running the component. The new component will only be available to the creating user.
4. Via **\*Coder** components - these special component types allow the user to write the code defining the component's functionality. This is similar to 2. above, except for the input/output definitions - **\*Coder** components will allow arbitrary input types that are compatible with the underlying programming language. **\*Coder** components can be used in the current workflow or saved for future re-use by the same user, similar to variants 2. and 3. above. Currently **\*Coder** components can be defined using *Python* and *R*.