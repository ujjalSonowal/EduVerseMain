import React from "react";
import Class from "./Class";
import { useParams } from "react-router-dom";

const ClassList = () => {
  const { courseId } = useParams();
  return (
    <div>
      <h1> Course ID: {courseId} </h1> <Class classId="1" />
      <Class classId="2" />
      <Class classId="3" />
      <Class classId="4" />
    </div>
  );
};

export default ClassList;
