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
      items: ['index', 'quickstart', 'lunar_local_environment']
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
        'workflow_tutorials/hello_lunar',
        'workflow_tutorials/my_first_workflow',
        'workflow_tutorials/import_workflow',
        'workflow_tutorials/export_workflow',
        'workflow_tutorials/add_api_key',
        'workflow_tutorials/searching_workflows',
        'workflow_tutorials/copilot',
        'creating_a_new_component',
        'workflow_tutorials/csv_chat',
      ]
    },
    {
      type: 'category',
      label: 'Contributions Gallery',
      collapsed: true,
      collapsible: true,
      items: [
        // 'contributions_gallery/financial_report',
        // 'contributions_gallery/gene_analysis',
        // 'contributions_gallery/ai_music',
        'contributions_gallery/paper_extraction',
        'contributions_gallery/nl2sql',
        'contributions_gallery/company_financial_report',
        'contributions_gallery/mumax3',
      ],
    },
    {
      type: 'category',
      label: 'Additional Resources',
      collapsed: false,
      collapsible: false,
      items: ['wsl_install']
    },
  ],
};

export default sidebars;
