function pageChange(url) {
    chrome.storage.sync.get(
        ["videoLink", "shortsLink"],
        (items) => {
            var videoLink = items.videoLink;
            var shortsLink = items.shortsLink;
            chrome.storage.local.get(["activated"]).then((result) => {
                if (result.activated) {
                    if (
                        url.startsWith("https://www.youtube.com/watch?v=")
                        && !url.startsWith(videoLink)
                    ) {
                        window.location.replace(videoLink);
                    } else if (
                        url.startsWith("https://www.youtube.com/shorts/")
                        && !url.startsWith(shortsLink)
                    ) {
                        window.location.replace(shortsLink);
                    }
                }
            });
        }
    );
}

document.addEventListener("yt-navigate-start", (e) => {
    pageChange("https://www.youtube.com" + e.detail.url);
});

pageChange(window.location.href);