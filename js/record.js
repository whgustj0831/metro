(function($){

    if (localStorage.recentSearch) {
        recentSearch = JSON.parse(localStorage.recentSearch)
        if(recentSearch){
            id = recentSearch[recentSearch.length-1].id
        }
        usedata(recentSearch)
    }
    
    $('#star').on('click', '.addS',function(){
        id++
        let aname = $(this).attr('data-statn')
        let obj = { id:id, text:aname }
        recentSearch.push(obj)
        localStorage.recentSearch = JSON.stringify(recentSearch)
        usedata(recentSearch)
    })

    function usedata(rdata){
        $('#record .rec div').remove()
        let list = `<div class="cord">`
        rdata.map(function(value){
            list += `<div>`
            list += `<a href="./trainInfo?statn_nm=${value.text}">${value.text}</a>`
            list += `</div>`
        })
        list += `</div>`
        $('#record .re').before(list)
    }

})(jQuery)