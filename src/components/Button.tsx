interface Props {

  text: string;
  onClickButton: () => void;
  color?: 'primary' | 'secondary' | 'danger';
}

const Button = ({text, onClickButton, color = 'primary'}:Props) => {
  return (
    <button type="button" className={'btn btn-'+color} onClick={onClickButton}>{text}



    </button>
  )
}

export default Button
