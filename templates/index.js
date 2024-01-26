/*
 * @Author: bbw 1526699702@qq.com
 * @Date: 2024-01-24 17:07:48
 * @LastEditors: bbw 1526699702@qq.com
 * @LastEditTime: 2024-01-26 14:02:50
 * @FilePath: \create-app-cil\templates\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const templates = {
  'vue3-templates' : {
    url: 'https://gitee.com/bubowen/vue3-templates',
    downloadUrl: 'https://gitee.com:bubowen/vue3-templates#main',
    description: 'vue模版'
  },
  'vue3-templates-notUI' : {
    url: 'https://gitee.com/bubowen/vue3-templates-notUI',
    downloadUrl: 'https://gitee.com:bubowen/vue3-templates-notUI#main',
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
        { value: 'vue3-templates', name: 'vue3+ts+vite+elment-puls' },
        { value: 'vue3-templates-notUI', name: 'vue3+vite+ts(无UI)' }
    ]
    },
    {
      type: 'input',
      name: 'projectName',
      message: "请输入项目名称",
    }
]