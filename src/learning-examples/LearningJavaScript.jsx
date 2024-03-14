const Person={
    name :'Saksham',
    address: {
        Line1 : 'A-2440',
        Line2 : 'Awasvikas Naubasta',
        City : 'Kanpur',
        Country : 'India',
    },
    profiles: ['Linkdin','Instagram','Twitter'],
    printProfile : ()=>{
        Person.profiles.map(
            profiles => console.log(profiles),
        )
    }


}


export default function LearningJavaScript(){
    return(
        <>
        <div>{Person.name}</div>
        <div>{Person.address.Country}</div>
        <div>{Person.profiles[1]}</div>
        <div>{Person.printProfile()}</div>
        </>
    );
}