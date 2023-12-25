import React from "react";
import "./index.scss";
import PrimaryButton from "../../components/button";
import CardComp from "../../components/card";
import SectionPhoto from "../../assets/images/about.png";
import CardPhoto1 from "../../assets/images/services1.png";
import CardPhoto2 from "../../assets/images/services2.png";
import CardPhoto3 from "../../assets/images/services3 - Copy.png";
import CardPhoto4 from "../../assets/images/services4 - Copy.png";
// import TeamMambers from "../../components/team";
import TeamImage1 from "../../assets/images/team1.png";
import TeamImage2 from "../../assets/images/team2.png";
import TeamImage3 from "../../assets/images/team3.png";

const HomePage = () => {
  const cards = [
    {
      id: 1,
      title: "Strategy Planning",
      description:
        "There are many variations of passages of lorem Ipsum available but the new majority have suffered.",
    },
    {
      id: 2,
      title: "Insurance Service",
      description:
        "There are many variations of passages of lorem Ipsum available but the new majority have suffered.",
    },
    {
      id: 3,
      title: "Audit & Evalution",
      description:
        "There are many variations of passages of lorem Ipsum available but the new majority have suffered.",
    },
  ];
  // const team = [
  // {
  //   id: 1,
  //   name: "Ethan Welch",
  //   job:"UX designer",
  //   // image:"../../assets/images/team1.png"
  // },
  // {
  //   id: 1,
  //   name: "Ethan Welch",
  //   job:"UX designer",
  //   // image:"../../assets/images/team1.png"
  // },
  // {
  //   id: 1,
  //   name: "Ethan Welch",
  //   job:"UX designer",
  //   // image:"../../assets/images/team1.png"
  // },
  // ];

  return (
    <>
      <section id="home">
        <div className="container">
          <div className="home">
            <div className="line-div">
              <div className="line"></div>
              <p className="commit">COMMITTED TO SUCCESS</p>
            </div>
            <h1>We help to grow your business</h1>
            <p className="lorem">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              dolorem.
            </p>
            <PrimaryButton text={"OUR SERVICES"} bgColor={"bgPink"} />
          </div>
        </div>
      </section>

      <section id="services"> 
         <div className="container">
          <div className="services">
            <div className="line-div">
              <div className="line"></div>
              <p className="commit">OUR TOP SERVICES</p>
            </div>
            <h1>Our Best Services</h1>
            <CardComp cards={cards} />
          </div>
        </div>
      </section>

      <section id="photo-section">
        <div className="container">
          <div className="photo-section">
            <div className="left">
              <img src={SectionPhoto} alt="" />
            </div>
            <div className="right">
              <div className="line-div">
                <div className="line"></div>
                <p className="commit">OUR TOP SERVICES</p>
              </div>
              <h1>Our Best Services</h1>
              <h3>
                Mollit anim laborum duis adseu dolor iuyn voluptcate velit ess
                cillum dolore egru lofrre dsu quality mollit anim laborumuis au
                dolor in voluptate velit cillu.
              </h3>
              <p className="molit">
                Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr indd re
                voluptate velit esscillumlore eu quife nrulla parihatur.
                Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg
                dhjinulpadeserunt moll.
              </p>
              <PrimaryButton text={"MORE ABOUT US"} bgColor={"bgPink"} />
            </div>
          </div>
        </div>
      </section>

      <section id="featured">
        <div className="container">
          <div className="featured">
            <div className="title">
              <div className="line-div">
                <div className="line"></div>
                <p className="commit">OUR PORTFOLIOS OF CASES</p>
              </div>
              <h1>Featured Case Study</h1>
            </div>
            <div className="cards">
              <div className="part-one">
                <div className="card">
                  <div className="in-div">
                    <img src={CardPhoto1} alt="" />
                    <div className="content">
                      <div className="line-div">
                        <div className="line"></div>
                        <p className="commit">Strategy planing</p>
                      </div>
                      <p>Within the construction industry as their overdraft</p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="in-div">
                    <img src={CardPhoto3} alt="" />
                    <div className="content">
                      <div className="line-div">
                        <div className="line"></div>
                        <p className="commit">Strategy planing</p>
                      </div>
                      <p>Within the construction industry as their overdraft</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="part-two">
                <div className="card">
                  <div className="in-div">
                    <img src={CardPhoto4} alt="" />
                    <div className="content">
                      <div className="line-div">
                        <div className="line"></div>
                        <p className="commit">Strategy planing</p>
                      </div>
                      <p>Within the construction industry as their overdraft</p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="in-div">
                    <img src={CardPhoto2} alt="" />
                    <div className="content">
                      <div className="line-div">
                        <div className="line"></div>
                        <p className="commit">Strategy planing</p>
                      </div>
                      <p>Within the construction industry as their overdraft</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team-section">
        <div className="container">
          <div className="team-section">
            {/* <TeamMambers team={team}/> */}
            <div className="title">
              <div className="line-div">
                <div className="line"></div>
                <p className="commit">OUR PROFESSIONAL MEMBERS</p>
              </div>
              <h1>Our Team Mambers</h1>
            </div>
            <div className="team">
              <div className="member">
                <img src={TeamImage2} alt="" />
                {/* <div className="member-img">
                  <div className="img"></div>
                </div> */}
                <div className="member-info">
                  <h3>Ethan Welch</h3>
                  <div className="line-div">
                    <div className="line"></div>
                    <p className="commit">UX Designer</p>
                  </div>
                </div>
              </div>
              <div className="member">
                <img src={TeamImage3} alt="" />
                <div className="member-info">
                  <h3>Ethan Welch</h3>
                  <div className="line-div">
                    <div className="line"></div>
                    <p className="commit">UX Designer</p>
                  </div>
                </div>
              </div>
              <div className="member">
                <img src={TeamImage1} alt="" />
                <div className="member-info">
                  <h3>Ethan Welch</h3>
                  <div className="line-div">
                    <div className="line"></div>
                    <p className="commit">UX Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
