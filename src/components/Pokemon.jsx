let Pokemon = () => {
  let randomNumber = () => {
    return Math.floor(Math.random() * 1025 + 1);
  };

  let number = randomNumber();

  return (
    <div className='header'>
      <h3 style={{ fontSize: "2.5rem", textDecoration: "underline" }}>
        Pokemon #{number}
      </h3>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png`}
        alt=''
      />
    </div>
  );
};

export default Pokemon;
