function Home(props) {
  //   console.log(props);

  return (
    <div>
      <h2>You Send Me {props.name}</h2>
      <button onClick={props.print}>Print</button>
    </div>
  );
}
export default Home;
