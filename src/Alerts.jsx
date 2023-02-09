

const styles = {
  color: {
    first: "bg-blue-500",
    second: "bg-red-600",
    third: "bg-green-600",
  },
  size: {
    size1: "text-xl px-2",
    size2: "text-4xl px-8 py-1",
    size3: "text-6xl px-8 py-4",
  },
};

const Alerts = (props) => {



  const { color, size, icon, onDismiss} = props;

  const colorClass = styles.color[color];
  const sizeClass = styles.size[size];

  return (
    <alert onClick={onDismiss} className={`flex cursor-pointer ${colorClass} ${sizeClass}`}>
      {icon} 
       Info alert! Ask NO qustions!
    </alert>
  );
};

export default Alerts;
