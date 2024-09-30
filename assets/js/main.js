
window.onload = function () {
    // Delay of 1 second before hiding the preloader
    setTimeout(function () {
        // Hide the preloader
        document.getElementById('preloader').style.display = 'none';

    }, 1000);
};

function changeQuantity(step) {
    const input = document.getElementById('quantity');
    let value = parseInt(input.value);
    const min = parseInt(input.min);
    const max = parseInt(input.max);

    value = value + step;
    if (value >= min && value <= max) {
        input.value = value;
    }
}
