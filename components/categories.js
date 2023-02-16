import { useEffect, useState } from "../../lib";

// import data from '../../db.json' assert {type: 'json'}
const categories = function (){
    const [data, setData] = useState([])
    
    useEffect(function() {
        fetch('http://localhost:3000/books')
        .then((res) => res.json())
        .then((dataFetch) => setData(dataFetch))
    }, []) // 
    const categoryList = [...new Map(
          data.map((item) => [item.categories["id"], item.categories])
        ).values(),
      ];
    return /*html*/`
    <section class="max-w-7xl px-10 mx-auto my-5">
    <div class="grid grid-cols-[250px,auto]">
        <div>
            <h2 class="text-[13px]">DANH MỤC SẢN PHẨM</h2>
            <ul>
                ${categoryList.map((book)=>{
                    return /*html*/`
                        <li><a href="" class="text-[12px] py-5">${book.name}</a></li>
                    `
                }).join('')}
            </ul>
            
        </div>
    `
}
export default categories