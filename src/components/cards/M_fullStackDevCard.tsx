interface propTypes {
  title: String;
}
const M_fullStackDevCard = (props: propTypes) => {
  return (
    <div className=" bg-neutral-100 flex-1 h-32 rounded-lg flex justify-center items-center mr-2">
      <h1 className=" text-2xl uppercase">{props.title}</h1>
    </div>
  );
};

export default M_fullStackDevCard;
