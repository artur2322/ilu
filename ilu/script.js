// пропишем функцию random
const random = (min, max) => {
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
}

// найдем кнопку
const btn = document.querySelector('#btn');
// повесим обработчик событий
btn.addEventListener('mouseenter', () => {
    btn.style.left = `${random(0, 90)}%`;
    btn.style.top = `${random(0, 90)}%`;
});

// в случае победы выведем:
btn.addEventListener('click', () => {
    alert('ээээээ ТЫ ЧООО НЕ ГРУСТИ');
});
btn1.addEventListener('click', () => {
    alert('Ты лучшее что со мной было))) ILU');
});