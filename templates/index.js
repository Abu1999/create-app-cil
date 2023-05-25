export const templates = {
  'vue3-templates' : {
    url: 'https://github.com/Abu1999/vue3-templates',
    downloadUrl: 'https://github.com:Abu1999/vue3-templates#main',
    description: 'vue模版'
  }
}

export const questions  =[
    {
      type: 'list',
      name: 'templateName',
      message: "请选择模版",
      default: 0,
      choices: [
        { value: 'vue3-templates', name: 'vue3' },
        { value: '', name: '无' }
    ]
    },
    {
      type: 'input',
      name: 'projectName',
      message: "请输入项目名称",
    }
]