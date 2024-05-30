export default function DishImage(props: { imgUrl: string }) {
  return (
    <div className="overflow-hidden">
      <div className="overflow-hidden">
        <img className="overflow-hidden" src={props.imgUrl} alt="" />
      </div>
      
    </div>
  );
}
