onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = 'I LOVE YOU ENERELMAA'.split('');
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // Typing delay
      } else {
        // Call to add the "Click Me" button after text finishes
        appendClickMe();
      }
    }

    function appendClickMe() {
      const button = document.createElement('button');
      button.textContent = 'Click Me';
      button.classList.add('click-me-button');
      // Navigate to a new HTML page on click
      button.onclick = () => window.open('valentine.html', '_blank');
      titleElement.appendChild(button);
    }

    appendTitle();
    clearTimeout(c);
  }, 1000);
};
