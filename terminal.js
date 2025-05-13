const terminal = document.getElementById("siteTerminal");
const lines = [
  "I'm a 20 year old passionate Software Engineer who strives to innovate whatever development environment I am a part of. I love to problem solve and will work feverishly to accomplish the task assigned.",
  "Loading resources...",
  "Initializing interface...",
  "System ready.",
  ">_"
];
let currentLine = 0;

terminal.addEventListener("click", () => {
  if (currentLine < lines.length) {
    // Remove any existing cursor
    const existingCursor = document.querySelector(".cursor");
    if (existingCursor) {
      existingCursor.remove();
    }

    const newLine = document.createElement("div");
    newLine.classList.add("line");
    terminal.appendChild(newLine);

    typeText(lines[currentLine], newLine);
    currentLine++;
  }
});

function typeText(text, element, i = 0) {
  if (i < text.length) {
    element.textContent += text.charAt(i);
    setTimeout(() => typeText(text, element, i + 1), 30);
  } else {
    const cursor = document.createElement("span");
    cursor.className = "cursor";
    cursor.textContent = "█";
    element.appendChild(cursor);
  }
}


document.addEventListener("DOMContentLoaded", () => {
 const siteTerminal = document.getElementById('siteTerminal');
  const stObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const delay = 1000; // 500ms per image

            setTimeout(() => {
                type();
            }, delay);
            
            stObserver.unobserve(entry.target);
        }
    });
  }, { threshold: 0.75 });

  stObserver.observe(siteTerminal)
});

/*
setInterval(() => {
  const terminal = document.getElementById('siteTerminal');
  const refreshLine = document.createElement('div');
  refreshLine.textContent = `> [${new Date().toLocaleTimeString()}] System check OK`;
  terminal.appendChild(refreshLine);
  window.scrollTo(0, document.body.scrollHeight);
}, 5000); // Every 5 seconds
*/