document.querySelector("#form").addEventListener("submit",(e=>{var r;e.preventDefault(),document.getElementById("ultimoUsuario").innerHTML="",r=$("#txtSearch").val(),$("#result").empty(),$.get(`https:api.github.com/search/users?q=${r}+in:user`,(function(e){e.items.forEach((e=>{var r=new Usuario(e.avatar_url,e.login,e.html_url,e.id);users=`   <div class="n-cards">\n                    <img src="${r.img}" width="200" heigth="100"/><br>\n                    <p> Nombre: ${r.nombre} </p><br>\n                    <a href=${r.link} target="blank"> Perfil GitHub</a><br><br>\n                    <button id="btt" class="btn" onclick="seleccionarUsuario()" value="${r.nombre}">Repositorios</button>\n                </div>\n            `,$("#result").append(users)}))}))}));