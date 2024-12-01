import LateralImage from "../components/common/LateralImage";
import "@fontsource/lato/400.css";
import DeckItem from "../components/all-decks-page/DeckItem";
import MainHeaderTitle from "../components/common/MainHeaderTitle";
import { useEffect, useState } from "react";

function AllDecksPage() {
  const [decks, setDecks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const token = localStorage.getItem("authToken");
  const role = localStorage.getItem("role");

  const fetchDecks = async () => {
    let url;

    switch (role) {
      case "ADMIN":
        setIsAdmin(true);
        url = "http://localhost:3001/decks";
        console.log("ADMIN");
        break;
      default:
        url = "http://localhost:3001/decks/user-decks";
        setIsAdmin(false);
        setLoading(false);
        console.log("PLAYER");
        break;
    }

    const token = localStorage.getItem("authToken");

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setDecks(data);
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
        <div className="flex w-screen justify-center gap-24 mt-12 ml-32">
          <div className="grid grid-cols-2 gap-y-8 gap-x-32">
            {(!decks["decks"] && <p>user have no deck</p>) ||
              (decks["decks"].length !== 0 &&
                decks["decks"].map((deck) => {
                  return (
                    <DeckItem
                      deckCommander={deck["commander"]}
                      deckOwner={deck["deckOwner"]}
                      deckId={deck["_id"]}
                    ></DeckItem>
                  );
                }))}
          </div>
        </div>
      }
    </div>
  );
}

export default AllDecksPage;
