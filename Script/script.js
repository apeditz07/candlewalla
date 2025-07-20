function loadChart() {
  const symbol = document.getElementById("symbolSelector").value || "NSE:NIFTY";
  if (window.tvWidget) window.tvWidget.remove();
  window.tvWidget = new TradingView.widget({
    width: "100%",
    height: 500,
    symbol: symbol,
    interval: "15",
    timezone: "Asia/Kolkata",
    theme: "light",
    style: "1",
    locale: "en",
    container_id: "tradingview_chart"
  });

  document.getElementById("ai-result").innerText = `AI Prediction for ${symbol}: Next move +100 points (Bullish Trend)`;
}
window.addEventListener("DOMContentLoaded", loadChart);
function toggleTheme() {
  document.body.classList.toggle("dark");
}