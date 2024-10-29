import {
  AnswerButton,
  ContainerButtons,
  Enunciado
} from '../atomos/button/buttonStyles'

interface QuestionDisplayProps {
  question: string
  options: string[]
  onAnswerClick: (answer: string) => void
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
  question,
  options,
  onAnswerClick
}) => {
  return (
    <div>
      <Enunciado>{question}</Enunciado>
      <ContainerButtons>
        {options.map((option, index) => (
          <AnswerButton key={index} onClick={() => onAnswerClick(option)}>
            {option}
          </AnswerButton>
        ))}
      </ContainerButtons>
    </div>
  )
}

export default QuestionDisplay
