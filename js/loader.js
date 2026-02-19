function cargarVista(id, archivo) {
    fetch(archivo)
        .then(res => {
            if (!res.ok) {
                throw new Error("No se encontró: " + archivo);
            }
            return res.text();
        })
        .then(html => {
            document.getElementById(id).innerHTML = html;
        })
        .catch(err => console.error(err.message));
}

cargarVista("perfil", "vistas/perfil.html");
cargarVista("contacto", "vistas/contacto.html");
cargarVista("referencias", "vistas/referencias.html");
cargarVista("experiencia", "vistas/experiencia.html");
cargarVista("trayectoria", "vistas/trayectoria.html");
cargarVista("educacion", "vistas/educacion.html");
cargarVista("habilidades", "vistas/habilidades.html");