function replaceUrl(){
    var url = document.getElementById("urlsite").value
    var regex = /noticia/
    var urlgerada = (url.replace(regex, "amp"))
    document.getElementById("urlfinal").innerHTML = `${urlgerada}`
}

