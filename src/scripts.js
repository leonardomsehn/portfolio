window.addEventListener('wheel', (event) => {
  event.preventDefault();
  const sections = document.querySelectorAll('section');
  let currentSectionIndex = Math.floor(window.scrollY / window.innerHeight);

  if (event.deltaY > 0 && currentSectionIndex < sections.length - 1) {
    currentSectionIndex++;
  } else if (event.deltaY < 0 && currentSectionIndex > 0) {
    currentSectionIndex--;
  }

  window.scrollTo({
    top: sections[currentSectionIndex].offsetTop,
    behavior: 'smooth'
  });
});
