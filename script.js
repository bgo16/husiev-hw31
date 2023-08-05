const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const table = document.querySelector('tbody');
  const newRow = table.insertRow();

  formData.forEach((value) => {
    const newCell = newRow.insertCell();
    newCell.textContent = value;
  });

  form.reset();
  form.style.display = 'none';
  document.querySelector('table').style.display = 'table';
});
