import Image from 'next/image';

export default function Home() {
  return (
    <section className="home">
      <Image src="/profile.jpg" alt="Profile" width={180} height={180} className="profile" />
      <h2>Hi, I'm Ibukun</h2>
      <p>Full-stack developer specializing in React, Next.js, and TypeScript.</p>
    </section>
  );
}