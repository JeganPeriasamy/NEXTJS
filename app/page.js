"use client"

import { useState, useEffect } from "react";
export default function Page() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.DB_URL}/api/posts`)
       .then((res) => res.json())
       .then((res) => setData(res))
 }, [])

  return (
    <div>
      <h5 className=" mt-4 text-primary text-center"> Welcome to zameen- square</h5>
      <div className="d-flex justify-content-evenly row mb-3 gap-0 container">
        {data.map((value, index) => {
          <div class=" col-3 ms-2 card p-4 mt-3 shadow bg-white rounded-3">
            <img
              src="https://s3-alpha-sig.figma.com/img/012e/c72e/c6a37f007da99e76339b1b8d264ede3f?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IyCiuo2D-yKMKEX4ZA5sWj108JfaAvmoQ4nXqCkPLq8cuKoGiH2wa21bBiTilIN15wjan6CpKNkTambHK1Ixhim~buCVA8FQ0RL46GQlP7hxJ99sPT2bKQG3rJUdfUEpzfUn-bpOzfvn3kNiOZbBQdDuWjJo2xcUepwZd7FBtEtIyOHhBqWoSJ4OocjSSuEI3eDxMZpMyKcgNCB7BkOUCMvnZ2JaD8ttjPWWwqC5rXEWwbZgEe6Sxevfe31vHO9It6CQaIqNfcjTfIi93690AZrRVn-AFzonr5aMaqbIlx3cciTNBqY9GgUwzjtJnx7LfRkk~jgUkOG6uVSH0mh7ZQ__"
              class="card-img-top image-fluid "
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">{value.title}</h5>
              <p class="card-text">{value.description}</p>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
}
