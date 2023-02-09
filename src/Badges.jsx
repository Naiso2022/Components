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
};

const Badges = (props) => {

      const { title, color, size, icon } = props;

      const colorClass = styles.color[color];
      const sizeClass = styles.size[size];


  return (
    <badge className={`flex rounded-2xl items-center w-44 ${colorClass} ${sizeClass}`}>
      {icon} {title}
    </badge>
  );
};

export default Badges;
