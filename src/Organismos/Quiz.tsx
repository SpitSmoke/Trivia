import React, { useState, useEffect } from 'react'
import QuestionDisplay from '../Molecolas/QuestionDisplay'
import { ScoreText } from '../atomos/button/styles'
import { getPerguntas } from '../services/api'

interface Question {
  question: string
  options: string[]
  correctAnswer: string
}

const Quiz: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const fetchedQuestions = await getPerguntas()
        if (fetchedQuestions.length === 0) {
          console.warn('Nenhuma pergunta foi carregada!') // Adiciona um aviso para checar o array vazio
        }
        setQuestions(fetchedQuestions)
      } catch (error) {
        console.error('Erro ao buscar perguntas:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchQuestions()
  }, [])

  const handleAnswerClick = (answer: string) => {
    if (answer === questions[currentQuestionIndex]?.correctAnswer) {
      setScore(score + 1)
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  if (isLoading) {
    return <div>Carregando perguntas...</div>
  }

  if (questions.length === 0) {
    return <div>Erro ao carregar perguntas. Tente novamente mais tarde.</div>
  }

  if (currentQuestionIndex >= questions.length) {
    return (
      <ScoreText>
        Seu score final é: {score}/{questions.length}
      </ScoreText>
    )
  }

  return (
    <div>
      <QuestionDisplay
        question={questions[currentQuestionIndex].question}
        options={questions[currentQuestionIndex].options}
        onAnswerClick={handleAnswerClick}
      />
    </div>
  )
}

export default Quiz
