# clone、pull或push等证书异常
## 提示

`fatal: unable to access 'https://github.com/xxx.git/' `  

`SSL certificate problem: unable to get local issuer certificate `
## 解决方式

1. 管理员身份运行：`cmd`   

2. 在cmd输入：
```bash
git config --global http.sslverify false
```
