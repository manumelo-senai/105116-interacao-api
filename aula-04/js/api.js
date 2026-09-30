const api = {
    async buscarPensamentos() {
        try {
            const response = await fetch("http://localhost:3000/pensamentos");
            if (!response.ok) {
                throw new Error(`Falha ao buscar pensamentos: HTTP ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error("Erro ao buscar pensamentos:", error);
            throw error;
        }
    },

    async salvarPensamentos(pensamento) {
        try {
            const response = await fetch("http://localhost:3000/pensamentos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pensamento)
            });
            if (!response.ok) {
                throw new Error(`Falha ao salvar pensamento: HTTP ${response.status}`);
            }
            return await response.json();
        }
        catch (error) {
            console.error("Erro ao salvar pensamento:", error);
            throw error;
        }
    },
    
    async excluirPensamento(id) {
        try{
            const response = await fetch(`http://localhost:3000/pensamentos/${id}`, {
            method: "DELETE"
        })
        }catch{
            alert("Erro ao excluir o pensamento")
            throw error
        }
    }
};

export default api;