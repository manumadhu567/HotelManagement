const guestForm = document.getElementById('guestForm');
const guestTableBody = document.querySelector('#guestTable tbody');

guestForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const room = document.getElementById('room').value.trim();
  const checkin = document.getElementById('checkin').value;
  const checkout = document.getElementById('checkout').value;

  if (new Date(checkin) >= new Date(checkout)) {
    alert('Check-out date must be after check-in date.');
    return;
  }

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${name}</td>
    <td>${room}</td>
    <td>${checkin}</td>
    <td>${checkout}</td>
  `;
  guestTableBody.appendChild(row);

  guestForm.reset();
});
