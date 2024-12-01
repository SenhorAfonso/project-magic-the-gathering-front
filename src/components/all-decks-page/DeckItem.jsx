import DeckItemText from "./DeckItemText";

function DeckItem({ deckCommander, deckOwner, deckId }) {
  return (
    <>
      <a href={`/user-deck/${deckId}`}>
        <div className="flex h-80 items-center gap-24">
          <div className="flex flex-col w-1/2 gap-12 text-xl">
            <div>
              <DeckItemText
                title={"COMMANDER:"}
                value={deckCommander}
              ></DeckItemText>
            </div>
            <div>
              <DeckItemText title={"OWNER:"} value={deckOwner}></DeckItemText>
            </div>
          </div>

          <img
            src="https://i0.wp.com/mechanisticmind.com/wp-content/uploads/Fire-Dancer-1.png?resize=375%2C523&ssl=1"
            className="w-56"
            alt=""
            srcset=""
          />
        </div>
      </a>
    </>
  );
}

export default DeckItem;
