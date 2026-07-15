import React from 'react'
import './Aboutus.css';

function Aboutus() {
 

  const stats = [
    { number: '5+', label: 'Years of Excellence' },
    { number: '2k+', label: 'Students Trained' },
    { number: '50+', label: 'Certified Instructors' },
    { number: '98%', label: 'Success Rate' }
  ];



  return (
    <section className='aboutus-container'>
      <section className='aboutus-text'>
        <h2 className='title'>School Overview</h2>
        <p className='sub-title'>Building strong values, culture, and academic excellence in every student.</p>
        <p>
          Our school provides a welcoming environment where learners can grow academically, socially, and spiritually.
          We support students with modern classrooms, caring teachers, and a mission to prepare them for future success.
        </p>
        <p>
          We focus on character development, responsible citizenship, and a love of learning that lasts a lifetime.
          Every program is designed to help students learn together with confidence and respect.
        </p>
      </section>

      <section className='aboutus-image'>
        <img
          src='https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/481464828_1024419263069500_8503348821728804092_n.jpg?stp=dst-jpg_tt6&cstp=mx719x709&ctp=s719x709&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=UhfWI4E7HqUQ7kNvwHf_BjM&_nc_oc=Adp9iswV2ocKnRsn3jxAIBBptO0XIzT-RU6iLm4RMNM4UpNezglXMeEoXQrZWYhiIOw&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=2ZpbAHHxELHnx1dd_RR0CQ&_nc_ss=7b2a8&oh=00_AQCY5xssxcO1iXneA-Cdi3rRqGgywQiXbA74diPTYJpYOw&oe=6A5B12CD'
          alt='School campus'
        />
      </section>

 <section className='stats-grid'>
                     {stats.map((stat,idx)=>(
                        <section key={idx} className='statcard'>
                           <section className='statnumber'>{stat.number}</section>
                           <section className='statlabel'>{stat.label}</section>
                        </section>         
                     ))}
              </section>
              
                          
                           
                        
                        </section>
                        
  )}


    
  


export default Aboutus
