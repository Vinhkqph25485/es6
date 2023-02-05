const Header = function () {
    return /*html*/`
     <section class="bg-[#1A94FF] p-5 mx-auto">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
        <img src="/img/logo.svg" alt="">
        <div class="flex items-center">
            <input type="text" class="px-12 py-1 w-[626px] rounded">
            <button class="bg-[#0D5CB6] flex text-white py-1 px-3 rounded items-center">
                <img src="/img/icon-search.svg" alt="" class="mx-1">
                Tìm kiếm</button>
        </div>

        <div class="flex items-center">
            <img src="/img/accound.svg" class="mx-2" />
            <div class="text-white">
                <div class="text-[11px]">
                    <a href="#">Đăng nhập</a>/
                    <a href="#">Đăng kí</a>
                    <br>
                    <div class="flex items-center">
                        <a href="#">Tài khoản</a>
                        <img src="/img/nutxuong.svg" alt="">
                    </div>
                </div>

            </div>
        </div>

        <div class="text-white flex items-end">
            <img src="/img/cart.svg" class="mx-2" />
            <a href="#" class="text-[11px]">Giỏ hàng</a>
        </div>
    </div>
</section>
    `
}

export default Header