change_it = function() {
    jQuery('ul>li').html('new value')
    // alert('change_it has been called')
}
setup = function() {
    jQuery('ul>li').click(change_it)
}

jQuery(document).ready(setup)
