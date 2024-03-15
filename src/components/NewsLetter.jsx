import { newsletter } from "@/assets";
import Image from "next/image";
import React from "react";

function NewsLetter() {
  return (
    <div className="NewsLetter">
      <div className="NewsLetter__main">
        <div className="NewsLetter__main__left">
          <h4>NEWSLETTER</h4>
          <h2>
            Security First News <br /> Letter by QuillAudits
          </h2>
          <p>
            Subscribe for the most Exclusive Weekly security based newsletter
            and covering all the recent hacks up to date.
          </p>
        </div>
        <div className="NewsLetter__main__right">
          <Image
            src={newsletter}
            alt="newsletter"
            height={329}
            width={579}
            placeholder="blur"
          />
          <div className="NewsLetter__main__right__input">
            <input placeholder="vitalik@ethereum.org" />
            <button>
              <p>Subscribe</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
