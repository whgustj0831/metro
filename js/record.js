(function($){

    if (localStorage.recentSearch) {
        gdata = JSON.parse(localStorage.recentSearch)
        if(recentSearch){
            id = recentSearch[recentSearch.length-1].id
        }
        usedata(recentSearch)
    }
    
    $('#star').on('click', '.addS',function(){
        let aname = $(this).attr('data-statn')
        let obj = { id:id, text:aname }
        recentSearch.push(obj)
        localStorage.recentSearch = JSON.stringify(gdata)
        usedata(recentSearch)
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