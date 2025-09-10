document.getElementById('issueForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const [titleInput, descInput, categorySelect, locationInput] = this.elements;
  const title = titleInput.value.trim();
  const desc = descInput.value.trim();
  const category = categorySelect.value;
  const location = locationInput.value.trim();

  if (!title || !desc || !category || !location) return;

  const issueHTML = `
    <div class="issue-card">
      <h3>${title}</h3>
      <p><strong>Category:</strong> ${category}</p>
      <p>${desc}</p>
      <p><em>Location: ${location}</em></p>
    </div>
   `;

  document.getElementById('issueList').insertAdjacentHTML('afterbegin', issueHTML);
  this.reset();
});
