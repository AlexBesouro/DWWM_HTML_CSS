const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, {
    threshold: 0.1 // Сработает, когда 10% элемента появится на экране
});

document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

const box = document.querySelector('.transition-move');
const parent = document.querySelector('.card-transition');

let isDragging = false;
let startX = 0;

box.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    box.style.transition = 'none'; // Мгновенная реакция при таскании
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    // Считаем пройденное расстояние от точки старта
    let deltaX = e.clientX - startX;

    // Вычисляем границы
    const maxRight = parent.offsetWidth / 2.5; 
    const minLeft = -(parent.offsetWidth / 2.5);

    if (deltaX < minLeft) deltaX = minLeft;
    if (deltaX > maxRight) deltaX = maxRight;

    box.style.transform = `translateX(${deltaX}px)`;
});

document.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;

    // Плавный возврат в начало
    box.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
    box.style.transform = 'translateX(0px)';
});