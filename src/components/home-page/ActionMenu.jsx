import ActionButton from "../../components/home-page/ActionButton";
import seeAllIcon from "../../images/see-all.png";
import uploadIcon from "../../images/upload-icon.png";
import seeMyDeckIcon from "../../images/eye.jpg";
import plusIcon from "../../images/plus-icon.png";
import UploadButton from "./UploadButton";


function ActionMenu() {
  return (
    <div className="flex flex-col gap-6 mt-60 ml-96 z-10">
      <UploadButton buttonText={"IMPORT DECK"} iconPath={uploadIcon} link={'http://localhost:3001/decks/upload-deck'}/>
      <ActionButton buttonText={"CREATE DECK"} iconPath={plusIcon} link={'http://localhost:3001/decks/create-deck'} />
      <ActionButton buttonText={"SEE ALL DECKS"} iconPath={seeAllIcon} link={'/all-decks'} />
      <ActionButton buttonText={"SEE MY DECKS"} iconPath={seeMyDeckIcon} />
    </div>
  );
}

export default ActionMenu;
