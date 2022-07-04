import React from "react";
const PokeForm = props => {
  return (
    <form onSubmit={props.formTrigger}>
      <div className="input-group mb-3 mt-5">
      <input type="text" className="form-control" placeholder="number o name of the pokemon"/>
      <button className="btn btn-primary" type="button" onClick={props.ramdonPokemon} autoFocus>❓</button>
      <button className="btn btn-primary btn-success" type="submit">🔎</button>
      </div>
    </form>
  );
};
export default PokeForm;
