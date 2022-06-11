/*import logo from './logo.svg';*/
import '../static/css/style.css';
import team_img from "../static/img/team/team-1.jpg";

//const exec = require('child_process').exec;

// exec('ls', (e, stdout, stderr) => {
//     if (e instanceof Error) {
//         console.log('Failed', e);
//         throw e;
//     } 
//     console.log('stdout', stdout);
//     console.log('stdout', stderr);
// });


function Home() {
  return (
    <>
    {/* ======= Hero Section ======= */}
      <section id="hero" className="d-flex flex-column justify-content-center align-items-center ">
        <div className="container text-center text-md-left" data-aos="fade-up">
          <h1>Welcome to <span>Communicate Tool</span></h1>
          <h2>Content Required</h2>
          <a href="#about" className="btn-get-started scrollto">Get Started</a>
        </div>
      </section>
    {/* End Hero */}
    <main id="main">
    {/* ======= Context Section ======= */}
    <section id="what-we-do" className="what-we-do section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Context</h2>
          <p></p>
        </div>
        <div className="row icon-boxes">
          <div className="col-md-12">
            <i className="bx bx-receipt"></i>
            <p className="text-justify">The aim is to develop a <b>Language Communicator Tool</b>. This tool is proposed to be designed to take the semantic representation of discourse as input and return natural language discourse as output. This has two major components: </p>
            <ol type="A">
              <li>An authoring tool that guides the author for expressing thoughts in an unambiguous and explicit way</li>
              <li>An aggregate of language generators that use the unambiguous text given by the author for multiple target language generation with minimal loss of information.</li>
            </ol>         
            <p className="text-justify">
              The input for the Language Communicator is Universal Semantic Representation (USR) which is designed based on Paninian Grammar. The uniqueness of USR is that they are not bound to syntax of any language. Thus they are universal and unambiguous in nature. Once any text is represented through USR, that representation will be used by the generators for an effective and faithful multiple language generation. 
            </p>
            <p className="text-justify">
              The input for the Language Communicator is Universal Semantic Representation (USR) which is designed based on Paninian Grammar. The uniqueness of USR is that they are not bound to syntax of any language. Thus they are universal and unambiguous in nature. Once any text is represented through USR, that representation will be used by the generators for an effective and faithful multiple language generation. 
            </p>
            <ul>
              <li>Allow the writer to correct the analysis</li>
              <li>Provide the writer possible options for making corrections</li>
              <li>Learn from the writer’s correction and feedback</li>
              <li>Rectify errors in run-time</li>
            </ul> 
          </div>
        </div>
        <div className="row icon-boxes">
          <div className="col-md-12">
            <i className="bx bx-receipt"></i>
            <h4>Communicator Tool Flow:</h4>
            <div className="col-lg-6">
              <img src="./static/img/communicator-flow.png" className="img-fluid text-center" alt=""/>
            </div>
            <br/>
          </div>
        </div>
        <div className="row icon-boxes">
          <div className="col-md-12">
            <h4>Multi-Step Action:</h4>
            <div className="col-lg-12">
              <ol type="1">
                <li>Input source text</li>
                <li>Run a Paninian parser to produce an analysis of the text called an Universal Semantic Representation (USR). The USR explicitly marks all syntactico-semantic relations that include.</li>
                <ol type="a">
                  <li>Karaka relations</li>
                  <li>Relations across verbs</li>
                  <li>Noun and its modifier relations (as in adjective-noun pair, compound nouns)</li>
                  <li>Other discourse related semantic relations such as co-referencing, focus, presupposition and so on.</li>
                </ol> 
              </ol>         
            </div>
            <br/>
          </div>
        </div>
      </div>
    </section>
    {/* End What We Do Section */}
    {/* ======= Fetures Section ======= */}
    <section id="features" className="services section-bg text-justify bg-secondary">
      <div className="container">
        <div className="section-title">
          <h2>Fetures</h2>
          <p>Content Required</p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="icon-box">
              <i className="bi bi-briefcase"></i>
              <h4><a href="/">Authoring Interface</a></h4>
              <p>Pictorial representation of your with try now button.</p>
              <a className="nav-link scrollto" href="/"><h3><span className="badge rounded-pill bg-warning text-dark">Try Now</span></h3></a>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-lg-0">
            <div className="icon-box">
              <i className="bi bi-card-checklist"></i>
              <h4><a href="/">Multi-lingual Generator</a></h4>
              <p>Generate the targate language</p>
              <a className="nav-link scrollto" href="/"><h3><span className="badge rounded-pill bg-warning text-dark">Try Now</span></h3></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Fetures Section */}
    {/* ======= Resarch Section ======= */}
    <section id="what-we-do" className="what-we-do section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Research</h2>
          <p></p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="icon-box">
              <div className="icon"><i className="bx bxl-dribbble"></i></div>
              <h4><a href="/">Purpose</a></h4>
              <p>Our project is a web application that allows users to add and import any text and generate its USR. Every sentence is divided into word chunks which are editable. Inter-sentence and Intra-sentence connections are also shown for the benefit of the user.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-file"></i></div>
              <h4><a href="/">Mission</a></h4>
              <p>Our project is a web application that allows users to add and import any text and generate its USR. Every sentence is divided into word chunks which are editable. Inter-sentence and Intra-sentence connections are also shown for the benefit of the user.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-tachometer"></i></div>
              <h4><a href="/">Vission</a></h4>
              <p>Our project is a web application that allows users to add and import any text and generate its USR. Every sentence is divided into word chunks which are editable. Inter-sentence and Intra-sentence connections are also shown for the benefit of the user.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End What We Do Section */}

    {/* ======= People Section ======= */}
    <section id="people" className="team">
      <div className="container">
        <div className="section-title">
          <h2>People</h2>
          <p>The USR project is steered and guided by prominent Scientists, Researchers, Undergraduate and Graduate students. The team is highly diverse and is responsible for this project through its collaborative effort.</p>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <img src={team_img} alt=""/>
              <h4>Dr. Soma Paul</h4>
              <span>Assistant Professor</span>
              <p>
                Content Required
              </p>
              <div className="social">
                <a href="/"><i className="bi bi-twitter"></i></a>
                <a href="/"><i className="bi bi-facebook"></i></a>
                <a href="/"><i className="bi bi-instagram"></i></a>
                <a href="/"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <img src={team_img} alt=""/>
              <h4>Dr. Kirti Garg</h4>
              <span>Sr. Software Enginner</span>
              <p>
                Content Required
              </p>
              <div className="social">
                <a href="/"><i className="bi bi-twitter"></i></a>
                <a href="/"><i className="bi bi-facebook"></i></a>
                <a href="/"><i className="bi bi-instagram"></i></a>
                <a href="/"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <img src={team_img} alt=""/>
              <h4>Dr. Sukhada</h4>
              <span>Assistant Professor</span>
              <p>
                Content Required
              </p>
              <div className="social">
                <a href="/"><i className="bi bi-twitter"></i></a>
                <a href="/"><i className="bi bi-facebook"></i></a>
                <a href="/"><i className="bi bi-instagram"></i></a>
                <a href="/"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <img src={team_img} alt=""/>
              <h4>Vilal Ali</h4>
              <span>Software Enginner</span>
              <p>
                Content Required
              </p>
              <div className="social">
                <a href="/"><i className="bi bi-twitter"></i></a>
                <a href="/"><i className="bi bi-facebook"></i></a>
                <a href="/"><i className="bi bi-instagram"></i></a>
                <a href="/"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <img src={team_img} alt=""/>
              <h4>Manash Mishra</h4>
              <span>Software Enginner</span>
              <p>
                Content Required
              </p>
              <div className="social">
                <a href="/"><i className="bi bi-twitter"></i></a>
                <a href="/"><i className="bi bi-facebook"></i></a>
                <a href="/"><i className="bi bi-instagram"></i></a>
                <a href="/"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <img src={team_img} alt=""/>
              <h4>Poorna Chandra</h4>
              <span>Graphics Designer</span>
              <p>
                Content Required
              </p>
              <div className="social">
                <a href="/"><i className="bi bi-twitter"></i></a>
                <a href="/"><i className="bi bi-facebook"></i></a>
                <a href="/"><i className="bi bi-instagram"></i></a>
                <a href="/"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <img src={team_img} alt=""/>
              <h4>Saarang Raj Gopal</h4>
              <span>Software Enginner</span>
              <p>
                Content Required
              </p>
              <div className="social">
                <a href="/"><i className="bi bi-twitter"></i></a>
                <a href="/"><i className="bi bi-facebook"></i></a>
                <a href="/"><i className="bi bi-instagram"></i></a>
                <a href="/"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <img src={team_img} alt=""/>
              <h4>Sufiya Kamal </h4>
              <span>Uknown</span>
              <p>
                Content Required
              </p>
              <div className="social">
                <a href="/"><i className="bi bi-twitter"></i></a>
                <a href="/"><i className="bi bi-facebook"></i></a>
                <a href="/"><i className="bi bi-instagram"></i></a>
                <a href="/"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    {/* End Team Section */}
  </main>
  {/* End #main */}
  </>
  );
}

export default Home;
