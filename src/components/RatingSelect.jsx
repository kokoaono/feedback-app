import { useState } from "react";

function RatingSelect({ select }) {
  const [selected, setSelected] = useState(10);
  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    select(selected);
  };

  return <div>Rating Select</div>;
}

export default RatingSelect;
