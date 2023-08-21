import { BiSupport } from "react-icons/bi";
import { BsMicrosoftTeams } from "react-icons/bs";
import { GiProgression } from "react-icons/gi";
import {
  MdEmojiPeople,
  MdIncompleteCircle,
  MdOutlineLocalConvenienceStore,
  MdScheduleSend,
} from "react-icons/md";
import bannerImage from "../../assets/img/banner/banne-slider-1.png";
import footerBg2 from "../../assets/img/footer/footer-bg-2.png";
import aboutMedia from "../../assets/img/home-2/about-media.png";
import expertTeam1 from "../../assets/img/home-2/expert-team-1.png";
import expertTeam2 from "../../assets/img/home-2/expert-team-2.png";
import expertTeam3 from "../../assets/img/home-2/expert-team-3.png";
import whyChoose1 from "../../assets/img/services/why-choose-1.png";
import badgeLineYellow from "../../assets/img/team-details/badge-line-yellow.svg";
import testimonial1 from "../../assets/img/testimonial/testimonial-1.png";
import testimonial2 from "../../assets/img/testimonial/testimonial-2.png";
import testimonial3 from "../../assets/img/testimonial/testimonial-3.png";

import "./Footer.css";
import "./Home.css";
import "./WhyChoose.css";

export default function Home() {
  return (
    <div>
      {/* Header section */}
      <section className="banner-slider__wrapper pt-0 pb-0 overflow-hidden">
        {/* <div className="slider-controls">
          <div className="banner-slider-arrows d-flex flex-column"></div>
        </div> */}

        <div className=" overflow-hidden">
          <div
            className="slider-item"
            style={{
              backgroundImage: `url(${bannerImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "1000px",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="banner__content text-center">
                    <h6
                      className="sub-title color-white mb-15 mb-sm-15 mb-xs-10"
                      data-animation="fadeInUp"
                      data-delay="0.5s"
                    >
                      <span>30 Years</span> Of Successful Job Consulting
                    </h6>
                    <h1
                      className="title color-white mb-sm-30 mb-xs-20 mb-40"
                      data-animation="fadeInUp"
                      data-delay="1s"
                    >
                      A big Opportutnity for your Job Consulting
                    </h1>

                    <div className="theme-btn__wrapper d-flex justify-content-center">
                      <a
                        href="/consultant"
                        className="theme-btn btn-sm"
                        data-animation="fadeInUp"
                        data-delay="1.3s"
                        style={{ zIndex: "1" }}
                      >
                        Consultant{" "}
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      {/* About Us section */}
      <section className="about-us pb-xs-80 pt-xs-80 pt-sm-100 pb-sm-100 pt-md-100 pb-md-100 pt-120 pb-120 overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="about-us__content mb-lg-60 mb-md-50 mb-sm-40 mb-xs-30">
                <span className="sub-title fw-500 color-yellow text-uppercase mb-sm-10 mb-xs-5 mb-15 d-block">
                  <img
                    src={badgeLineYellow}
                    className="img-fluid mr-10"
                    alt=""
                  />
                  About Us
                </span>
                <br />
                <h2 className="title color-secondary mb-20 mb-sm-15 mb-xs-10">
                  Elevating Your Overseas Career Dreams, One Consultation at a
                  Time!
                </h2>
                <br />

                <div className="description font-la mb-50 mb-sm-40 mb-xs-30">
                  <p>
                    Welcome to The Jobs Consultation Centre's new and improved
                    web-based platform – your gateway to expert guidance and
                    seamless assistance on your journey to overseas employment
                    opportunities. Our mission is to empower job seekers with
                    the knowledge and support they need to navigate the
                    complexities of finding the perfect job abroad. With a team
                    of dedicated part-time job consultants, each specializing in
                    specific countries and job types, we ensure that your
                    aspirations are met with tailored advice and comprehensive
                    solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="about-us__media d-flex align-content-center justify-content-center align-items-center">
                <div className="media">
                  <img src={aboutMedia} className="img-fluid" alt="" />
                </div>

                <div
                  className="expert-team expert-team-one text-center"
                  style={{
                    backgroundImage: `url(${expertTeam1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "300px",
                  }}
                >
                  <div className="number color-white mb-10 mb-xs-5 fw-600">
                    <span>150</span>+
                  </div>
                  <h6 className="title font-la color-white">
                    Expert Consulter
                  </h6>
                </div>

                <div
                  className="expert-team expert-team-two text-center"
                  style={{
                    backgroundImage: `url(${expertTeam2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "300px",
                  }}
                >
                  <div className="number color-white mb-10 mb-xs-5 fw-600">
                    <span>150</span>k
                  </div>
                  <h6 className="title font-la color-white">
                    Clients Satisfaction Survey In Consulting Organization
                  </h6>
                </div>

                <div
                  className="expert-team expert-team-three text-center"
                  style={{
                    backgroundImage: `url(${expertTeam3})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "300px",
                    zIndex: "0",
                  }}
                >
                  <div className="number color-white mb-10 mb-xs-5 fw-600">
                    <span>30</span>+
                  </div>
                  <h6 className="title font-la color-white">
                    Years Experiance Our Company
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br /> <br /> <br /> <br />
      {/* Why Choose us section */}
      <section className="why-choose pb-xs-80 pt-xs-80 pt-sm-100 pb-sm-100 pt-md-100 pb-md-100 pt-120 pb-120 overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="why-choose__media-wrapper d-flex flex-column">
                <div className="gallery-bar bg-yellow"></div>

                <div className="why-choose__media">
                  <img src={whyChoose1} alt="" className="img-fluid" />
                </div>

                <div className="global-country text-center bg-yellow">
                  <div className="number mb-5 color-white">
                    <span className="counter">120</span>+
                  </div>
                  <h6 className="title color-white font-la">
                    Global Country in <br />
                    Our Company
                  </h6>
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="why-choose__content mt-lg-60 mt-md-50 mt-sm-40 mt-xs-35">
                <div className="why-choose__text mb-40 mb-md-35 mb-sm-30 mb-xs-30">
                  <span className="sub-title d-block fw-500 color-yellow text-uppercase mb-sm-10 mb-xs-5 mb-md-15 mb-lg-20 mb-25">
                    <img
                      src={badgeLineYellow}
                      className="img-fluid mr-10"
                      alt=""
                    />
                    Why choose us
                  </span>
                  <br />
                  <h2 className="title color-pd_black">
                    Empowering Dreams, Guiding Careers.
                  </h2>

                  <br />
                  <div className="description font-la mt-20 mt-sm-15 mt-xs-10">
                    <p>
                      At The Jobs Consultation Centre, we offer expert guidance
                      tailored to your aspirations. Our professionals specialize
                      in specific job markets, ensuring precise advice. Enjoy
                      flexible scheduling and a modern, tech-integrated
                      approach. From start to success, we provide unwavering
                      support. Choose us for empowered dreams and guided
                      careers.
                    </p>
                    <br />
                  </div>
                </div>

                <div className="why-choose__item-wrapper d-grid justify-content-between">
                  <div className="why-choose__item">
                    <div className="icon mb-15 mb-md-10 mb-xs-5 color-yellow">
                      <i className="icon-consultation"></i>
                    </div>

                    <h5 className="title color-secondary fw-500 mb-10">
                      Expertise
                    </h5>

                    <div className="description font-la">
                      <p>
                        Our professionals offer specialized insights into
                        specific countries and job markets.
                      </p>
                    </div>
                  </div>

                  <div className="why-choose__item">
                    <div className="icon mb-15 mb-md-10 mb-xs-5 color-yellow">
                      <i className="icon-lawyer"></i>
                    </div>

                    <h5 className="title color-secondary fw-500 mb-10">
                      Flexibility
                    </h5>

                    <div className="description font-la">
                      <p>Choose appointment times that suit your schedule.</p>
                    </div>
                  </div>

                  <div className="why-choose__item">
                    <div className="icon mb-15 mb-md-10 mb-xs-5 color-yellow">
                      <i className="icon-financial"></i>
                    </div>

                    <h5 className="title color-secondary fw-500 mb-10">
                      Modern Approach
                    </h5>

                    <div className="description font-la">
                      <p>We leverage technology for a smoother experience.</p>
                    </div>
                  </div>

                  <div className="why-choose__item">
                    <div className="icon mb-15 mb-md-10 mb-xs-5 color-yellow">
                      <i className="icon-management"></i>
                    </div>

                    <h5 className="title color-secondary fw-500 mb-10">
                      Comprehensive Support
                    </h5>

                    <div className="description font-la">
                      <p>LoreWe guide you from start to finish.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br /> <br /> <br /> <br />
      {/* Counter section */}
      <div className="counter-area pb-xs-80 pb-sm-100 pb-md-100 pb-120 overflow-hidden">
        <div className="container">
          <div className="row mb-minus-30" style={{ placeContent: "center" }}>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="counter-area__item counter-area__item-two d-flex align-items-center">
                <div className="icon color-yellow">
                  <GiProgression
                    style={{ marginLeft: "15px", marginRight: "15px" }}
                    size={30}
                  />
                </div>

                <div className="text text-center">
                  <div className="number fw-600 color-yellow">
                    <span className="counter">5620</span>+
                  </div>
                  <div className="description font-la">Successful Project</div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="counter-area__item counter-area__item-two d-flex align-items-center">
                <div className="icon color-yellow">
                  <BiSupport
                    style={{ marginLeft: "15px", marginRight: "15px" }}
                    size={30}
                  />
                </div>

                <div className="text text-center">
                  <div className="number fw-600 color-yellow">
                    <span className="counter">150</span>+
                  </div>
                  <div className="description font-la">Expert Consulter</div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="counter-area__item counter-area__item-two d-flex align-items-center">
                <div className="icon color-yellow">
                  <BsMicrosoftTeams
                    style={{ marginLeft: "15px", marginRight: "15px" }}
                    size={30}
                  />
                </div>

                <div className="text text-center">
                  <div className="number fw-600 color-yellow">
                    <span className="counter">3225</span>+
                  </div>
                  <div className="description font-la">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /> <br /> <br /> <br />
      {/* Service work section */}
      <section className="work-process pb-xs-80 pt-xs-80 pt-sm-100 pb-sm-100 pt-md-100 pb-md-100 pt-120 pb-100 overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="pricing__content mb-60 mb-sm-40 mb-xs-30 text-center">
                <span className="sub-title d-block fw-500 color-yellow text-uppercase mb-sm-10 mb-xs-5 mb-md-15 mb-lg-20 mb-25">
                  <img
                    src={badgeLineYellow}
                    className="img-fluid mr-10"
                    alt=""
                  />
                  Our Work Process
                </span>
                <br />
                <h2 className="title color-d_black">How Our Services Work</h2>
                <br />
              </div>
            </div>
          </div>

          <div className="row mb-minus-30">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="work-process__item mb-70 text-center">
                <div className="icon mx-auto">
                  <MdScheduleSend
                    style={{ marginLeft: "15px", marginRight: "15px" }}
                    size={30}
                  />
                </div>

                <div className="text">
                  <h6 className="title color-secondary mb-15 mb-sm-10 mb-xs-5">
                    Schedule Your Consultation
                  </h6>

                  <div className="description font-la">
                    <p>
                      Choose a convenient time from our flexible scheduling
                      options. Book your appointment online, ensuring it aligns
                      perfectly with your busy schedule.
                    </p>
                  </div>
                </div>

                <button className="theme-btn btn-black text-uppercase">
                  Step - 1
                </button>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="work-process__item mb-70 text-center">
                <div className="icon mx-auto">
                  <MdEmojiPeople
                    style={{ marginLeft: "15px", marginRight: "15px" }}
                    size={30}
                  />
                </div>

                <div className="text">
                  <h6 className="title color-secondary mb-15 mb-sm-10 mb-xs-5">
                    Expert Consultation
                  </h6>

                  <div className="description font-la">
                    <p>
                      Meet with our specialized job consultants who possess deep
                      insights into your desired country's job market. Receive
                      tailored advice that matches your unique aspirations and
                      goals.
                    </p>
                  </div>
                </div>

                <button className="theme-btn btn-black text-uppercase">
                  Step - 2
                </button>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="work-process__item mb-70 text-center">
                <div className="icon mx-auto">
                  <MdOutlineLocalConvenienceStore
                    style={{ marginLeft: "15px", marginRight: "15px" }}
                    size={30}
                  />
                </div>

                <div className="text">
                  <h6 className="title color-secondary mb-15 mb-sm-10 mb-xs-5">
                    Modern Convenience
                  </h6>

                  <div className="description font-la">
                    <p>
                      Embrace our seamless tech-integrated approach. Leverage
                      our web-based platform to access information, resources,
                      and follow-up support, all at your fingertips.
                    </p>
                  </div>
                </div>

                <button className="theme-btn btn-black text-uppercase">
                  Step - 3
                </button>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="work-process__item mb-70 text-center">
                <div className="icon mx-auto">
                  <MdIncompleteCircle
                    style={{ marginLeft: "15px", marginRight: "15px" }}
                    size={30}
                  />
                </div>

                <div className="text">
                  <h6 className="title color-secondary mb-15 mb-sm-10 mb-xs-5">
                    Ongoing Support
                  </h6>

                  <div className="description font-la">
                    <p>
                      Our commitment doesn't stop after your consultation. From
                      interview preparation to post-appointment queries, we're
                      here to support you at every stage of your journey.
                    </p>
                  </div>
                </div>

                <button className="theme-btn btn-black text-uppercase">
                  Step - 4
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br /> <br /> <br /> <br />
      {/* Testimonial section */}
      <section className="testimonial bg-dark_yellow pb-xs-80 pt-xs-80 pt-sm-100 pb-sm-100 pt-md-100 pb-md-100 pt-120 pb-120 overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-9">
              <div className="employee-friendly__content">
                <span className="sub-title fw-500 color-yellow text-uppercase mb-sm-10 mb-xs-5 mb-15 d-block">
                  <img
                    src={badgeLineYellow}
                    className="img-fluid mr-10"
                    alt=""
                  />
                  testimonials
                </span>
                <br />
                <h2 className="title color-secondary">Check whatclient say</h2>
                <br />
              </div>
            </div>

            <div className="col-sm-3">
              <div className="slider-controls mt-xs-15">
                <div className="testimonial-slider-arrows d-flex align-content-center justify-content-sm-end"></div>
              </div>
            </div>
          </div>

          {/* <div className="row">
            <div className="col-12">
              <div className="testimonial-slider-home-2 mt-65 mt-md-50 mt-sm-40 mt-xs-30">
                <div className="slider-item">
                  <div className="testimonial__item testimonial-item-two">
                    <div className="testimonial__item-header d-flex justify-content-between align-items-center mb-35 mb-sm-25 mb-xs-20">
                      <div className="left d-flex align-items-center">
                        <div className="media overflow-hidden">
                          <img
                            src="assets/img/testimonial/testimonial-4.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>

                        <div className="meta">
                          <h6 className="name fw-500 text-uppercase color-d_black">
                            Elizabeth Linda
                          </h6>
                          <span className="position font-la fw-500 color-d_black">
                            Company Manager
                          </span>
                        </div>
                      </div>

                      <div className="right">
                        <i className="fal fa-quote-right"></i>
                      </div>
                    </div>

                    <div className="description font-la mb-40 mb-md-35 mb-sm-30 mb-xs-25">
                      <p>
                        I can't express how grateful I am for The Jobs
                        Consultation Centre's support. Their consultants'
                        insights into job markets helped me make informed
                        decisions. The convenience of online scheduling and
                        their tech-forward approach demonstrated their
                        commitment to providing top-notch service. Their
                        personalized support gave me the confidence I needed.
                      </p>
                    </div>

                    <div className="testimonial__item-footer d-flex justify-content-between">
                      <div className="socail-link">
                        <ul>
                          <li>
                            <a href="#">
                              <img
                                src="assets/img/testimonial/asana.png"
                                alt=""
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div
                className="card h-100"
                style={{ border: "solid .5px #198754 !important" }}
              >
                <img
                  src={testimonial1}
                  className="card-img-top"
                  style={{
                    width: "100px",
                    marginLeft: "15px",
                    marginTop: "20px",
                    borderRadius: "100px",
                    border: "solid 2px #198754",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <h6 className="name fw-500 text-uppercase color-d_black">
                      Jacob Anderson
                    </h6>
                    <span
                      className="position font-la fw-500 color-d_black"
                      style={{
                        color: "#198754",
                        fontSize: "15px",
                      }}
                    >
                      Company Manager
                    </span>
                  </h5>
                  <p className="card-text">
                    <i>
                      "I can't express how grateful I am for The Jobs
                      Consultation Centre's support. Their consultants' insights
                      into job markets helped me make informed decisions. The
                      convenience of online scheduling and their tech-forward
                      approach demonstrated their commitment to providing
                      top-notch service. Their personalized support gave me the
                      confidence I needed."
                    </i>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card h-100"
                style={{ border: "solid .5px #198754 !important" }}
              >
                <img
                  src={testimonial2}
                  className="card-img-top"
                  style={{
                    width: "100px",
                    marginLeft: "15px",
                    marginTop: "20px",
                    borderRadius: "100px",
                    border: "solid 2px #198754",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <h6 className="name fw-500 text-uppercase color-d_black">
                      Jessica M.
                    </h6>
                    <span
                      className="position font-la fw-500 color-d_black"
                      style={{
                        color: "#198754",
                        fontSize: "15px",
                      }}
                    >
                      Successful Job Seeker
                    </span>
                  </h5>
                  <p className="card-text">
                    <i>
                      "The Jobs Consultation Centre made my overseas job search
                      a breeze. Their experts provided invaluable advice
                      tailored to my chosen country's job market. The flexible
                      scheduling and tech-integrated approach made the entire
                      process so convenient. With their ongoing support, I
                      landed my dream job abroad. Highly recommended!"
                    </i>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card h-100"
                style={{ border: "solid .5px #198754 !important" }}
              >
                <img
                  src={testimonial3}
                  className="card-img-top"
                  style={{
                    width: "100px",
                    marginLeft: "15px",
                    marginTop: "20px",
                    borderRadius: "100px",
                    border: "solid 2px #198754",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <h6 className="name fw-500 text-uppercase color-d_black">
                      Michael Johnson
                    </h6>
                    <span
                      className="position font-la fw-500 color-d_black"
                      style={{
                        color: "#198754",
                        fontSize: "15px",
                      }}
                    >
                      International Professional
                    </span>
                  </h5>
                  <p className="card-text">
                    <i>
                      "The team at The Jobs Consultation Centre are true
                      professionals. Their expertise in various countries' job
                      markets is impressive. The convenience of scheduling
                      appointments online and their tech-savvy approach added to
                      the positive experience. I felt supported at every step,
                      and their guidance played a significant role in my
                      success."
                    </i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br /> <br /> <br /> <br />
      {/* Footer section */}
      <footer
        className="footer-1 footer-2 overflow-hidden"
        style={{
          backgroundImage: `url(${footerBg2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "1000px",
        }}
      >
        <div className="footer-top__cta mb-80 mb-lg-60 mb-sm-50 mb-xs-40">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="footer-top__cta-content-wrapper pb-45">
                  <div className="footer-top__cta-content text-center mx-auto">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <h2 className="title color-white mb-20 mb-sm-10 mb-xs-5">
                      Feel Free To Contatct Us
                    </h2>
                    <div className="description color-white font-la mb-40 mb-md-30 mb-sm-25 mb-xs-20 fw-500 mx-auto">
                      <p>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                      </p>
                    </div>
                    <br />

                    <a
                      href="contact.html"
                      className="theme-btn btn-sm btn-yellow"
                      style={{ marginBottom: "30px" }}
                    >
                      Contact Us <i className="fab fa-telegram-plane"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className="footer-top mb-xs-25 mb-sm-30 mb-md-35 mb-lg-40 mb-50 overflow-hidden">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="single-footer-wid site_info_box">
                  <a href="index.html" className="d-block mb-20">
                    <img src="assets/img/logo/footer-logo-2.png" alt="" />
                  </a>

                  <div className="description font-la color-white">
                    <p>
                      <i>"Empowering Dreams, Guiding Careers."</i> <br />
                      At The Jobs Consultation Centre, we live by these words,
                      fueling our commitment to helping you reach your
                      international career goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />

        <div className="footer-bottom overflow-hidden">
          <div className="container">
            <div className="footer-bottom-content d-flex flex-column flex-md-row justify-content-between align-items-center">
              <div className="coppyright text-center text-md-start">
                <br />
                <br />
                <br />
                <br />
                &copy; 2022 <a href="/home">The Jobs</a> | All Rights Reserved
              </div>

              <div className="footer-bottom-list last_no_bullet">
                <br />
                <br />
                <br />
                <ul>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
