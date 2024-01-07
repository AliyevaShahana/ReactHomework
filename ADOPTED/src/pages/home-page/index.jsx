import React from "react";
import Image from "../../../public/snimok.png";
import "./index.scss";
import PrimaryBtn from "../../component/button";
import Card from "../../component/card";
import ChildrenCarousel from "../../component/carouselChildren";
import CarouselComp from "../../component/carousel";
const HomePage = () => {
  return (
    <div>
      <section id="carousel"><CarouselComp /></section>
      <section id="step-adopt">
        <div className="container">
          <div className="step-adopt">
            <div className="left">
              <img src={Image} alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                nemo et, esse laudantium consequatur. Eum soluta illum
                architecto dolorum quae suscipit dignissimos! Saepe, amet
                explicabo nemo eligendi totam sint repudiandae.
              </p>
              {/* <button>Adopt a child now</button> */}
              <PrimaryBtn text={"Adopt a child now"} bgColor={"bgRed"} />
            </div>
            <div className="right">
              <h2>Steps to adopt & foster a child</h2>

              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      1. Getting Started
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Aliquid velit, asperiores libero. Beatae vitae nostrum et
                      distinctio saepe autem quisquam cupiditate labore
                      voluptatum, eligendi ipsam atque assumenda odit,
                      perferendis dicta.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      2. Envisioning your family
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Aliquid velit, asperiores libero. Beatae vitae nostrum et
                      distinctio saepe autem quisquam cupiditate labore
                      voluptatum, eligendi ipsam atque assumenda odit,
                      perferendis dicta.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      3. Getting approved
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Aliquid velit, asperiores libero. Beatae vitae nostrum et
                      distinctio saepe autem quisquam cupiditate labore
                      voluptatum, eligendi ipsam atque assumenda odit,
                      perferendis dicta.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseFour"
                    >
                      4. Being matched with a child
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFour"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Aliquid velit, asperiores libero. Beatae vitae nostrum et
                      distinctio saepe autem quisquam cupiditate labore
                      voluptatum, eligendi ipsam atque assumenda odit,
                      perferendis dicta.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFive"
                      aria-expanded="false"
                      aria-controls="flush-collapseFive"
                    >
                      5. Receiving a placement
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFive"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Aliquid velit, asperiores libero. Beatae vitae nostrum et
                      distinctio saepe autem quisquam cupiditate labore
                      voluptatum, eligendi ipsam atque assumenda odit,
                      perferendis dicta.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseSix"
                      aria-expanded="false"
                      aria-controls="flush-collapseSix"
                    >
                      6. Finalizing an adoption
                    </button>
                  </h2>
                  <div
                    id="flush-collapseSix"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Aliquid velit, asperiores libero. Beatae vitae nostrum et
                      distinctio saepe autem quisquam cupiditate labore
                      voluptatum, eligendi ipsam atque assumenda odit,
                      perferendis dicta.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseSeven"
                      aria-expanded="false"
                      aria-controls="flush-collapseSeven"
                    >
                      7. Getting approved
                    </button>
                  </h2>
                  <div
                    id="flush-collapseSeven"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Aliquid velit, asperiores libero. Beatae vitae nostrum et
                      distinctio saepe autem quisquam cupiditate labore
                      voluptatum, eligendi ipsam atque assumenda odit,
                      perferendis dicta.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="children">
        <div className="container">
          <div className="children">
            <div className="title">
              <h2>WAITING CHILDREN</h2>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Commodi unde impedit, <br /> necessitatibus, soluta sit quam
                minima expedita atque corrupti reiciendis
              </h5>
              <PrimaryBtn
                text={"Find More Waiting Children"}
                bgColor={"bgFullRed"}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="chil-photos">
         <ChildrenCarousel />
      </section>

      <section id="featured">
        <div className="container">
          <div className="featured">
            <h2>FEATURED STORIES</h2>
            <div className="photos">
              <div className="photo">
                <div className="img one">
                  <div className="content">
                    <h1>+</h1>
                    <h6>JANUARY 31, 2018</h6>
                    <p>"Being loved has taught me how to love"</p>
                  </div>
                </div>
              </div>
              <div className="photo">
                <div className="img two">
                  <div className="content">
                    <h1>+</h1>
                    <h6>JANUARY 31, 2018</h6>
                    <p>"Becoming a perfect parent out of imperfect"</p>
                  </div>
                </div>
              </div>
              <div className="photo">
                <div className="img three">
                  <div className="content">
                    <h1>+</h1>
                    <h6>JANUARY 31, 2018</h6>
                    <p>"Home sweet home"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="news">
        <div className="container">
          <div className="news">
            <h2>GET NEWS & UPDATES</h2>
            <div className="subscribe">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <PrimaryBtn text={"Subscribe"} bgColor={"bgFullRed"}/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
