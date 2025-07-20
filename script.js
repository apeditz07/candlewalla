let widget;
function loadChart() {
  const symbol = document.getElementById("symbolSelector").value;
  if (widget) widget.remove();
  widget = new TradingView.widget({
    "width": "100%",
    "height": 500,
    "symbol": symbol,
    "interval": "15",
    "timezone": "Asia/Kolkata",
    "theme": "light",
    "style": "1",
    "locale": "en",
    "toolbar_bg": "#f1f3f6",
    "enable_publishing": false,
    "hide_top_toolbar": false,
    "save_image": false,
    "container_id": "tradingview_widget"
  });
}
window.addEventListener('DOMContentLoaded', loadChart);
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}
function setLang(lang) {
  // Dummy function for now
}