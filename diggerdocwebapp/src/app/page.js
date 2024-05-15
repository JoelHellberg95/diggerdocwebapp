import Link from "next/link";
import Navigation from "./components/Navigation/navigation";

export default function Home() {
  return (
    <main>
      <Navigation />
      
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Välkommen till DiggerDoc</h1>
        <p>
          DiggerDoc är en webbapplikation för att hantera uppdrag och arbetslistor.
        </p>
        <p>
          Här kan du skapa uppdrag, lägga till arbetsuppgifter och hålla koll på vad som behöver göras.
        </p>
        <btn className="btn btn-primary">Kom igång</btn>
      </div>
    </main>
  );
}
