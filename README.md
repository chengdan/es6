# Babel
    1. 命令行转换
   - 通过命令行安装babel工具
   ```json
      npm install -g babel-cli
      //这个是全局安装，可根据需求决定是全局安装还是什么
   ```
   - 在所在项目中初始化项目
   ```json
      在终端输入 npm init
   ```
   - 虽然已经安装了babel-cli，只是这样还不能成功进行转换，我们还需要安装转换包才能成功转换
   ```json
      在终端输入  npm install --save-dev babel-preset-es2015 babel-cli
   ```
   - 在根目录中新建 .babelrc 文件
   ```josn
        {
          "presets": [
            "es2015"
          ],
          "plugins": []
        }
   ```
   - 转换
   ```json
        在终端输入 babel待转换路径/ --out-dir 转换后路径/
   ```

   2. 通过引入js文件转换
   - 可通过命令行获取js文件
   ```json
        在终端输入 npm install babel-core@5 -S
        可根据个人需要决定是全局安装还是局部安装
   ```
   - 可直接在我的项目中拿到browser.js文件
   - 在html中引入文件
   ```html
        <script src="../node_modules/babel-core/browser.js"></script>
        //或者<script src="browser.js"></script>
   ```
   - 在使用了es6语法的script模板中设置type
   ```html
        <script type="text/babel"></script>
   ```