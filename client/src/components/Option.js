
export default function Option({option, index, setUserAnswer}) {
  return (
    <div key = {`option-${index}`}>
      <button className='option' onClick={() => setUserAnswer(option)}>{option}</button>
    </div>
  );
}