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

br8 = function(){
  jQuery('#face_img').attr('class', 'border_radius_8')
}


br50 = function(){
  jQuery('#face_img').attr('class', 'border_radius_50')
}

setup = function() {
  jQuery('#face_img').click(be_sad);
  jQuery('#inc_width').click(increment);

  jQuery('#br_8').click(br8);
  jQuery('#br_50').click(br50);
}

jQuery(document).ready(setup)
