import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h6> Admin Name : {auth?.user?.name}</h6>
              <h6> Admin Email : {auth?.user?.email}</h6>
              <h6> Admin Contact : {auth?.user?.phone}</h6>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;