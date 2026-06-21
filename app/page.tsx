"use client";

import { FormEvent, KeyboardEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  CBSE_SESSION_KEY,
  VALID_ADMIT_CARD_ID,
  VALID_ROLL_NUMBER,
  VALID_SCHOOL_NUMBER
} from "./session";

const INVALID_MESSAGE =
  "This is not the website you are looking for. Invalid credentials.";

export default function SearchPage() {
  const router = useRouter();
  const [rollNumber, setRollNumber] = useState("");
  const [schoolNumber, setSchoolNumber] = useState("");
  const [admitCardId, setAdmitCardId] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    sessionStorage.removeItem(CBSE_SESSION_KEY);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const hasValidCredentials =
      rollNumber.trim() === VALID_ROLL_NUMBER &&
      schoolNumber.trim() === VALID_SCHOOL_NUMBER &&
      admitCardId.trim().toUpperCase() === VALID_ADMIT_CARD_ID;

    if (!hasValidCredentials) {
      sessionStorage.removeItem(CBSE_SESSION_KEY);
      setError(INVALID_MESSAGE);
      return;
    }

    sessionStorage.setItem(CBSE_SESSION_KEY, "true");
    router.push("/result");
  }

  function handleReset() {
    setRollNumber("");
    setSchoolNumber("");
    setAdmitCardId("");
    setError("");
    sessionStorage.removeItem(CBSE_SESSION_KEY);
  }

  function handleInputKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key !== "Enter") {
      return;
    }

    event.preventDefault();
    event.currentTarget.form?.requestSubmit();
  }

  return (
    <main className="search-page">
      <header className="search-title-bar">
        <h1>CBSE 12th Result 2026</h1>
      </header>

      <section className="search-content" aria-labelledby="search-heading">
        <h2 id="search-heading">
          Senior School Certificate Examination (Class XII) Results 2026
        </h2>

        <form className="credential-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="roll-number">Enter your Roll Number</label>
            <input
              id="roll-number"
              name="rollNumber"
              type="text"
              value={rollNumber}
              onChange={(event) => setRollNumber(event.target.value)}
              onKeyDown={handleInputKeyDown}
              autoComplete="off"
            />
          </div>

          <div className="form-row">
            <label htmlFor="school-number">Enter School No.</label>
            <input
              id="school-number"
              name="schoolNumber"
              type="text"
              value={schoolNumber}
              onChange={(event) => setSchoolNumber(event.target.value)}
              onKeyDown={handleInputKeyDown}
              autoComplete="off"
            />
          </div>

          <div className="form-row">
            <label htmlFor="admit-card-id">Enter Admit Card ID.</label>
            <input
              id="admit-card-id"
              name="admitCardId"
              type="text"
              value={admitCardId}
              onChange={(event) => setAdmitCardId(event.target.value)}
              onKeyDown={handleInputKeyDown}
              autoComplete="off"
            />
          </div>

          <p className="admit-card-hint">(as given on your admit card)</p>

          <div className="button-row">
            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </div>

          {error ? <p className="search-error">{error}</p> : null}
        </form>
      </section>

      <footer className="search-footer">
        <p className="search-disclaimer">
          Any discrepancies may have crept in the results being published on
          NET. The results published on net are for Immediate information to the
          examinees.
        </p>
        <p className="nic-footer">
          Designed, Developed and Hosted by National Informatics Centre
        </p>
      </footer>
    </main>
  );
}
