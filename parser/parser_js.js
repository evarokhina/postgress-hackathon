// Элементы
const urlInputEl = document.getElementById('url_input');
const submitEl = document.getElementById('url_submit');
const resultEl = document.getElementById('result');

// Teксты
const SUBMIT_IS_LOADING_TEXT = 'Загрузочка пошла...';
const SUBMIT_TEXT = 'У нас JSON, возможен криминал!';

// Загрузить JSON с урла переданного в инпут
// Пример URL: https://pkgstore.datahub.io/core/finance-vix/vix-daily_json/data/12dfdfb2e01c9f64393a3606da7a587e/vix-daily_json.json
async function loadJSON(url) {
    const response = await fetch(url);
    return await response.json();
};

// Отрендерить полученные данные
function renderResult(json) {
    if (!Array.isArray(json)) {
        return;
    }

    const items = json.map((item) => `
  	<ul class="item">
			<li>Date: ${item['Date']}</li>
      <li>VIX Close: ${item['VIX Close']}</li>
      <li>VIX High: ${item['VIX High']}</li>
      <li>VIX Low: ${item['VIX Low']}</li>
      <li>VIX Open: ${item['VIX Open']}</li>
		</ul>
  `);

    return items.join('');
};

function renderError(reason = '') {
    return `
		<div class="error">Ошибка загрузки данных! Причина: ${reason}</div>
	`;
};

submitEl.addEventListener('click', async () => {
    submitEl.innerHTML = SUBMIT_IS_LOADING_TEXT;
    resultEl.innerHTML = '';

    try {
        const resultJSON = await loadJSON(urlInputEl.value);
        resultEl.innerHTML = renderResult(resultJSON);
    } catch(err) {
        resultEl.innerHTML = renderError(err.message);
    } finally {
        submitEl.innerHTML = SUBMIT_TEXT;
    }
});