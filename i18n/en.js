module.exports = {
  examples: "Examples:",
  eauCommandsDesc: {
    init: "Generate a new project from a template",
    set: "Customized personalized configuration",
    get: "Read configuration",
  },
  eauInit: {
    help: ["# Create a new project", "$ eau init", "# Create a new project named my-project", "$ eau init my-project"],
    templates: [
      "The project template was not retrieved or the format of the project template is incorrect. Reconfigure the project template",
      "Your template file should be in the following format:",
      "You can use",
      "to configure your project template",
    ],
    onDelDir: "Deleting an old folder...",
    delDir: ["The old folder is deleted"],
    onDownload: "Downloading the template...",
    download: ["Download failure", "Download successfully", "You can use", "enter the folder."],
  },
  eauSet: {
    help: ["# Set the language to Chinese", "$ eau set language zh"],
    noValue: "Config value is undefined, please input the config value and try again",
    langErr: "Language setting error, only 'zh' and 'en' is avaliable",
    valueErr: ["config name", "is not exist, please check the config name and try again"],
    rewriteLoading: "On setting...",
    rewriteErr: "Config setting failure",
    rewriteSuc: "Config setting successfully",
  },
  eauGet: {
    help: ["# Get current language", "$ eau get language"],
    search: "On searching...",
    suc: ["Current config name", "config value is"],
    fat: ["config name", "is undefined"],
  },
  propmts: {
    projectName: "Input the project name",
    projectNameErr: "The project name can only contain Letters, Digits, and _ , and must start with a Letter",
    isExist: "The file path with the same name already exists. Select a processing mode",
    isExistOps: ["Cover", "Cancel"],
    template: "Select a project template",
    useSSH: "Do you want to use ssh to pull a template? (You must ensure that ssh for the remote repository is configured)",
  },
};
