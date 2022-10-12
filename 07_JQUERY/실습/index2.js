$('.colors').click(function(){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    const plus_color = `rgb(${red}, ${green}, ${blue})`;

    $('#colors').css('color', plus_color);

})
