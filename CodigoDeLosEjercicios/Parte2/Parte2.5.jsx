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
  
  export default Course;
  