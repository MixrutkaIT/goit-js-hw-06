const fontSizeControl = document.getElementById('font-size-control');
const elemText = document.getElementById('text');

    fontSizeControl.addEventListener('input', () => {
      const fontSize = fontSizeControl.value + 'px';
      elemText.style.fontSize = fontSize;
    });

