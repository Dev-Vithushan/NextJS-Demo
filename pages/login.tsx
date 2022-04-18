export default function login(){
    return(
        <div>
            <form method="POST" action="../pages/api/welcome">
                < input type="text" value=""/>
                <br/>
                < input type="password" value=""/>
                <br/>
                <input type="submit" value="aubmit"/>


            </form>
        </div>
    )
}