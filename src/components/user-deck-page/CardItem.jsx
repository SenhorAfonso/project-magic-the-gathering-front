function CardItem({
  name,
  description,
  colors,
  types,
  subtypes,
  rarity,
  image,
}) {
  return (
    <div>
      <div className="h-[500px]">
        <div className="flex gap-2 items-center">
          <div className="flex flex-col w-2/3">
            <div className="flex flex-col mb-4">
              <p className="uppercase font-bold text-md">name:</p>
              <p>{name}</p>
            </div>

            <div className="flex flex-col mb-4">
              <p className="uppercase font-bold text-md">description:</p>
              <p>{description}</p>
            </div>

            <div className="flex flex-col mb-4">
              <p className="uppercase font-bold text-md">colors:</p>
              <p>{colors}</p>
            </div>

            <div className="flex flex-col mb-4">
              <p className="uppercase font-bold text-md">types:</p>
              <p>{types}</p>
            </div>

            <div className="flex flex-col mb-4">
              <p className="uppercase font-bold text-md">subtypes:</p>
              <p>{subtypes}</p>
            </div>

            <div className="flex flex-col mb-4">
              <p className="uppercase font-bold text-md">rarity:</p>
              <p>{rarity}</p>
            </div>
          </div>

          <img src={image} className="h-80" alt="" srcset="" />
        </div>
      </div>
      <div className="w-full h-[1px] bg-black"></div>
    </div>
  );
}

export default CardItem;
