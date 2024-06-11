# 配置{#config}   
### 查看全局配置列表{###config-list}
```bash   
git config --global -l
```  
### 查看局部配置列表{###config-list-local}   
```bash
git config --local -l   
```  

### 查看所有的配置以及它们所在的文件{#config-list-all}   
```bash 
git config --list --show-origin
``` 

### 查看已设置的全局用户名/邮箱{#config-list-user}
```bash 
git config --global --get user.name
git config --global --get user.email
``` 

### 设置全局用户名/邮箱{#config-set-user}   
```bash 
git config --global user.name "xiejiahe"
git config --global user.email "example@example.com"
``` 

### 设置本地当前工作区仓库用户名/邮箱{#config-set-user-local}   
```bash 
git config --local user.name "xiejiahe"
git config --local user.email "example@example.com"
``` 

### 删除配置{#config-unset}   
```bash 
git config --unset --global user.name
git config --unset --global user.email
``` 

### 修改默认文本编辑器，比如 nano{#config-set-editor}   
### 常用编辑器：emacs / nano / vim / vi{#config-set-editor-list}  
```bash 
git config --global core.editor nano
``` 

### 将默认差异化分析工具设置为 vimdiff{#config-set-diff}   
```bash
git config --global merge.tool vimdiff
``` 

### 编辑当前仓库配置文件{#config-edit}   
```bash
git config -e  # 等价 vi .git/config
``` 

### 文件权限的变动也会视为改动, 可通过以下配置忽略文件权限变动{#config-ignore-file-mode}   
```bash
git config core.fileMode false
``` 

### 文件大小写设为敏感, git默认是忽略大小写{#config-case-sensitive}    

```bash
git config --global core.ignorecase false
``` 

### 配置 git pull 时默认拉取所有子模块内容{#config-pull-submodule}   
```bash
git config submodule.recurse true
``` 

### 记住提交账号密码, 下次操作可免账号密码{#config-credential}     
```bash
git config --global credential.helper store # 永久
git config --global credential.helper cache # 临时，默认15分钟
```
