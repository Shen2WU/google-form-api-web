# 輸入組別資料至 Google 表單 DEMO

本專案是一個簡易的網頁應用程式，用於將特定題目的「完成組別編號」輸入並提交至 Google App Script 後端，儲存在 Google Sheet 中。  
基於只想使用網頁、免下載 Excel App，且支援多人同步輸入的想法實現。

## Features

- 簡單的網頁表單，讓使用者輸入不同問題的組別號碼。
- 資料透過 Google Apps Script Web App 提交到 Google 表格。
- 透過 **Cloudflare Pages** 部署靜態網頁，輕鬆上線。

### **POST Request to Google Apps Script Web App**

這是由前端網頁向 Google Apps Script Web App 發送的請求。
#### Example Request:
## Source and Attribution
```http
POST /exec HTTP/1.1
Host: script.google.com
Content-Type: application/json

{
    "number": 5,
    "col": 1
}
```
本專案的 HTML/JavaScript 架構初版由 ChatGPT 協助產出，  
本人依據實際需求進行以下修改與擴充：

- 整合 Google Apps Script API
- 自訂畫面風格與使用者互動流程
- 增加錯誤與成功提示訊息

