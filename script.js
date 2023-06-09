let fields = [
    null,
    'circle',
    null,
    null,
    null,
    null,
    null,
    null,
    null,
];

// Aufrufen der `render()` Funktion
function init()  {
    render();
}

function render() {
  let contentDiv = document.getElementById('content');

  // Generate table HTML
  let tableHTML = '<table>';
  for (let i = 0; i < 3; i++) {
    tableHTML += '<tr>';
    for (let j = 0; j < 3; j++) {
      const index = i * 3 + j;
      let symbol = '';
      if (fields[index] === 'circle') {
        symbol = 'o';
      } else if (fields[index] === 'cross') {
        symbol = 'x';
      }
      tableHTML += `<td>${symbol}</td>`;
    }
    tableHTML += '</tr>';
  }
  tableHTML += '</table>';

  // Set table HTML to contentDiv

  contentDiv.innerHTML = tableHTML;
  
}

