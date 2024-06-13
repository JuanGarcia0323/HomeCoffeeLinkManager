import { useEffect, useState } from "react";
import Animation from "./Animation";
const Button = ({
  children,
  className,
  hideAnimation,
  showAnimation,
  show,
  to,
}: {
  children: string;
  to: string;
  hideAnimation?: string;
  showAnimation?: string;
  className?: string;
  show?: boolean;
}) => {
  return (
    <Animation
      hideAnimation={`opacity-0 w-0 text-transparent ${hideAnimation}`}
      showAnimation={`z-50 w-full delay-0 ${showAnimation}`}
      className={`font-normal h-20 text-white text-xl  lg:text-2xl tracking-wider rounded ${className}`}
      show={!!show}
    >
      <a
        className="w-full flex items-center justify-center h-full align-text-bottom"
        href={to}
        target="_blank"
      >
        <p>{children}</p>
      </a>
    </Animation>
  );
};

const Hat = ({ show, onClick }: { show: boolean; onClick: () => void }) => {
  const [filling, setFilling] = useState(true);
  useEffect(() => {
    if (!show) {
      return;
    }
    setTimeout(() => {
      setFilling(false);
    }, 4100);
  }, [show]);

  return (
    <Animation
      hideAnimation=""
      showAnimation="hover:scale-90  "
      className="w-[80%] absolute -top-5 z-50 flex flex-col items-center"
      show={!show}
    >
      <div
        className=" flex w-full min-h-20 h-full items-center justify-around cursor-pointer bg-orange-500 shadow-xl  rounded-xl text-xl lg:text-2xl text-white-coffee tracking-wider hover:bg-coffee transition-all duration-300 ease-in-out"
        onClick={onClick}
      >
        <div className="w-4 h-4 rounded-full bg-white-coffee"></div>
        <div className="w-4 h-4 rounded-full bg-white-coffee z-50"></div>
        <button>
          {show ? (filling ? "Llenando..." : "Lleno") : "Llenar?"}
        </button>
        <div className="w-4 h-4 rounded-full bg-white-coffee"></div>
        <div className="w-4 h-4 rounded-full bg-white-coffee"></div>
      </div>
      <div className="w-40 h-6 rounded-b-xl bg-white-coffee relative flex">
        <Animation
          className="absolute top-6 left-8 w-5 bg-coffee  rounded-b-full z-50 duration-500"
          hideAnimation="h-2"
          showAnimation="h-96"
          show={filling && show}
        />
        <Animation
          className="absolute top-6 right-8 w-5 bg-coffee  rounded-b-full z-50 duration-500"
          hideAnimation="h-2"
          showAnimation="h-96"
          show={filling && show}
        />
      </div>
    </Animation>
  );
};

function App() {
  const [fill, setFill] = useState(false);

  return (
    <div className="flex mobile-h-screen w-screen items-center justify-center background">
      <div className="relative w-4/5 lg:w-1/4 h-2/4 lg:h-2/5 pt-32 overflow-hidden shadow-lg rounded-md rounded-b-3xl flex items-center flex-col bg-white border border-t-0 border-white justify-end gap-2 p-4">
        <Hat show={fill} onClick={() => setFill(true)} />
        <Button to="#" className="bg-white/50 hover:bg-orange-500" show={fill}>
          Quejas o Recomendaciones?
        </Button>
        <Button
          to="https://www.instagram.com/homecoffee.vm/"
          className="bg-white/40 hover:text-white hover:bg-violet-500"
          show={fill}
        >
          Instagram
        </Button>
        <Button
          to="https://www.pedidosya.com.ar/restaurantes/villa-mercedes/home-coffee-villa-mercedes-16bda7d8-2870-48e4-a086-f6c30f6e72a0-menu"
          className="bg-white/30 hover:text-white hover:bg-red-500"
          show={fill}
        >
          Pedidos Ya
        </Button>
        <Button
          to="#"
          className="bg-white/20 hover:bg-green-500 rounded-b-2xl"
          show={fill}
        >
          WhatsApp
        </Button>
        {fill && <div className="coffe-pouring" />}
      </div>
    </div>
  );
}

export default App;
