(() => {
  function getMovieById(id: string): Object {
    console.log({ id });
    return {};
  }

  function getMovieCastById(id: string) {
    console.log({ id });
  }

  function getActorBioById(actorId: string) {
    console.log({ actorId });
  }

  interface Movie {
    cast: string[];
    title: string;
    description: string;
    rating: number;
  }

  function createMovie({ title, cast, description, rating }: Movie) {
    console.log({ title, cast, description, rating });
  }

  function checkFullName(fullName: string): boolean {
    console.log({ fullName });
    return true;
  }

  // Crea un nuevo actor
  function createActor(fullName: string, birthdate: Date): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    //Validar si existe
    if (checkFullName(fullName)) return false;

    console.log("Crear actor");
    return true;
  }

  //Continuacion
  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }): Number => {

    if (isDead) return 1500;

    if (isSeparated) return 2500;

    return isRetired ? 3000 : 4000
    // if (isRetired) return 3000;
    // return 4000;
  };
})();
