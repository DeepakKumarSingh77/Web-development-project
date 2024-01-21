import React from "react";
const Navbar=({setcategory})=>{
    return (
        <>
<nav className="navbar navbar-expand-lg  navbar-dark bg-dark" >
  <div className="container-fluid">
    <a className="navbar-brand badge text-bg-primary p-3 display-3">NEWSAPP</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item ">
          <a className="nav-link active" aria-current="page" onClick={()=>{setcategory("business")}} style={{cursor:"pointer"}}>Business</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link active" aria-current="page" onClick={()=>{setcategory("entertainment")}} style={{cursor:"pointer"}}>Entertainment</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link active" aria-current="page" onClick={()=>{setcategory("health")}} style={{cursor:"pointer"}}>Health</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link active" aria-current="page" onClick={()=>{setcategory("science")}} style={{cursor:"pointer"}}>Science</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link active" aria-current="page" onClick={()=>{setcategory("sports")}} style={{cursor:"pointer"}}>Sports</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link active" aria-current="page" onClick={()=>{setcategory("general")}} style={{cursor:"pointer"}}>General</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link active" aria-current="page" onClick={()=>{setcategory("technology")}} style={{cursor:"pointer"}}>Technology</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}
export default  Navbar;