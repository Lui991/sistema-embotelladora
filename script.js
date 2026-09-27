const botellas = {

    AG001: {
        codigo: "AG001",
        lote: "L001",
        producto: "Agua purificada",
        volumen: "600 mL",
        linea: "Línea 1",
        nivel: "Correcto",
        tapa: "Correcta",
        etiqueta: "Correcta",
        envase: "Sin daños",
        estado: "ACEPTADA",
        destino: "Almacén"
    },

    AG002: {
        codigo: "AG002",
        lote: "L001",
        producto: "Agua purificada",
        volumen: "600 mL",
        linea: "Línea 1",
        nivel: "Incorrecto",
        tapa: "Correcta",
        etiqueta: "Correcta",
        envase: "Sin daños",
        estado: "RECHAZADA",
        motivo: "Nivel de llenado fuera de especificación",
        destino: "Área de producto rechazado"
    }
};


// Obtener el código que aparece en la URL
const parametros = new URLSearchParams(window.location.search);
const codigo = parametros.get("codigo");


// Buscar la botella
const botella = botellas[codigo];

const contenedor = document.getElementById("informacionBotella");


if (botella) {

    const esAceptada = botella.estado === "ACEPTADA";

    contenedor.innerHTML = `
        <div class="tarjeta ${esAceptada ? "aceptada" : "rechazada"}">

            <div class="estado">
                ${esAceptada ? "🟢 BOTELLA ACEPTADA" : "🔴 BOTELLA RECHAZADA"}
            </div>

            <div class="dato">
                <span class="etiqueta">Código:</span>
                <span>${botella.codigo}</span>
            </div>

            <div class="dato">
                <span class="etiqueta">Lote:</span>
                <span>${botella.lote}</span>
            </div>

            <div class="dato">
                <span class="etiqueta">Producto:</span>
                <span>${botella.producto}</span>
            </div>

            <div class="dato">
                <span class="etiqueta">Volumen:</span>
                <span>${botella.volumen}</span>
            </div>

            <div class="dato">
                <span class="etiqueta">Línea:</span>
                <span>${botella.linea}</span>
            </div>

            <div class="dato">
                <span class="etiqueta">Nivel de llenado:</span>
                <span class="${botella.nivel === "Correcto" ? "correcto" : "incorrecto"}">
                    ${botella.nivel}
                </span>
            </div>

            <div class="dato">
                <span class="etiqueta">Tapa:</span>
                <span class="correcto">${botella.tapa}</span>
            </div>

            <div class="dato">
                <span class="etiqueta">Etiqueta:</span>
                <span class="correcto">${botella.etiqueta}</span>
            </div>

            <div class="dato">
                <span class="etiqueta">Envase:</span>
                <span class="correcto">${botella.envase}</span>
            </div>

            ${
                botella.motivo
                ? `<div class="dato">
                    <span class="etiqueta">Motivo:</span>
                    <span class="incorrecto">${botella.motivo}</span>
                   </div>`
                : ""
            }

            <div class="dato">
                <span class="etiqueta">Destino:</span>
                <span>${botella.destino}</span>
            </div>

            <div class="mensaje">
                ${
                    esAceptada
                    ? "✅ El producto cumple con las especificaciones."
                    : "❌ El producto no cumple con las especificaciones."
                }
            </div>

        </div>
    `;

} else {

    contenedor.innerHTML = `
        <div class="tarjeta rechazada">
            <div class="estado">⚠️ BOTELLA NO ENCONTRADA</div>

            <p class="mensaje">
                No existe información para el código:
                <strong>${codigo || "sin código"}</strong>
            </p>
        </div>
    `;
}