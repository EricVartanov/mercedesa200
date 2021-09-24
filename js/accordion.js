const btns = document.querySelectorAll('.feature__link')
const lists = document.querySelectorAll('.feature-sub')


btns.forEach((btnItem, index) => {
    btnItem.addEventListener('click', () => {
        btns.forEach((btnItem) => {
            btnItem.classList.remove('feature__link_active')
        })

        btnItem.classList.toggle('feature__link_active')
        lists.forEach((listenItem) => {
            listenItem.classList.add('hidden')
        })
        lists[index].classList.toggle('hidden')

    })
})