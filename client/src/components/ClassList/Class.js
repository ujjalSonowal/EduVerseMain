import React from "react";
import { useParams } from "react-router-dom";

const Class = ({ classId }) => {
  const { courseId } = useParams();
  return (
    <div>
      <h2> Class ID: {classId} </h2>{" "}
    </div>
  );
};

export default Class;
