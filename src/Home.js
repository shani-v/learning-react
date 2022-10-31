function Home(props) {
  //   console.log(props);

  return (
    <div>
      <h2 className="text-2xl font-semibold">
        You Send Me <span className="text-blue-200"> {props.name}</span>
      </h2>
      <button onClick={props.print}>Print</button>
    </div>
  );
}
export default Home;
