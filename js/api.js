const api = {
    buscaPensamentos(){
        try{
            const response = fetch("http://localhost:3000/pensamentos")
            return response.json()
        }
        catch{
            alert("Erro ao buscar pensamentos.")
            throw error
        }
    }
}

export default api;