function DeckItemText({ title, value }) {
  return (
    <div>
      <p className="font-sans font-light">{title}</p>
      <p className="font-sans ">{value}</p>
    </div>
  );
}

export default DeckItemText;