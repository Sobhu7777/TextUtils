import React from 'react'
import './About.css';

export default function About(props) {
  return (
    <>
    <div style={props.mystyle}>
<section className="py-3 py-md-5">
  <div className="container">
    <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
      <div className="col-12 col-lg-6 col-xl-5">
        <img className="img-fluid rounded" loading="lazy" src="/images/mascot.png" alt="About 1"/>
      </div>
      <div className="col-12 col-lg-6 col-xl-7">
        <div className="row justify-content-xl-center">
          <div className="col-12 col-xl-11">
            <h2 className="mb-3">Why Use This particular Text based app?</h2>
            <p className="lead fs-4 text-secondary mb-3">"Transform Your Text: Streamline, Convert, and Enhance with Ease"</p>
            <p className="mb-5">Unlock the full potential of your text with all in one  powerful TextUtils app, designed to streamline and elevate your writing experience. Whether you need to convert text between formats, clean up and organize your content, or enhance readability with just a few clicks, our app has got your back.</p>
            <div className="row gy-4 gy-md-0 gx-xxl-5X">
              <div className="col-12 col-md-6">
                <div className="d-flex">
                  <div className="me-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-type" viewBox="0 0 16 16">
                    <path d="m2.244 13.081.943-2.803H6.66l.944 2.803H8.86L5.54 3.75H4.322L1 13.081zm2.7-7.923L6.34 9.314H3.51l1.4-4.156zm9.146 7.027h.035v.896h1.128V8.125c0-1.51-1.114-2.345-2.646-2.345-1.736 0-2.59.916-2.666 2.174h1.108c.068-.718.595-1.19 1.517-1.19.971 0 1.518.52 1.518 1.464v.731H12.19c-1.647.007-2.522.8-2.522 2.058 0 1.319.957 2.18 2.345 2.18 1.06 0 1.716-.43 2.078-1.011zm-1.763.035c-.752 0-1.456-.397-1.456-1.244 0-.65.424-1.115 1.408-1.115h1.805v.834c0 .896-.752 1.525-1.757 1.525"/>
                  </svg>
                  </div>
                  <div>
                    <h2 className="h4 mb-3">Case Transformation</h2>
                    <p className="text-secondary mb-0">Effortlessly capitalize, lowercase, or toggle case for improved readability and consistency.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="d-flex">
                  <div className="me-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-clock-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                  </svg>
                  </div>
                  <div>
                    <h2 className="h4 mb-3">Character Count and Word Count</h2>
                    <p className="text-secondary mb-0">Quickly assess the length of your text with accurate character and word count tools.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </section>
    </div>
    </>
  )
}
