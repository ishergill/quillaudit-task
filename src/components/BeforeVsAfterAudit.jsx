import React from "react";

function BeforeVsAfterAudit() {
  return (
    <div className="BeforeVsAfterAudit">
      <div className="BeforeVsAfterAudit__vs">
        <div className="BeforeVsAfterAudit__vs__left">
          <h2>Before QuillAudits</h2>
          <p>
            Exploits like reentrancy and front-running can let attackers
            withdraw extra funds and manipulate transaction timing for unfair
            gains
          </p>
          <p>
            Vulnerabilities could allow users to mint CDP tokens or pension
            shares indefinitely, disrupting the system&aps;s economic balance.
          </p>
        </div>
        <div className="BeforeVsAfterAudit__vs__divider"></div>
        <div className="BeforeVsAfterAudit__vs__right">
          <h2>After QuillAudits</h2>
          <p>Implementation of reentrancy protection mechanisms.</p>
          <p>
            Ensure precision in decimal handling with standard libraries,
            recalculate accurately, fix logic errors, and secure referral
            systems against exploitation.
          </p>
        </div>
      </div>
      <div className="BeforeVsAfterAudit__bottom">
        <h2>See how QuillAudits is a trusted partner in 1000+ Audit stories</h2>
        <button>
          <p>Request an Audit</p>
        </button>
      </div>
    </div>
  );
}

export default BeforeVsAfterAudit;
