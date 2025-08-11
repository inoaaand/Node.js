async function carregarData() {
    try {
        const response = await fetch("http://localhost:3000/");
        const data = await response.json();

        const container = document.getElementById("dados");
        container.innerHTML = "";
        
        data.forEach(pessoa => {
            container.innerHTML += `
                <div class="card">
                    <h2>ID: ${pessoa.id}</h2>
                    <p><strong>Nome:</strong> ${pessoa.nome}</p>
                    <p><strong>Idade:</strong> ${pessoa.idade}</p>
                    <p><strong>Profissão:</strong> ${pessoa.profissao}</p>
                </div>
            `;
        });
    } catch (erro) {
        console.error("Erro ao carregar dados:", erro);
    }
}

carregarData();
