import Navigation from "../components/navigation";
// import data from '../../db.json' assert {type: 'json'}
import Header from "../components/header";
import Footer from "../components/footer";
import { useEffect, useState } from "../../lib";

const ProductPage = function(id) {
    // const book = data.find(function(item) {
    //     return item.id == id
    // })
    const [book, setBook] = useState({})
    useEffect(() => {
        fetch(` http://localhost:3000/books/${id}`).then((res) => res.json())
        .then((data) => setBook(data))
    }, [])
    return /*html*/`
    ${Header()}
    ${Navigation()}
    <section class="max-w-7xl px-10 mx-auto my-5">
    <div class="grid grid-cols-[444px,auto] gap-8">
        <div class="border-r px-8">
            <div class="text-center px-8">
                <img src="${book.images?.[0].base_url}" alt="" width="444" height="444">
            </div>
            <div class="grid grid-cols-5 gap-3 my-3">
                <img src="${book.images?.[0].base_url}" alt="" width="64" height="64">
                <img src="${book.images?.[0].base_url}" alt="" width="64" height="64">
                <img src="${book.images?.[0].base_url}" alt="" width="64" height="64">
                <img src="${book.images?.[0].base_url}" alt="" width="64" height="64">
                <img src="${book.images?.[0].base_url}" alt="" width="64" height="64">
            </div>
        </div>
        <div>
            <div class="flex text-[13px]">
                <p class="pr-3">Tác giả: <span class="text-[#0D5CB6]">Ca Tây</span></p>
                <p>Đứng thứ 13 trong <span class="text-[#0D5CB6]">Top 1000 Sách tư duy - Kỹ năng
                        sống bán chạy tháng này</span></p>
            </div>
            <h2 class="text-[23px]">${book.name}</h2>
            <div class="flex gap-2 items-center">
                <span class="flex justify-center"><img src="/img/sao.svg" alt="" class="w-[12px]">
                    <img src="/img/sao.svg" alt="" class="w-[12px]">
                    <img src="/img/sao.svg" alt="" class="w-[12px]">
                    <img src="/img/sao.svg" alt="" class="w-[12px]">
                    <img src="/img/sao.svg" alt="" class="w-[12px]">
                </span>
                <span class="text-[#787878] text-[11px] space-x-2">(Xem 2942 đánh giá)</span>
                <span class="text-[#787878] text-[11px]">|</span>
                <span class="text-[#787878] text-[11px]">Đã bán 1000+</span>
            </div>
            <div class="text-[#FF424E] px-5 py-5 border-b">
                <span class="px-1 text-[32px]">${book.current_seller?.price}<span class="underline">đ</span></span>
                <span class="px-1 text-[13px] text-[#808089]">${book.original_price}<span class="underline">đ</span></span>
                <span class="border px-1 text-[14px] border-[#FF424E]">-23%</span>
            </div>

            <div class="my-3">
                <p class="py-2">Số lượng</p>
                <div class="flex flex-row border h-10 w-24 rounded-lg border-gray-400 relative">
                    <button
                        class="font-semibold border-r border-gray-400 h-full w-20 flex rounded-l  cursor-pointer">
                        <span class="m-auto">-</span>
                    </button>
                    <input type="hidden"
                        class="md:p-2 p-1 text-xs md:text-base border-gray-400 focus:outline-none text-center"
                        readonly name="custom-input-number" />
                    <div class="bg-white w-24 text-xs md:text-base flex items-center justify-center cursor-default">
                        <span>2</span>
                    </div>

                    <button
                        class="font-semibold border-l  border-gray-400 h-full w-20 flex rounded-r cursor-pointer">
                        <span class="m-auto">+</span>
                    </button>
                </div>
            </div>

            <button type="button" class="px-5 py-2 bg-[#FF3945] w-[280px] text-white rounded text-[14px]">Chọn
                Mua</button>
        </div>
    </div>
    </section>

    
    <section class="max-w-7xl px-10 mx-auto my-5">
        <h2 class="text-[20px] font-semibold">Sản phẩm tương tự</h2>
        <div class="grid grid-cols-6">
            <div>
                <img src="/img/anh1.png" alt="" class="w-full">
                <div>
                    <h3 class="">Càng Kỷ Luật, Càng Tự Do</h3>
                    <div class="flex gap-2 items-center">
                        <span class="flex justify-center"><img src="/img/sao.svg" alt="" class="w-[12px]">
                            <img src="/img/sao.svg" alt="" class="w-[12px]">
                            <img src="/img/sao.svg" alt="" class="w-[12px]">
                            <img src="/img/sao.svg" alt="" class="w-[12px]">
                            <img src="/img/sao.svg" alt="" class="w-[12px]">
                        </span>|<span class="text-[#787878] text-[11px]">Đã bán 1000+</span>
                    </div>
                    <div class="text-[#FF424E]">
                        <span class="px-1">83.300 <span class="underline">đ</span></span>
                        <span class="border px-1 text-[11px] border-[#FF424E]">-23%</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="max-w-7xl px-10 mx-auto my-5">
        <h2 class="text-[20px] my-5">Thông tin chi tiết</h2>
        <table>
            ${book.specifications?.[0].attributes.map(function (item){
                return /*html*/`
                <tr>
                <th class="w-[220px] text-[#4F4F4F] bg-[#EFEFEF] font-normal">${item.name}</th>
                <td class="w-[660px] px-5">${item.value}</td>
            </tr>
                `
            }).join('')}
        </table>
    </section>

    <section class="max-w-7xl px-10 mx-auto my-5">
        <h2 class="text-[20px] my-5">Mô tả sản phẩm</h2>
        <p class="text-[14px]">
           ${book.description}
        </p>
        <div class="text-center my-5">
          <button type="button" class="px-10 rounded py-2 border border-[#189EFF] text-[#189EFF]">Xem thêm nội
            dung</button>
        </div>
    </section>

    ${Footer()}
    `
}

export default ProductPage;

