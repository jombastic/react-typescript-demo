type GreetProps = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
}

const Greet = ({ name, messageCount = 0, isLoggedIn }: GreetProps) => {
    return (
        <div>
            <h2>
                {isLoggedIn
                    ? `Welcome ${name}! You have ${messageCount} undread messages`
                    : 'Welcome Guest'}
            </h2>
        </div>
    )
}

export default Greet