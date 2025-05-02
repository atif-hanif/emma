const itemsPerPage = 9;
let currentFilter = '*';
let currentPage = 1;

const grid = document.querySelector('.grid');
const iso = new Isotope(grid, {
    itemSelector: '.column',
    layoutMode: 'fitRows'
});

function filterAndPaginate() {
    const allItems = Array.from(grid.querySelectorAll('.column'));
    const filteredItems = currentFilter === '*'
        ? allItems
        : allItems.filter(item => item.matches(currentFilter));

    allItems.forEach(item => item.style.display = 'none');

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const visibleItems = filteredItems.slice(start, end);

    visibleItems.forEach(item => item.style.display = 'block');

    iso.arrange();
    updatePagination(filteredItems.length);
}

function updatePagination(totalItems) {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
  
    const pageCount = Math.ceil(totalItems / itemsPerPage);
  
    for (let i = 1; i <= pageCount; i++) {
        const li = document.createElement('li');
        li.className = 'page-item' + (i === currentPage ? ' active' : '');
    
        const btn = document.createElement('button');
        btn.className = 'page-link';
        btn.textContent = i;
        btn.setAttribute('type', 'button');
    
        btn.addEventListener('click', () => {
            currentPage = i;
            filterAndPaginate();
        });
    
        li.appendChild(btn);
        pagination.appendChild(li);
    }
}

document.querySelectorAll('.filters button').forEach(btn => {
    btn.addEventListener('click', () => {
        currentFilter = btn.getAttribute('data-filter');
        currentPage = 1;
        filterAndPaginate();
    });
});

filterAndPaginate();

$('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
    });
});