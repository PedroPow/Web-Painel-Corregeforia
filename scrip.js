const API_URL = "https://web-painel-corregedoria.onrender.com";

async function atualizarDashboard() {
    const res = await fetch(`${API_URL}/dashboard`);
    const data = await res.json();

    document.getElementById("convocacoes-count").innerText = data.convocacoes;
    document.getElementById("pads-count").innerText = data.pads;
    document.getElementById("ipms-count").innerText = data.ipms;
}

async function carregarConvocacoes() {
    const res = await fetch(`${API_URL}/convocacoes`);
    const lista = await res.json();

    const tabela = document.getElementById("tabela-convocacoes");
    tabela.innerHTML = "";

    lista.forEach(item => {
        tabela.innerHTML += `
            <tr>
                <td>${item.policial}</td>
                <td>${item.data}</td>
                <td>${item.hora}</td>
                <td>${item.responsavel}</td>
            </tr>
        `;
    });
}

setInterval(atualizarDashboard, 3000);
setInterval(carregarConvocacoes, 3000);
