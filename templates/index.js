export const templates = {
  'vue3-template' : {
    url: 'https://github.com/Abu1999/vue3-template-v2.0',
    downloadUrl: 'direct:https://github.com/Abu1999/vue3-template-v2.0.git#main',
    description: 'vue空白模版'
  },
  'admin-web-tdesign' : {
    url: 'https://github.com/Abu1999/admin-web-tdesign',
    downloadUrl: 'direct:https://github.com/Abu1999/admin-web-tdesign.git#main',
    description: 'vue后台模版'
  },
  'uniapp-wot-template' : {
    url: 'https://github.com/Abu1999/uniapp-wot-template',
    downloadUrl: 'direct:https://github.com/Abu1999/uniapp-wot-template.git#main',
    description: 'uniapp模板'
  },
}

export const questions  =[
    {
      type: 'list',
      name: 'templateName',
      message: "请选择模版",
      default: 0,
      choices: [
        { value: 'vue3-templates', name: 'vue空白模版' },
        { value: 'admin-web-tdesign', name: 'vue后台模版' },
        { value: 'uniapp-wot-template', name: 'uniapp模板' }
    ]
    },
    {
      type: 'input',
      name: 'projectName',
      message: "请输入项目名称",
    }
]
