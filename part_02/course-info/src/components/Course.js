import React from "react";
import Header from "./Header";
import Content from "./Content";

const Course = ({ courses }) => {
  return (
    <>
      <h1>Web development curriculam</h1>
      {courses.map((course) => (
        <div key={course.id}>
          <Header header={course.name} />
          <Content course={course.parts} />
        </div>
      ))}
    </>
  );
};

export default Course;
