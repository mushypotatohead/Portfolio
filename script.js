document.querySelectorAll('.img-box img').forEach((img) => {
  img.addEventListener('click', () => {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');

    modalImg.src = img.src; 
    modal.style.display = "block";
  });
});

document.querySelector('.close').addEventListener('click', () => {
  document.getElementById('imageModal').style.display = "none";
});
