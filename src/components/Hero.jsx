import { lefthero, leftheroabs, logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <header className="hero">
      <nav>
        <Image src={logo} alt="logo" height={42} width={216} />

        <Link href={"#"}>
          <p>
            Services{" "}
            <svg
              width="18"
              height="11"
              viewBox="0 0 18 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.25668 2.28062L1.16184 2.37493L1.25605 2.46986L9.28852 10.5632L9.38354 10.659L9.47856 10.5632L17.5111 2.46986L17.6053 2.37493L17.5105 2.28062L16.2253 1.00272L16.1303 0.908238L16.0359 1.00335L9.38357 7.70603L2.73127 1.00335L2.63687 0.908241L2.54185 1.00272L1.25668 2.28062Z"
                fill="white"
                stroke="white"
                stroke-width="0.26775"
              />
            </svg>
          </p>
        </Link>
        <Link href={"#"}>
          <p>Pricing </p>
        </Link>
        <Link href={"#"}>
          <p>Our Audits </p>
        </Link>
        <Link href={"#"}>
          <p>
            Tools{" "}
            <svg
              width="18"
              height="11"
              viewBox="0 0 18 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.25668 2.28062L1.16184 2.37493L1.25605 2.46986L9.28852 10.5632L9.38354 10.659L9.47856 10.5632L17.5111 2.46986L17.6053 2.37493L17.5105 2.28062L16.2253 1.00272L16.1303 0.908238L16.0359 1.00335L9.38357 7.70603L2.73127 1.00335L2.63687 0.908241L2.54185 1.00272L1.25668 2.28062Z"
                fill="white"
                stroke="white"
                stroke-width="0.26775"
              />
            </svg>{" "}
          </p>
        </Link>
        <Link href={"#"}>
          <p>
            Resources{" "}
            <svg
              width="18"
              height="11"
              viewBox="0 0 18 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.25668 2.28062L1.16184 2.37493L1.25605 2.46986L9.28852 10.5632L9.38354 10.659L9.47856 10.5632L17.5111 2.46986L17.6053 2.37493L17.5105 2.28062L16.2253 1.00272L16.1303 0.908238L16.0359 1.00335L9.38357 7.70603L2.73127 1.00335L2.63687 0.908241L2.54185 1.00272L1.25668 2.28062Z"
                fill="white"
                stroke="white"
                stroke-width="0.26775"
              />
            </svg>
          </p>
        </Link>
        <Link href={"#"}>
          <p>Refer-Earn-Secure </p>
        </Link>
        <button>
          <p>Request An Audit</p>
        </button>
      </nav>
      <div className="hero__content">
        <div className="hero__content__left">
          <Image
            src={lefthero}
            alt=" left hero"
            height={520}
            width={555}
            placeholder="blur"
          />
          <div className="hero__content__left__abs-img">
            <Image
              src={leftheroabs}
              alt=" left hero"
              height={80}
              width={180}
              placeholder="blur"
            />
          </div>
        </div>
        <div className="hero__content__right">
          <h2>
            Securing Trust : Boosting Security and Strengthening Trust at Carpe
            Diem Pension
          </h2>
          <p>
            QuillAudits enhances Carpe Diem Pension by addressing 33
            vulnerabilities on the Pulse blockchain, boosting security and user
            trust in digital pensions.
          </p>
        </div>
      </div>
      <div className="hero__content__bottom">
        <p>QuillAudits &#8594; Resources &#8594;</p>
        <span>Case Studies</span>
      </div>
    </header>
  );
}

export default Hero;
