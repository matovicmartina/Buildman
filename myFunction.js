document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('.clickable-row');
    const dropdownMenu = document.getElementById('dropdown-menu');
    let activeRow = null;

    rows.forEach(row => {
        row.addEventListener('click', (event) => {
            // Set the position of the dropdown menu to the cursor's position
            dropdownMenu.style.left = `${event.pageX}px`;
            dropdownMenu.style.top = `${event.pageY}px`;

            // Toggle the display of the dropdown menu
            if (dropdownMenu.style.display === 'block' && activeRow === row) {
                dropdownMenu.style.display = 'none';
                row.classList.remove('active');
                activeRow = null;
            } else {
                // Hide any other open dropdown menus
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    menu.style.display = 'none';
                });
                dropdownMenu.style.display = 'block';

                // Remove active class from any previously active row
                if (activeRow) {
                    activeRow.classList.remove('active');
                }

                // Set the clicked row as active
                row.classList.add('active');
                activeRow = row;
            }
            event.stopPropagation();
        });
    });

    // Hide the dropdown menu when clicking outside
    document.addEventListener('click', () => {
        dropdownMenu.style.display = 'none';
    });

    // Prevent closing the dropdown menu when clicking inside it
    dropdownMenu.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});