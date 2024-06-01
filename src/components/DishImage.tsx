export default function DishImage(props: { imgUrl: string }) {
  return (
    <div className="row-span-3 m-5">
      <img className="object-cover h-[75%] rounded-full" src={props.imgUrl} alt="" />
    </div>
  );
}
