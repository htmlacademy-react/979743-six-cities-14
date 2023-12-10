type OfferGalleryProps = {
  images: string[];
};

function OfferGallery({images}: OfferGalleryProps): JSX.Element {
  return (
    <div className="offer__gallery">
      {images.map((img) => (
        <div className="offer__image-wrapper" key={img}>
          <img className="offer__image" src={img} alt="Photo studio" />
        </div>
      ))}
    </div>
  );
}

export default OfferGallery;
