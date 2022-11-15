import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

const UserChange = () => {
  const { userValue, setUserValue } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newFirstName = event.target.newFirstName.value;
    const newSurName = event.target.newSurName.value;

    setUserValue({
      name: `${newFirstName}`,
      surname: `${newSurName}`,
    });
  };

  return (
    <div className="flex justify-center items-start gap-8 w-full">
      <div className="flex flex-col items-center gap-1 w-1/2">
        <h3 className="text-center">Utilisateur actuel</h3>
        <p className="p-1">{userValue.name}</p>
        <p className="p-1">{userValue.surname}</p>
      </div>
      <div className="flex flex-col items-center gap-1 w-1/2">
        <h3 className="text-center"> Changer d'utilisateur </h3>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-1 w-full"
        >
          <input
            type="text"
            name="firstname"
            id="newFirstName"
            placeholder="Prénom*"
            className="bg-zinc-100 rounded-md p-1 max-[640px]:w-full shadow-inner"
            defaultValue=""
          />
          <input
            type="text"
            name="surname"
            id="newSurName"
            placeholder="Nom*"
            className="bg-zinc-100 rounded-md p-1 max-[640px]:w-full shadow-inner"
            defaultValue=""
          />
          <input type="submit" className="bg-zinc-200 rounded-md p-1 px-3" />
        </form>
      </div>
    </div>
  );
};

export default UserChange;
