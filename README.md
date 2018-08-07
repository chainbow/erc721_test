## 安装依赖的第三方包

```
npm install -D truffle
npm install -D zeppelin-solidity
npm install -D truffle-privatekey-provider
```

## 部署到 ropsten

修改 `truffle.js` 中的私钥后执行部署

```
truffle migrate --network ropsten
```
