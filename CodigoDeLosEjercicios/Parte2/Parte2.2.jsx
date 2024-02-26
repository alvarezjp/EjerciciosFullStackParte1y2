const App = () => {
    const course = {
      id: 1,
      name: "Half Stack application development",
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
      ],
    };
  
    return <Course course={course} />;
  };
  
  const Course = ({ course }) => {
    return (
      <section>
        <h1>{course.name}</h1>
        <Secciones course={course} />
        <Suma course={course} />
      </section>
    );
  };
  
  const Secciones = ({ course }) => {
    const partes = course.parts;
    return (
      <div>
        {partes.map((cursos) => {
          return (
            <article key={cursos.id}>
              <p>
                {cursos.name} {cursos.exercises}
              </p>
            </article>
          );
        })}
      </div>
    );
  };
  
  const Suma = ({ course }) => {
    const secciones = course.parts;
    let suma = 0;
    return (
      <div>
        {secciones.map((cursos) => {
          suma += cursos.exercises;
        })}
        <p>Total de ejercicios: <strong>{suma}</strong></p>
      </div>
    );
  };
  
  export default App;
  