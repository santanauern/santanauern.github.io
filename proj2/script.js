function toggleSection(heading) {
    const next = heading.nextElementSibling;
    if (next.style.display === 'none') {
        next.style.display = 'block';
    } else {
        next.style.display = 'none';
    }
}

