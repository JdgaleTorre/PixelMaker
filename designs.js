var color, width, height;

color = $('#colorPicker').val();
width = 1;
height = 1;

// Select color input
$('#colorPicker').change(function(){
    color = $(this).val();
});

// Select size input
$('#input_width').change(function(){
    width = $(this).val(); 
});

$('#input_height').change(function(){
    height = $(this).val();
});


var table = $('#pixel_canvas');

table.on('click', 'td', function(){
    $(this).css('background-color',color);
})

// When size is submitted by the user, call makeGrid()

$('#makeGridBoton').click(function(event){
    event.preventDefault();
    console.log('aqui');
    console.log(width);
    console.log(height);
    console.log(color);
    makeGrid();

});


function makeGrid() {
    
    table.children().remove();
    console.log(table);
    // Your code goes here!
    for(var row = 0; row < height; ++row ){
        console.log(row);
        table.append("<tr id='row" + row + "' ></tr>");
        var jRow = $('#row'+ row);
        console.log(jRow);
        for(var column=0; column< width; ++column ){
             jRow.append("<td id='column" + column + "'></td>");
        }
    }
    
}