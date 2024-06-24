import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      display: "flex", flexDirection: "column"
      , gap: "1rem", alignItems: "center", justifyContent: "center",
      height: "calc( 100vh - var(--header-h)  )",
      backgroundColor: 'var(--main-Bg)', color: "var(--primary-color)"
    }}>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className='link button' href="/">Return Home</Link>
    </div>
  );
}