var count, min, max, html, initial, temp, i;

colors = ['#40AC17','#91C034', '#DDDD13', '#FFaa00', '#FF5500', '#ff0000'];
stages = ['1750','3500', '5250', '7000', '8750', '10500'];
titles = ['Baixa','Poca', 'Mitja', 'Alta', 'Quasi Plena', 'Plena'];

count = 0;
jQuery('#chart .nv-series-0').children('g').each(function(){ 
    jQuery(this).attr('style','fill:' + colors[count] + ';');
    count = count + 1;
})

count = 0;
jQuery('#chartcomarca2').find('.nv-group').each(function(){ 
    jQuery(this).attr('style','fill:' + colors[count] + ';');
    count = count + 1;
})

count = 0;
jQuery('#chartcomarca2').find('.nv-legend-symbol').each(function(){ 
    jQuery(this).attr('style','fill:' + colors[count] + ';');
    count = count + 1;
})

temp = [];
jQuery('#chart .nv-series-0').children('g').each(function(){ 
    title = jQuery(this).children('text').html();
    num = title.split(' (')[0];
    temp.push(num);
})

jQuery('#chart').css('width', 470);
jQuery('#chart').css('float', 'left');

min = 0;
max = 0;
html = '<table id="summary">';
html += '<tr class="uv-header"><td class="tram">Quantitat de Gent</td><td class="number">Pessimista</td><td class="number">Mitja</td><td class="number">Optimista</td></tr>';

for (i = 0; i < stages.length; ++i )
{
    initial = 0;
    if (i != 0)
        initial += temp[i]*stages[i-1];
    
    min += initial;    
    max += temp[i]*stages[i];

    klass = '';
    if (i % 2 == 0)
        klass=" class='uv-odd'";

    html += '<tr '+klass+'><td class="tram">'+titles[i]+' ('+ (i == 0 ? 0 : stages[i-1])+'-'+stages[i]+')</td><td class="number">'+initial+'</td><td class="number">'+((initial+temp[i]*stages[i])*0.5)+'</td><td class="number">'+temp[i]*stages[i]+'</td></tr>';
}

html += '<tr class="uv-bottom"><td  class="tram">Total</td><td class="number">'+min+'</td><td class="number">'+((min+max)*0.5)+'</td><td class="number">'+max+'</td></tr>';
html += '</table>';

jQuery("#summary").remove();
jQuery("#chart").after(html);
