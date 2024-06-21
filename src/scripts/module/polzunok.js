try {
    const minSlider = document.querySelector('.left-menu__minSlider');
    const maxSlider = document.querySelector('.left-menu__maxSlider');
    const minValueDisplay = document.querySelector('.left-menu__minValue');
    const maxValueDisplay = document.querySelector('.left-menu__maxValue');

    // Начальное обновление значений
    updateValues();

    // Обработчики событий для ползунков
    minSlider.addEventListener('input', updateValues);
    maxSlider.addEventListener('input', updateValues);

    // Обработчики событий для текстовых полей
    minValueDisplay.addEventListener('keydown', handleKeyDown);
    maxValueDisplay.addEventListener('keydown', handleKeyDown);

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
        minValueDisplay.value = `$${minSlider.value}`;
        maxValueDisplay.value = `$${maxSlider.value}`;
    }

    function handleKeyDown(event) {
        // Проверка, если была нажата клавиша Enter
        if (event.key === 'Enter') {
            updateSliders();
        }
    }

    function updateSliders() {

        // Извлечение числовых значений из текстовых полей
        const minValue = parseInt(minValueDisplay.value.replace(/\D/g, ''));
        const maxValue = parseInt(maxValueDisplay.value.replace(/\D/g, ''));

        // Проверка на допустимые значения
        if ((isNaN(minValue) || minValue < parseInt(minSlider.min) || minValue >= parseInt(maxSlider.value)) || (isNaN(maxValue) || maxValue > parseInt(maxSlider.max) || maxValue <= parseInt(minSlider.value))) {
            alert('Неверный диапозон цены!');
            return;
        }

        // Обновление значений ползунков
        minSlider.value = minValue;
        maxSlider.value = maxValue;

        // Обновление полей ввода
        minValueDisplay.value = `$${minSlider.value}`;
        maxValueDisplay.value = `$${maxSlider.value}`;
    }
}
catch {
    
}
