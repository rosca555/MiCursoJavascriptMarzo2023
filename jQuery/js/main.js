function sayHello() {
    //alert("Hola mundo")

    // Vanilla JS version
    //document.getElementById("title").style.color = "red"

    // jQuery version
    $("#title").css("color", "green")
}

// ------------------- Event binding example -------------------

// Vanilla JS
/* document
    .getElementById("helloBtn")
    .addEventListener("click", sayHello) */

// jquery
$("#helloBtn").on("click", sayHello)

let enabled = false

$("#toggleBtn").on("click", function() {

    let classRemove
    let classAdd
    let newText
    
    // Si está en OFF que se ponga en ON
    if(!enabled) {
        classRemove = "fail"
        classAdd = "success"
        newText = "<p>ON</p>"
    }
    // Si está en ON que se ponga en OFF
    else {
        classRemove = "success"
        classAdd = "fail"
        newText = "OFF"
    }

    $("#status")
        .removeClass(classRemove)
        .addClass(classAdd)
        .html(newText)

    enabled = !enabled

})

let kitty = true

$("#changeImgBtn").on("click", function() {

    if(kitty) {
        $("#kitty1").attr("src", "img/kitty-angry.jpg")
    }
    else {
        $("#kitty1").attr("src", "img/kitty.jpg")
    }

    kitty = !kitty
})