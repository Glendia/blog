# 阿里云OSS命令行工具上传下载{#ossutil_upload_download}  
## 下载ossutil工具

以`Windows`为例子

当前版本：`1.7.19`  
历史版本：关于ossutil各版本源代码以及发布记录的更多信息，请参见[GitHub](https://github.com/aliyun/ossutil/releases)。
|下载地址|SHA256校验和|
|-|-|
|[Windows x86 64bit](https://gosspublic.alicdn.com/ossutil/1.7.19/ossutil-v1.7.19-windows-amd64.zip)|8e9176aedc87d230ccd97dc7236b16564f2a068609ed301acdc73dc27faf7e77|  

**其他版本下载地址：[阿里云帮助中心](https://help.aliyun.com/zh/oss/developer-reference/install-ossutil?spm=a2c4g.11186623.0.i11#section-xla-1lk-s3b)**

## 配置ossutil工具
1. 解压ossutil压缩包
2. 并双击运行ossutil.bat文件
3. 输入以下命令，配置ossutil工具
```bash
ossutil config
```
具体安装看>[下载并安装ossutil](https://help.aliyun.com/zh/oss/developer-reference/install-ossutil?spm=a2c4g.11186623.0.i11#d08636f18cr4c)
## 常用命令

### 创建Bucket
```bash
ossutil64.exe mb oss://<yourBucketName>
```  
### 上传文件
```bash
ossutil64.exe cp <yourLocalFile> oss://<yourBucketName>/<yourObjectName> -f -r
```
> 说明：-f表示强制覆盖 -r表示递归上传 -a表示上传文件时显示进度    
```bash
sossutil64.exe cp 本地文件目录 oss://oss上传路径 -f -r -a
```
#### 文件夹上传