$(document).ready(function() {
    // Click event for filter buttons
    $('.filter-button').on('click', function() {
        var filterValue = $(this).data('filter');

        if (filterValue === 'all') {
            $('.gallery').fadeIn(2000); // Show all images
        } else {
            $('.gallery').hide(); // Hide all images
            $('.filter.' + filterValue).fadeIn(2000); // Show filtered images
        }
    });
});