
type User = {
    name: string;
    isLoggedIn: boolean;
  };
  
  const users: User[] = [
    {
      name: "Max",
      isLoggedIn: true,
    },
    {
      name: "Elmin",
      isLoggedIn: false,
    },
    {
      name: "Jule",
      isLoggedIn: true,
    },
  ];

const Home = () => {
    //! add variable
    const aVariable = "Max hat heute Geburtstag"

    //! add function (arrow function)
    const calcAge = (birthYear: number) => {
        const currentYear = new Date ().getFullYear();
        return currentYear - birthYear;
    }


  return (

    <div>
      <h1>Home {3 * 7} </h1>
      <h2>writing code in TSX: {aVariable}</h2>
      <h3>Max ist heute {calcAge(1989)} alt geworden</h3>

      {/* {users.map((singleUser) => 
      <h4 key={singleUser.name}>{singleUser.name}</h4>)}

      {users.map((singleUser) => {
        if (singleUser.isLoggedIn) {
            return <h4>Hallo, {singleUser.name}</h4>

        } else {
            return <h4>{singleUser.name} ist nicht eingeloggt</h4>
        }

        })}; */}


        {/* Variante 3 with Ternary */}
        {users.map((singleUser) => singleUser.isLoggedIn ? <h4>Hallo, {singleUser.name}</h4> : null)}

    </div>
  )
}

export default Home
