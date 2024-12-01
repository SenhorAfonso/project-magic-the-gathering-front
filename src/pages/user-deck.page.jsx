import LateralImage from "../components/common/LateralImage";
import "@fontsource/lato/400.css";
import DeckItem from "../components/all-decks-page/DeckItem";
import MainHeaderTitle from "../components/common/MainHeaderTitle";
import { useEffect, useState } from "react";
import CardItem from "../components/user-deck-page/CardItem";

function UserDeckPage() {
  const [decks, setDecks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDecks = async () => {
    const url = window.location.href;
    const deckId = url.split("/")[url.split("/").length - 1];
    const token = localStorage.getItem("authToken");

    try {
      const response = await fetch(
        `http://localhost:3001/decks/user-decks/${deckId}`,
        {
          method: "GET",
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setDecks(data["deck"]);
      } else {
        throw new Error("Failed to fetch decks");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDecks();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <LateralImage></LateralImage>
      <MainHeaderTitle />

      <div className="flex items-center ml-96 gap-24">
        <h2 className="text-4xl font-bold font-sans">SEE ALL DECKS</h2>
        <div className="h-[1px] w-2/3 bg-black"></div>
      </div>

      {
        <div className="flex w-2/3 justify-center mt-12 ml-[450px]">
          <div className="grid grid-cols-2 gap-y-8 gap-x-24">
            {decks["cards"].length !== 0 &&
              decks["cards"].map((card) => {
                return (
                  <CardItem
                    name={card["name"]}
                    description={card["text"]}
                    colors={card["colors"]}
                    types={card["type"]}
                    subtypes={card["subtypes"]}
                    rarity={card["rarity"]}
                    image={card["imageUrl"]}
                  />
                );
              })}
          </div>
        </div>
      }
    </div>
  );
}

export default UserDeckPage;
