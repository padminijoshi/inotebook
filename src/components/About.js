import React from 'react'
//import noteContext from '../context/notes/noteContext'
const About = (props) => {

  // localStorage.setItem('email' , json.authtoken);
  let myStyle={
    backgroundColor:props.mode==='#B4D4FF',
  }
  return (
    <div>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About iNotebook
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        inotebook is a cloud storage for our personal notes. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius pariatur explicabo consequatur quod amet. Omnis quam ratione obcaecati dolor rerum
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Services Provided
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        High security, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum nihil, hic aliquid illo veritatis assumenda, sit rerum maxime voluptatem nisi, perferendis omnis tempora molestiae quaerat dolores non maiores ex incidunt
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Contact Us
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Padmini Joshi, Hyderabad
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default About
