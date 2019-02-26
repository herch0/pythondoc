window.onload = e => {
  document.querySelector('#searchword').focus()
}

document.querySelector('#searchword').addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    let word = document.querySelector('#searchword').value
    chrome.tabs.create({
      url: "https://docs.python.org/3/search.html?q=" + word
    })
  }
})