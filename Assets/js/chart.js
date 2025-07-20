function loadChart() {
  const symbol = document.getElementById("symbolSelector").value;
  document.getElementById("tradingview-widget").innerHTML = `Chart for ${symbol}`;
}
function toggleTheme() {
  document.body.classList.toggle('dark');
}
