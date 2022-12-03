import React from 'react'
import { useState } from 'react'
import Unsplash, { toJson } from "unsplash-js";
import search from 'unsplash-js/lib/methods/search';

const unsplash = new Unsplash({
    accesskey: "Xq7RgHCvjKojAaLYcMXlJ7PMIBWzNYgJFoq8k37IXkE"
})

const searchPhotos = async(e) => {
    e.preventDefault();
console.log("submit the search")
unsplash.search.photos(search).then(toJson).then((json) => console.log(json) ).catch(err => console.error(err))
}
export default function Search() {
    const [search,setSearch] = useState("")
console.log(search)
  return (
    <>
    <form>
        <label htmlFor='search'>{''}📷</label>
        <input type="text" placeholder='Type "dog" or "Apple"'
         name='search'
          className='query'
          value={search}
          onChange={(e) => setSearch(e.target.value) }
          />
        <button type='submit' className='submit-btn' onClick={searchPhotos}>Search</button>
    </form>
    </>
  )
}
