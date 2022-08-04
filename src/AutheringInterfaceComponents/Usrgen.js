/*import logo from './logo.svg';*/
import "../static/css/style.css";
import "../static/css/bootstrap-icons.css";
import React from "react";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";

// import {useState} from 'react';

// const data = {
//         "sentence": "सूर्यास्त के बाद आकाश को देखना कितना अच्छा लगता है।",
//         "Concept": ["sUryAswa_1", "AkASa_1", "xeKa_1-nA_cAhawA_hE_1", "kiwanA_1","acCA+laga_1-wA_hE_1"],
//         "index": ["1", "2", "3", "4", "5" ],
//         "SemCateOfNouns": ["per", "-","-", "-", "-"],
//         "GNP": ["-", "[m sg a]", "[m sg -]","-","-" ],
//         "DependencyRelations": ["0:k7t","3:k2","-","6:mod","-"],
//         "Discourse": ["-", "-","-", "-", "-"],
//         "Speakers": ["-", "-","-", "-", "-"],
//         "Scope": ["-", "-","-", "-", "-"],
//         "SentenceType": "affirmative"
// }

export default function Usrgen() {
  const [toggle, setToggle] = useState(true);

  // Defining the state:
  const [data, setData] = useState({
    data: [],
    Concept: [],
    index: [],
    SemCateOfNouns: [],
    GNP: [],
    DependencyRelations: [],
    Discourse: [],
    Speakers: [],
    Scope: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  // const [titleRow, setTitleRow ]= useState({TitleConcept:'Cocnept'})
  const [err, setErr] = useState("");
  //STORY INPUT

  // API Calling Part:
  const submit = async () => {
    setIsLoading(true);
    try {
      //const story='रात के  समय चमकते हुए अनगिनत तारे सूर्य के समान ही हैं ।'

      const response = await fetch("http://127.0.0.1:5000/" + storyinput, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log("result is: ", JSON.stringify(result, null));
      setData(result);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Sample Input Sentence:
  // राम चक्की का ख़रीदने के लिए बाज़ार गया ।
  // उसने बाज़ार में चक्की का आटा ढूँढा पर उसे नही मिला ।
  // क्योंकि बाज़ार की सभी दुकाने बन्द थीं ।
  const [storyinput, setStoryInput] = useState({
    storyinput: [],
    sample1: [],
    sample2: [],
    sample3: [],
  });

  toggle ? (
    <input
      onDoubleClick={() => {
        setToggle(false);
      }}
    >
      {storyinput}
    </input>
  ) : (
    <input type="text" value={storyinput.status} />
  );

  const sample1Click = (event) => {
    event.preventDefault();
    // 👇️ Sample1
    setStoryInput("राम चक्की का ख़रीदने के लिए बाज़ार गया ।");
  };

  const sample2Click = (event) => {
    event.preventDefault();
    // 👇️ Sample2
    setStoryInput("उसे बाज़ार में चक्की का आटा नही मिला ।");
  };

  const sample3Click = (event) => {
    event.preventDefault();
    // 👇️ Sample3
    setStoryInput("क्योंकि बाज़ार की सभी दुकाने बन्द थीं ।");
  };
  const clear = (event) => {
    event.preventDefault();
    // 👇️ Sample3
    setStoryInput("");
  };

  return (
    <>
      <div className="container top-margin">
        <div className="row">
          <div className="mb-3 col-4">
            <input
              className="form-control"
              type="file"
              id="formFile"
              accept="txt"
            />
          </div>
          <div className="col-4"></div>
          <div className="col-4">
            <div className="input-group">
              <span className="input-group-text">Choose USR Language</span>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option defaultValue="hin">Hindi</option>
                <option defaultValue="eng">English</option>
                <option defaultValue="tel">Telugu</option>
                <option defaultValue="tel">Tamil</option>
              </select>
            </div>
          </div>
          <div className="mb-3">
            <textarea
              value={storyinput}
              onChange={(e) => {
                setStoryInput(e.target.value);
              }}
              className="form-control "
              id="exampleFormControlTextarea1"
              placeholder="Input Sentence here"
              rows="3"
            ></textarea>
            <div className="col-5">
              <span>
                <button
                  onClick={sample1Click}
                  type="button"
                  className="btn btn-success mx-3 m-3"
                >
                  Sample1
                </button>
              </span>
              <span>
                <button
                  onClick={sample2Click}
                  type="button"
                  className="btn btn-success mx-3"
                >
                  Sample2
                </button>
              </span>
              <span>
                <button
                  onClick={sample3Click}
                  type="button"
                  className="btn btn-success mx-3"
                >
                  Sample3
                </button>
              </span>
              <span>
                <button
                  onClick={clear}
                  type="button"
                  className="btn btn-danger mx-3 "
                >
                  reset
                </button>
              </span>
            </div>
          </div>

          <div className="col-4"></div>
          <div className="col-4 d-grid">
            {err && <h2>{err}</h2>}
            <button
              type="button"
              className="btn btn-primary p-2 mb-4 mx-4"
              onClick={submit}
            >
              Generate USR
            </button>
          </div>

          {isLoading && (
            <span class="spinner-border text-success" role="status"></span>
          )}

          {/* Start The USER First Output */}

          <div className="accordion my-2" id="accordionExample">
            <div className="card ">
              <div className="card-body bg-success">Generated USR</div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header " id="headingOne">
                <button
                  className="accordion-button accrdian "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                >
                  <div className="center">{data.sentence} </div>
                  <span className="m-2">
                    <FiEdit />
                  </span>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <table className="table">
                    <tbody className="">
                      <tr>
                        <th>
                          <div className="td1">Concept</div>
                        </th>

                        {data.Concept.map((item, i) => {
                          return (
                            <>
                              <text>
                                <td>
                                  <div key={i} className="mx-3 td2">
                                    <input
                                      type="text"
                                      onChange={(event) => {
                                        setData(item);
                                      }}
                                      onKeyDown={(event) => {
                                        if (
                                          event.key === "Enter" ||
                                          event.key === "Escape"
                                        ) {
                                          setToggle(true);
                                          event.preventDefault();
                                          event.stopPropagation();
                                        }
                                      }}
                                      value={item}
                                    >
                                      {item ? item : "-"}
                                    </input>
                                  </div>
                                </td>
                              </text>
                            </>
                          );
                        })}

                        {/* <td className='td1'  >
                        <div className="">
                          <button type="button" className="btn btn-success p-2 td1 border "><i className="bi bi-pencil"></i></button>
                          <button type="button" className="btn btn-warning p-2 td1 border "><i className="bi bi-arrow-repeat"></i></button>
                        </div>
                      </td> */}
                      </tr>
                      <tr>
                        <th>
                          <div className="td1">Index</div>
                        </th>
                        {data.index.map((item, i) => {
                          return (
                            <td>
                              <div className="mx-3 td2" key={i}>
                                {item ? item : "-"}
                              </div>
                            </td>
                          );
                        })}
                        {/* <td className='td1'  >
                        <div className="">
                          <button type="button" className="btn btn-success p-2 td1 border "><i className="bi bi-pencil"></i></button>
                          <button type="button" className="btn btn-warning p-2 td1 border "><i className="bi bi-arrow-repeat"></i></button>
                        </div>
                      </td> */}
                      </tr>
                      <tr>
                        <th>
                          <div className="td1">Sem. Cat.</div>
                        </th>
                        {data.SemCateOfNouns.map((item, i) => {
                          return (
                            <td>
                              <div className="mx-3 td2" key={i}>
                                {item ? item : "-"}
                              </div>
                            </td>
                          );
                        })}
                        {/* <td className='td1'  >
                        <div className="">
                          <button type="button" className="btn btn-success p-2 td1 border "><i className="bi bi-pencil"></i></button>
                          <button type="button" className="btn btn-warning p-2 td1 border "><i className="bi bi-arrow-repeat"></i></button>
                        </div>
                      </td> */}
                      </tr>
                      <tr>
                        <th>
                          <div className="td1">G-N-P</div>
                        </th>
                        {data.GNP.map((item, i) => {
                          return (
                            <td>
                              <div className="mx-3 td2" key={i}>
                                {item ? item : "-"}
                              </div>
                            </td>
                          );
                        })}
                        {/* <td className='td1'  >
                        <div className="">
                          <button type="button" className="btn btn-success p-2 td1 border "><i className="bi bi-pencil"></i></button>
                          <button type="button" className="btn btn-warning p-2 td1 border "><i className="bi bi-arrow-repeat"></i></button>
                        </div>
                      </td> */}
                      </tr>
                      <tr>
                        <th>
                          <div className="td1">Dep. Rel</div>
                        </th>
                        {data.DependencyRelations.map((item, i) => {
                          return (
                            <td>
                              <div className="mx-3 td2" key={i}>
                                {item ? item : "-"}
                              </div>
                            </td>
                          );
                        })}
                        {/* <td className='td1'  >
                        <div className="">
                          <button type="button" className="btn btn-success p-2 td1 border "><i className="bi bi-pencil"></i></button>
                          <button type="button" className="btn btn-warning p-2 td1 border "><i className="bi bi-arrow-repeat"></i></button>
                        </div>
                      </td> */}
                      </tr>
                      <tr>
                        <th>
                          <div className="td1">Discourse</div>
                        </th>
                        {data.Discourse.map((item, i) => {
                          return (
                            <td>
                              <div className="mx-3 td2" key={i}>
                                {item ? item : "-"}
                              </div>
                            </td>
                          );
                        })}
                        {/* <td className='td1'  >
                        <div className="">
                          <button type="button" className="btn btn-success p-2 td1 border "><i className="bi bi-pencil"></i></button>
                          <button type="button" className="btn btn-warning p-2 td1 border "><i className="bi bi-arrow-repeat"></i></button>
                        </div>
                      </td> */}
                      </tr>
                      <tr>
                        <th>
                          <div className="td1">Speaker’s View</div>
                        </th>
                        {data.Speakers.map((item, i) => {
                          return (
                            <td>
                              <div className="mx-3 td2" key={i}>
                                {item ? item : "-"}
                              </div>
                            </td>
                          );
                        })}
                        {/* <td className='td1'  >
                        <div className="">
                          <button type="button" className="btn btn-success p-2 td1 border "><i className="bi bi-pencil"></i></button>
                          <button type="button" className="btn btn-warning p-2 td1 border "><i className="bi bi-arrow-repeat"></i></button>
                        </div>
                      </td> */}
                      </tr>
                      <tr>
                        <th>
                          <div className="td1">Scope</div>
                        </th>
                        {data.Scope.map((item, i) => {
                          return (
                            <td>
                              <div className="mx-3 td2" key={i}>
                                {item ? item : "-"}
                              </div>
                            </td>
                          );
                        })}
                        {/* <td className='td1'  >
                        <div className="">
                          <button type="button" className="btn btn-success p-2 td1 border "><i className="bi bi-pencil"></i></button>
                          <button type="button" className="btn btn-warning p-2 td1 border "><i className="bi bi-arrow-repeat"></i></button>
                        </div>
                      </td> */}
                      </tr>
                      <tr>
                        <th>
                          <div className="td1">S. Type</div>
                        </th>
                        <td>
                          <div className="mx-3 td2">{data.SentenceType}</div>
                        </td>
                        {/* <td className='td1'  >
                        <div className="">
                          <button type="button" className="btn btn-success p-2 td1 border "><i className="bi bi-pencil"></i></button>
                          <button type="button" className="btn btn-warning p-2 td1 border "><i className="bi bi-arrow-repeat"></i></button>
                        </div>
                      </td> */}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button accrdian"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="true"
                >
                  <div className="center">{data.sentence}</div>
                  <span className="m-2">
                    <FiEdit />
                  </span>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <table className="table">
                    <tbody className="">
                      <tr>
                        <th>
                          <div className="td1">Concept</div>
                        </th>
                        {data.Concept.map((item, i) => {
                          return (
                            <td>
                              <div className="mx-3 td2" key={i}>
                                {item ? item : "-"}
                              </div>
                            </td>
                          );
                        })}
                        {/* <td className='td1'  >
                        <div className="">
                          <button type="button" className="btn btn-success p-2 td1 border "><i className="bi bi-pencil"></i></button>
                          <button type="button" className="btn btn-warning p-2 td1 border "><i className="bi bi-arrow-repeat"></i></button>
                        </div>
                      </td> */}
                      </tr>
                      <tr>
                        <th>
                          <div className="td1">Index</div>
                        </th>
                        {data.index.map((item, i) => {
                          return (
                            <td>
                              <div className="mx-3 td2" key={i}>
                                {item ? item : "-"}
                              </div>
                            </td>
                          );
                        })}
                        {/* <td className='td1'  >
                        <div className="">
                          <button type="button" className="btn btn-success p-2 td1 border "><i className="bi bi-pencil"></i></button>
                          <button type="button" className="btn btn-warning p-2 td1 border "><i className="bi bi-arrow-repeat"></i></button>
                        </div>
                      </td> */}
                      </tr>
                      <tr>
                        <th>
                          <div className="td1">Sem. Cat.</div>
                        </th>
                        {data.SemCateOfNouns.map((item, i) => {
                          return (
                            <td>
                              <div className="mx-3 td2" key={i}>
                                {item ? item : "-"}
                              </div>
                            </td>
                          );
                        })}
                        {/* <td className='td1'  >
                        <div className="">
                          <button type="button" className="btn btn-success p-2 td1 border "><i className="bi bi-pencil"></i></button>
                          <button type="button" className="btn btn-warning p-2 td1 border "><i className="bi bi-arrow-repeat"></i></button>
                        </div>
                      </td> */}
                      </tr>
                      <tr>
                        <th>
                          <div className="td1">G-N-P</div>
                        </th>
                        {data.GNP.map((item, i) => {
                          return (
                            <td>
                              <div className="mx-3 td2" key={i}>
                                {item ? item : "-"}
                              </div>
                            </td>
                          );
                        })}
                        {/* <td className='td1'  >
                        <div className="">
                          <button type="button" className="btn btn-success p-2 td1 border "><i className="bi bi-pencil"></i></button>
                          <button type="button" className="btn btn-warning p-2 td1 border "><i className="bi bi-arrow-repeat"></i></button>
                        </div>
                      </td> */}
                      </tr>
                      <tr>
                        <th>
                          <div className="td1">Dep. Rel</div>
                        </th>
                        {data.DependencyRelations.map((item, i) => {
                          return (
                            <td>
                              <div className="mx-3 td2" key={i}>
                                {item ? item : "-"}
                              </div>
                            </td>
                          );
                        })}
                        {/* <td className='td1'  >
                        <div className="">
                          <button type="button" className="btn btn-success p-2 td1 border "><i className="bi bi-pencil"></i></button>
                          <button type="button" className="btn btn-warning p-2 td1 border "><i className="bi bi-arrow-repeat"></i></button>
                        </div>
                      </td> */}
                      </tr>
                      <tr>
                        <th>
                          <div className="td1">Discourse</div>
                        </th>
                        {data.Discourse.map((item, i) => {
                          return (
                            <td>
                              <div className="mx-3 td2" key={i}>
                                {item ? item : "-"}
                              </div>
                            </td>
                          );
                        })}
                        {/* <td className='td1'  >
                        <div className="">
                          <button type="button" className="btn btn-success p-2 td1 border "><i className="bi bi-pencil"></i></button>
                          <button type="button" className="btn btn-warning p-2 td1 border "><i className="bi bi-arrow-repeat"></i></button>
                        </div>
                      </td> */}
                      </tr>
                      <tr>
                        <th>
                          <div className="td1">Speaker’s View</div>
                        </th>
                        {data.Speakers.map((item, i) => {
                          return (
                            <td>
                              <div className="mx-3 td2" key={i}>
                                {item ? item : "-"}
                              </div>
                            </td>
                          );
                        })}
                        {/* <td className='td1'  >
                        <div className="">
                          <button type="button" className="btn btn-success p-2 td1 border "><i className="bi bi-pencil"></i></button>
                          <button type="button" className="btn btn-warning p-2 td1 border "><i className="bi bi-arrow-repeat"></i></button>
                        </div>
                      </td> */}
                      </tr>
                      <tr>
                        <th>
                          <div className="td1">Scope</div>
                        </th>
                        {data.Scope.map((item, i) => {
                          return (
                            <td>
                              <div className="mx-3 td2" key={i}>
                                {item ? item : "-"}
                              </div>
                            </td>
                          );
                        })}
                        {/* <td className='td1'  >
                        <div className="">
                          <button type="button" className="btn btn-success p-2 td1 border "><i className="bi bi-pencil"></i></button>
                          <button type="button" className="btn btn-warning p-2 td1 border "><i className="bi bi-arrow-repeat"></i></button>
                        </div>
                      </td> */}
                      </tr>
                      <tr>
                        <th>
                          <div className="td1">S. Type</div>
                        </th>
                        <td>
                          <div className="mx-3 td2">{data.SentenceType}</div>
                        </td>
                        {/* <td className='td1'  >
                        <div className="">
                          <button type="button" className="btn btn-success p-2 td1 border "><i className="bi bi-pencil"></i></button>
                          <button type="button" className="btn btn-warning p-2 td1 border "><i className="bi bi-arrow-repeat"></i></button>
                        </div>
                      </td> */}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button accrdian"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="true"
                >
                  <div className="center">{data.sentence}</div>
                  <span className="m-2">
                    <FiEdit />
                  </span>
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <table className="table">
                    <tbody className="">
                      <tr>
                        <th>
                          <div className="td1">Concept</div>
                        </th>
                        {data.Concept.map((item, i) => {
                          return (
                            <td>
                              <div className="mx-3 td2" key={i}>
                                {item ? item : "-"}
                              </div>
                            </td>
                          );
                        })}
                        {/* <td className='td1'  >
                        <div className="">
                          <button type="button" className="btn btn-success p-2 td1 border "><i className="bi bi-pencil"></i></button>
                          <button type="button" className="btn btn-warning p-2 td1 border "><i className="bi bi-arrow-repeat"></i></button>
                        </div>
                      </td> */}
                      </tr>
                      <tr>
                        <th>
                          <div className="td1">Index</div>
                        </th>
                        {data.index.map((item, i) => {
                          return (
                            <td>
                              <div className="mx-3 td2" key={i}>
                                {item ? item : "-"}
                              </div>
                            </td>
                          );
                        })}
                        {/* <td className='td1'  >
                        <div className="">
                          <button type="button" className="btn btn-success p-2 td1 border "><i className="bi bi-pencil"></i></button>
                          <button type="button" className="btn btn-warning p-2 td1 border "><i className="bi bi-arrow-repeat"></i></button>
                        </div>
                      </td> */}
                      </tr>
                      <tr>
                        <th>
                          <div className="td1">Sem. Cat.</div>
                        </th>
                        {data.SemCateOfNouns.map((item, i) => {
                          return (
                            <td>
                              <div className="mx-3 td2" key={i}>
                                {item ? item : "-"}
                              </div>
                            </td>
                          );
                        })}
                        {/* <td className='td1'  >
                        <div className="">
                          <button type="button" className="btn btn-success p-2 td1 border "><i className="bi bi-pencil"></i></button>
                          <button type="button" className="btn btn-warning p-2 td1 border "><i className="bi bi-arrow-repeat"></i></button>
                        </div>
                      </td> */}
                      </tr>
                      <tr>
                        <th>
                          <div className="td1">G-N-P</div>
                        </th>
                        {data.GNP.map((item, i) => {
                          return (
                            <td>
                              <div className="mx-3 td2" key={i}>
                                {item ? item : "-"}
                              </div>
                            </td>
                          );
                        })}
                        {/* <td className='td1'  >
                        <div className="">
                          <button type="button" className="btn btn-success p-2 td1 border "><i className="bi bi-pencil"></i></button>
                          <button type="button" className="btn btn-warning p-2 td1 border "><i className="bi bi-arrow-repeat"></i></button>
                        </div>
                      </td> */}
                      </tr>
                      <tr>
                        <th>
                          <div className="td1">Dep. Rel</div>
                        </th>
                        {data.DependencyRelations.map((item, i) => {
                          return (
                            <td>
                              <div className="mx-3 td2" key={i}>
                                {item ? item : "-"}
                              </div>
                            </td>
                          );
                        })}
                        {/* <td className='td1'  >
                        <div className="">
                          <button type="button" className="btn btn-success p-2 td1 border "><i className="bi bi-pencil"></i></button>
                          <button type="button" className="btn btn-warning p-2 td1 border "><i className="bi bi-arrow-repeat"></i></button>
                        </div>
                      </td> */}
                      </tr>
                      <tr>
                        <th>
                          <div className="td1">Discourse</div>
                        </th>
                        {data.Discourse.map((item, i) => {
                          return (
                            <td>
                              <div className="mx-3 td2" key={i}>
                                {item ? item : "-"}
                              </div>
                            </td>
                          );
                        })}
                        {/* <td className='td1'  >
                        <div className="">
                          <button type="button" className="btn btn-success p-2 td1 border "><i className="bi bi-pencil"></i></button>
                          <button type="button" className="btn btn-warning p-2 td1 border "><i className="bi bi-arrow-repeat"></i></button>
                        </div>
                      </td> */}
                      </tr>
                      <tr>
                        <th>
                          <div className="td1">Speaker’s View</div>
                        </th>
                        {data.Speakers.map((item, i) => {
                          return (
                            <td>
                              <div className="mx-3 td2" key={i}>
                                {item ? item : "-"}
                              </div>
                            </td>
                          );
                        })}
                        {/* <td className='td1'  >
                        <div className="">
                          <button type="button" className="btn btn-success p-2 td1 border "><i className="bi bi-pencil"></i></button>
                          <button type="button" className="btn btn-warning p-2 td1 border "><i className="bi bi-arrow-repeat"></i></button>
                        </div>
                      </td> */}
                      </tr>
                      <tr>
                        <th>
                          <div className="td1">Scope</div>
                        </th>
                        {data.Scope.map((item, i) => {
                          return (
                            <td>
                              <div className="mx-3 td2" key={i}>
                                {item ? item : "-"}
                              </div>
                            </td>
                          );
                        })}
                        {/* <td className='td1'  >
                        <div className="">
                          <button type="button" className="btn btn-success p-2 td1 border "><i className="bi bi-pencil"></i></button>
                          <button type="button" className="btn btn-warning p-2 td1 border "><i className="bi bi-arrow-repeat"></i></button>
                        </div>
                      </td> */}
                      </tr>
                      <tr>
                        <th>
                          <div className="td1">S. Type</div>
                        </th>
                        <td>
                          <div className="mx-3 td2">{data.SentenceType}</div>
                        </td>
                        {/* <td className='td1'  >
                        <div className="">
                          <button type="button" className="btn btn-success p-2 td1 border "><i className="bi bi-pencil"></i></button>
                          <button type="button" className="btn btn-warning p-2 td1 border "><i className="bi bi-arrow-repeat"></i></button>
                        </div>
                      </td> */}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
