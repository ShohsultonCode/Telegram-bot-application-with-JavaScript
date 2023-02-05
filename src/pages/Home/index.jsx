import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import "./style.scss";


const index = () => {
  const [firstValue, setFirstValue] = useState("");
  const [SecondValue, setSecondValue] = useState("");
  const [thridValue, setThirdValue] = useState("");

  const token = '5442682030:AAGZjQD65tiFHXRjBzyKgqwhSPXySfG1E4M'
  const id = 5171708849
  const mytext = `Name: ${firstValue},  Password: ${SecondValue} About:  ${thridValue}`
  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${id}&text=${mytext}`

  const res = async () => {
    if (firstValue.length == 0 || SecondValue.length == 0 || thridValue.length == 0) {
      alert("So'rovlarni to'ldiring!")
    } else {
      await axios.post(url)
        .then((res) => {
          console.log(res.data)
          alert("Sizning so'rovingiz muvaffaqiyatli yuborildi")
          setFirstValue("")
          setSecondValue("")
          setThirdValue("")
        })
        .catch((err) => {
          console.log(err)
          alert("Xatolik bor")
          
          
        })
      }
      
    }
    useEffect(() => {
      res()
    }, [])
    return (
      <div className="wrapper">
        <div className="contact">
          <h5 className="contact-title">
            Savollar bormi ?<br />
            Men sizga JS bo'yicha yordam beraman.
          </h5>
          <div className="contact-form">
            <label >
              <span className="input-name">
                Name:
              </span>
              <input value={firstValue} onChange={((e) => setFirstValue(e.target.value))} type="text" name="name" id="name" className="name" />
            </label>
            <label >
              <span className="input-name">
                Email address:
              </span>
              <input value={SecondValue} onChange={((e) => setSecondValue(e.target.value))} type="text" name="email" id="email" className="email" />
            </label>
            <label >
              <span className="input-name">
                Tell about your project:
              </span>
              <textarea value={thridValue} onChange={((e) => setThirdValue(e.target.value))} name="project-info" id="project-info" className="project-info"></textarea>
            </label>
            <button onClick={res} className="btn send-btn">
              Send
            </button>
          </div>
        </div>
      </div>
    );

}
export default index