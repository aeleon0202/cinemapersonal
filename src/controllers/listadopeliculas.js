let peliculas=[
    {
        nombre:"Black Adam",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaanderson.appspot.com/o/Black%20adam%20ultimonuevo.jpg?alt=media&token=63dad5e5-1de8-4553-913e-3866fff2aa30"
    },
    {
        nombre:"La mujer rey",
        duracion:80,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaanderson.appspot.com/o/LA%20MUJER%20REY%20NUEVO%20POSTER1.jpg?alt=media&token=61ec2a67-6af0-4daa-a10a-2fda397ae49c"
    },
    {
        nombre:"Onepiece",
        duracion:90,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaanderson.appspot.com/o/ONEPIECE1.jpg?alt=media&token=4aa870c3-28fa-447a-86cd-4ce3db6cfb5c"
    },
    {
        nombre:"Sonrie",
        duracion:86,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaanderson.appspot.com/o/SONRIE1.jpg?alt=media&token=e8ac03d1-8b12-44f3-b157-5c21fce8f724"
    },
    {
        nombre:"Avatar 2",
        duracion:130,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaanderson.appspot.com/o/avatar%202.jpg?alt=media&token=b753dbcb-c6ed-4591-9e20-8cb6f0215ea1"
    },
    {
        nombre:"Wakanda",
        duracion:96,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaanderson.appspot.com/o/wakanda.jpg?alt=media&token=ac3bd83e-a226-455d-9bb9-39166b6b53af"
    },
    {
        nombre:"Jeepers Creepers",
        duracion:98,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaanderson.appspot.com/o/jeeppers.jpg?alt=media&token=15486156-bbec-4677-929a-16cb9f41bfc7"
    },
    {
        nombre:"Jurasic World",
        duracion:110,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaanderson.appspot.com/o/jurasic%20world.jpg?alt=media&token=0c612743-d86c-4309-80b1-de88ea4ce734"
    },
    {
        nombre:"Jurasic World",
        duracion:110,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaanderson.appspot.com/o/jurasic%20world.jpg?alt=media&token=0c612743-d86c-4309-80b1-de88ea4ce734"
    },
    {
        nombre:"Jurasic World",
        duracion:110,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaanderson.appspot.com/o/jurasic%20world.jpg?alt=media&token=0c612743-d86c-4309-80b1-de88ea4ce734"
    },
    {
        nombre:"Jurasic World",
        duracion:110,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaanderson.appspot.com/o/jurasic%20world.jpg?alt=media&token=0c612743-d86c-4309-80b1-de88ea4ce734"
    },
    {
        nombre:"Jurasic World",
        duracion:110,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaanderson.appspot.com/o/jurasic%20world.jpg?alt=media&token=0c612743-d86c-4309-80b1-de88ea4ce734"
    },
    {
        nombre:"Jurasic World",
        duracion:110,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaanderson.appspot.com/o/jurasic%20world.jpg?alt=media&token=0c612743-d86c-4309-80b1-de88ea4ce734"
    },
    {
        nombre:"Jurasic World",
        duracion:110,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaanderson.appspot.com/o/jurasic%20world.jpg?alt=media&token=0c612743-d86c-4309-80b1-de88ea4ce734"
    },
    {
        nombre:"Jurasic World",
        duracion:110,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaanderson.appspot.com/o/jurasic%20world.jpg?alt=media&token=0c612743-d86c-4309-80b1-de88ea4ce734"
    }
]

let fila=document.getElementById("fila")

peliculas.forEach(function(pelicula){
    console.log(pelicula.poster)

    let foto=document.createElement("img")
    foto.src=pelicula.poster
    foto.classList.add("img-fluid", "w-100")

    fila.appendChild(foto)
})