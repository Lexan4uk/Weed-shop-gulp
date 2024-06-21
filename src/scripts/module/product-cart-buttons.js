try {
    const decrementButton = document.querySelector('.decrement');
    const incrementButton = document.querySelector('.increment');
    const counterInput = document.querySelector('.counter');

    // Устанавливаем минимальное значение
    const minValue = 1;



    // Обработчик клика по кнопке уменьшения
    decrementButton.addEventListener('click', function() {
        let currentValue = parseInt(counterInput.value);
        if (currentValue > minValue) {
            counterInput.value = currentValue - 1;
        }
    });

    // Обработчик клика по кнопке увеличения
    incrementButton.addEventListener('click', function() {
        let currentValue = parseInt(counterInput.value);
        counterInput.value = currentValue + 1;
    });

    // Обработчик изменения вручную
    counterInput.addEventListener('input', function() {
        let currentValue = parseInt(counterInput.value);
        if (isNaN(currentValue) || currentValue < minValue) {
            counterInput.value = minValue;
        }
    });
}
catch {

}
