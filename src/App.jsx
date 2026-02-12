import { useState } from "react";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Ні",
      "Ти впевнена?",
      "Дійсно впевнена?",
      "Подумай ще раз!",
      "Це остання можливість!",
      "Невже так?",
      "Ти можеш цього пожалкувати!",
      "Подумай ще раз!",
      "Ти абсолютно впевнена?",
      "Це може бути помилкою!",
      "Будь добра!",
      "Не буди такою холодною!",
      "Передумала?",
      "Розглянула б ти це ще раз?",
      "Це твоя остаточна відповідь?",
      "Ти ламаєш мені сердце ;(",
      "Це твоя остаточна відповідь?",
      "Ти ламаєш мені сердце ;(",
      "Будь ласка? :( Ти ламаєш мені сердце",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="text-4xl md:text-6xl font-bold my-4 text-center">
            Ура! Ти найкраща! 🎉❤️
          </div>
          <div className="text-center mt-8 px-4 max-w-2xl">
            <p className="text-2xl md:text-3xl font-bold mb-6">❤️ Ксюш. Ти - найцінніша для мене людина! ❤️</p>
            <p className="text-lg md:text-xl mb-4 leading-relaxed">
              Для мене ти - це все на світі. Ні��то і ніколи не зможе тебе замінити,
              бо ти - моя доля, моя любов, моя зоря в темному небі.
            </p>
            <p className="text-lg md:text-xl font-semibold">
              Люблю тебе сильніше, ніж слова можуть висловити... 💕
            </p>
          </div>
        </>
      ) : (
        <>
          <img
            src={lovesvg}
            className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28"
          />
          <img
            src={lovesvg2}
            className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32"
          />
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.webp"
          />
          <h1 className="text-4xl md:text-6xl my-4 text-center">
            Ти будеш моєю коханою?
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Так ❤️
            </button>
            <button
              onClick={handleNoClick}
              className="bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "Ні" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <a
      href="https://github.com/xeven777"
      className="text-center text-xs text-gray-500 mt-4 hover:underline"
    >
      Зроблено з любов'ю для Ксюші ❤️
    </a>
  );
};
