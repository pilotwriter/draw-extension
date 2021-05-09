chrome.browserAction.onClicked.addListener((tab)=>{
    const message = "draw";
    chrome.tabs.sendMessage(tab.id,message);
})