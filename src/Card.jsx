const styles = {
  textColor1: {
    first: "text-blue-500",
    second: "text-red-600",
    third: "text-green-600",
  },
  textColor2: {
    first: "text-black-500",
    second: "text-red-600",
    third: "text-green-600",
  },
  size1: {
    size1: "text-xl",
    size2: "text-4xl p-2",
    size3: "text-6xl",
  },
  size2: {
    size1: "text-xl pt-4 pl-2 pb-4",
    size2: "text-4xl",
    size3: "text-6xl",
  },
};

const Card = (props) => {
  const { imgAlt, imgSrc, href, color1, color2, size1, size2 } = props;

        const colorClass1 = styles.textColor1[color1];
        const colorClass2 = styles.textColor2[color2];
        const sizeClass1 = styles.size1[size1];
        const sizeClass2 = styles.size2[size2];


        return (
          <div>
            <div className="flex flex-col w-72 m-8 border-black border-2">
              <a href={href}>
                <img src={imgSrc} alt={imgAlt} />
                <h2 className={`${colorClass1} ${sizeClass1}`}>
                  This is my favorite card!
                </h2>
                <h4 className={`${colorClass2} ${sizeClass2}`}>
                  In the future, you can buy this card.
                </h4>
              </a>
            </div>
          </div>
        );
};

export default Card;
