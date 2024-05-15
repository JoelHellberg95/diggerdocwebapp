import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to DiggerDoc!</h1>
      <p>
        DiggerDoc is a web application that allows you to manage your service jobs and invoices.
      </p>
      <p>
        To get started, please login or register for an account.
      </p>
      <button class="btn">Login here</button>
    </main>
  );
}
