(function($){

    if (localStorage.gdata) {
        gdata = JSON.parse(localStorage.gdata)
        if(gdata){
            id = gdata[gdata.length-1].id
        }
        usedata(gdata)
    }
    
    $('#star').on('click', '.addS',function(){
        let aname = $(this).attr('data-statn')
        let obj = { id:id, text:aname }
        gdata.push(obj)
        localStorage.gdata = JSON.stringify(gdata)
        usedata(gdata)
    })

    function usedata(rdata){
        $('#record .rec div').remove()
        let list = `<div class="cord">`
        rdata.map(function(value){
            list += `<a href="./trainInfo?statn_nm=${value.text}">${value.text}</a>`
        })
        list += `</div>`
        $('#record .re').before(list)
    }

})(jQuery)