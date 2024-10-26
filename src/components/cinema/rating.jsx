import starImg from "../../assets/star.svg";

export default function Rating({ value }) {
  const stars = Array(value).fill(starImg);
  return (
    <>
      {stars.map((star, idx) => (
        <img key={idx} src={star} alt="star" width="14" height="14" />
      ))}
    </>
  );
}
