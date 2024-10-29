// src/services/api.ts
import axios from 'axios'

export const getPerguntas = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/perguntas') // Confirme a porta se for diferente
    return response.data
  } catch (error) {
    console.error('Erro ao buscar perguntas:', error)
    return []
  }
}
