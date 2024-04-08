const data = [
    {
        id: 0,
        name: "Fresh Fruits",
        count: "9 Products",
        img: "/windo.png",
    },

    {
        id: 1,
        name: "Fresh Vegs",
        count: "8 Products",
        img: "/windo.png",
    },

    {
        id: 2,
        name: "Canned Goods",
        count: "10 Products",
        img: "/windo.png",
    },

    {
        id: 3,
        name: "Bread and Bakery",
        count: "12 Products",
        img: "/windo.png",
    },

    {
        id: 4,
        name: "Fishes",
        count: "10 Products",
        img: "/windo.png",
    },

    {
        id: 5,
        name: "Eggs & Dairy",
        count: "7 Products",
        img: "/windo.png",
    },

    {
        id: 6,
        name: "Soft Drinks",
        count: "5 Products",
        img: "/windo.png",
    },

    {
        id: 7,
        name: "Fresh Fruits",
        count: "9 Products",
        img: "/windo.png",
    },
]; 

const Category = () => {
  return (
    <div className="container pt-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map((el) => (
                <Category
                    key={el.id}
                    img={el.img}
                    name={el.name}
                    count={el.id}
                />
            ))}
        </div>
    </div>
  )
}

export default Category