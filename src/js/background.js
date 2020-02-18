chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.sendMessage(tab.id, "Action");
});

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if (request == "Action") {
        //window.alert( "Hello Google Plugin By background.js" ) ;
        console.log('Hello Google Plugin by background.js!');
	}
});