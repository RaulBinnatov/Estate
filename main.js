const sliderPrew = document.querySelector('#m4cs');
const sliderLine = document.querySelector('.slider_line');
const sliderNext = document.querySelector('#m5cs');

const BTN1 = document.querySelector('#btn1')
const mainContainer = document.querySelector('.main_container');
const regName = document.querySelector('#name')
const regEmail = document.querySelector('#email')
const regPhone = document.querySelector('#phone')
const regInt = document.querySelector('#interest')
const regMsg = document.querySelector('#message')
const regBtn = document.querySelector('#regBtn')

let offset = 0

sliderNext.addEventListener('click', () => {
    offset = offset + 700;
    if (offset > 1400) {
        offset = 0
    }
    sliderLine.style.left = -offset + 'px'

})

sliderPrew.addEventListener('click', () => {
    offset = offset - 700;
    if (offset < 0) {
        offset = 1400
    }
    sliderLine.style.left = -offset + 'px'
})

////////////////////////////////////////////////////////////////

const Users1 = [
    {
        id: 1,
        name: 'Raul',
        email: 'r@b.com',
        phone: '0105151234',
        interest: 'nothing',
        message: 'asdf'
    },
    {
        id: 2,
        name: 'a',
        email: 'a@b.com',
        phone: '0105151235',
        interest: 'nothingg',
        message: 'asdfg'
    }
]



regBtn.addEventListener('click', () => {
    const newUser = {
        id: Users1.length + 1,
        name: regName.value,
        email: regEmail.value,
        phone: regPhone.value,
        interest: regInt.value,
        message: regMsg.value,
    }
    Users1.push(newUser)
    localStorage.setItem('Users1', JSON.stringify(Users1));

})

//////////////////////////////////////////////////////////////////


let estates = [
    {
        id: 1,
        price: '100.000',
        bed: 1,
        bath: 1,
        square: 535,
        img: './img/Rectangle 2096 (1).png',
    },
    {
        id: 2,
        price: '390.000',
        bed: 2,
        bath: 3,
        square: 1000,
        img: './img/Rectangle 2096.png',
    },
    {
        id: 3,
        price: '143.000',
        bed: 1,
        bath: 1,
        square: 535,
        img: './img/Rectangle 2096 (2).png',
    },
    {
        id: 4,
        price: '211.000',
        bed: 1,
        bath: 1,
        square: 535,
        img: './img/Rectangle 2096 (3).png',
    },
    {
        id: 5,
        price: '132.000',
        bed: 1,
        bath: 1,
        square: 535,
        img: './img/Rectangle 2096 (4).png',
    },
    {
        id: 6,
        price: '190.000',
        bed: 1,
        bath: 1,
        square: 535,
        img: './img/Rectangle 2096 (5).png',
    }
]

estates.forEach(element => {
    mainContainer.innerHTML += `
    
    <div class="main_card">
                <div class="main_card_img" >
                    <div class="main_card_slider" id="0">
                        <img src="${element.img}" >
                        <img src="./img/Rectangle 2096.png">
                        <img src="./img/Rectangle 2096 (3).png">

                    </div>
                    <img id="m1" src="./img/Rectangle 2091.png" alt="">
                     <svg id="m1cs" class="sliderPrew2" width="14" height="24" viewBox="0 0 14 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.3547 24L13.6063 22.7525L2.88883 12L13.6063 1.2475L12.3547 0L0.393799 12L12.3547 24Z"
                            fill="#FFFBFB" /></svg>
                
                    <img id="m2" src="./img/Rectangle 2091.png" alt="">
                    <svg id="m2cs" class="sliderNext2" width="14" height="24" viewBox="0 0 14 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.6453 0L0.393702 1.24749L11.1112 12L0.393702 22.7525L1.6453 24L13.6062 12L1.6453 0Z"
                            fill="#FFFBFB" /></svg>
                   
                    
                </div>

                <div class="card_cont">
                    <p>${element.price}$</p>
                    <button onclick="location.href='http://127.0.0.1:5500/finalproject/index2.html'" >View Details</button>
                </div>
                <div class="card_btn">
                    <div class="firts_btn card_btns"> <svg width="14" height="12" viewBox="0 0 14 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.79998 0.399902C10.3078 0.399824 10.7965 0.592888 11.1672 0.939934C11.5379 1.28698 11.7627 1.76202 11.796 2.2687L11.8 2.3999V4.4399C12.2286 4.52757 12.6168 4.75334 12.9049 5.08264C13.193 5.41193 13.3652 5.82659 13.3952 6.2631L13.4 6.3999V11.1999C13.4002 11.2999 13.3629 11.3963 13.2956 11.4701C13.2282 11.544 13.1357 11.59 13.0361 11.599C12.9366 11.608 12.8372 11.5795 12.7577 11.5189C12.6782 11.4584 12.6242 11.3703 12.6064 11.2719L12.6 11.1999V9.1999H1.39998V11.1999C1.40016 11.2999 1.36291 11.3963 1.29557 11.4701C1.22823 11.544 1.13567 11.59 1.03612 11.599C0.93657 11.608 0.837248 11.5795 0.75771 11.5189C0.678173 11.4584 0.624184 11.3703 0.606376 11.2719L0.599976 11.1999V6.3999C0.599882 5.93884 0.759089 5.49191 1.05065 5.13474C1.34222 4.77758 1.74823 4.53211 2.19998 4.4399V2.3999C2.1999 1.89213 2.39296 1.40333 2.74001 1.03267C3.08705 0.661999 3.56209 0.437212 4.06878 0.403902L4.19998 0.399902H9.79998ZM11.4 5.1999H2.59998C2.30179 5.1999 2.01429 5.31091 1.79349 5.5113C1.57269 5.7117 1.4344 5.98712 1.40558 6.2839L1.39998 6.3999V8.3999H12.6V6.3999C12.6 6.10172 12.489 5.81422 12.2886 5.59342C12.0882 5.37261 11.8128 5.23433 11.516 5.2055L11.4 5.1999ZM9.79998 1.1999H4.19998C3.90167 1.19992 3.61406 1.31104 3.39324 1.5116C3.17242 1.71216 3.03421 1.98777 3.00558 2.2847L2.99998 2.3999V4.3999H3.79998V3.9999C3.79998 3.89382 3.84212 3.79207 3.91713 3.71706C3.99215 3.64205 4.09389 3.5999 4.19998 3.5999H6.19998C6.30606 3.5999 6.4078 3.64205 6.48282 3.71706C6.55783 3.79207 6.59998 3.89382 6.59998 3.9999V4.3999H7.39998V3.9999C7.39998 3.89382 7.44212 3.79207 7.51713 3.71706C7.59215 3.64205 7.69389 3.5999 7.79998 3.5999H9.79998C9.90606 3.5999 10.0078 3.64205 10.0828 3.71706C10.1578 3.79207 10.2 3.89382 10.2 3.9999V4.3999H11V2.3999C11 2.10172 10.889 1.81422 10.6886 1.59342C10.4882 1.37261 10.2128 1.23433 9.91598 1.2055L9.79998 1.1999Z"
                                fill="#FFFBFB" fill-opacity="0.65" />
                        </svg> ${element.bed} Bedrooms</div>
                    <div class=" card_btns second_btn"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.5 8.74992H2.5V3.12492C2.49942 2.91309 2.54086 2.70324 2.62193 2.50753C2.703 2.31182 2.82208 2.13414 2.97228 1.98476L2.98478 1.97226C3.22018 1.73721 3.5224 1.58057 3.85016 1.52373C4.17792 1.46689 4.51524 1.51263 4.81603 1.6547C4.53196 2.12701 4.41389 2.68071 4.48057 3.22782C4.54726 3.77493 4.79488 4.28405 5.18409 4.67429L5.52631 5.01651L4.89641 5.64645L5.60347 6.35351L6.23338 5.72361L9.72366 2.23339L10.3536 1.60348L9.64647 0.896387L9.01653 1.52629L8.67431 1.18407C8.26458 0.77549 7.72448 0.523624 7.14812 0.472366C6.57176 0.421108 5.99568 0.573708 5.52028 0.903575C5.01897 0.586985 4.4249 0.450311 3.83564 0.516005C3.24638 0.581699 2.69699 0.845853 2.27772 1.26507L2.26522 1.27757C2.02186 1.5196 1.82892 1.8075 1.69757 2.1246C1.56622 2.44169 1.49907 2.7817 1.5 3.12492V8.74992H0.5V9.74992H1.5V10.7093C1.49998 10.7899 1.51298 10.87 1.5385 10.9465L2.46875 13.7371C2.51839 13.8865 2.61385 14.0164 2.74156 14.1085C2.86928 14.2006 3.02275 14.25 3.18019 14.2499H3.58331L3.21875 15.4999H4.26041L4.625 14.2499H11.1281L11.5031 15.4999H12.5469L12.1719 14.2499H12.8197C12.9771 14.2501 13.1306 14.2006 13.2584 14.1085C13.3861 14.0165 13.4816 13.8865 13.5312 13.7371L14.4614 10.9465C14.487 10.87 14.5 10.7899 14.5 10.7093V9.74992H15.5V8.74992H14.5ZM5.89125 1.89117C6.16675 1.61627 6.54004 1.46188 6.92923 1.46188C7.31842 1.46188 7.69172 1.61627 7.96722 1.89117L8.30937 2.23339L6.23347 4.30929L5.89125 3.96714C5.61637 3.69163 5.46199 3.31834 5.46199 2.92915C5.46199 2.53997 5.61637 2.16667 5.89125 1.89117ZM13.5 10.6687L12.6396 13.2499H3.36037L2.5 10.6687V9.74992H13.5V10.6687Z"
                                fill="#FFFBFB" fill-opacity="0.65" />
                        </svg>
                        <p> ${element.bath} Bath</p>
                    </div>
                    <div class="third_btn card_btns">${element.square} sq ft</div>
                </div>
            </div>
    

    `
}
)
let offset2 = 0;

const sliderPrew2 = document.querySelectorAll('.sliderPrew2');
const sliderLine2 = document.querySelector('.main_card_slider');
const sliderNext2 = document.querySelectorAll('.sliderNext2');
for(let i = 0; i < sliderPrew2.length; i++){
    sliderNext2[i].addEventListener('click', (e)=>{
        let offset2 = +e.target.closest('.main_card_img').children[0].id;
        
        offset2 = offset2 + 575;
        if (offset2 > 1150) {
            offset2 = 0
        }
        e.target.parentElement.children[0].id = offset2
        e.target.parentElement.children[0].style.left = -offset2 + 'px'

    })
}
for(let i = 0; i < sliderPrew2.length; i++){
    sliderPrew2[i].addEventListener('click', (e)=>{
        let offset2 = +e.target.closest('.main_card_img').children[0].id;
        
        offset2 = offset2 - 575;
        if (offset2 < 0) {
            offset2 = 1150
        }
        e.target.parentElement.children[0].id = offset2
        e.target.parentElement.children[0].style.left = -offset2 + 'px'

    })
}





















