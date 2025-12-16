document.addEventListener("DOMContentLoaded", () => {
    const weekLabel = document.querySelector(".agenda-week-label");
    const prevBtn = document.querySelector(".agenda-prev");
    const nextBtn = document.querySelector(".agenda-next");
    const cards = Array.from(document.querySelectorAll(".agenda-card"));

    // Données pour 2 semaines (identiques ici mais structure prête pour varier)
    const weeks = [
        [
            { type: "course", title: "Cours - Deep Learning", time: "10:00 - 12:00", place: "Salle B305" },
            { type: "permanence", title: "Permanence Prof. Dupont", time: "10:00 - 12:00", place: "Bureau B305" },
            { type: "course", title: "Cours - Cybersécurité", time: "09:00 - 11:00", place: "Salle B312" },
            { type: "permanence", title: "Permanence Dr. Laurent", time: "15:00 - 17:00", place: "Bureau B312" },
            { type: "conference", title: "Tech Talk - IA Générative", time: "18:00 - 20:00", place: "Amphi A" },
            { type: "course", title: "Cours - Deep Learning", time: "10:00 - 12:00", place: "Salle B305" },
            { type: "event", title: "EFREI Hackathon", time: "09:00 - 18:00", place: "Campus" }
        ],
        [
            { type: "course", title: "Cours - Data Science", time: "14:00 - 16:00", place: "Salle B210" },
            { type: "permanence", title: "Permanence Prof. Martin", time: "11:00 - 12:30", place: "Bureau B210" },
            { type: "course", title: "Cours - Réseaux", time: "08:30 - 10:30", place: "Salle B110" },
            { type: "permanence", title: "Permanence Dr. Laurent", time: "15:00 - 17:00", place: "Bureau B312" },
            { type: "conference", title: "Conférence Sécurité", time: "17:30 - 19:00", place: "Amphi B" },
            { type: "course", title: "Cours - Bases de Données", time: "10:00 - 12:00", place: "Salle B220" },
            { type: "event", title: "Forum Entreprises", time: "09:00 - 18:00", place: "Campus" }
        ]
    ];

    let currentWeek = 0;

    function renderWeek() {
        const data = weeks[currentWeek];
        weekLabel.textContent = `Semaine ${currentWeek + 1}`;
        cards.forEach((card, idx) => {
            const item = data[idx];
            if (!item) return;
            card.classList.remove("course", "permanence", "conference", "event");
            card.classList.add(item.type);
            card.querySelector(".agenda-name").textContent = item.title;
            card.querySelector(".agenda-time").textContent = item.time;
            card.querySelector(".agenda-place").textContent = item.place;
        });
    }

    prevBtn?.addEventListener("click", () => {
        currentWeek = (currentWeek - 1 + weeks.length) % weeks.length;
        renderWeek();
    });

    nextBtn?.addEventListener("click", () => {
        currentWeek = (currentWeek + 1) % weeks.length;
        renderWeek();
    });

    renderWeek();
});


