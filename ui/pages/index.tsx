import { ClassWithDeadMethod } from "../src/moduleWithDeadStuff";
const instance = new ClassWithDeadMethod();

const Home = () => {
  return <div>{instance.aliveMethod()}</div>;
};

export default Home;
