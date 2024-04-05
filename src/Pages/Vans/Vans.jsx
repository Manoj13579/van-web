import React, { Suspense } from 'react';
import '../../Components/Server.js';
import { getVans } from '../../Utility/Api.js';
import { useLoaderData,
   useSearchParams,
   Link,
   defer,
   Await } from 'react-router-dom';

export function loader() {
  return defer({ vans: getVans() });
}



const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const dataPromise = useLoaderData();

  const handleFilterChange = (key, value) => {
    setSearchParams(prevParams => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }


const renderVanElements = (vansData) => {
    const displayedVans = typeFilter ? vansData.filter(vans => vans.type === typeFilter) : vansData;

    const allVans = displayedVans.map(vans => (
      <div key={vans.id} className='vans-item'>
        <Link to={vans.id} state={{ search: `?${searchParams.toString()}`, type: typeFilter }}>
          <img src={vans.imageUrl} alt={vans.name} />
          <div className="description-bar">
            <h3 className='bar-items'>{vans.name}</h3>
            <p className='bar-items'>${vans.price}/day</p>
            <button className={`bar-items ${vans.type} selected`}><i>{vans.type}</i></button>
          </div>
        </Link>
      </div>
    ));

    return (
      <>
        <div className="all-buttons">
          <button className={`bar-items simple ${typeFilter === "simple" ? "selected" : ""}`} onClick={() => handleFilterChange("type", "simple")}><h4>Simple</h4></button>
          <button className={`bar-items luxury ${typeFilter === "luxury" ? "selected" : ""}`} onClick={() => handleFilterChange("type", "luxury")}><h4>Luxury</h4></button>
          <button className={`bar-items rugged ${typeFilter === "rugged" ? "selected" : ""}`} onClick={() => handleFilterChange("type", "rugged")}><h4>Rugged</h4></button>
        </div>
        {typeFilter ? (
          <div className='vans-filter'>
            <button onClick={() => handleFilterChange("type", null)}>Clear All Filters</button>
          </div>
        ) : null}
<div className="vans-organize">
  {allVans}
</div>
      </>
    );
  }



  return (
    <div>
      <div className='vans-container'>
        <Suspense fallback={<h1>Loading Vans...</h1>}>
        <h2>Explore our vans options</h2>
          {/* look for render prop child function */}
        <Await resolve={dataPromise.vans}>
          {renderVanElements}
        </Await>
        </Suspense>
      </div>
    </div>
  );
}

export default Vans;
