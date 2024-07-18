# Lunar components

Components are distinguishable units of work that combine to create workflows. Components enable the encapsulation of workflow logic in observable units that can be reused across workflows and sub-workflows.

Components can encapsulate any discrete task in a process, from textual input or file reading operations, to field selection, database and API querying or more complex AI/ML algorithms.

The following is a list of pre-defined Lunar components, together with their descriptions.

| Component name | Component description |
|---|---|
| [NeXtProt](./all_components/nextprot/nextprot.md) | Fetch data from neXtProt: an on-line knowledge platform on human proteins, such as their function, subcellular location, expression, interactions and role in diseases |
| [Picture Extractor](./all_components/pic2text/pic2text.md) | Extracts text and math formulas from a picture |
| [Table2Text](./all_components/table2text/table2text.md) | Takes a CSV formatted table as input and converts it to a text by sentencifying each row |
| [Wikipedia client](./all_components/wikipedia/wikipedia.md) | Retrieves data from Wikipedia API |
| [Gene Set Upload](./all_components/read_geneset/read_geneset.md) | Reads a CSV file with genes and outputs a list of the gene names |
| [SPARQL Query](./all_components/sparql/sparql.md) | Fetch data from a SPARQL endpoint |
| [Spacy NER](./all_components/ner/ner.md) | Performs Named Entity Recognition (NER) |
| [Property Getter](./all_components/property_getter/property_getter.md) | Extracts the mapped value of an inputted key/field/attribute in an inputted object/datastructure |
| [Bar chart](./all_components/bar_chart/bar_chart.md) | Plots a bar chart given a dictionary with numerical values |
| [LlamaIndex Querying](./all_components/llamaindex_query/llamaindex_query.md) | Querying from LlamaIndex index |
| [HTML Reports Builder](./all_components/html_reports_builder/html_reports_builder.md) | Builds HTML reports |
| [Elasticsearch store](./all_components/elasticsearchdb/elasticsearchdb.md) | Stores data in a given Elasticsearch instance for future search |
| [Pubmed Searcher](./all_components/pubmed_searcher/pubmed_searcher.md) | Search article information from Pubmed by keywords |
| [Htmls2Texts](./all_components/html2text/html2text.md) | Converts HTMLs to texts |
| [LlamaIndex Indexing](./all_components/llamaindex_index/llamaindex_index.md) | Index documents from a json dict with Azure OpenAI models within LlamaIndex |
| [Indra Network Assembler](./all_components/indra_network/indra_network.md) | Retrieve literature related to a set of genes |
| [LLM prompt](./all_components/llm_prompt/llm_prompt.md) | Connects to a LLM's API, runs natural language prompts and outputs the result as text |
| [Csv Viewer](./all_components/csv_viewer/csv_viewer.md) | Displays  |
| [SQL Query](./all_components/sql_query/sql_query.md) | Connects to a SQL database and returns the result of a query |
| [SQL Schema Extractor](./all_components/sql_schema_extractor/sql_schema_extractor.md) | Connects to a SQL database and retrieves its schema, i |
| [OpenAI prompt](./all_components/openai_llm/openai_llm.md) | Connects to OpenAI's API, runs natural language prompts and outputs the result as text |
| [WolframAlpha client](./all_components/wolfram_alpha/wolfram_alpha.md) | Obtains a response from the WolframAlpha API |
| [Zip file extractor](./all_components/zip/zip.md) | Extracts files from a ZIP file ( |
| [Online Spreadsheet](./all_components/online_spreadsheet_input/online_spreadsheet_input.md) | Downloads and outputs the content of an online spreadsheet |
| [Yahoo Finance API](./all_components/yahoo_finance/yahoo_finance.md) | Connects to Yahoo's public API (using Python package yfinance) and retrieves financial data about companies and their stocks |
| [Azure Open AI vectorizer](./all_components/azure_openai_vectorizer/azure_openai_vectorizer.md) | Encodes inputted texts as numerical vectors (embeddings) using Azure OpenAI models |
| [Bing Search client](./all_components/bing_search/bing_search.md) | Searches data using Bing Search API |
| [GraphQL Query](./all_components/graphql/graphql.md) | Fetches data from a GraphQL endpoint |
| [Text Input](./all_components/text_input/text_input.md) | Allows the user to input a text (potentially with template variables) that can be used in other downstream components |
| [SBGN Visualizer](./all_components/sbgn_visualizer/sbgn_visualizer.md) | Receives a BSGN XML file and creates a graph visualization |
| [OpenAI vectorizer](./all_components/openai_vectorizer/openai_vectorizer.md) | Use OpenAI models to encode texts |
| [Wikidata client](./all_components/wikidata/wikidata.md) | Retrieves data from Wikidata API (a knowledge graph / knowledge base) |
| [Natural language to SQL Query](./all_components/nl2sql/nl2sql.md) | Produces an SQL query based on a natural language query statement  |
| [URLs Scraper](./all_components/urls_scraper/urls_scraper.md) | Scrapes URLs |
| [Online Spreadsheet IO](./all_components/online_spreadsheet_io/online_spreadsheet_io.md) | Save to a online spreadsheet then and forward the content |
| [Property Selector](./all_components/property_selector/property_selector.md) | Get values of properties (keys) of an inputted dictionary |
| [Csv Upload](./all_components/csv_extractor/csv_extractor.md) | Reads a CSV file with a header |
| [Report](./all_components/report/report.md) | Creates an editable report from the input it gets |
| [UniProt](./all_components/uniprot/uniprot.md) | Fetch data from UniProt: a database of high-quality, comprehensive and freely accessible resource of protein sequence and functional information |
| [HuggingFace vectorizer](./all_components/huggingface/huggingface.md) | Encode texts using HuggingFace's models |
| [R coder](./all_components/r_coder/r_coder.md) | Performs customized R code execution |
| [Python coder](./all_components/python_coder/python_coder.md) | Performs customized Python code execution |
| [Gemini AI prompt](./all_components/gemini_llm/gemini_llm.md) | Connects to Gemini's API, runs natural language prompts and outputs the result as text |
| [PROGENy](./all_components/progeny/progeny.md) | PROGENy is the definitive resource for pathways and target genes, with weights for each interaction |
| [ReACT Agent](./all_components/react_agent/react_agent.md) | Implements ReACT logic |
| [Azure Open AI prompt](./all_components/azure_openai_llm/azure_openai_llm.md) | Connects to Azure OpenAI's API (an LLM), runs an inputted natural language prompt (str), and output the result as text (str) |
| [NCI Thesaurus](./all_components/nci_thesaurus/nci_thesaurus.md) | Retrieve biomedical information from the NCI Thesaurus, via SPARQL query |
| [WikiPathways](./all_components/wikipathways/wikipathways.md) | Fetch data from WikiPathways: an open science platform for biological pathways contributed, updated, and used by the research community |
| [Milvus vectorstore](./all_components/milvusdb/milvusdb.md) | Store embeddings on a Milvus server |
| [CIViC](./all_components/civicdb/civicdb.md) | Searches for gene information from the CIViC database |
| [Elasticsearch client](./all_components/elasticsearch/elasticsearch.md) | Search data in a given Elasticsearch instance |
| [Milvus retriever](./all_components/milvus/milvus.md) | Queries embeddings from a Milvus server |
| [Line chart](./all_components/line_chart/line_chart.md) | Plots a line chart given a dictionary with numerical keys and values |
| [PDF extractor](./all_components/pdf_extractor/pdf_extractor.md) | Extracts title, sections, references, tables and text from PDF files |
| [Emails Sender](./all_components/emails_sender/emails_sender.md) | Sends emails |
| [File Upload](./all_components/upload/upload.md) | Uploads local files to the server |
| [Cytoscape Visualizer](./all_components/cytoscape_visualizer/cytoscape_visualizer.md) | Receives a Cytoscape formatted JSON and creates a graph visualization |


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