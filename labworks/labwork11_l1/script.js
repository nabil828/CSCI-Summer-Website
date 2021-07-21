be_sad = function() {
    jQuery('#face_img').attr('src', 'sad.png')
}

increment = function() {
  // alert("sksdklasjdklasj")
    old_width =  jQuery('#face_img').attr('width')
    console.log(old_width);
    new_width = parseInt(old_width) + 100
    jQuery('#face_img').attr('width', new_width)
}

setup = function() {
  jQuery('#face_img').click(be_sad);
  jQuery('#inc_width').click(increment);
}

jQuery(document).ready(setup)
