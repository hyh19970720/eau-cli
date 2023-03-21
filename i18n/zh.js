module.exports = {
  examples: "示例:",
  eauCommandsDesc: {
    init: "选择模板创建一个新的工程",
    set: "定制化个性化项目配置",
    get: "读取项目配置",
  },
  eauInit: {
    help: ["# 创建新项目", "$ eau init", "# 创建名为my-project的新项目", "$ eau init my-project"],
    templates: ["未检索到项目模板或者项目模板格式错误，请重新配置项目模板", "你的模板文件应严格按照以下格式：", "你可以使用", "来配置您的项目模板"],
    onDelDir: "正在删除旧文件夹...",
    delDir: ["旧文件夹删除完成"],
    onDownload: "正在拉取模板...",
    download: ["下载失败", "下载完成", "你可以使用", "进入项目文件夹"],
  },
  eauSet: {
    help: ["# 设置语言为英文", "$ eau set language en"],
    noValue: "配置值未定义，请输入配置值后重试",
    langErr: "语言设置错误, 仅支持中文(zh)和英文(en)",
    valueErr: ["配置项", "不存在, 请检查配置项名称并重新尝试"],
    rewriteLoading: "正在设置...",
    rewriteErr: "配置项设置失败",
    rewriteSuc: "配置项设置成功",
  },
  eauGet: {
    help: ["# 查看当前语言", "$ eau get language"],
    search: "查询中...",
    suc: ["当前配置项", "值为"],
    fat: ["配置项", "不存在"],
  },
  propmts: {
    projectName: "请输入项目名称",
    projectNameErr: "项目名称仅支持字母、数字、横杠，且必须为字母开头",
    isExist: "同名文件路径已存在，请选择处理方式",
    isExistOps: ["覆盖", "取消"],
    template: "请选择项目模板",
    useSSH: "是否使用ssh方式拉取模板? (必须确保已经配置了远程仓库的ssh)",
  },
};
