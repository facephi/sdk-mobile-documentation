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
  //sidebar: [{ type: "autogenerated", dirName: "ios" }],

  // But you can create a sidebar manually
  sidebar: [
    {
      type: "category",
      label: "Android",
      items: [
        "Mobile_SDK",
        "Tracking_Component",
        "Selphi_Component",
        "SelphID_Component",
        "Phingers_Component",
        "Voice_Component",
        "NFC_Component",
        "Video_Call_Component",
        "Video_Id_Component",
        "Video_Recording_Component",
        "Capture_Component",
        "Flow_Component",
        "Changelog",
        "FAQ",
        "Sample_applications_use",
        "Customization",
      ],
    },
  ],
};

export default sidebars;
