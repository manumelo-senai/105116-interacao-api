import api from "./api.js";

const userInterface = {
    async renderizarPensamentos() {
        const listaPensamentos = document.getElementById("lista-pensamentos");

        try {
            listaPensamentos.replaceChildren();
            const pensamentos = await api.buscarPensamentos()
            pensamentos.forEach(userInterface.adicionarPensamentosNaLista)
        } catch (error) {
            console.error("Erro ao renderizar pensamentos:", error);
            alert("Erro ao carregar os pensamentos. Verifique se a API está rodando.");
        }
    },

    adicionarPensamentosNaLista(pensamento){
        const listaPensamentos = document.getElementById("lista-pensamentos");
        const li = document.createElement("li");
        li.setAttribute("data-id", pensamento.id)
        li.classList.add("li-pensamento")

        const iconeAspas = document.createElement("img")
        iconeAspas.src = "assets/imagens/aspas-azuis.png"
        iconeAspas.alt = "Aspas Azuis"
        iconeAspas.classList.add("icone-aspas")

        const pensamentoConteudo = document.createElement("div")
        pensamentoConteudo.textContent = pensamento.conteudo
        pensamentoConteudo.classList.add("pensamento-conteudo")
        
        const pensamentoAutoria = document.createElement("div")
        pensamentoAutoria.textContent = pensamento.autoria
        pensamentoAutoria.classList.add("pensamento-autoria")

        li.appendChild(iconeAspas)
        li.appendChild(pensamentoConteudo)
        li.appendChild(pensamentoAutoria)
        listaPensamentos.appendChild(li)
    
        const botaoExcluir = document.createElement("button")
        botaoExcluir.classList.add("botao-excluir")
        botaoExcluir.onclick = async () => {
            try{
                await api.excluirPensamento(pensamento.id)
                userInterface.renderizarPensamentos();
            }catch{
                alert ("Erro ao excluir pensamento")
            }
        }
        }
}
export default userInterface;