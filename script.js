function controlMusic() {
    const audio = document.getElementById('mars-bg-audio');
    const btn = document.getElementById('music-btn');

    if (audio.paused) {
        audio.play().then(() => {
            btn.innerText = "🔇 Вимкнути аудіо-модуль";
            btn.style.background = "#444";
        }).catch(error => {
            console.error("Помилка відтворення:", error);
            alert("Браузер заблокував звук. Спробуйте натиснути ще раз або перевірте посилання.");
        });
    } else {
        audio.pause();
        btn.innerText = "📡 Увімкнути зв'язок з Землею";
        btn.style.background = "#673ab7";
    }
}
