type GreetProps = {
    name: string
}

const Greet = (props: GreetProps) => {
    return (
        <div>Welcome {props.name}! You have 10 undread messages.</div>
    )
}

export default Greet