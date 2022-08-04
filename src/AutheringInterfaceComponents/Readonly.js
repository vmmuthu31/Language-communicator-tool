import React from "react";

export default function Readonly(item, i) {
  return (
    <>
      <div className="mx-3 td2" key={i}>
        {item ? item : "-"}
      </div>
    </>
  );
}
