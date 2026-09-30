window.handleSend = function(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('userName').value.trim();
    const queryInput = document.getElementById('userQuery').value.trim();
    const submitBtn = document.getElementById('submitBtn');
    const successMsg = document.getElementById('successMsg');

    if (!nameInput) return;

    // ===== AQUÍ PONES TU NÚMERO DE WHATSAPP =====
    const telefono = "5493815974846"; 
    
    let finalMessage = "";
    if (queryInput === "") {
        finalMessage = `hola soy ${nameInput}, vi tu porftolio y quise contactarme con vos.`;
    } else {
        finalMessage = `mensaje de ${nameInput}: ${queryInput}`;
    }

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(finalMessage)}`;

    const originalContent = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span>Conectando...</span>
    `;

    setTimeout(() => {
        window.open(url, '_blank');
        
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalContent;
        if (window.lucide) lucide.createIcons();

        successMsg.classList.remove('hidden');
        document.getElementById('contactForm').reset();

        setTimeout(() => {
            successMsg.classList.add('hidden');
        }, 5000);

    }, 600);
};

document.addEventListener('DOMContentLoaded', () => {
    if (window.lucide) {
        lucide.createIcons();
    }
});