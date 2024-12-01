import decksIcon from '../../images/decks-icon.png'

function MainHeaderTitle() {
  return (
    <>
      <div className="flex justify-center ml-24 items-center gap-4 pt-12 pb-28">
        <h1 className="text-4xl font-bold font-sans uppercase">Decks Manager</h1>
        <img src={decksIcon} className='w-8 h-8' alt="" />
      </div>
    </>
  );
}

export default MainHeaderTitle;
