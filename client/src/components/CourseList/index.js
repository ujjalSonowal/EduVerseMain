import React from "react";
import Course from "./Course";

const CoursesList = () => {
  return (
    <div>
      <Course name="AI/ML" courseId="1" />
      <Course name="python" courseId="2" />
      <Course name="Java" courseId="3" />
      <Course name="DAA" courseId="4" />
    </div>
  );
};

export default CoursesList;
