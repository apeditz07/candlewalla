
let widget;

function loadChart() {
  const symbol = document.getElementById("symbolSelector").value;
  if (widget) widget.remove();
  widget = new TradingView.widget({
    width: "100%",
    height: 500,
    symbol: symbol,
    interval: "15",
    timezone: "Asia/Kolkata",
    theme: "light",
    style: "1",
    locale: "en",
    toolbar_bg: "#f1f3f6",
    enable_publishing: false,
    hide_top_toolbar: false,
    save_image: false,
    container_id: "tradingview_0f5a2"
  });
}

function toggleTheme() {
  document.body.classList.toggle('dark');
}

function setLang(lang) {
  const title = document.getElementById("title");
  const aiOutput = document.getElementById("ai-output");
  if (lang === 'hi') {
    title.innerText = "कैंडल वाला 📊";
    aiOutput.innerText = "AI पूर्वानुमान यहाँ दिखेगा";
  } else {
    title.innerText = "Candle Walla 📊";
    aiOutput.innerText = "AI prediction will show here";
  }
}

window.addEventListener('DOMContentLoaded', () => {
  loadChart();
  document.getElementById("ai-output").innerText = "Next candle prediction: UP 🔼, +120 pts (demo AI output)";
});
