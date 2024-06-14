# 安装strapi的教程
推荐工具：
* [nodejs](https://nodejs.org/en/download/) `18`-`20`
* [vscode](https://code.visualstudio.com/download)
* [git](https://git-scm.com/downloads) 代码管理    

数据库  
* [mysql](https://www.mysql.com/downloads/)
* [mongodb](https://www.mongodb.com/try/download/community)
## 快速定位{#location}
1. [安装nodejs](#install-nodejs)
2. [安装strapi](#install-strapi)
3. [配置strapi项目](#config-strapi)
4. [启动strapi项目](#start-strapi)
5. [常见问题](#faq)
## 安装nodejs{#install-nodejs}
1. 下载nodejs安装包 
2. 安装nodejs
3. 验证nodejs安装
```bash
node -v
npm -v
```
设置npm 镜像源
1. 打开命令行输入
```bash
npm config set registry https://registry.npmmirror.com
```
3. 验证npm镜像源
```bash
npm config get registry
```
4. strapi推荐使用npm或者yarn
5. 安装yarn
```bash
npm install -g yarn
yarn -v
```
6.设置yarn镜像源
1. 打开命令行输入
```bash
yarn config set registry https://registry.npmmirror.com
```
3. 验证yarn镜像源
```bash
yarn config get registry
```
## 安装strapi{#install-strapi}
1. 打开命令行输入
```bash
yarn create strapi-app my-project
```
`my-project`是你的项目名称
2. 选择安装类型
```bash
Custom (manual settings)
```
3. 脚本语言选择
```bash
JavaScript
```
4. 数据库选择 选择自己合适的或者喜欢的
```bash
MySQL
Postgre
liteSQL
```
5. 数据库是否SSL验证输入
```bash
yes
#or
No
```
6. 配置数据库信息
```bash
host: localhost #数据库地址，如果在本地，则使用localhost
port: 3306 #MySQL默认3306
database: strapi #数据库名称
username: root #数据库用户名
password: root #数据库密码
```
## 配置strapi项目{#config-strapi}
1. 打开命令行输入
```bash
yarn build
yarn develop
```
2. 打开浏览器输入
```bash
http://localhost:1337/admin
```
## 启动strapi项目{#start-strapi}
1. 打开命令行输入
```bash
yarn develop
```
## 常见问题{#faq}
### sharp依赖安装失败{#strapi-ERR}
`npm ERR! code ELIFECYCLE`  
`npm ERR! errno 1`  
`npm ERR! sharp@0.28.3 install:`  

解决
1. 打开命令行输入   
```bash
yarn config set sharp_binary_host "https://npmmirror.com/mirrors/sharp"
#Sharp新yarn源
yarn config set sharp_libvips_binary_host "https://npmmirror.com/mirrors/sharp-libvips"
```
以上两个都输入，然后执行
```bash
​yarn global add sharp #全局安装
```
然后删除​my-project​下的​node_modules​目录，在终端执行
```bash
yarn install
yarn build
yarn develop
```
2. 配置数据库失败：  
`Error: ER_ACCESS_DENIED_ERROR: Access denied for user 'root'@'localhost' (using password: YES)`
解决
1. 打开命令行输入
```bash
mysql -u root -p
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
FLUSH PRIVILEGES;
exit
yarn build
yarn develop
```
...待补充





