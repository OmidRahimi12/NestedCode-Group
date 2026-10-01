const services = [
    {
        id: 1,
        number: "01",
        title: "Custom Applicatoin Development",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non possimus a rem ptatibus quibusdam accusantium harum eos, facere voluptate iure eum eveniet",

    },
      {
        id: 2,
        number: "02",
        title: "Stratigic Planning",
        info: " consectetur adipisicing elit. Non possimus a rem quidem delectus saepe voluptatibus quibusdam accusantium harum eos, facere voluptate iure eum eveniet",

    },
      {
        id: 3,
        number: "03",
        title: "Identity Design",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non possimus a rem quidem delectus saepe voluptatibus quibusdam accusantium harum eos, facere voluptate iure eum eveniet",

    },
      {
        id: 4,
        number: "04",
        title: "Digital Marketing",
        info: "Lorem ipsum dolor sit amet, . Non possimus a rem quidem delectus saepe voluptatibus quibusdam accusantium harum eos, facere voluptate iure eum eveniet",

    },
      {
        id: 5,
        number: "05",
        title: "User Experience Design",
        info: "Lorem ipsum dolor sit amet, elit. Non possimus a rem quidem delectus saepe voluptatibus quibusdam accusantium harum eos, facere voluptate iure eum eveniet",

    },
      {
        id: 6,
        number: "06",
        title: "Data Intelligence",
        info: " Non possimus a rem quidem delectus saepe voluptatibus quibusdam accusantium harum eos, facere voluptate iure eum eveniet",

    },
]


export default function ServiceCard(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6" >
            {services.map(service => (
               <div key={services.id} className="border border-gray-200 p-4 rounded-2xl">
                <div className="w-10 h-10 text-[#00a19e] bg-[#d8f1f1] flex items-center justify-center rounded-xl text-xl">
                  {service.number}
                </div>
                <div className="mt-4">
                    <h1 className="font-bold text-xl">{service.title}</h1>
                </div>
                <div className="mt-4">
                    <p className="text-gray-400">{service.info}</p>
                </div>
               </div>
            ))}
        </div>
    )
}