// Animación de la chica (Click manual)
const container = document.getElementById('sofia-container');
const arm = document.getElementById('left_x5F_arm_2_');

container.style.cursor = 'pointer';

container.addEventListener('click', () => {
  arm.style.animation = 'none';
  
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      arm.style.animation = 'waveAnimation 0.7s ease-in-out 0s 4 forwards';
    });
  });
});

// Loader y Vuelo del Corazón
window.addEventListener('load', () => {
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
        const loaderWrapper = document.getElementById('loader-wrapper');
        const moverDiv = document.getElementById('loader-heart-mover');
        const targetHeart = document.querySelector('.title-heart');

        requestAnimationFrame(() => {
            const targetRect = targetHeart.getBoundingClientRect();
            const moverRect = moverDiv.getBoundingClientRect();

            const scale = targetRect.width / moverRect.width;

            const targetCenterX = targetRect.left + (targetRect.width / 2);
            const targetCenterY = targetRect.top + (targetRect.height / 2);
            const moverCenterX = moverRect.left + (moverRect.width / 2);
            const moverCenterY = moverRect.top + (moverRect.height / 2);

            const deltaX = targetCenterX - moverCenterX;
            const deltaY = targetCenterY - moverCenterY;

            moverDiv.style.transition = 'transform 1.2s cubic-bezier(0.76, 0, 0.24, 1)';
            moverDiv.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${scale})`;

            loaderWrapper.style.transition = 'background-color 1s ease';
            loaderWrapper.style.backgroundColor = 'transparent';

            setTimeout(() => {
                targetHeart.style.opacity = '1'; 
                loaderWrapper.remove(); 
                document.body.style.overflow = ''; 
                
                arm.style.animation = 'waveAnimation 0.7s ease-in-out 0s 4 forwards';

            }, 1200); 
        });
    }, 4300); 
});