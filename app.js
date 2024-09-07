function pesquisar() { 
    // Função que será chamada ao clicar no botão de pesquisa
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value; // Obtém o valor do campo de pesquisa

    // Se o campoPesquisa for uma string vazia
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome correto da busca</p>"
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase(); // Converte o termo de pesquisa para minúsculas
    
    let resultados = ""; 
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Supondo que "dados" seja um array de objetos com títulos, descrições e links
    for (let dado of dados) {  // Para cada dado no array de dados
        titulo = dado.titulo.toLowerCase(); // Converte o título do dado para minúsculas
        descricao = dado.descricao.toLowerCase(); // Converte a descrição do dado para minúsculas
        tags = dado.tags.toLowerCase(); // Converte as tags do dado para minúsculas
        
        // Se o título, descrição ou tags incluírem o termo de pesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            console.log(titulo.includes(campoPesquisa) || tags.includes(campoPesquisa));

            // Adiciona o HTML para cada resultado encontrado
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a> <!-- Adiciona o título do dado como link -->
                </h2>
                <p class="descricao-meta">${dado.descricao}</p> <!-- Adiciona a descrição do dado -->
                <a href="${dado.link}" target="_blank">Mais informações</a> <!-- Adiciona um link para mais informações -->
            </div>
            `;
        }
    }

    // Se nenhum resultado for encontrado
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>";

        section.innerHTML = "<p>Nada foi encontrado</p>";
    } else {
        // Atribui os resultados gerados à seção HTML
        section.innerHTML = resultados;
    }         
}
