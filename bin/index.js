#!/usr/bin/env node

import { templates,questions } from '../templates/index.js'
import { program } from 'commander'
import download from 'download-git-repo'
import inquirer from 'inquirer'
import ora from 'ora'
import logSymbols from 'log-symbols'
import chalk from 'chalk'

//create-app init 
program.version('1.0.0') // -v 或者 --versions输出版本号

program
  .command('init')
  .description('初始化项目模版')
  .action(() => {
    
    // 用户交互
    inquirer.prompt(questions).then((answers)=>{
      const {templateName,projectName} = answers

      // 下载之前做loading提示
      const spinner = ora('正在下载模版...').start();
      const {downloadUrl} = templates[templateName];
      //download 
      download(downloadUrl, projectName, (err) => {
        if(err) {
          spinner.fail();
          console.log(logSymbols.error, chalk.red(err))
          return;
        }
        spinner.succeed(); // 下载成功提示
        console.log(chalk.yellow('初始化模版成功'))
        console.log(chalk.green(
        ` cd ${projectName}\n yarn\n yarn dev`
        ))
      })

    })

  });

  program
  .command('list')
  .description('模版列表')
  .action(() => {
    console.log(chalk.blue(
      `vue: vue3-templates`
    ))
  })

program.parse(process.argv);