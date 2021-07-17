change_it = function() {
    jQuery('.blueish_color').html('some text <a href="">alink</a>')
    // alert('change_it has been called')
}
setup = function() {
    jQuery('.blueish_color').click(change_it)
}

jQuery(document).ready(setup)
