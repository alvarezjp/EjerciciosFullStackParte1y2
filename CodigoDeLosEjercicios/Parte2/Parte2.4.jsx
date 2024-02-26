const App = () => {
    const courses = [
      {
        name: "Half Stack application development",
        id: 1,
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
          {
            name: "Redux",
            exercises: 11,
            id: 4,
          },
        ],
      },
      {
        name: "Node.js",
        id: 2,
        parts: [
          {
            name: "Routing",
            exercises: 3,
            id: 1,
          },
          {
            name: "Middlewares",
            exercises: 7,
            id: 2,
          },
        ],
      },
    ];
  
    console.log(courses);
    return (
      <div>
        <h1>Web develoment Curriculum</h1>
        <Course course={courses}/>
      </div>
    );
  };
  
  const Course = ({ course }) => {
    return (
      <section>
      {course.map(cursos=>{
        return(
          <>
          <h2>{cursos.name}</h2>
          <Secciones course={cursos}/>
          <Suma course={cursos}/>
          </>
        )
      })}
        
      </section>
    );
  };
  
  const Secciones = ({ course }) => {
    const partes = course.parts;
    return (
      <>
        {partes.map((cursos) => {
          return (
            <article key={cursos.id}>
              <p>
                {cursos.name} {cursos.exercises}
              </p>
            </article>
          );
        })}
      </>
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
        <p>
          Total de ejercicios: <strong>{suma}</strong>
        </p>
      </div>
    );
  };
  
  export default App;
  