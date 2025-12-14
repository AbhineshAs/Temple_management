import { useEffect } from "react";
import temple from "../assets/temple2.jpg";
import r1 from "../assets/Renjith.jpg";
import m1 from "../assets/murali.jpg";
import s1 from "../assets/sasi.jpg";
import s2 from "../assets/satheesh.jpg";
import a1 from "../assets/anil.jpg";
import r2 from "../assets/rajan.jpg";
import g1 from "../assets/gopan.jpg";
import a2 from "../assets/arun.jpg";
import p1 from "../assets/pssnthosh.jpg";
import m2 from "../assets/manoj.jpg";
import d1 from "../assets/divakaran.jpg";
import n1 from "../assets/No_image.jpg";


export default function About() {
  // Scroll-trigger animations
  useEffect(() => {
    const items = document.querySelectorAll("[data-ani]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("show");
        });
      },
      { threshold: 0.2 }
    );
    items.forEach((i) => obs.observe(i));
  }, []);

  // Read More toggle
  const handleReadMore = () => {
    const sec = document.querySelector(".extra-content");
    const btn = document.querySelector(".readmore-btn");

    sec.classList.toggle("show-extra");

    if (sec.classList.contains("show-extra")) {
      btn.textContent = "Read Less";
    } else {
      btn.textContent = "Read More";
    }
  };

  return (
    <>
      {/* 🔥 Mandala + Diyas + Gold Dust */}
      <div className="about-background">
        <div className="about-bg-mandala"></div>
        <div className="about-bg-dust"></div>
        <div className="diya"></div>
        <div className="diya"></div>
        <div className="diya"></div>
        <div className="diya"></div>
        <div className="diya"></div>
      </div>

      <div className="about-page">
        <h1 className="section-title" data-ani="zoom">
          About കാവിൽ ഭഗവതി
        </h1>

        {/* HISTORY */}
        <div className="gold-card" data-ani="left">
          <h2 className="section-title">ക്ഷേത്ര ചരിത്രം</h2>
          <p>
            അതിപുരാതനമായ ഈഴവ കുടുംബമായ വെള്ളംകൊള്ളിത്തല തറവാടിന്റെ കുടുംബ ക്ഷേത്രമാണ് പാങ്ങോട്  കാവിൽ ശ്രീ ഭഗവതി ക്ഷേത്രം തിരുവനതപുരം  പാങ്ങോടിനും ഇടപ്പഴിഞ്ഞിക്കും ഇടയിൽ സ്‌ഥിതിചെയ്യുന്ന ഒരു പ്രശസ്തമായ തീർത്ഥാടന കേന്ദ്രമാണ്  . കുടുംബാംഗങ്ങളുടെയും  പൊതുജനങ്ങളുടെയും സഹകരണവും നിദാന്ത പരിശ്രമവും കൊണ്ട് കുടുംബ ക്ഷേത്രം നാൾക്കുനാൾ അഭിവൃദ്ധിപ്പെട്ട് പ്രശസ്തി ആർജ്ജിക്കുകയും ദേവിയുടെ അനുഗ്രഹത്താൽ എല്ലാ ഭക്ത ജനങ്ങൾക്കും അനുദിനം അഭിവൃദ്ധിയും , കുടുംബ ഐശ്വര്യവും സാഹോദര്യ ഒത്തൊരുമയും ഉണ്ടായികൊണ്ടിരിക്കുകയാണ് .ദുർഗ്ഗാ ദേവിയും ഭദ്രാ ദേവിയും പ്രധാന  ദേവിമാർ .  ഗണപതി , നാഗരാജ , മഹാദേവൻ ,പരദേവതയായ ഇലങ്കം തമ്പുരാൻ ,യെക്ഷിയമ്മ  മാടൻ തമ്പുരാൻ , മറുത , യോഗീശ്വരൻ ,ബ്രഹ്മരക്ഷസ് തുടങ്ങിയ ഉപ ദേവന്മാരുമുണ്ട് 

ക്ഷേത്ര പരിസരത്തു  കാവിൻ നടുവിൽ സ്‌ഥിതി ചെയ്യുന്ന  വലിയ ശിവ ലിംഗമാണ്  പ്രധാന ആകർഷണം ,ഈ ശിവലിംഗത്തിൽ ഭക്തർക്ക് നേരിട്ട് അഭിഷേകം ചെയ്യാൻ സാധിക്കും , ഇതു  കേരളത്തിലെ ക്ഷേത്രങ്ങളിൽ ഒരു അപൂർവ്വമായ ഒരു സവിശേഷതയാണ് .കേരളത്തിലെ മറ്റു ക്ഷേത്രങ്ങളുമായി താരതമ്യം ചെയ്യുമ്പോൾ ഏറ്റവും ഉയരം കൂടിയ ഗോപുരങ്ങളിൽ ഒന്ന്  കാവിൽ ഭഗവതി ക്ഷേത്രത്തിലുണ്ട് .
എല്ലാ വർഷവും മെൻസ് മാസത്തിൽ ( മാർച്ച്   ഏപ്രിൽ  ) ആണ് വാർഷിക ഉത്സവം നടത്തുന്നത് . അവസാന ദിവസം നടത്തുന്ന "കൊടുതി " കാരണം ഇത് : കൊട മഹോത്സവം " എന്നും അറിയപ്പെടുന്നു.
          </p>
        </div>

        {/* AUTO-SLIDER */}
        <div className="about-slider" data-ani="zoom">
          <div className="slider-track">
            <img src={temple} className="slide-img" />
          </div>
        </div>

        {/* FESTIVAL TIMELINE */}
        <h2 className="section-title" data-ani="left">
          Festival Timeline
        </h2>
        <div className="festival-timeline">
          <div className="f-item" data-ani="right">
            <h4>January – Makara Sankranti</h4>
            <p>Special poojas & traditional offerings.</p>
          </div>

          <div className="f-item" data-ani="left">
            <h4>March – Maha Shivaratri</h4>
            <p>Night-long bhajans & Abhishekam.</p>
          </div>

          <div className="f-item" data-ani="right">
            <h4>August – Krishna Janmashtami</h4>
            <p>Kids events, rituals & prasadam.</p>
          </div>

          <div className="f-item" data-ani="left">
            <h4>October – Navaratri</h4>
            <p>9 days of Devi pooja, cultural events.</p>
          </div>
        </div>

        {/* TRUST MEMBERS */}
        <h2 className="section-title" data-ani="zoom">
          Trust Members
        </h2>

        <div className="about-gallery" data-ani="zoom">
          <div className="gallery-item">
            <img src={s1} className="gallery-small-img" />
            <h2 className="gallery-caption">Ak. Sasi Kumar</h2>
            <h6 className="gallery-caption">President</h6>
          </div>

          <div className="gallery-item">
            <img src={s2} className="gallery-small-img" />
            <h2 className="gallery-caption">S. Satheesh Kumar</h2>
            <h6 className="gallery-caption">Secretary</h6>
          </div>

          <div className="gallery-item">
            <img src={r1} className="gallery-small-img" />
            <h2 className="gallery-caption">S.Renjith</h2>
            <h6 className="gallery-caption">Treasurer</h6>
          </div>

          <div className="gallery-item">
            <img src={r2} className="gallery-small-img" />
            <h2 className="gallery-caption">A. Rajan</h2>
            <h6 className="gallery-caption">Vice President</h6>
          </div>
        </div>

        <div className="about-gallery" data-ani="zoom">
          <div className="gallery-item">
            <img src={a2} className="gallery-small-img" />
            <h2 className="gallery-caption">Arun Surendran</h2>
            <h6 className="gallery-caption">Vice President</h6>
          </div>

          <div className="gallery-item">
            <img src={g1} className="gallery-small-img" />
            <h2 className="gallery-caption">AK. Gopakumar</h2>
            <h6 className="gallery-caption">Joint Secretary</h6>
          </div>

          <div className="gallery-item">
            <img src={a1} className="gallery-small-img" />
            <h2 className="gallery-caption">A.D. Anilkumar</h2>
            <h6 className="gallery-caption">Vice President</h6>
          </div>

          <div className="gallery-item">
            <img src={d1} className="gallery-small-img" />
            <h2 className="gallery-caption">P. Divakaran</h2>
            <h6 className="gallery-caption">Vice President</h6>
          </div>
        </div>
        <div className="about-gallery" data-ani="zoom">
          <div className="gallery-item">
            <img src={n1} className="gallery-small-img" />
            <h2 className="gallery-caption">Santhosh Sivanandan</h2>
            <h6 className="gallery-caption">Join Secratary</h6>
          </div>
          <div className="gallery-item">
            <img src={m2} className="gallery-small-img" />
            <h2 className="gallery-caption">Manoj Balachandran</h2>
            <h6 className="gallery-caption">Join Secratary</h6>
          </div>
          <div className="gallery-item">
            <img src={p1} className="gallery-small-img" />
            <h2 className="gallery-caption">P.S Santhosh</h2>
            <h6 className="gallery-caption">Join Secratary</h6>
          </div>
          <div className="gallery-item">
            <img src={m1} className="gallery-small-img" />
            <h2 className="gallery-caption">G.Muraleedharan</h2>
            <h6 className="gallery-caption">Join Secratary</h6>
          </div>
          <div className="gallery-item">
            <img src={n1} className="gallery-small-img" />
            <h2 className="gallery-caption">Sushama Ramesh</h2>
            <h6 className="gallery-caption">Join Secratary</h6>
          </div>
        </div>

        {/* READ MORE SECTION */}
        <div className="readmore-section" data-ani="zoom">
          <button className="readmore-btn" onClick={handleReadMore}>
            Read More
          </button>

          {/* HIDDEN CONTENT */}
          <div className="extra-content">
            <h2 className="section-title">Advisory Committee</h2>

            <ul className="committee-list">
              <li>Sree. N. Raveendran</li>
              <li>Sree. N. Vijayakumar</li>
              <li>Sree. V. Prem Kumar</li>
              <li>Sree. V. Udayakumar</li>
              <li>Sree. Shaji Sivanandan</li>
              <li>Sree. Rajagopal</li>
            </ul>

            <h2 className="section-title">Women’s Committee</h2>

            <ul className="committee-list">
              <li>Smt. Chandrika C — President</li>
              <li>Smt. Sunitha Mohan — Secretary</li>
              <li>Smt. Jayakumari C</li>
              <li>Smt. Usha Rajagopal</li>
              <li>Smt. Ambikadevi</li>
              <li>Kumari Devika B</li>
              <li>Smt. Suvina Deepu</li>
              <li>Smt. Revathy J</li>
              <li>Smt. Chandrika Madhavan</li>
              <li>Smt. Jayalekshmi</li>
              <li>Smt. Anitha Surendran</li>
              <li>Smt. Rajeswary Arun</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
