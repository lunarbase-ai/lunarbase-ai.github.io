import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  sidebar: [
    {
      type: 'category',
      label: 'Get Started',
      collapsed: false,
      collapsible: false,
      items: ['index', 'quickstart']
    },
    'component',
    'workflow',
    'concepts',
    {
      type: 'category',
      label: 'Tutorials',
      collapsed: true,
      collapsible: true,
      items: [
        'creating_a_new_component',
        'workflow_tutorials/chat_with_db',
        'workflow_tutorials/csv_chat',
        'workflow_tutorials/financial_report',
        'workflow_tutorials/milvus_ingestion',
        'workflow_tutorials/milvus_rag',
        'workflow_tutorials/subworkflow',
        'workflow_tutorials/autocreate',
      ]
    },
  ],
};

export default sidebars;