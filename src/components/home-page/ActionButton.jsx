function ActionButton({ buttonText, iconPath, link }) {
  const handleClick = () => {
    window.location.href = link;
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`flex items-center pl-8 gap-20 w-[400px] h-20 border-[1px] text-2xl shadow-xl rounded-2xl uppercase hover:translate-y-2 duration-200 active:shadow-none active:border-none}`}
      >
        <div className="w-8">
          <img src={iconPath} alt="" />
        </div>
        {buttonText}
      </button>
    </>
  );
}

export default ActionButton;
