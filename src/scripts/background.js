function updateBadge(activated) {
    if (activated) {
        chrome.action.setBadgeText({ text: "ON" });
        chrome.action.setBadgeBackgroundColor({ color: "#50C878" });
    } else {
        chrome.action.setBadgeText({ text: "OFF" });
        chrome.action.setBadgeBackgroundColor({ color: "#A9A9A9" });
    }
}

chrome.runtime.onInstalled.addListener((details) => {
    chrome.storage.local.set({ activated: false })
    chrome.storage.sync.set(
        {
            videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            shortsLink: "https://www.youtube.com/shorts/Ewc9FJMyW_I"
        },
    );
    updateBadge(false);
});

chrome.runtime.onStartup.addListener(() => {
    chrome.storage.local.get(["activated"]).then((result) => {
        updateBadge(result.activated);
    });
});

chrome.action.onClicked.addListener((tab) => {
    chrome.storage.local.get(["activated"]).then((result) => {
        chrome.storage.local.set({ activated: !result.activated });
        updateBadge(!result.activated);
    });
});