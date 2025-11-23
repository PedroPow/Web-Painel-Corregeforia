const API_URL = "https://corregedoria-api.onrender.com/dados";

async function carregarPainel() {
    const res = await fetch(API_URL);
    const dados = await res.json();

    document.getElementById("conv-count").innerText = dados.convocacoes.length;
    document.getElementById("pad-count").innerText = dados.pads.length;
    document.getElementById("ipm-count").innerText = dados.ipms.length;

    // Lista de convocações
    const listaConv = document.getElementById("lista-convocacoes");
    listaConv.innerHTML = "";
    dados.convocacoes.forEach(c => {
        listaConv.innerHTML += `
          <li>${c.nome} — ${c.data} às ${c.hora}</li>
        `;
    });
}

carregarPainel();
setInterval(carregarPainel, 5000);
