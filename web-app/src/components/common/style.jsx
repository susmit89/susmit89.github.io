import { imageUrl } from "../../services/imageService";
export default function postStyling({ type, value, reference, caption }) {
  switch (type) {
    case "heading":
      return <h3>{value}</h3>;
    case "subheading":
      return <h4>{value}</h4>;
    case "image":
      return (
        <figure class="figure">
          <img
            src={imageUrl(reference)}
            class="center figure-img img-fluid rounded"
          ></img>
          <figcaption class="center">{caption}.</figcaption>
        </figure>
      );
    default:
      return <p>{value}</p>;
  }
}
