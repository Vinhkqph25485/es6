import Navigation from "../components/navigation"
import data from '../../db.json' assert {type: "json"}
import Header from "../components/header";
import categories from "../components/categories";
import banner from "../components/banner";
import Footer from "../components/footer";

var HomePage = function() {
    console.log(data);
    return /*html*/`
    ${Header()}
    ${Navigation()}
    ${categories()}
    ${banner()}
    <div class="flex gap-8 px-5 py-5">
        <img src="img/tikinow.png" alt="" class="p-1 rounded-lg bg-[#EEEEEE]">
        <img src="img/free.png" alt="" class="p-1 rounded-lg bg-[#EEEEEE]">
    </div>
    <div>
        <div class="grid grid-cols-4 gap-2">
            ${data.map(function(book, index) {
                return /*html*/`
                <a href="/products/${book.id}">
                <div >
                <img src="${book.images[0].base_url}" alt=""  width="200px" height="200px">
             </div>
            <div>
                <img src="img/tikinow.png" alt="">
                <p class="text-[#00AB56] text-[11px]">GIAO SIÊU TỐC 2H</p>
                <h3 class="">${book.name}</h3>
                <div class="flex gap-2 items-center">
                    <span class="flex justify-center"><img src="img/sao.svg" alt="" class="w-[12px]">
                        <img src="img/sao.svg" alt="" class="w-[12px]">
                        <img src="img/sao.svg" alt="" class="w-[12px]">
                        <img src="img/sao.svg" alt="" class="w-[12px]">
                        <img src="img/sao.svg" alt="" class="w-[12px]">
                    </span>|<span class="text-[#787878] text-[11px]">Đã bán 1000+</span>
                 </div>
                 <div class="text-[#FF424E]">
                    <span class="px-1">${book.current_seller.price} <span class="underline">đ</span></span>
                    <span class="border px-1 text-[11px] border-[#FF424E]">-23%</span>
                </div>
            </div>
                </a>
                `
            }).join('')}
        <div>
    </div>
    </div>
    </section>
    ${Footer()}
    `
}

export default HomePage