function Home(props) {
  console.log(props);

  return (
    <div>
      <h2>You Send Me {props.name}</h2>
    </div>
  );
}
export default Home;
