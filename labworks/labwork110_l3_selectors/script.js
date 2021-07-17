change_it = function() {
    jQuery('#changing').html('some text <a href="">alink</a>')
    alert('change_it has been called')
}
setup = function() {
    jQuery('#changing').click(change_it)
}

jQuery(document).ready(setup)
