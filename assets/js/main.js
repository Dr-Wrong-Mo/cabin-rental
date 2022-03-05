//https://stackoverflow.com/questions/46514072/change-color-of-svg-when-hover-on-parent-element

const scrollButton = document.getElementById('scrollToTop');
const scrollSVG = document.getElementById('upArrow');

scrollSVG.addEventListener('load', function () {
  const svgDoc = scrollSVG.contentDocument;
  const area = svgDoc.getElementById('upArrow');

  scrollButton.addEventListener(
    'mouseover',
    () => (area.style.fill = 'yellow')
  );
  scrollButton.addEventListener('mouseout', () => (area.style.fill = 'red'));
});
