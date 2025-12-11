export default function ImageCard({ src, alt, onClick }) {
  return (
    <div className="image-card" onClick={onClick}>
      <img src={src} alt={alt} />
    </div>
  );
}
