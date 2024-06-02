import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

export default function ScrollArrow() {
  return (
    <div className="w-42 h-42">
      <ArrowCircleDownIcon
        sx={{
          width: 45,
          height: 45,
        }}
        className="animate-bounce"
      />
    </div>
  );
}
