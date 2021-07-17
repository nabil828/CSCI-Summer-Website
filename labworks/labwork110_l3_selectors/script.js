append_it = function(){
  old_value =   jQuery('ul>li').html();
  jQuery('ul>li').html(old_value  + "new value")
}
change_it = function() {
    jQuery('ul>li').html('new value')
    // alert('change_it has been called')
}
setup = function() {
    jQuery('ul>li').click(append_it)
}

jQuery(document).ready(setup)
