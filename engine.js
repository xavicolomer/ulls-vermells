values = ['#ff0000', '#FF5500', '#FFaa00', '#DDDD13','#91C034', '#40AC17'];

var count = 0;
jQuery('#chart .nv-series-0').children('g').each(function(){ 

    jQuery(this).attr('style','fill:' + values[count] + ';');
    count = count + 1;
})

var count = 0;
jQuery('#chartcomarca2').find('.nv-group').each(function(){ 
    jQuery(this).attr('style','fill:' + values[count] + ';');
    count = count + 1;
})

var count = 0;
jQuery('#chartcomarca2').find('.nv-legend-symbol').each(function(){ 
    jQuery(this).attr('style','fill:' + values[count] + ';');
    count = count + 1;
})


