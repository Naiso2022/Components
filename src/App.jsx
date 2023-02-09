import Button from "./Button";
import Alerts from "./Alerts";
import Badges from "./Badges"
import Card from "./Card";
import Modal from "./Modal";
import { TfiAlert } from "react-icons/tfi";
import { AiFillClockCircle } from "react-icons/ai";
import { AiOutlineDribbble } from "react-icons/ai";
import { useState } from "react";

const onDismiss = () => {
  console.log("Happy home");
};

function App() {

    const [openModal, setOpenModal] = useState(false);


  return (
    <div className="">
      <div>
        <h1 className="text-6xl bg-black text-white py-4 text-center">
          Buttons
        </h1>
        <Button title="Mango" color="first" size="size1" />
        <Button title="Click" color="second" size="size2" />
        <Button title="POW" color="third" size="size3" disabled="dis1" />
      </div>
      <div>
        <h1 className="text-6xl bg-black text-white py-4 text-center">
          Alerts
        </h1>
        <Alerts
          color="first"
          size="size2"
          icon={<TfiAlert />}
          onDismiss={onDismiss}
        />
      </div>
      <div className="">
        <h1 className="text-6xl bg-black text-white py-4 text-center">
          Badges
        </h1>
        <div className="flex">
          <Badges
            title="Horror! 2h left"
            icon={<AiFillClockCircle size="22px" />}
            color="third"
            size="size1"
          />
          <Badges
            title="Basketball 3p"
            icon={<AiOutlineDribbble size="22px" color="yellow" />}
            color="second"
            size="size1"
          />
        </div>
      </div>
      <div>
        <h1 className="text-6xl bg-black text-white py-4 text-center">Cards</h1>
        <div>
          <Card
            href="https://www.google.se/"
            imgAlt="Spicy food"
            imgSrc="/alexandra-tran-VW0bzb90oMA-unsplash.jpg"
            color1="second"
            color2="first"
            size1="size2"
            size2="size1"
          ></Card>
        </div>
      </div>
      <h1 className="text-6xl bg-black text-white py-4 text-center">Modal</h1>
      <h2 className="text-3xl mt-10 text-center">Klicka på knappen för att öppna modalen.</h2>
      <div className="flex justify-center">
      <button className="openModalBtn text-2xl bg-green-500 py-2 px-4 rounded-full border-2 border-green-700 mt-4" onClick={() => {setOpenModal(true)}}>Open!</button>
    </div>
    
    <Modal
    show={openModal}
    size="size1"
    onClose={setOpenModal}
    />

    </div>
  );
}

export default App;
