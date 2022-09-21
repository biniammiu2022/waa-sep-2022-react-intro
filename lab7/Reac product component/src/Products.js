import Person from "./Person"

export default function Persons(props) {
    return (
        <div>
            {
                props.Products.map((product) => {
                    return (
                        <Person
                           {...product}
                        />
                    )
                })
            }
        </div>
    )
}