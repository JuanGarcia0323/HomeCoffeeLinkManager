import { useState } from "react";
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
  return (
    <Animation
      // hideAnimation="bottom-0 bg-coffee opacity-0"
      hideAnimation=""
      showAnimation="hover:scale-90 hover:bg-coffee "
      className="w-[80%] bottom-[85%] absolute z-50 shadow-xl bg-orange-500 rounded-xl text-xl lg:text-2xl text-white-coffee tracking-wider "
      show={!show}
    >
      <div
        className=" flex w-full min-h-20 h-full items-center justify-around cursor-pointer"
        onClick={onClick}
      >
        <div className="w-4 h-4 rounded-full bg-white-coffee"></div>
        <div className="w-4 h-4 rounded-full bg-white-coffee z-50"></div>
        <button>{show ? "Lleno" : "Llenar?"}</button>
        <div className="w-4 h-4 rounded-full bg-white-coffee"></div>
        <div className="w-4 h-4 rounded-full bg-white-coffee"></div>
      </div>
    </Animation>
  );
};

function App() {
  const [fill, setFill] = useState(false);

  return (
    <div className="flex mobile-h-screen w-screen items-center justify-center background">
      <div className="relative w-4/5 lg:w-1/4 h-2/4 lg:h-2/5 overflow-hidden shadow-lg rounded-md rounded-b-3xl flex items-center flex-col bg-white border border-t-0 border-white justify-end gap-2 p-4">
        <Hat show={fill} onClick={() => setFill(true)}></Hat>
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
