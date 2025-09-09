// app/about/page.tsx

import Link from "next/link";
import PageTransition from "../components/PageTransition";

export default function About() {
  return (
    <PageTransition>
      <div>
        <h1>About 페이지</h1>
      </div>
      <Link className="text-blue-500 underline" href="/PageTransition">
        홈으로
      </Link>
    </PageTransition>
  );
}
