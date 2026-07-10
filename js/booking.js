function toggle(head) {
    const body = head.nextElementSibling;

    document.querySelectorAll(".services .body").forEach(item => {
        if (item !== body) item.style.display = "none";
    });

    body.style.display =
        body.style.display === "block" ? "none" : "block";
}

function wa(service) {
    const phone = "628976610229";

    const text =
`Halo HardRockstudio,

Saya ingin booking layanan:

🎵 ${service}

Mohon informasi jadwal dan harganya.

Terima kasih.`;

    window.open(
        `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
        "_blank"
    );
}
