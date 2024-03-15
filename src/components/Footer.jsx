import {
  defi,
  discord,
  govt,
  linkedin,
  loc,
  logo,
  mail,
  medium,
  redit,
  telegram,
  xcorp,
  youtube,
} from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  const audits = [
    "Ethereum Audit",
    "Polygon Audit",
    "BSC Audit",
    "Solana Audit",
    "NEAR Audit",
    "Algorand Audit",
    "Tezos Audit",
    "Hyperledger Fabric Audit",
    "L1 Audit",
    "Polkadot Audit",
    "Wallet Audit",
    "ZkSync Audit",
    "Starknet Audit",
  ];

  const tools = [
    "QuillAI",
    "QuillCheck",
    "QuillShield",
    "QuillAcademy",
    "QuillMonitor",
    "Web3Suggest",
    "Explore All Tools",
  ];

  const services = [
    "Red Teaming",
    "dApp Pentesting",
    "DeFi Diligence",
    "NFT Due Diligence",
    "Rug Pull Due Diligence",
    "Security Consultation",
    "Blockchain Forensics",
    "KYC (Know Your Customer)",
  ];

  const links = [
    "Quick Links",
    "Pricing",
    "Audit Process",
    "Our Audits",
    "Testimonials",
    "Security Synopsis",
    "Blog",
  ];

  const programsbtns = [
    "Refer-Earn-Secure",
    "WAGSI Grants",
    "Ambassador Program",
    "Partnership Program",
  ];
  return (
    <div className="Footer">
      <div className="Footer__main">
        <div className="Footer__main__logo">
          <Image
            src={logo}
            alt="logo"
            height={57}
            width={293}
            placeholder="blur"
          />
          <p>Making Web3 a safer place</p>
        </div>
        <div className="Footer__main__content">
          <div className="Footer__main__content__left">
            <div className="Footer__main__content__left__item1">
              <div className="Footer__main__content__left__item1__about">
                <h3>More About Quill</h3>
                <div className="Footer__main__content__left__item1__about__link">
                  <Link href="/">About Us</Link>
                  <Link href="/">FAQs</Link>
                  <Link href="/">Blockchains We Audit</Link>
                </div>
              </div>
              <div className="Footer__main__content__left__item1__contact">
                <h3>Contact Us:</h3>
                <div className="Footer__main__content__left__item1__about__link">
                  <Link href="/">
                    <Image src={mail} alt="mail" height={16} width={23} />
                    audits@quillhash.com
                  </Link>
                  <Link href="/">
                    <Image src={telegram} alt="mail" height={16} width={23} />
                    t.me/quillaudits
                  </Link>
                </div>
              </div>
              <div className="Footer__main__content__left__item1__loc">
                <div className="Footer__main__content__left__item1__loc__title">
                  <Image src={loc} alt="mail" height={16} width={23} />
                  <h4>Our Location:</h4>
                </div>
                <p>
                  Office 104/105 Level 1,
                  <br />
                  Emaar Square, Building 4
                  <br />
                  Sheikh Mohammed Bin Rashid
                  <br />
                  Boulevard Downtown Dubai,
                  <br />
                  United Arab Emirates
                  <br />
                  P.O box: 416654
                </p>
              </div>
            </div>
            <div className="Footer__main__content__left__item2">
              <h3>Audit Services</h3>
              {audits.map((i, ind) => (
                <Link href={"/"} key={ind}>
                  {i}
                </Link>
              ))}
            </div>
          </div>
          <div className="Footer__main__content__right">
            <div className="Footer__main__content__right__links">
              <div className="Footer__main__content__right__item">
                <h3>Quill Ecosystem</h3>
                {tools.map((i, ind) => (
                  <Link href={"/"} key={ind}>
                    {i}
                  </Link>
                ))}
              </div>
              <div className="Footer__main__content__right__item">
                <h3>Other Services</h3>
                {services.map((i, ind) => (
                  <Link href={"/"} key={ind}>
                    {i}
                  </Link>
                ))}
              </div>
              <div className="Footer__main__content__right__item">
                <h3>Quick Links</h3>
                {links.map((i, ind) => (
                  <Link href={"/"} key={ind}>
                    {i}
                  </Link>
                ))}
                <Link href={"/"}>
                  Careers <p>Hiring</p>
                </Link>
              </div>
            </div>
            <div className="Footer__main__content__right__bottom">
              <h3>Our Programmes</h3>
              <div className="Footer__main__content__right__bottom__btns">
                {programsbtns.map((i, ind) => (
                  <button key={ind}>{i}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="Footer__main__center">
          <div className="Footer__main__center__left">
            <Image
              src={defi}
              alt="defi"
              height={60}
              width={212}
              placeholder="blur"
            />
            <Image
              src={govt}
              alt="govt"
              height={60}
              width={194}
              placeholder="blur"
            />
          </div>
          <div className="Footer__main__center__right">
            <Image src={xcorp} height={23} width={23} alt="x" />
            <Image src={linkedin} height={23} width={23} alt="x" />
            <Image src={telegram} height={23} width={23} alt="x" />
            <Image src={redit} height={23} width={23} alt="x" />
            <Image src={medium} height={23} width={23} alt="x" />
            <Image src={discord} height={23} width={23} alt="x" />
            <Image src={youtube} height={23} width={23} alt="x" />
          </div>
        </div>
        <div className="Footer__main__bottom">
          <p>All Rights Reserved. © Copyright 2023. QuillAudits - LLC</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
