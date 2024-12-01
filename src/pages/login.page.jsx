import lateralBanner from "../images/vertical-banner.jpg";
import logo from "../images/logo.png";
import FormInput from "../components/signup-page/FormInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../images/cards.png";
import { jwtDecode } from "jwt-decode";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, username }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data["access_token"];
        const { role, username } = jwtDecode(token);
        localStorage.setItem("authToken", `Bearer ${token}`);
        localStorage.setItem("role", role);
        localStorage.setItem("username", username);

        navigate("/homepage");
      } else {
        console.error("Erro ao registrar: ", response);
      }
    } catch (error) {
      console.error("Erro ao registrar: ", error);
    }
  };

  return (
    <div>
      <div className="absolute flex items-center justify-center w-screen h-screen z-10">
        <div className="flex bg-zinc-950 w-[900px] h-[650px] rounded-3xl">
          <img
            src={lateralBanner}
            className="w-[500px] rounded-l-3xl"
            alt=""
            srcset=""
          />
          <div className="flex flex-col w-full items-center justify-center">
            <img
              src={logo}
              className="rounded-l-3xl w-80 mb-24"
              alt=""
              srcset=""
            />
            <form
              action="http://localhost:3001/auth/login"
              onSubmit={handleSubmit}
              method="POST"
              className="flex flex-col gap-2 items-center"
            >
              <FormInput
                inputName={"username"}
                onChange={(e) => setUsername(e.target.value)}
              ></FormInput>
              <FormInput
                inputName={"email"}
                onChange={(e) => setEmail(e.target.value)}
              ></FormInput>
              <FormInput
                inputName={"password"}
                onChange={(e) => setPassword(e.target.value)}
              ></FormInput>
              <div className="flex items-start">
                <p className="text-white">
                  não possui possui um cadastro? <a href="/">cadastre-se</a>
                </p>
              </div>
              <input
                type="submit"
                value="PLAY"
                className="bg-green-400 h-10 w-1/2 rounded-xl text-2xl font-bold text-white mt-12 hover:cursor-pointer"
              />
            </form>
          </div>
        </div>
      </div>
      <img
        src={backgroundImage}
        className="absolute brightness-50 blur-sm scale-105 h-screen w-full z-0"
        alt=""
        srcset=""
      />
    </div>
  );
}

export default LoginPage;
