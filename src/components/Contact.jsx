import React from "react";

function Contact() {
  return (
    <section id="contact" className="space-y-6">
      <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
      <p className="text-slate-300 text-sm sm:text-base max-w-xl">
        Want to collaborate, have a project in mind, or looking for a junior
        front-end developer? Reach out — I&apos;d love to hear from you.
      </p>

      <div className="space-y-3 text-sm">
        <p>
          <span className="font-medium text-slate-100">Email:</span>{" "}
          <a
            href="mailto:salamiolamide30@gmail.com"
            className="text-indigo-300 hover:text-indigo-200 underline underline-offset-4"
          >
            salamiolamide30@gmail.com
          </a>
        </p>
        <p>
          <span className="font-medium text-slate-100">LinkedIn:</span>{" "}
          <a
            href="https://www.linkedin.com/in/olamidesalami/"
            className="text-indigo-300 hover:text-indigo-200 underline underline-offset-4"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/olamidesalami
          </a>
        </p>
        <p>
          <span className="font-medium text-slate-100">GitHub:</span>{" "}
          <a
            href="https://github.com/lammysalami"
            className="text-indigo-300 hover:text-indigo-200 underline underline-offset-4"
            target="_blank"
            rel="noreferrer"
          >
            github.com/lammysalami
          </a>
        </p>

         <p>
          <span className="font-medium text-slate-100">Twitter:</span>{" "}
          <a
            href="https://x.com/__olamidesalami"
            className="text-indigo-300 hover:text-indigo-200 underline underline-offset-4"
            target="_blank"
            rel="noreferrer"
          >
           x.com/__olamidesalami
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
