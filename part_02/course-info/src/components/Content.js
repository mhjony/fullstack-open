import React from "react";

export const Content = (props) => {
  const courses = props.course;
  console.log(courses);

  const total = () => {
    const sum = courses.map((datum) => datum.exercises).reduce((a, b) => a + b);
    return sum;
  };

  return (
    <>
      {courses.map((part) => (
        <div key={part.id}>
          <p>
            {part.name} {part.exercises}
          </p>
        </div>
      ))}
      <strong>total of {total()} exercises</strong>
    </>
  );
};

export default Content;
