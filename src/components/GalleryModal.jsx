export default function GalleryModal({ src, onClose }) {
  if (!src) return null;
  return (
    <div className="modal" onClick={onClose}>
      <img className="modal-img" src={src} alt="Large" />
    </div>
  );
}
