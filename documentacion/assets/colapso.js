(function(){

    let id = $(".bs-trigger-colapso").data("trigger")
    let visible = false

    const init = () => {
        $("#colapso").hide()
        $(".bs-trigger-colapso").on("click", (e) => {
            
            if(!visible) {
                $("#colapso").slideDown(300)
                visible = true
            }else {
                $("#colapso").slideUp(300)
                visible = false
            }
        })
    }


    const NavColapso = {
        init: () => init()
    }

    window.NavColapso = NavColapso

})()
