(()=>{
    ajax({
        type:"get",
        url:"header.html"
    }).then(data=>{
        document.querySelector("header").innerHTML=data;
        search();
        mouseOver();
    })
})();