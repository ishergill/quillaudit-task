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
          <p>Services &or;</p>
        </Link>
        <Link href={"#"}>
          <p>Pricing </p>
        </Link>
        <Link href={"#"}>
          <p>Our Audits </p>
        </Link>
        <Link href={"#"}>
          <p>Tools &or;</p>
        </Link>
        <Link href={"#"}>
          <p>Resources &or;</p>
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
          <Image src={lefthero} alt=" left hero" height={520} width={555} placeholder="blur" />
          <div className="hero__content__left__abs-img">
            <Image src={leftheroabs} alt=" left hero" height={80} width={180}  placeholder="blur"/>
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
