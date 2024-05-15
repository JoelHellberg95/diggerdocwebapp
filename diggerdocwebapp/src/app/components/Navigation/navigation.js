import Link from "next/link";

export default function Navigation() {
  return (
    <div className="navbar bg-base-100">
        <div className="navbar-start">
            <h1 className="text-xl">DiggerDoc</h1>
        </div>
        <div className="navbar-center">
        <Link href="/"><div className="btn btn-ghost text-xl">Hem</div></Link>
        <Link href="/tasks"><div className="btn btn-ghost text-xl">Alla Uppdrag</div></Link>
        <Link href="/tasks/create"><div className="btn btn-ghost text-xl">Skapa Uppdrag</div></Link>
        <Link href="/settings"><div className="btn btn-ghost text-xl">Inställningar</div></Link>

        </div>
        <div className="navbar-end">
            <div className="btn btn-ghost text-xl">Logga ut</div>
        </div>
    </div>
  );
}