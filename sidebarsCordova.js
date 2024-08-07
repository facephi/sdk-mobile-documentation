/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //sidebar: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually
  sidebar: [
    {
      type: "category",
      label: "Cordova",
      items: [
        "Mobile_SDK",
        "Core_Component",
        "Nfc_Component",
        "Selphi_Component",
        "Selphid_Component",
        "Phingers_Component",
        "VideoCall_Component",
        "VideoId_Component",
        "Voice_Component",
        "Sample_applications_use",
        {
          type: "category",
          label: "Migrations",
          items: [
            "migration_140_200"
          ],
        }
      ],
    },
  ],
};

export default sidebars;
