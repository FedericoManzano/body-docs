(function () {

    let triggers = new Array($(".trigger").length)
    
    let inicializar = () => {
        $( ".trigger" ).each(( index, ele )  => {
            triggers[index] = {
                id:         $(ele).data("trigger"),
                condicion:  false
            }
        })  
    }

    const clickEvent = () => {
        $(".trigger").on("click", (e) => {
            let id = $(e.target).data("trigger")
            triggers.map( ele => {
                
                if(ele.id === id ) {
                    if( !ele.condicion ) {
                        $(id).slideDown(300)
                        ele.condicion = true
                        $(e.target).children("span").removeClass("bs-arrow-forward")
                        $(e.target).children("span").addClass("bs-arrow-down")
                    } else {
                        $(id).slideUp(300)
                        ele.condicion = false
                        $(e.target).children("span").removeClass("bs-arrow-down")
                        $(e.target).children("span").addClass("bs-arrow-forward")
                    }
                }
            })
        })
    }
    
    
    const Sidebar = {
        init: () => {
            inicializar()
            clickEvent()
        }
    }

    window.Sidebar = Sidebar

})()

