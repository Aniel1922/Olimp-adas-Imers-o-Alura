function pesquisar() {
    // Obter a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    console.log(campoPesquisa);

    // campo de pesquisa vazio
    if(!campoPesquisa){
        section.innerHTML = "<p>Nada foi encontrado! Você precisa digitar o nome do atleta ou do esporte.</p>"
        return
    }

    // digitando letra maiúscula ou minúscula, fica tudo minúscula
    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    //Itera sobre cada dado da lista de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tags = dado.tags.toLowerCase();
      // Criar um elemento HTML para cada resultado
      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Cria um novo elemento 
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
      }
      
    }
    
    if(!resultados){
      resultados = "<p>Nada encontrado!</p>";
    }
    // Atualizar o conteúdo da seção com os resultados
    section.innerHTML = resultados;
  }