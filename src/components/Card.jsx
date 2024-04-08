function Card({ title, imgUrl, isVisited, children }) {
  //   const title = props.title;
  const visitedLable = isVisited ? "🐸 visitata" : "⚔️ non visitata";
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga eaque id quaerat officia, in sunt harum quod incidunt doloremque ad obcaecati animi facilis accusantium mollitia dolorum aut magni, iste optio.";
  //   const imgUrl = props.imgUrl;
  //   console.log(props);

  return (
    <div className="rounded-md bg-zinc-950 ">
      <span>CIAO</span>
      <img src={imgUrl} alt="" className="h-32 w-80 " />
      <div className="flex flex-col p-4">
        <h2> {title} </h2>
        <p>{children}</p>
        {/* {isVisited ? <span> 🐸 visitata</span> : <span> ⚔️ non visitata</span>} */}
        {/* 
        <span>{isVisited ? "🐸 visitata" : "⚔️ non visitata"}</span> */}
        {/* {isVisited && "🐸 visitata"} */}
        {/* {!isVisited && "⚔️ non visitata"} */}

        <span>{visitedLable}</span>
      </div>
    </div>
  );
}

export default Card;
