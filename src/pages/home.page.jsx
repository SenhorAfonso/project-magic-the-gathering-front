import ActionMenu from "../components/home-page/ActionMenu";
import HomepageHeader from "../components/home-page/HomepageHeader";
import LateralImage from "../components/common/LateralImage";
// import io from "socket.io-client";
import { useEffect, useState } from "react";

// const socket = io("http://localhost:3001");

function Homepage() {
  const [uploadedDeck, setUploadedDeck] = useState(false);

  // useEffect(() => {
  //   socket.on("deck-uploaded", () => {
  //     setUploadedDeck(true);
  //   })

  //   return () => {
  //     socket.off("deck-uploaded");
  //   }
  // }, []);

  // const sendMessage = () => {
  //   socket.emit("front-updated", true);
  // }

  return (
    <div className="flex">
      <HomepageHeader></HomepageHeader>
      <LateralImage></LateralImage>
      <ActionMenu></ActionMenu>
      {uploadedDeck && (
        <h1 className="absolute mt-52 ml-96 text-lg text-green-500">The deck was uploaded successfully!</h1>
      )}
    </div>
  );
}

export default Homepage;
