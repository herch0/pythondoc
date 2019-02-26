window.onload = e => {
  document.querySelector('#searchword').focus()
}

document.querySelector('#searchword').addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    let word = document.querySelector('#searchword').value
    var creating = browser.tabs.create({
      active: true,
      url: "https://docs.python.org/3/search.html?q=" + word
    })
  }
})