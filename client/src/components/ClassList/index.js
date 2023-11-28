import React from "react";
import Class from "./Class";
import { useParams } from "react-router-dom";

const ClassList = () => {
  const { courseId } = useParams();
  return (
    <div>
      <Class
        classId="2"
        name={"class 1"}
        desc={"Meaning and definition of AI"}
      />{" "}
      <Class
        classId="3"
        name={"class 2"}
        desc={"Relationship between AI and ML"}
      />{" "}
      <Class classId="4" name={"class 3"} desc={"The foundation of AI"} />{" "}
    </div>
  );
};

export default ClassList;
