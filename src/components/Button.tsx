interface Props {
  text: string;
  onClickButton: () => void;
}

const Button = ({text, onClickButton}:Props) => {
  return (
    <button type="button" className="btn btn-primary" onClick={onClickButton}>{text}



    </button>
  )
}

export default Button
