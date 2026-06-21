"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CBSE_SESSION_KEY } from "../session";

const rows = [
  {
    code: "043",
    name: "CHEMISTRY",
    theory: "050",
    practical: "029",
    marks: "079",
    grade: ""
  },
  {
    code: "041",
    name: "MATHEMATICS",
    theory: "070",
    practical: "018",
    marks: "088",
    grade: ""
  }
];

export default function ResultPage() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(CBSE_SESSION_KEY) !== "true") {
      router.replace("/");
      return;
    }

    setAuthorized(true);
  }, [router]);

  function printPage() {
    window.print();
  }

  function checkAnotherResult() {
    sessionStorage.removeItem(CBSE_SESSION_KEY);
    router.push("/");
  }

  if (!authorized) {
    return <main className="result-page result-page-guard" />;
  }

  return (
    <main className="result-page">
      <div className="result-shell">
        <header className="result-banner">
          <img
            className="cbse-logo"
            src="/assets/cbse-logo.jpg"
            alt="Central Board of Secondary Education emblem"
          />
          <div className="board-name">
            <div className="board-name-hindi">केन्द्रीय माध्यमिक शिक्षा बोर्ड</div>
            <div className="board-name-english">
              Central Board of Secondary Education
            </div>
          </div>
          <div className="result-url">http://cbseresults.nic.in</div>
        </header>

        <div className="banner-credit">
          Brought to you by National Informatics Centre
        </div>

        <button className="print-link" type="button" onClick={printPage}>
          Print this page
        </button>

        <section className="result-heading" aria-labelledby="result-heading">
          <h1 id="result-heading">Examination Results</h1>
          <h2>
            Senior School Certificate Examination (Class XII) Results 2026
          </h2>
        </section>

        <section className="candidate-details" aria-label="Candidate details">
          <dl>
            <div>
              <dt>Roll No:</dt>
              <dd>18611355</dd>
            </div>
            <div>
              <dt>Candidate Name:</dt>
              <dd>MAYANK KUMAR</dd>
            </div>
            <div>
              <dt>Mother&apos;s Name:</dt>
              <dd>KUMKUM KUMAR</dd>
            </div>
            <div>
              <dt>Father&apos;s Name:</dt>
              <dd>SHASHI KUMAR</dd>
            </div>
            <div>
              <dt>School&apos;s Name:</dt>
              <dd>PRIVATE CANDIDATE</dd>
            </div>
          </dl>
        </section>

        <table className="marks-table">
          <thead>
            <tr>
              <th>SUB CODE</th>
              <th>SUB NAME</th>
              <th>THEORY</th>
              <th>PRAC./IA/Proj</th>
              <th>MARKS</th>
              <th>POSITIONAL GRADE</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.code}>
                <td>{row.code}</td>
                <td>{row.name}</td>
                <td>{row.theory}</td>
                <td>{row.practical}</td>
                <td>{row.marks}</td>
                <td>{row.grade}</td>
              </tr>
            ))}
            <tr className="result-strip">
              <td colSpan={6}>Result : XXXX</td>
            </tr>
          </tbody>
        </table>

        <button
          className="another-result-link"
          type="button"
          onClick={checkAnotherResult}
        >
          Check Another Result
        </button>

        <section className="notes" aria-label="Result abbreviation notes">
          <p className="notes-title">Note: Abbreviations used against Result:</p>
          <p>
            R.L. - Result Later (Your result is under preparation and it will be
            declared soon), N.E. - Not Eligible,
          </p>
          <p>R.W. - Result Withheld, ABST - Absent</p>
          <p>
            COMP — Compartment, UFM - Unfairmeans, XXXX - Improvement, SJD -
            Subjudice, N.R. - Not Registered, R.T - Repeat in Theory, R.P. -
            Repeat in Practical, R.B. - Repeat in both
          </p>
        </section>

        <hr className="double-rule" />

        <p className="result-disclaimer">
          Disclaimer: Neither NIC nor CBSE is responsible for any inadvertent
          error that may have crept in the results being published on NET. The
          results published on net are for Immediate information to the
          examinees. These cannot be treated as original mark sheets. Original
          mark sheets have been issued by the Board separately.
        </p>

        <footer className="result-footer">
          Designed, Developed and Hosted by National Informatics Centre
        </footer>
      </div>
    </main>
  );
}
