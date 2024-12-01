function FormInput({ inputName, onChange }) {
  return (
    <input type="text" placeholder={inputName} name={inputName} onChange={onChange} className="rounded-lg w-96 h-12 placeholder:p-4 placeholder:uppercase" />
  )
}

export default FormInput;