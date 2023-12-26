import React from 'react'
//import noteContext from '../context/notes/noteContext'
const About = (props) => {
  
  let myStyle={
    backgroundColor:props.mode==='#B4D4FF',
  }
  return (
    <div>
      <div class="accordion" id="accordionExample">
  <div class="accordion-item" style={myStyle}>
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About iNotebook
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        inotebook is a cloud storage for our personal notes. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius pariatur explicabo consequatur quod amet. Omnis quam ratione obcaecati dolor rerum
      </div>
    </div>
  </div>
  <div class="accordion-item" style={myStyle}>
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Services Provided
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        High security, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum nihil, hic aliquid illo veritatis assumenda, sit rerum maxime voluptatem nisi, perferendis omnis tempora molestiae quaerat dolores non maiores ex incidunt
      </div>
    </div>
  </div>
  <div class="accordion-item" style={myStyle}>
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Contact Us
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Padmini Joshi, Hyderabad
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default About
