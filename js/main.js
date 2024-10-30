
document.getElementById('crearUsuario').onclick = async function (e) {
    e.preventDefault();

    usuario = document.getElementById('usuario').value;
    orden = "crea";
    
    response = await fetch(`/cgi-bin/funciones.cgi`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            'u':usuario,
            'orden':orden
        })
    });
    data = await response.text();
    document.getElementById('resultado').innerHTML = decodeURI(data);
    document.getElementById('usuario').value = "";
};



document.getElementById('eliminarUsuario').onclick = async function (e) {
    e.preventDefault();

    usuario = document.getElementById('usuario').value;
    orden = "elimina";
    
    response = await fetch(`/cgi-bin/funciones.cgi`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            'u':usuario,
            'orden':orden
        })
    });
    data = await response.text();
    document.getElementById('resultado').innerHTML = decodeURI(data);
    document.getElementById('usuario').value = "";
};
