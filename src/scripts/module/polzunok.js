const minSlider = document.querySelector('.left-menu__minSlider');
const maxSlider = document.querySelector('.left-menu__maxSlider');
const minValueDisplay = document.querySelector('.left-menu__minValue');
const maxValueDisplay = document.querySelector('.left-menu__maxValue');

// Начальное обновление значений
updateValues();

// Обработчики событий для обоих ползунков
minSlider.addEventListener('input', updateValues);
maxSlider.addEventListener('input', updateValues);

function updateValues() {
    const minValue = parseInt(minSlider.value);
    const maxValue = parseInt(maxSlider.value);

    // Убедитесь, что минимальное значение не превышает максимальное
    if (minValue >= maxValue) {
        minSlider.value = maxValue - 1;
    }

    // Убедитесь, что максимальное значение не меньше минимального
    if (maxValue <= minValue) {
        maxSlider.value = minValue + 1;
    }

    // Обновление отображаемых значений
    minValueDisplay.textContent = `$${minSlider.value}`;
    maxValueDisplay.textContent = `$${maxSlider.value}`;
}