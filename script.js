document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('grievance-form');
    const grievanceTableBody = document.getElementById('grievance-table-body');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const studentName = document.getElementById('studentName').value;
        const studentEmail = document.getElementById('studentEmail').value;
        const grievanceText = document.getElementById('grievanceText').value;

        const newRow = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = studentName;
        newRow.appendChild(nameCell);

        const emailCell = document.createElement('td');
        emailCell.textContent = studentEmail;
        newRow.appendChild(emailCell);

        const grievanceCell = document.createElement('td');
        grievanceCell.textContent = grievanceText;
        newRow.appendChild(grievanceCell);

        grievanceTableBody.appendChild(newRow);

        form.reset();
    });
});
