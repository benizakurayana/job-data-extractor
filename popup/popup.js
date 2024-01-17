const extractButton = document.getElementById("extractButton");

extractButton.onclick = function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'extractData' });
    });
};
