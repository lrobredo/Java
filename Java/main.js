// Actividad para entregar: El programa permite agregar invitados a una lista y calcula cuántas mesas se necesitan para sentarlos, considerando que cada mesa puede albergar a 2 personas. El usuario puede seguir agregando nombres hasta que escriba "salir".

let invitados = [];

function agregarInvitados() {
    let entrada;
    do {
        entrada = prompt("Ingrese el nombre de un invitado (escriba 'salir' para terminar):");
        if (entrada !== "salir") {
            invitados.push(entrada);
        }
    } while (entrada !== "salir");

    let cantidadMesas = Math.ceil(invitados.length / 2);

    console.log("Lista de invitados:", invitados);
    console.log("Cantidad de invitados:", invitados.length);
    console.log("Vas a necesitar " + cantidadMesas + " mesas (2 personas por mesa).");
}

agregarInvitados();
