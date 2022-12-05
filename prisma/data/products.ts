
const products = [
    {
        name: "Hummus",
        price: 7.10,
        image:"entrantes_frios",
        categoryId: 1
      },
      {
        name: "Hummus Beiruty",
        price: 7.50,
        image:"entrantes_frios",
        categoryId: 1
      },
      {
        name: "Zalziki",
        price: 7.70,
        image:"entrantes_frios",
        categoryId: 1
      },
      {
        name: "Labne",
        price: 5.9,
        image:"entrantes_frios",
        categoryId: 1
      },
      {
        name: "Itch",
        price: 7.75,
        image: "entrantes_frios",
        categoryId: 1
      },
      {
        name: "Gebne",
        price: 7.75,
        image:"entrantes_frios",
        categoryId: 1
      },
      {
        name: "Mohamara",
        price: 8.60,
        image:"entrantes_frios",
        categoryId: 1
      },
      {
        name: "Musaka",
        price: 8.50,
        image: "entrantes_frios",
        categoryId: 1
      },
      {
        name: "Tamriye",
        price: 4.9,
        image: "entrantes_frios",
        categoryId: 1
      },
      {
        name: "Pan Libanés",
        price: 5.50,
        image: "entrantes_frios",
        categoryId: 1
      },
      {
        name: "Falafel(5 Unidades)",
        price: 7.95,
        image: "batinjen",
        categoryId: 2
      },
      {
        name: "Batata Harra",
        price: 7.95,
        image: "batinjen",
        categoryId: 2
      },
      {
        name: "Batinjen",
        price: 7.95,
        image: "batinjen",
        categoryId: 2
      },
      {
        name: "Warak Inab Bil Zeit",
        price: 8.95,
        image: "batinjen",
        categoryId: 2
      },
      {
        name: "Lubie Bil Zeiy",
        price: 795,
        image: "batinjen",
        categoryId: 2
      },
      {
        name: "Bemye Bi I Zeit",
        price: 7.95,
        image: "batinjen",
        categoryId: 2
      },
      {
        name: "Foul Moudamas ",
        price: 7.90,
        image: "batinjen",
        categoryId: 2
      },
      {
        name: "Kousa ",
        price: 7.95,
        image: "batinjen",
        categoryId: 2
      },
      {
        name: "Shawarma",
        price: 14.95,
        image: "shawarma_fenicia",
        categoryId: 3
      },
      {
        name: "Shawarna Fenicia ",
        price: 15.75,
        image: "shawarma_fenicia",
        categoryId: 3
      },
      {
        name: "Shish Tawouk ",
        price: 15.95,
        image: "shawarma_fenicia",
        categoryId: 3
      },
      {
        name: "Kafta",
        price: 15.95,
        image: "shawarma_fenicia",
        categoryId: 3
      },
      {
        name: "Kafta Fenicia ",
        price: 15.95,
        image: "shawarma_fenicia",
        categoryId: 3
      },
      {
        name: "Supern Carne",
        price: 19.90,
        image: "shawarma_fenicia",
        categoryId: 3
      },
      {
        name: "Vegetal",
        price: 16.95,
        image: "shawarma_fenicia",
        categoryId: 3
      },
      {
        name: "Toshika",
        price: 15.95,
        image: "shawarma_fenicia",
        categoryId: 3
      },
      {
        name: "Arayes Combinado",
        price: 15.95,
        image: "shawarma_fenicia",
        categoryId: 3
      },
      {
        name: "Arayes",
        price: 7.25,
        image: "arayes",
        categoryId: 4
      },
      {
        name: "Rollitos de Queso",
        price: 9.95,
        image: "rollitos",
        categoryId: 5
      },
      {
        name: "Rollitos de Pollo",
        price: 9.95,
        image: "rollitos",
        categoryId: 5
      },
      {
        name: "Rollitos de Carne",
        price: 9.95,
        image: "rollitos",
        categoryId: 5
      },
      {
        name: "Rollitos de Verduras",
        price: 9.95,
        image: "rollitos",
        categoryId: 5
      },
      {
        name: "Empanadillas de Carne",
        price: 9.50,
        image: "rollitos",
        categoryId: 5
      },
      {
        name: "Empanadillas de Queso",
        price: 9.50,
        image: "rollitos",
        categoryId: 5
      },
      {
        name: "Empanadillas de Espinacas",
        price: 9.50,
        image:"rollitos",
        categoryId: 5
      },
      {
        name: "Cus-Cus Vegetal",
        price: 14.15,
        image: "cus_cus",
        categoryId: 6
      },
      {
        name: "Cus-Cus Pollo",
        price: 15.15,
        image: "cus_cus",
        categoryId: 6
      },
      {
        name: "Cus-Cus Carne",
        price: 15.15,
        image: "cus_cus",
        categoryId: 6
      },
      {
        name: "Cus-Cus Mixto",
        price: 14.15,
        image: "cus_cus",
        categoryId: 6
      },
      {
        name: "Fattet Fenicia",
        price: 10.50,
        image: "fattet",
        categoryId: 7
      },
      {
        name: "Fattet Lahme",
        price: 11.95,
        image: "fattet",
        categoryId: 7
      },
      {
        name: "Fattet Pollo",
        price: 11.95,
        image: "fattet",
        categoryId: 7
      },
      {
        name: "Fattet Pollo y Champiñones",
        price: 12.50,
        image: "fattet",
        categoryId: 7
      },
      {
        name: "Fattet Batinjen",
        price: 12.50,
        image: "fattet",
        categoryId: 7
      },
      {
        name: "Kafta Kheskash",
        price: 15.95,
        image: "fattet",
        categoryId: 8
      },
      {
        name: "Kebbe",
        price: 9.95,
        image: "fattet",
        categoryId: 8
      },
      {
        name: "Mussaka de Carne",
        price: 11.50,
        image: "fattet",
        categoryId: 8
      },
      {
        name: "Hummus Bil Lahme",
        price: 9.50,
        image: "fattet",
        categoryId: 8
      },
      {
        name: "Kafta Bel Saynye",
        price: 15.95,
        image: "fattet",
        categoryId: 8
      },
      {
        name: "Baklawa Almendras",
        price: 1.60,
        image: "baklawa",
        categoryId: 9
      },
      {
        name: "Baklawa Nido Pistacho",
        price: 1.60,
        image: "baklawa",
        categoryId: 9
      },
      {
        name: "Baklawa Anacardos",
        price: 1.60,
        image: "baklawa",
        categoryId: 9
      },
      {
        name: "Baklawa Almendra",
        price: 1.60,
        image: "baklawa",
        categoryId: 9
      },
      {
        name: "Baklawa Nueces",
        price: 1.60,
        image: "baklawa",
        categoryId: 9
      },
      {
        name: "Baklawa Coco",
        price: 1.60,
        image: "baklawa",
        categoryId: 9
      },
      {
        name: "Mhalabiye",
        price: 3.95,
        image: "baklawa",
        categoryId: 9
      }
      

]

export {
    products 
}