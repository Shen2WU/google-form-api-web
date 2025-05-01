# 輸入組別資料至 Google 表單 DEMO

本專案是一個簡易的網頁應用程式，用於將特定題目的「完成組別編號」輸入並提交至 Google App Script 後端，儲存在 Google Sheet 中。  
基於只想使用網頁、免下載 Excel App，且支援多人同步輸入的想法實現。

## Features

- 目前提供四題任務的輸入欄位，每題可輸入完成的組別編號。
- 各題皆設有送出按鈕，可即時將資料送至 Google Apps Script。
- 使用卡片式 UI 介面，操作直覺，適合學生或小組使用。

## Technology Stack

- 前端使用 HTML、CSS、JavaScript。
- 後端透過 Google Apps Script 提供 POST API 寫入 Google Sheet。
- 不需下載任何應用程式，只需一個瀏覽器即可使用。

## Source and Attribution

本專案的 HTML/JavaScript 架構初版由 ChatGPT 協助產出，  
本人依據實際需求進行以下修改與擴充：

- 整合 Google Apps Script API
- 自訂畫面風格與使用者互動流程
- 增加錯誤與成功提示訊息

