const form = document.querySelector('#form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();

    document.getElementById('ultimoUsuario').innerHTML = "";

    var txtBusqueda = $("#txtSearch").val();
    buscarUsuarios(txtBusqueda);
})


function buscarUsuarios(txtBusqueda){

    $("#result").empty();

    $.get(`https:api.github.com/search/users?q=${txtBusqueda}+in:user`,
    function(data){
        data.items.forEach(item => {
            var obj_Usuario = new Usuario(item.avatar_url,item.login,item.html_url,item.id);

            users =
            `   <div class="n-cards">
                    <img src="${obj_Usuario.img}" width="200" heigth="100"/><br>
                    <p> Nombre: ${obj_Usuario.nombre} </p><br>
                    <a href=${obj_Usuario.link} target="blank"> Perfil GitHub</a><br><br>
                    <button id="btt" class="btn" onclick="seleccionarUsuario()" value="${obj_Usuario.nombre}">Repositorios</button>
                </div>
            `    
            $("#result").append(users);
        });
    })
}    

function seleccionarUsuario(){
    let Busqueda = $("#btt").val();

    establecerNombre(Busqueda);
    repositorio(Busqueda);
}

function repositorio(dato)
{
    var repo_usuario = '';
    $("#result").empty();

    $.get(`https:api.github.com/users/${dato}/repos`, 
    function(dat){ 

        dat.forEach(i => {
            
            repo_usuario = `
                <div class="n-cards2">
                    <h3 class="nom_repo"> <a href=${i.html_url} target="blank">${i.name}</a> </h3> <br>
                    <p> <b>Descripcion:</b> ${i.description} </p><br>
                    <p> <b>Issues abiertos:</b> ${i.open_issues}</p> <br>
                    <p> <b>Forks:</b> ${i.forks}</p> <br>
                    
                </div>`
              $("#result").append(repo_usuario);
              
        })
    } )
}
