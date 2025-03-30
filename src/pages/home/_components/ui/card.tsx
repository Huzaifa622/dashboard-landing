

function Card({percent , para}:{percent:string; para:string}) {
  return (
    <div className="border-l border-black p-4" >
    <h1 className="text-3xl" >{percent}</h1>
    <p>{para}</p>
</div>
  )
}

export default Card