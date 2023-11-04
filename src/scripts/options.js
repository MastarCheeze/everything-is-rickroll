// Saves options to chrome.storage
function saveOptions() {
    const videoLink = document.getElementById("video-link").value;
    const shortsLink = document.getElementById("shorts-link").value;

    chrome.storage.sync.set(
        { videoLink: videoLink, shortsLink: shortsLink },
        () => {
            // Update status to let user know options were saved.
            const status = document.getElementById("status");
            status.textContent = "Options saved.";
            setTimeout(() => {
                status.textContent = "";
            }, 750);
        }
    );
};

// Restores select box and checkbox state using the preferences stored in chrome.storage.
function restoreOptions() {
    chrome.storage.sync.get(
        ["videoLink", "shortsLink"],
        (items) => {
            document.getElementById("video-link").value = items.videoLink;
            document.getElementById("shorts-link").value = items.shortsLink;
        }
    );
};

function resetOptions() {
    const videoLink = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    const shortsLink = "https://www.youtube.com/shorts/Ewc9FJMyW_I";
    document.getElementById("video-link").value = videoLink;
    document.getElementById("shorts-link").value = shortsLink;

    chrome.storage.sync.set(
        { videoLink: videoLink, shortsLink: shortsLink },
        () => {
            // Update status to let user know options were saved.
            const status = document.getElementById("status");
            status.textContent = "Options reset.";
            setTimeout(() => {
                status.textContent = "";
            }, 750);
        }
    );
};

document.addEventListener("DOMContentLoaded", restoreOptions);
document.getElementById("save").addEventListener("click", saveOptions);
document.getElementById("reset").addEventListener("click", resetOptions);
