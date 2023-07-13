// // class✅
// // object ✅
// // inheritance ✅
// // polymorphism ✅
// // abstraction ✅
// // encapsulation ✅

// class Testimonial {
//     #quote = ""
//     #image = ""

//     constructor(quote, image) {
//         this.#quote = quote
//         this.#image = image
//     }

//     get quote() {
//         return this.#quote
//     }

//     get image() {
//         return this.#image
//     }

//     get user() {
//         throw new Error('there is must be user to make testimonials')
//     }

//     get testimonialHTML() {
//         return `<div class="testimonial">
//             <img src="${this.image}" class="profile-testimonial" />
//             <p class="quote">"${this.quote}"</p>
//             <p class="author">- ${this.user}</p>
//         </div>
//         `
//     }
// }

// class UserTestimonial extends Testimonial {
//     #user = ""

//     constructor(user, quote, image) {
//         super(quote, image)
//         this.#user = user
//     }

//     get user() {
//         return "user : " + this.#user
//     }
// }

// class CompanyTestimonial extends Testimonial {
//     #company = ""

//     constructor(company, quote, image) {
//         super(quote, image)
//         this.#company = company
//     }

//     get user() {
//         return "company : " + this.#company
//     }
// }

// const testimonial1 = new UserTestimonial("Teh Ancika", "Si Keren", "https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2022/02/21/1841722559.jpg")

// const testimonial2 = new UserTestimonial("Shanks", "aku adalah aku, bukan antum.", "https://mmc.tirto.id/image/otf/700x0/2022/12/02/one-piece-_ratio-16x9.jpg")

// const testimonial3 = new CompanyTestimonial("Marsha", "Apasih ga jelas", "https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2022/01/07/3019702339.jpg")

// let testimonialData = [testimonial1, testimonial2, testimonial3]

// let testimonialHTML = "" 

// for (let i = 0; i < testimonialData.length; i++) {
//     testimonialHTML += testimonialData[i].testimonialHTML
// }

// document.getElementById("testimonial").innerHTML = testimonialHTML

const testimonialData = [
    {
        user: "Teh Ancika",
        quote: "Si keren",
        image: "https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2022/02/21/1841722559.jpg",
        rating: 5
    },
    {
        user: "Macha",
        quote: "LOH LOH LOH LOH LOH !",
        image: "https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2022/01/07/3019702339.jpg",
        rating: 5
    },
    {
        user: "Shanks",
        quote: "Buntung dibales dengan buntung",
        image: "https://mmc.tirto.id/image/otf/700x0/2022/12/02/one-piece-_ratio-16x9.jpg",
        rating: 2
    },
    {
        user: "Frayaaaa",
        quote: "Gadis Karoliss, yang mempunyai senyuman manis",
        image: "https://api.duniagames.co.id/api/content/upload/file/6013685931683276029.jpg",
        rating: 4
    },
    {
        user: "Marsha",
        quote: "Aku adalah marsha",
        image: "https://thumb.viva.id/intipseleb/1265x711/2023/02/06/63e0758a10dd2-marsha-jkt48.jpg",
        rating: 3
    },
    {
        user: "Matcha",
        quote: "Gadis penyuka matcha",
        image: "https://thumb.viva.id/intipseleb/665x374/2023/02/06/63e074d2c2f7b-marsha-jkt48.jpg",
        rating: 4
    },
]

function allTestimonial() {
    let testimonialHTML = ""

    testimonialData.forEach((card,index) => {
        testimonialHTML += `<div class="testimonial">
           <img src="${card.image}" class="profile-testimonial" />
           <p class="quote">"${card.quote}"</p>
           <div class= "oke">
             <p class="author">${card.user} - </p>
             <p class="author">${card.rating} <i class="fa-solid fa-star"></i></p>
           </div>
           </div>`
    })

    document.getElementById("testimonial").innerHTML = testimonialHTML
}

allTestimonial()

function filterData(rating) {
    let filterDataHTML = ""

    const filterTestimonial = testimonialData.filter((card) => {
        return card.rating === rating
    })

    if (filterTestimonial.length === 0) {
        filterDataHTML += `
                            <div class= "kartu" style= "width: fit-content; justify-content: center; padding-top: 20px;">
                            <h1 style= " font-family: 'Poppins', sans-serif;">DATA KOSONG GAN !</h1>
                            </div>
                          `
      } else {
        // testimonialFiltered.forEach(function (item) {
        //   testimonialHTML += `<div class="testimonial">
        //                             <img
        //                                 src="${item.image}"
        //                                 class="profile-testimonial"
        //                             />
        //                             <p class="quote">${item.quote}</p>
        //                             <p class="author">- ${item.author}</p>
        //                             <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
        //                         </div>
        //                     `;
        // });
        filterTestimonial.forEach((card) => {
            filterDataHTML += `<div class="testimonial">
            <img src="${card.image}" class="profile-testimonial" />
            <p class="quote">"${card.quote}"</p>
            <div class= "oke">
              <p class="author">${card.user} - </p>
              <p class="author">${card.rating} <i class="fa-solid fa-star"></i></p>
            </div>
            </div>`
        })
      }
    // filterTestimonial.forEach((card) => {
    //     filterDataHTML += `<div class="testimonial">
    //     <img src="${card.image}" class="profile-testimonial" />
    //     <p class="quote">"${card.quote}"</p>
    //     <div class= "oke">
    //       <p class="author">${card.user} - </p>
    //       <p class="author">${card.rating} <i class="fa-solid fa-star"></i></p>
    //     </div>
    //     </div>`
    // })
    

    document.getElementById("testimonial").innerHTML = filterDataHTML
}