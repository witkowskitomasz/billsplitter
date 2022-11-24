const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');

const btn = document.querySelector('.count');

const error = document.querySelector('.error');
const showResult = document.querySelector('.cost-info');
const priceResult = document.querySelector('.cost');

const check = () => {
    if (price.value.length !== 0 && people.value.length !== 0 && tip.value.length !== 0) {
        count();
    } else {
        error.textContent = 'Wprowadź wartości we wszytkie pola';
        showResult.style.display = "none";
    }
}

const count = () => {
    const newPrice = parseFloat(price.value);
    const newPeople = parseInt(people.value);
    const newTip = parseFloat(tip.value);
    
    const result = (newPrice + (newPrice * newTip)) / newPeople;
    showResult.style.display = "block";
    priceResult.textContent = result.toFixed(2);
    error.textContent = '';
}

btn.addEventListener('click', check);