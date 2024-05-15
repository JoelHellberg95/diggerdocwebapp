import Link from "next/link";
import Navigation from "./components/Navigation/navigation";
import TodoList from "./tasks/create/create";

export default function Home() {
  return (
    <main>
      <Navigation />
      
      <div className="container mx-auto p-4 bg-base-100">
        <h1 className="text-2xl font-bold mb-4 text-center ">Välkommen till DiggerDoc</h1>
        <p className="text-3xl text-center font-bold mb-3">Vad ska vi serva idag?</p>
        <btn className="btn btn-primary">Kom igång</btn>
      </div>
    </main>
  );
}
