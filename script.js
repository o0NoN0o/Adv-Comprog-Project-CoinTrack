function fetchCoinInfo() {
    const coinInput = document.getElementById('coinInput').value.toLowerCase().trim();
    const apiUrl = `https://api.coincap.io/v2/assets/${coinInput}`;

    if (/^\s*$/.test(coinInput)) {
      document.getElementById('coinInfo').innerText = 'Coin not found. Please enter a valid coin name.';
      return;
    }

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (coinInput == "") {
          document.getElementById('coinInfo').innerText = 'Coin not found. Please enter a valid coin name.';
        } else if(data.data) {
          displayCoinInfo(data.data);
        } else {
          document.getElementById('coinInfo').innerText = 'Coin not found. Please enter a valid coin name.';
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        document.getElementById('coinInfo').innerText = 'An error occurred while fetching data. Please try again.';
      });
  }

  function displayCoinInfo(coinData) {
    const coinInfoElement = document.getElementById('coinInfo');
    coinInfoElement.innerHTML = `
      <h2>${coinData.name} (${coinData.symbol})</h2>
      <p><strong><u>Rank:</strong></u> ${coinData.rank}</p>
      <p>Price USD: $${parseFloat(coinData.priceUsd).toFixed(2)}</p>
      <p>Market Cap USD: $${parseFloat(coinData.marketCapUsd).toFixed(0)}</p>
      <p>24-Hour Change: ${parseFloat(coinData.changePercent24Hr).toFixed(2)}%</p>
    `;

  }


async function displayGraph10() {
  const response = await fetch('https://api.coincap.io/v2/assets');
  const data = await response.json();
  console.log(data);
  const rank = 10;
  const dataseries = data.data.slice(0,rank);
  const labels = dataseries.map(ct => ct.id);
  const price = dataseries.map(ct => ct.priceUsd)
  const ctx = document.getElementById('graph1');
  if(window.PieChart1){
    window.PieChart1.destroy();
}
  PieChart1 = new Chart(ctx, {
      type: 'line',
      data: {
      labels: labels,
      datasets: [{
          label: 'PriceUsd',
          data: price,
          borderWidth: 1
      }]
      },
      options:{
      plugins: {
          title: {
            display: true,
            text: 'Cryptocurrency Price Comparison',
            fontSize: 16
          }
        }
      }
  });
  const labels2 = dataseries.map(ct => ct.id);
  const price2 = dataseries.map(ct => ct.marketCapUsd)
  const ctx2 = document.getElementById('graph2');
  if(window.PieChart2){
    window.PieChart2.destroy();
}
  PieChart2 = new Chart(ctx2, {
      type: 'pie',
      data: {
      labels: labels2,
      datasets: [{
          label: 'MarketCapUsd',
          data: price2,
          borderWidth: 1
      }]
      },
      options:{
      plugins: {
          title: {
            display: true,
            text: 'Top 10 Cryptocurrencies by Market Cap',
            fontSize: 16
          }
        },
      }
  });
};

async function displayGraph50() {
  const response = await fetch('https://api.coincap.io/v2/assets');
  const data = await response.json();
  console.log(data);
  const rank = 50;
  const dataseries = data.data.slice(0,rank);
  const labels = dataseries.map(ct => ct.id);
  const price = dataseries.map(ct => ct.priceUsd)
  const ctx = document.getElementById('graph1');
  if(window.PieChart1){
    window.PieChart1.destroy();
}
  PieChart1 = new Chart(ctx, {
      type: 'line',
      data: {
      labels: labels,
      datasets: [{
          label: 'PriceUsd',
          data: price,
          borderWidth: 1
      }]
      },
      options:{
      plugins: {
          title: {
            display: true,
            text: 'Cryptocurrency Price Comparison',
            fontSize: 16
          }
        }
      }
  });
  const labels2 = dataseries.map(ct => ct.id);
  const price2 = dataseries.map(ct => ct.marketCapUsd)
  const ctx2 = document.getElementById('graph2');
  if(window.PieChart2){
    window.PieChart2.destroy();
}
  PieChart2 = new Chart(ctx2, {
      type: 'pie',
      data: {
      labels: labels2,
      datasets: [{
          label: 'MarketCapUsd',
          data: price2,
          borderWidth: 1
      }]
      },
      options:{
      plugins: {
          title: {
            display: true,
            text: 'Top 50 Cryptocurrencies by Market Cap',
            fontSize: 16
          }
        },
      }
  });
};

async function displayGraph100() {
  const response = await fetch('https://api.coincap.io/v2/assets');
  const data = await response.json();
  console.log(data);
  const rank = 100;
  const dataseries = data.data.slice(0,rank);
  const labels = dataseries.map(ct => ct.id);
  const price = dataseries.map(ct => ct.priceUsd)
  const ctx = document.getElementById('graph1');
  if(window.PieChart1){
    window.PieChart1.destroy();
}
  PieChart1 = new Chart(ctx, {
      type: 'line',
      data: {
      labels: labels,
      datasets: [{
          label: 'PriceUsd',
          data: price,
          borderWidth: 1
      }]
      },
      options:{
      plugins: {
          title: {
            display: true,
            text: 'Cryptocurrency Price Comparison',
            fontSize: 16
          }
        }
      }
  });
  const labels2 = dataseries.map(ct => ct.id);
  const price2 = dataseries.map(ct => ct.marketCapUsd)
  const ctx2 = document.getElementById('graph2');
  if(window.PieChart2){
    window.PieChart2.destroy();
}
  PieChart2 = new Chart(ctx2, {
      type: 'pie',
      data: {
      labels: labels2,
      datasets: [{
          label: 'MarketCapUsd',
          data: price2,
          borderWidth: 1
      }]
      },
      options:{
      plugins: {
          title: {
            display: true,
            text: 'Top 100 Cryptocurrencies by Market Cap',
            fontSize: 16
          }
        },
      }
  });
};

function clearGraph() {
  // Check if the charts exist before attempting to destroy them
  if (window.PieChart1) {
    window.PieChart1.destroy();
  }

  if (window.PieChart2) {
    window.PieChart2.destroy();
  }

  // Clear the content of the 'coinInfo' div
  document.getElementById('coinInfo').innerText = '';

  // Optionally, clear the input field
  document.getElementById('coinInput').value = '';
}



