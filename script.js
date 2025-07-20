let lang = 'en';
function setLang(l) {
  lang = l;
  document.getElementById('title').innerText = l==='en'? 'Candle Walla':'कैंडल वाला';
  document.getElementById('learn-title').innerText = l==='en'? 'Learn Stocks':'स्टॉक्स सीखें';
  document.getElementById('learn-text').innerText = l==='en'? 'Watch the chart and prediction below.':'नीचे चार्ट और भविष्यवाणी देखें।';
  loadPrediction();
}

const tvScript = document.createElement('script');
tvScript.src = "https://s3.tradingview.com/tv.js";
tvScript.onload = () => new TradingView.widget({
  width: "100%", height: 400, symbol: "NSE:NIFTY",
  interval: "15", timezone: "Asia/Kolkata",
  theme: "light", style: "1", locale: lang
});
document.head.appendChild(tvScript);

function loadPrediction() {
  const dir = Math.random()>0.5?1:-1;
  const text = lang==='en'
    ? (dir===1?'🔼 Next candle likely UP':'🔻 Next candle likely DOWN')
    : (dir===1?'🔼 अगली मोमबत्ती ऊपर हो सकती है':'🔻 अगली मोमबत्ती नीचे हो सकती है');
  document.getElementById('prediction').innerText = text;
}

setLang('en');
setInterval(loadPrediction, 15*60*1000);