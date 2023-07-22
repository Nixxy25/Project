import { useMemo } from "react";
import "./ItemsquintupleRating15St.css";
const ItemsquintupleRating15St = ({
  rateStardefault,
  rateStardefault1,
  rateStardefault2,
  rateStardefault3,
  rateStardefault4,
  itemsquintupleRating15StPosition,
  itemsquintupleRating15StTop,
  itemsquintupleRating15StLeft,
}) => {
  const itemsquintupleRating15StStyle = useMemo(() => {
    return {
      position: itemsquintupleRating15StPosition,
      top: itemsquintupleRating15StTop,
      left: itemsquintupleRating15StLeft,
    };
  }, [
    itemsquintupleRating15StPosition,
    itemsquintupleRating15StTop,
    itemsquintupleRating15StLeft,
  ]);

  return (
    <div
      className="itemsquintuple-rating15-st"
      style={itemsquintupleRating15StStyle}
    >
      <img className="rate-stardefault-icon" alt="" src={rateStardefault} />
      <img className="rate-stardefault-icon" alt="" src={rateStardefault1} />
      <img className="rate-stardefault-icon" alt="" src={rateStardefault2} />
      <img className="rate-stardefault-icon" alt="" src={rateStardefault3} />
      <img className="rate-stardefault-icon" alt="" src={rateStardefault4} />
    </div>
  );
};

export default ItemsquintupleRating15St;
