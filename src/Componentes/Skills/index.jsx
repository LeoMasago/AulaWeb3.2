import Card from "../Card";

function Skills({ skills }) {

  const habilidades = [
    {
      titulo:"React",
      nivel:"Lutando",
      tempoxp:"1 mês",
      color:"blue",
      bg:"red"
    },
    {
      titulo:"SQL",
      nivel:"Ódio",
      tempoxp:"3 mês",
      color:"red",
      bg:"green"
    },
    {
      titulo:"Python",
      nivel:"Legal",
      tempoxp:"10 mês",
      color:"green",
      bg:"pink"
    },
    {
      titulo:"C++",
      nivel:"Ruim",
      tempoxp:"2 mês",
      color:"pink",
      bg:"blue"
    }
  ]

  return (
    <div className="skills">
      <h2>Habilidades</h2>
      <Card dados={habilidades}/> 
    </div>
  );
}

export default Skills;