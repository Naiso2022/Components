

const styles = {
  size: {
    size1: "text-2xl bg-yellow-200 border-2 border-red-500 w-96 h-96",
  },
};

const Modal = (props) => {

  

  const { onClose, size, show } = props;

        const sizeClass1 = styles.size[size];

        if (!show){
            return null;
        }


  return (
    <div className="flex justify-center mt-6 mb-6">
    <modal className={`${sizeClass1}`}>
    <button className="bg-gray-300 w-10 border-r-2 border-b-2 border-red-500" onClick={() => onClose(false)}> X </button>
    <header className="">
    <h1 className="mt-2 text-center">Är du säker på att du vill gå vidare?</h1>
    </header>
    <body>
    <p className="mt-4 text-center">Att gå vidare är coolt!</p>
    </body>
    <footer className="flex justify-center mt-20">
    <button className=" bg-red-500 py-2 px-6 border-2 border-red-800" onClick={() => onClose(false)}>Cancel</button>
    <button className="bg-blue-400 py-2 px-6 ml-3 border-2 border-blue-800">Countinue</button>
    </footer>
    </modal>
    </div>
  );
};

export default Modal;
