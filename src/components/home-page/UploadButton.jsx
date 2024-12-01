import React, { useState } from "react";

const UploadButton = ({ iconPath, buttonText }) => {
  const [fileName, setFileName] = useState(null);

  const handleClick = () => {
    document.getElementById("file-input").click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        await fetch("http://localhost:3001/decks/upload-deck", {
          method: "POST",
          body: formData,
        })
      } catch (error) {
        console.error("Erro ao enviar o arquivo:", error);
      }
    }
  };

  return (
    <div>
      <input
        type="file"
        id="file-input"
        name="file"
        onChange={handleFileChange}
        className="hidden"
      />

      <button
        onClick={handleClick}
        className="flex items-center pl-8 gap-20 w-[400px] h-20 border-[1px] text-2xl shadow-xl rounded-2xl uppercase hover:translate-y-2 duration-200 active:shadow-none active:border-none"
      >
        <div className="w-8">
          <img src={iconPath} alt="Ícone" />
        </div>
        <span>{buttonText}</span>
      </button>

      {fileName && <p>Arquivo selecionado: {fileName}</p>}
    </div>
  );
};

export default UploadButton;
