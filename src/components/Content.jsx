import { contentImg1, contentImg2 } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReviewCard from "./ReviewCard";

function Content() {
  return (
    <div className="content">
      <div className="content__left">
        <p>
          Carpe Diem Pension, on Pulse blockchain, redefines retirement with a
          self-managed, inclusive, globally portable fund. Unique for its token
          burn mechanism, it ensures a sustainable 4.32% inflation payout. With
          $143.11k and 41.06% of CDP already burned, it serves 35 users
          globally.
        </p>
        <h2>CarpeDiem Pension&aps;s Flexible, Blockchain-Enabled Future</h2>
        <p>
          CarpeDiem Pension redefines retirement planning with a unique approach
          that deviates from traditional pension funds. With no minimum age for
          retirement, it offers flexibility and freedom, ensuring all genders
          receive equal treatment. CarpeDiem Pension ensures blockchain
          transparency, anonymity, and global accessibility, safeguarding
          pensions during international relocation. Easily transfer pensions to
          loved ones; share wallet access. Re-deposit payouts for increased
          future benefits. Importantly, CarpeDiem Pension prioritizes deposit
          security by avoiding utilizing client funds for internal investments.
          To become a part of this forward-thinking pension scheme, one simply
          needs to install and configure a blockchain wallet.
        </p>
        <Image src={contentImg1} alt="contentimg-1" height={373} width={758} placeholder="blur" />
        <h2>
          CarpeDiem Pension&apos;s Challenges: Enhancing Security Against
          Reentrancy, Front-Running, and Infinite Minting
        </h2>
        <p>
          CarpeDiem Pension confronts critical security challenges, including
          the risks of reentrancy and front-running exploits.Malicious actors
          may exploit contract vulnerabilities, withdrawing excess funds or
          manipulating transaction timing for unfair advantages. System faces
          infinite minting threats, risking economic stability with endless
          creation of CDP tokens or pension shares.  Addressing these challenges
          is paramount to safeguarding the integrity and security of CarpeDiem
          Pension.
        </p>
        <Image src={contentImg2} alt="contentimg-2" height={350} width={630} placeholder="blur" />
        <h2>CarpeDiem Pension&apos;s Journey Through our Audit Process</h2>
        <h3>1. Information Gathering:</h3>
        <ul>
          <li>
            Collected and reviewed all relevant documentation, including
            whitepaper, technical specifications, and design documents.
          </li>
          <li>
            Obtained a clear understanding of the CDP platform&apos;s
            functionality, economic model, and intended user interactions.
          </li>
          <li>
            Discussed client concerns and specific areas of focus for the audit.
          </li>
        </ul>
        <h3>2.Manual Code Review:</h3>
        <ul>
          <li>
            Conducted a line-by-line review of the smart contract code, focusing
            on:
          </li>
          <ul>
            <li>
              <span>Vulnerability identification:</span> Searching for known
              vulnerabilities like reentrancy, front-running, integer overflows,
              and access control issues etc.
            </li>
            <li>
              <span>Logic flaws:</span> Identifying inconsistencies or
              unintended behaviors in the code logic.
            </li>
            <li>
              <span>Tokenomics correctness:</span>
              Verifying if the code accurately implements the intended economic
              model and token distribution mechanisms.
            </li>
            <li>
              <span>Solidity best practices:</span>
              Compliance with secure coding standards and adherence to
              established guidelines.
            </li>
          </ul>
        </ul>
        <h3>3. Functional Testing:</h3>
        <ul>
          <li>
            Developed and executed a comprehensive set of test cases covering
            various user interactions and edge cases.
          </li>
          <li>
            Simulated different deposit, claim, and referral scenarios to assess
            functionality and uncover potential exploits.
          </li>
          <li>
            Focused on scenarios identified during the manual review and client
            concerns (e.g., infinite minting, reward calculation errors).
          </li>
          <li>
            Focused on scenarios identified during the manual review and client
            concerns (e.g., infinite minting, reward calculation errors).
          </li>
          <li>
            Leveraged tools like Hardhat and Ganache to deploy and test the
            smart contract locally.
          </li>
        </ul>
        <h3>4. Automated Testing:</h3>
        <ul>
          <li>
            Employed static analysis tools like Slither to identify
            vulnerabilities through automated code scanning.
          </li>
          <li>
            Utilized symbolic execution tools like Mythril to explore various
            code execution paths and uncover potential attack vectors.
          </li>
          <li>
            Integrated unit tests are written by the CDP team to verify specific
            contract functions and their behaviour.
          </li>
        </ul>
        <h3>5.Reporting & Remediation:</h3>
        <ul>
          <li>
            Prepared a detailed report outlining all identified vulnerabilities,
            categorized by severity and potential impact.
          </li>
          <li>
            Provided clear recommendations for fixing each vulnerability,
            including code snippets and best practices.
          </li>
          <li>
            Collaborated with the CDP team to prioritize and address the
            identified issues.
          </li>
          <li>
            Conducted additional verification testing after vulnerability fixes
            were implemented.
          </li>
        </ul>
        <h2>QuillAudits&apos; Strategic Approach to CDP Security Audits</h2>
        <p>
          We prioritize threat modeling based on platform-specific risks.
          Security-first, we identify and mitigate vulnerabilities beyond
          functionality testing. Using white-box and black-box tests, we conduct
          thorough vulnerability assessments. Maintaining transparency, we
          communicate openly with the CDP team. Emphasizing clarity, we present
          actionable insights for efficient issue resolution.
        </p>
        <h2>Comprehensive Audit Discoveries and Remediation Strategies</h2>
        <p>
          Throughout the audit process, we unearthed a total of 33 issues,
          spanning from minor concerns to critical vulnerabilities. Among these,
          some of the critical issues identified were: Here&apos;s how we
          remediated them :
        </p>
        <h4>1. Unauthorized Claim/Compound:</h4>
        <span>
          a. Users could claim/compound a substantial amount without making a
          deposit or waiting for the stipulated time
        </span>
        <h4>2. Precision Loss in mintCDP():</h4>
        <span>
          a. Precision loss and unscaled values were identified while
          calculating rewardPerShare in the mintCDP() function.
        </span>
        <h4>3. Multiplication Accuracy:</h4>
        <span>
          a. Multiplication operations were prone to providing incorrect answers
          due to unscaled values, posing a potential risk to accurate
          calculations.
        </span>
        <h4>4. Incorrect Share Allocation:</h4>
        <span>
          a. The protocol was allocating shares for all days, even when there
          were no corresponding deposits, leading to inefficient use of
          resources.
        </span>
        <h4>5. Logic Error in Referral Handling:</h4>
        <span>
          a. A logic error resulted in users always having their user.referral
          set to address(0), which could be exploited to trick the referral
          system
        </span>
        <h4>6. Referral Exploitation:</h4>
        <span>
          a. Users could exploit the referral system to extract more CDP from
          the protocol, undermining its integrity.
        </span>
        <h2>Remediation & Impact:</h2>
        <p>
          All identified vulnerabilities were addressed by the CDP team,
          significantly enhancing the smart contract&apos;s security posture.
          Key improvements include
        </p>
        <ul>
          <li>Implementation of reentrancy protection mechanisms.</li>
          <li>
            Accurate handling of decimal values using established libraries or
            best practices.
          </li>
          <li>Revised calculations with proper scaling factors</li>
          <li>
            Fixing logic errors to ensure deposits and waiting periods are
            enforced.
          </li>
          <li>Addressing referral system vulnerabilities to prevent abuse.</li>
        </ul>
        <p>
          <strong>Embed this tweet :-</strong>{" "}
          <Link
            target="_blank"
            href={"https://x.com/CarpeDiemCDP/status/1742906560794296402?s=20"}
          >
            {" "}
            https://x.com/CarpeDiemCDP/status/1742906560794296402?s=20
          </Link>
        </p>
        <p>
          CDP smart contract audit revealed and fixed critical vulnerabilities,
          safeguarding funds and ensuring platform stability. This underscores
          the need for proactive security in blockchain projects, crucial for
          financial asset management. Through audits and issue resolution, CDP
          reinforces platform security, bolstering user trust.
        </p>
        <ReviewCard/>
      </div>
      <div className="content__right">
        <div className="content__right__card">
          <div className="content__right__card__item">
            <h4>Headquarters</h4>
            <p>Switzerland</p>
          </div>

          <div className="content__right__card__item">
            <h4>Chain</h4>
            <p>Pulse Blockchain</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
