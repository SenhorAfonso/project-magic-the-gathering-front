import backgroundImage from "../../images/cards.png";

function LateralImage() {
  return (
    <div class="fixed w-80 h-screen overflow-hidden">
      <img
        src={backgroundImage}
        class="object-cover w-full h-full object-center brightness-50 blur-sm scale-105"
        alt="Imagem"
      />
    </div>
  );
}

export default LateralImage;