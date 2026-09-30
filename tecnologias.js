document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const techPills = document.querySelectorAll('.tech-pill');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => {
                b.classList.remove('active', 'bg-white', 'text-slate-900', 'shadow-sm');
                b.classList.add('text-slate-600');
            });

            btn.classList.add('active', 'bg-white', 'text-slate-900', 'shadow-sm');
            btn.classList.remove('text-slate-600');

            const selectedCategory = btn.getAttribute('data-category');

            techPills.forEach(pill => {
                const pillCategory = pill.getAttribute('data-category');
                if (selectedCategory === 'all' || pillCategory === selectedCategory) {
                    pill.style.display = 'flex';
                } else {
                    pill.style.display = 'none';
                }
            });
        });
    });
});