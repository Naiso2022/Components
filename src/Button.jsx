
const styles = {
  color: {
    first: "bg-blue-500",
    second: "bg-red-600",
    third: "bg-green-600",
  },
  size: {
    size1: "text-xl px-2 py-2",
    size2: "text-4xl px-8 py-4",
    size3: "text-6xl px-8 py-4",
  },
  disabled: {
    dis1: "bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-20 cursor-not-allowed",
  },
};

 

const Button = (props) => {
  const { title, color, size, disabled } = props;

  const colorClass = styles.color[color];
  const sizeClass = styles.size[size];
  const disabledClass = styles.disabled[disabled];


  return <button className={`${colorClass} ${sizeClass} ${disabledClass}`}>{title}</button>
  
}

export default Button;
