# Lunar components

Components are distinguishable units of work that combine to create workflows. Components enable the encapsulation of workflow logic in observable units that can be reused across workflows and sub-workflows.

Components can encapsulate any discrete task in a process, from textual input or file reading operations, to field selection, database and API querying or more complex AI/ML algorithms.

The following is a list of pre-defined Lunar components, together with their descriptions.

| Component name | Component description |
|---|---|
| [NeXtProt](./all_components/nextprot/nextprot.md) | Fetch data from neXtProt: an on-line knowledge platform on human proteins, such as their function, subcellular location, expression, interactions and role in diseases. 
    Input (str): A string that is the SPARQL query.
    Output (dict): A dictionary containing the response to the SPARQL query in the Python [SPARQLWrapper](https://sparqlwrapper.readthedocs.io/en/latest/) library format. |
| [Picture Extractor](./all_components/pic2text/pic2text.md) | Extracts text and math formulas from a picture. The math formulas are outputted in LaTeX style (eg.: `$$f(x)=3 \cdot x^2$$`).
Input:
  `path` (str): A string of the server path of the image to read.
Output (str): A string of the text and the math formulas in the image. |
| [Table2Text](./all_components/table2text/table2text.md) | Takes a CSV formatted table as input and converts it to a text by sentencifying each row.
Inputs:
  `Table` (str): A string of the table on CSV format.
Output (Dict): A dictionary containing only the key `results` which is mapped to a list of the sentences corresponding to the inputted table rows. |
| [Wikipedia client](./all_components/wikipedia/wikipedia.md) | Retrieves data from Wikipedia API.
Input:
  `Query` (str): A string of the query to use for finding the article. Eg. `Fermats last theorem`.
Output (Dict[str, str]): A dictionary with the string `content` mapped to a string of the content of the found article. |
| [Gene Set Upload](./all_components/read_geneset/read_geneset.md) | Reads a CSV file with genes and outputs a list of the gene names.
Inputs:
  `Input file` (str): The server path of a CSV file with gene names in a column `gene_name`.
Output (List[str]): A list of the genes found in the column `gene_name` in the inputted CSV file. |
| [SPARQL Query](./all_components/sparql/sparql.md) | Fetch data from a SPARQL endpoint.
    Input (str): A string that is the SPARQL query.
    Output (dict): A dictionary containing the response to the SPARQL query in the python SPARQLWrapper library format. |
| [Spacy NER](./all_components/ner/ner.md) | Performs Named Entity Recognition (NER).
Inputs:
  `Text` (str): The text to perform NER on.
Output (List[Dict[str, str]]): A list of dictionaries containing two keys: `text` (str) mapped to the word/text (str), and `label` (str) mapped to the NER label (str). Eg. [{`text`: `Albert Einstein`, `label`: `PERSON`}, {`text`: `1879`, `label`: `DATE`}] |
| [Property Getter](./all_components/property_getter/property_getter.md) | Extracts the mapped value of an inputted key/field/attribute in an inputted object/datastructure. It can be the value of a field/attribute in an object, or the mapped value of a key in a dictionary.
Inputs:
  `Input` (Any): An object to extract a value from. The object can for example be a dictionary, a list, or a File object.
  `Selected property` (str): A string of the name of the key/field/attribute to extract from the inputted object. If needed, the key/field/attribute can be inputted manually by the user. If nested objects/dicts, nested keys can be accessed by concatenating keys with dots (e.g. `parent_dict_key.dict_key`). If, for example, a list of dicts (List[Dict]) is inputted, the list indices are used as keys (e.g. `list_index.dict_key`).
Output (Any): The mapped value of the inputted key/field/attribute in the inputted object. |
| [Bar chart](./all_components/bar_chart/bar_chart.md) | Plots a bar chart given a dictionary with numerical values. The output can be linked to a report component.
Inputs:
  `Data` (Dict[Any, Union[int, float]]): A dictionary with keys (any data type that can be converted to a str) mapped to numerical values (int or float).
Output (Dict): A dictionary with the key `data` (str) mapped to the original input data (Dict[Any, Union[int, float]]), and the key `images` (str) mapped to a list (List[str]) with one element which is the produced image (the bar chart) encoded in base64 on the format `f`data:image/png;base64,{base64.b64encode(binary_buffer_of_PNG.read()).decode()}`` (str). |
| [LlamaIndex Querying](./all_components/llamaindex_query/llamaindex_query.md) | Querying from LlamaIndex index.
    Please provide a query prefix if needed.
    Please indicate whether to do retrieval only by filling retrieval only with True or False.
    Output (dict):  |
| [HTML Reports Builder](./all_components/html_reports_builder/html_reports_builder.md) | Builds HTML reports.
Inputs:
  `Template_j2` (str): A Jinja2 template of the HTML report template as a string, e.g. `<html><head><title>{{ title }}</title></head></html>`
  `Data` (Dict[str, Dict[str, str]]): A dictionary with labels (strings) as keys, where each label is mapped to a dictionary for rendering the template. In this sub-dictionaru, each key-value pair is a template_variable and the template_variable value in the Jinja2 template, e.g {`william`: {`title`: `William is cool`}}
Output (Dict[str, str]): A dictionary where each inputted label is mapped to the corresponding rendered template, e.g {`william`: `<html><head><title>William is cool</title></head></html>`} |
| [Elasticsearch store](./all_components/elasticsearchdb/elasticsearchdb.md) | Stores data in a given Elasticsearch instance for future search. |
| [Pubmed Searcher](./all_components/pubmed_searcher/pubmed_searcher.md) | Search article information from Pubmed by keywords
Inputs:
  `Keywords` (str): TODO,
  `From year` (str): TODO,
  `To year` (str): TODO,
  `Max pages` (str): TODO,
Output (List[Dict]): a record formatted pandas dataframe with the search results. |
| [Htmls2Texts](./all_components/html2text/html2text.md) | Converts HTMLs to texts.
Inputs:
  `Scraper_results` (Dict[str, Dict[str, str]]): A dictionary with the URLs as keys, mapped to a dictionary with a key `content` mapped to their HTMLs if the HTMLs were scraped succesfully. E.g. `{`https://example.com`: {`content`: `<html><body>Hello World</body></html>`}}`.
Output ([str, Dict[str, str]]): A dictionary similar to the input, but with an additional key `text` in each URL dictionary, mapped to the extracted from the HTML. URLs with errors remain unchanged. E.g. `{`https://example.com`: {`text`: `Hello World`, `content`: `<html><body>Hello World</body></html>`}}` |
| [LlamaIndex Indexing](./all_components/llamaindex_index/llamaindex_index.md) | Index documents from a json dict with Azure OpenAI models within LlamaIndex. 
    Please provide a list of keys to be selected in json string format by keys list json.
    Please provide a choice from summary or vector or keyword or tree for index name.
    Please provide a name for storage index by index persist dir.
    Please provide relevant Azure OpenAI details.
    Output (dict): dictionary containing the keys:,
    original_json (copy of the input),
    index_dir (directory where the index is stored),
    index_name (name of the stored index),
    keys_list (list of the stored index keys),
    llm_config (configuration of the LLM),
    embed_model_config (configuration of the embedding model) |
| [Indra Network Assembler](./all_components/indra_network/indra_network.md) | Retrieve literature related to a set of genes |
| [LLM prompt](./all_components/llm_prompt/llm_prompt.md) | Connects to a LLM's API, runs natural language prompts and outputs the result as text
    Output (str): The answer provided by the LLM to the prompt. |
| [Csv Viewer](./all_components/csv_viewer/csv_viewer.md) | Displays .csv files Output (str): csv file |
| [SQL Query](./all_components/sql_query/sql_query.md) | Connects to a SQL database and returns the result of a query
    Output (str): the query result. |
| [SQL Schema Extractor](./all_components/sql_schema_extractor/sql_schema_extractor.md) | Connects to a SQL database and retrieves its schema, i.e., data definition language.
    Output (dict): a json describing the database schema. |
| [OpenAI prompt](./all_components/openai_llm/openai_llm.md) | Connects to OpenAI's API, runs natural language prompts and outputs the result as text
    Output (str): The answer provided by the LLM to the prompt. |
| [WolframAlpha client](./all_components/wolfram_alpha/wolfram_alpha.md) | Obtains a response from the WolframAlpha API. |
| [Zip file extractor](./all_components/zip/zip.md) | Extracts files from a ZIP file (.zip file) on the server.
Inputs:
  `File path` (str): A string of the server path to the ZIP file to extract. E.g. `/path/on/server/my_zip.zip`
Output (List[str]): A list of the server paths of the files/directories of the extracted ZIP file. E.g. `[`/path/on/server/file1_in_my_zip.txt`, `/path/on/server/file2_in_my_zip.txt`, `/path/on/server/directory1_in_my_zip/`]` |
| [Online Spreadsheet](./all_components/online_spreadsheet_input/online_spreadsheet_input.md) | Downloads and outputs the content of an online spreadsheet.
Inputs:
  `Url` (str): URL of the online spreadsheet. The following are supported:
    - nextcloud folder with xslx files
    - owncloud xslx file
    - google drive **published** spreadsheet
  `Filename` (str): The name of the file to download (for owncloud/nextcloud only)
  `Folder_password` (str): Password of the shared folder (for owncloud/nextcloud only)
Outputs (List[Dict]): A list of the records of the spreadsheet. |
| [Yahoo Finance API](./all_components/yahoo_finance/yahoo_finance.md) | Connects to Yahoo's public API (using Python package yfinance) and retrieves financial data about companies and their stocks.
    Input (List[str]): A list of strings of the tickers to the stocks to get data about.
    Output (Dict[str,Dict[str, Any]]): A dictionary mapping each inputted ticker (str) to the financial data about the corresponding stock in the form of a dictionary of indicators (str) mapped to their values (Any) |
| [Azure Open AI vectorizer](./all_components/azure_openai_vectorizer/azure_openai_vectorizer.md) | Encodes inputted texts as numerical vectors (embeddings) using Azure OpenAI models.
Inputs:
  `Text list` (List[str]): A list of texts to encode. If needed, the list can be inputted manually by the user.
Output (List[Dict]): A list of dictionaries -- one for each text in the input. Each dictionary contains the key `text` (str) mapped to the original text (str), and the key `embeddings` (str) mapped to the embedding (List[Union[float, int]]). |
| [Bing Search client](./all_components/bing_search/bing_search.md) | Searches data using Bing Search API. |
| [GraphQL Query](./all_components/graphql/graphql.md) | Fetches data from a GraphQL endpoint
    Output (dict): The response for the query |
| [Text Input](./all_components/text_input/text_input.md) | Allows the user to input a text (potentially with template variables) that can be used in other downstream components.
Inputs:
  `Input` (str): The text to output.
Output (str): The inputted text. |
| [SBGN Visualizer](./all_components/sbgn_visualizer/sbgn_visualizer.md) | Receives a BSGN XML file and creates a graph visualization. |
| [OpenAI vectorizer](./all_components/openai_vectorizer/openai_vectorizer.md) | Use OpenAI models to encode texts. The output is the embeddings
    Output (List[dict]): A list of dictionaries containing the original text (str) and the 
    embeddings (List[Union[float, int]]) for each text item in the input. |
| [Wikidata client](./all_components/wikidata/wikidata.md) | Retrieves data from Wikidata API (a knowledge graph / knowledge base).
Inputs:
  `Query` (str): A string of the the term to search for in Wikidata. E.g. `Barack Obama`.
Output (Dict[str, List[Dict]]): A dictionary with the key `results` (str), mapped to a list containing one dictionary of information/knowledge for each query match. E.g. `{`results`: [{`description`: `President of the United States from 2009 to 2017`, ...}]}`. The list is sorted with the best match first. |
| [Natural language to SQL Query](./all_components/nl2sql/nl2sql.md) | Produces an SQL query based on a natural language query statement 
    and a data definition schema. 
    The data definition should be a JSON with table names as keys 
    and dicts of type {<column_name>: <column_type>} as values. 
    
    Output (str): the resulting SQL query. |
| [URLs Scraper](./all_components/urls_scraper/urls_scraper.md) | Scrapes URLs.
Inputs:
  `Urls` (List[str]): A list of URLs (strings) that are to be scraped
Output (Dict[str, Dict[str, str]]): A dictionary where each key is a URL from the input list. The value for each key is another dictionary with either a key `content` (str) containing the scraped content as a string (if the request was successful), or a key `error` with a descriptive error message (if the request failed). |
| [Online Spreadsheet IO](./all_components/online_spreadsheet_io/online_spreadsheet_io.md) | Save to a online spreadsheet then and forward the content |
| [Property Selector](./all_components/property_selector/property_selector.md) | Get values of properties (keys) of an inputted dictionary.
Inputs:
  `Inputs` (Dict[str, Any]): A dictionary to extract values from. E.g. `{`keyA`: {`keyB`: 123}, `keyC`: {`keyD`: 456}}`
  `Selected properties` (str): A comma separated string of the properties (keys) to extract, using dots for nested properties. E.g. `keyA,keyC.keyD`
Output (Dict): A dictionary of the selected properties and their values. E.g. `{`keyA`: {`keyB`: 123}, `keyC.keyD`: 456}}` |
| [Csv Upload](./all_components/csv_extractor/csv_extractor.md) | Reads a CSV file with a header.
Inputs:
  `Input file` (File): A File object with a field `path` (str) containing the local path to the local CSV file to read. Use this component only if the CSV file has a header, i.e. if the first line of the CSV file is the column titles!
Output (File): A File object with a field `preview` which has the value pandas.read_csv(file_path, nrows=10).head().to_csv(). This means that the field contains a record formatted pandas dataframe of the data in the inputted CSV file (if we see the CSV file as a m*n matrix M, the format becomes a string `,M(1,1),M(1,2),...,M(1,n)\n 0,M(2,1),...,M(2,n)\n 1,M(3,n),... ... M(m,n)`). |
| [Report](./all_components/report/report.md) | Creates an editable report from the input it gets.
Inputs:
  `Inputs` (Dict[str, str]): A dictionary containing of strings mapped to strings, containing data to be included in the report.
Output (Dict): A dictionary containing instructions for building the report using the Quill editor format. |
| [UniProt](./all_components/uniprot/uniprot.md) | Fetch data from UniProt: a database of high-quality, comprehensive and freely accessible resource of protein sequence and functional information. 
    Input (str): A string that is the SPARQL query.
    Output (dict): A dictionary containing the response to the SPARQL query in the Python [SPARQLWrapper](https://sparqlwrapper.readthedocs.io/en/latest/) library format. |
| [HuggingFace vectorizer](./all_components/huggingface/huggingface.md) | Encode texts using HuggingFace's models. The output is the embeddings
    Output (List[dict]): A list of dictionaries containing the original text (str) and the 
    embeddings (List[Union[float, int]]) for each text item in the input. |
| [R coder](./all_components/r_coder/r_coder.md) | Performs customized R code execution. Outputs the value that the R variable `result` is set to during the execution of the R code.
Inputs:
  `Code` (str): A string of the R code to execute.  If needed, the R code can be inputted manually by the user.
Output (Any): The value of the variable `result` in the R code after execution. |
| [Python coder](./all_components/python_coder/python_coder.md) | Performs customized Python code execution. Outputs the value that the Python variable `result` is set to during the execution of the Python code.
Inputs:
  `Code` (str): A string of the Python code to execute.  If needed, the Python code can be inputted manually by the user.
Output (Any): The value of the variable `result` in the Python code after execution. |
| [Gemini AI prompt](./all_components/gemini_llm/gemini_llm.md) | Connects to Gemini's API, runs natural language prompts and outputs the result as text
    Output (str): The answer provided by the LLM to the prompt. |
| [PROGENy](./all_components/progeny/progeny.md) | PROGENy is the definitive resource for pathways and target genes, with weights for each interaction. It requires two CSV files as input. decoupler https://decoupler-py.readthedocs.io/en/latest/notebooks/progeny.html | paper: Schubert, M., Klinger, B., Klünemann, M. et al. Perturbation-response genes reveal signaling footprints in cancer gene expression. Nat Commun 9, 20 (2018). https://doi.org/10.1038/s41467-017-02391-6 (https://www.nature.com/articles/s41467-017-02391-6) |
| [ReACT Agent](./all_components/react_agent/react_agent.md) | Implements ReACT logic. |
| [Azure Open AI prompt](./all_components/azure_openai_llm/azure_openai_llm.md) | Connects to Azure OpenAI's API (an LLM), runs an inputted natural language prompt (str), and output the result as text (str).
Inputs:
    `Prompt` (str): The prompt to provide the LLM with. If needed, the prompt can be inputted manually by the user.
Output (str): The answer provided by the LLM to the prompt. |
| [NCI Thesaurus](./all_components/nci_thesaurus/nci_thesaurus.md) | Retrieve biomedical information from the NCI Thesaurus, via SPARQL query |
| [WikiPathways](./all_components/wikipathways/wikipathways.md) | Fetch data from WikiPathways: an open science platform for biological pathways contributed, updated, and used by the research community.
    Input (str): A string that is the SPARQL query.
    Output (dict): A dictionary containing the response to the SPARQL query in the Python [SPARQLWrapper](https://sparqlwrapper.readthedocs.io/en/latest/) library format. |
| [Milvus vectorstore](./all_components/milvusdb/milvusdb.md) | Store embeddings on a Milvus server
    Output (dict): a dictionary with a single key (stored), containing the number of stored embeddings. |
| [CIViC](./all_components/civicdb/civicdb.md) | Searches for gene information from the CIViC database |
| [Elasticsearch client](./all_components/elasticsearch/elasticsearch.md) | Search data in a given Elasticsearch instance.
    Input (dict): a dict containing data needed to do elasticsearch.
    Output (dict): the query response using the python elasticsearch format. |
| [Milvus retriever](./all_components/milvus/milvus.md) | Queries embeddings from a Milvus server
    Output (List[dict]): A list of dictionaries containing the original text (str) and the 
    embeddings (List[Union[float, int]]) for each text item in the input. |
| [Line chart](./all_components/line_chart/line_chart.md) | Plots a line chart given a dictionary with numerical keys and values. The output can be linked to a report component.
Inputs:
  `Data` (Dict[Union(int,float), Union(int,float)]): A dictionary with keys (int or float) mapped to numerical values (int or float).
Output (Dict): A dictionary with the key `data` (str) mapped to the original input data (Dict[Any, Union[int, float]]), and the key `images` (str) mapped to a list (List[str]) with one element which is the produced image (the line chart) encoded in base64 on the format `f`data:image/png;base64,{base64.b64encode(binary_buffer_of_PNG.read()).decode()}`` (str). |
| [PDF extractor](./all_components/pdf_extractor/pdf_extractor.md) | Extracts title, sections, references, tables and text from PDF files.
Inputs:
  `File path` (Union[str, List[str]]): A string containing the server path of a PDF file to extract from, or a list of such a server paths.
Output (Union[Dict, List[Dict]]): A dictionary or a list of dictionaries (if many PDF file paths are inputted), each containing the key-value pairs:
  `title` (str): The title of the PDF file, 
  `sections` (Dict[str, List[str]]): A dictionary that maps section titles to section contents. 
  `references` (List[str]): A list of bibliografic references in the PDF file.
  `tables` (List[str]]): A list of record formatted pandas dataframes.
  `text` (List[str]): A list of strings containing the full document text. |
| [Emails Sender](./all_components/emails_sender/emails_sender.md) | Sends emails.
Inputs:
  emails_input (Dict[Dict[str, str]]): A dictionary with the receiver email adresses (str) as keys, each mapped to a dictionary with the keys `html` (str) mapped to a string `<b>body of the email</b>` with the email content, and `subject` mapped to a string of the email subject.
  sender (str): A string of the sender email, e.g `no-reply@lunarbase.ch`.
  subject (str): Optional global subject, will overwrite the subject. e.g `newsletter for you!`.
Output (str): A string of the text `emails sent` if the emails were sent successfully. |
| [File Upload](./all_components/upload/upload.md) | Uploads local files to the server.
    Input (str): A string of the local path of the local file to upload to the server. If needed, tha local path can be inputted manually by the user.
    Output (str): A string of the server path of the uploaded file. |
| [Cytoscape Visualizer](./all_components/cytoscape_visualizer/cytoscape_visualizer.md) | Receives a Cytoscape formatted JSON and creates a graph visualization. |

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