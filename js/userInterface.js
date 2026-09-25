import {api} from "./api.js";

const userInterface = {
    async renderizarPensamentos() {
        const listaPensamentos = document.getElementById("lista-pensamentos")

        try{
            const pensamentos = api.buscarPensamentos()
            listaPensamentos.forEach(pensamentos => {
                listaPensamentos.innerHTML += 
            })
        }
    }
}