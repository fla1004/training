const ultimoUsuario = new Usuario;

const x = document.querySelector('#txtSearch');

function establecerNombre(nom){
    
    const x = document.querySelector('#ultimoUsuario');

    localStorage.setItem('ultimoUsuario', nom);
}


if(!localStorage.getItem('ultimoUsuario'))
{
    establecerNombre();
}
else
{
    if(x)
    {
        let nombreAlmacenado = localStorage.getItem('ultimoUsuario');
        x.textContent = nombreAlmacenado;

        establecerNombre(nombreAlmacenado);
        repositorio(nombreAlmacenado);
    }

}

