import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
const Booking = () => {
  const [purpose, setPurpose] = useState("");
  const [category, setCategory] = useState("");
  const [where_from, setWhere_from] = useState("");
  const [where_to, setWhere_to] = useState("");
  const [date, setDate] = useState("");
  const [numb, setNumb] = useState("");
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/booking", {
        purpose,
        category,
        where_from,
        where_to,
        date,
        numb,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/book");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Booking - CAR KHOJO ">
      <div className="form-container" style={{ minHeight: "90vh" }}>
        <form onSubmit={handleSubmit}>
          <h4 className="title">BOOKING FORM</h4>
          <div className="mb-3">
          <select className="form-select" aria-label="Default select example" value={purpose} onChange={(e) => setPurpose(e.target.value)} required>
         <option selected>Select Purpose of Booking</option>
                   <option>Tour</option>
                   <option>Weeding</option>
                  <option>Travel</option>
 
        </select>
       
          </div>
          <div className="mb-3">
          <select className="form-select" aria-label="Default select example" value={category} onChange={(e) => setCategory(e.target.value)} required>
         <option selected>Select Category of Viechle</option>
                   <option>Bolero</option>
                   <option>Scorpio</option>
                  <option>Irtiga</option>
                  <option>Thar</option>
                   <option>Swift</option>
                  <option>Baleno</option>
 
        </select>
          </div>
         
          <div className="mb-3">
            <input
              type="text"
              value={where_from}
              onChange={(e) => setWhere_from(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Where From"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={where_to}
              onChange={(e) => setWhere_to(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Where to"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Date of booking"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={numb}
              onChange={(e) => setNumb(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter the number of viechle"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            BOOK NOW
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Booking;