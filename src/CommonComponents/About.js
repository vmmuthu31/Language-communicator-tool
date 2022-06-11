import '../static/css/style.css';

export default function About() {
  return (
    <>
    {/* ======= About Section ======= */}
    <section id="about" className="about top-margin">
      <div className="container">
          <div className="row">
            <div className="col-lg-12 pt-4 pt-lg-0">
              <h3>About</h3>
              <div className="row icon-boxes">
                <div className="col-md-12">
                  <i className="bx bx-receipt"></i>
                  <h4>About the Communicate Project</h4>
                  <p className="text-justify">The aim is to develop a <b>Language Communicator Tool</b>. This tool is proposed to be designed to take the semantic representation of discourse as input and return natural language discourse as output. This has two major components:</p>
                  <ol type="A">
                    <li>An authoring tool that guides the author for expressing thoughts in an unambiguous and explicit way;</li>
                    <li>An aggregate of language generators that use the unambiguous text given by the author for multiple target language generation with minimal loss of information.</li>
                  </ol>  
                </div>
                
              </div>
              <div className="row icon-boxes">
                <div className="col-md-12">
                  <i className="bx bx-receipt"></i>
                  <h4>About the Language Communicator Project</h4>
                  <p className="text-justify">Universal Semantic Representation....................</p>
                  <p className="text-justify">Universal Semantic Representation....................</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
    {/* End About Section */}
    </>
  )
}
