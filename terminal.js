    const lines = document.querySelectorAll(".terminal-line");
    let activeLine = 0;

    const terminalObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && activeLine < lines.length) {
          typeLine(lines[activeLine]);
          activeLine++;
        }
      });
    }, { threshold: 0.1 });

    lines.forEach(line => {
      terminalObserver.observe(line);
    });

    function typeLine(line) {
      const fullText = line.getAttribute('data-text');
      let i = 0;
      const cursor = document.createElement('span');
      cursor.className = 'cursor';
      line.appendChild(cursor);

      const typing = setInterval(() => {
        if (i < fullText.length) {
          line.insertBefore(document.createTextNode(fullText[i]), cursor);
          i++;
        } else {
          clearInterval(typing);
          cursor.remove();
        }
      }, 40);
    }