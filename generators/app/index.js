const Generator = require('yeoman-generator')
// 导出一个类型 该类型继承自Generator
module.exports = class extends Generator{
    // 用于以命令行交互的方式询问用户的一些问题
    prompting () {
        // Yeoman 在询问用户环节会自动调用此方法
        // 在此方法中可以调用父类的 prompt() 方法发出对用户的命令行询问
        return this.prompt([
          {
            type: 'input',
            name: 'name',
            message: 'Your project name',
            default: this.appname // appname 为项目生成目录名称
          }
        ])
        .then(answers => {
          // answers => { name: 'user input value' }
          this.answers = answers
        })
    }
    writing(){
    // 把每一个文件都通过模板转换到目标路径
    const templates = [
        '.browserslistrc',
        '.editorconfig',
        '.env.development',
        '.env.production',
        '.eslintrc.js',
        '.gitignore',
        'babel.config.js',
        'package.json',
        'postcss.config.js',
        'README.md',
        'public/favicon.ico',
        'public/index.html',
        'src/App.vue',
        'src/main.js',
        'src/router.js',
        'src/assets/logo.png',
        'src/components/HelloWorld.vue',
        'src/store/actions.js',
        'src/store/getters.js',
        'src/store/index.js',
        'src/store/mutations.js',
        'src/store/state.js',
        'src/utils/request.js',
        'src/views/About.vue',
        'src/views/Home.vue'
    ]
    templates.forEach(item => {
        // item => 每个文件路径
        this.fs.copyTpl(
            this.templatePath(item),
            this.destinationPath(item),
            this.answers
            )
        }) 
    }
}