function doPost(e) {
    var sheet = SpreadsheetApp.openById("1AwS4GcqqIf5pBNecp85933lIPJxj0cQH2QwpQy5TSIg").getSheetByName("lab9");  //根據使用的工作表更改

    // 確保有接收到請求
    Logger.log("收到請求:", e);
    if (!e || !e.postData) {
        Logger.log("沒有收到postData");
        return createResponse({ status: "error", message: "No postData received" });
    }

    var data = e.postData.contents; // 直接取請求體內容
    Logger.log("解析後的數據:", data);

    // 如果需要將請求體內容轉為 JSON 物件
    try {
        data = JSON.parse(data);
    } catch (error) {
        Logger.log("Error parsing data: " + error);
        return createResponse({ status: "error", message: "Invalid data format" });
    }

    // 確保有接收到 `number` 參數
    if (!data || !data.number || !data.col) {
        Logger.log("Invalid number received");
        return createResponse({ status: "error", message: "No number received" });
    }

    try {
        // 將數字寫入
        sheet.getRange(data.number,data.col).setValue("v");
        Logger.log("Number written successfully: " + data.number);
    } catch (error) {
        Logger.log("Error writing number: " + error);
        return createResponse({ status: "error", message: "Failed to write number" });
    }

    return createResponse({ status: "success", number: data.number });
}



//  正確的 CORS 回應
function doOptions(e) {
    var output = ContentService.createTextOutput("");
    output.setMimeType(ContentService.MimeType.TEXT);
    output.setHeader('Access-Control-Allow-Origin', '*');
    output.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    output.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return output;
}

function createResponse(responseData) {
    var output = ContentService.createTextOutput(JSON.stringify(responseData))
        .setMimeType(ContentService.MimeType.JSON);
    
    return output;
}
