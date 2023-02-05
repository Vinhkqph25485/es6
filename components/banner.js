const banner = function (){
    return /*html*/`
    <div>
    <h1 class="text-[23px] font-semibold py-3">Nhà Sách Tiki</h1>
    <img src="/img/banner.png" alt="">

    <ul class="flex py-5">
        <li><a href="#" class="px-5 text-[12px] hover:text-[#0D5CB6] hover:border-b-4 hover:border-blue-500 py-4">Phổ Biến</a></li>
        <li><a href="#" class="px-5 text-[12px] hover:text-[#0D5CB6] hover:border-b-4 hover:border-blue-500 py-4">Bán Chạy</a></li>
        <li><a href="#" class="px-5 text-[12px] hover:text-[#0D5CB6] hover:border-b-4 hover:border-blue-500 py-4">Hàng Mới</a></li>
        <li><a href="#" class="px-5 text-[12px] hover:text-[#0D5CB6] hover:border-b-4 hover:border-blue-500 py-4">Giá thấp</a></li>
        <li><a href="#" class="px-5 text-[12px] hover:text-[#0D5CB6] hover:border-b-4 hover:border-blue-500 py-4">Giá cao</a></li>
    </ul>
    <hr>
    `
}

export default banner;