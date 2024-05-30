export default function DishImage(props: { imgUrl: string }) {
  return (
    <div className="row-span-3">
      <img className="object-cover h-[75%]" src={props.imgUrl} alt="" />
    </div>
  );
}
