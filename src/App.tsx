import React from 'react'
import { NameTriviaText } from './atomos/button/tituloDoTriviaStyles'
import Quiz from './Organismos/Quiz'

const App: React.FC = () => {
  return (
    <div>
      <NameTriviaText>Quiz de conhecimentos Gerais</NameTriviaText>
      <Quiz />
    </div>
  )
}

export default App
